import emailjs from '@emailjs/browser'

const phonePattern = /^(?:\+?1[\s.-]?)?(?:\([2-9]\d{2}\)|[2-9]\d{2})[\s.-]?\d{3}[\s.-]?\d{4}$/
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactFormValues = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  honeypot: string
}

type FormErrorMap = Partial<Record<keyof ContactFormValues, string>>

function getInputValue(form: HTMLFormElement, name: string): string {
  const field = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null
  return field?.value.trim() ?? ''
}

function setFieldError(form: HTMLFormElement, fieldName: string, message: string): void {
  const input = form.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement | null
  const error = form.querySelector<HTMLParagraphElement>(`#${fieldName}-error`)
  if (input) input.setAttribute('aria-invalid', 'true')
  if (error) error.textContent = message
}

function clearFieldError(form: HTMLFormElement, fieldName: string): void {
  const input = form.elements.namedItem(fieldName) as HTMLInputElement | HTMLTextAreaElement | null
  const error = form.querySelector<HTMLParagraphElement>(`#${fieldName}-error`)
  if (input) input.removeAttribute('aria-invalid')
  if (error) error.textContent = ''
}

function clearFormErrors(form: HTMLFormElement): void {
  ;(['firstName', 'lastName', 'email', 'phone', 'message'] as const).forEach((name) => clearFieldError(form, name))
}

function getFormValues(form: HTMLFormElement): ContactFormValues {
  return {
    firstName: getInputValue(form, 'firstName'),
    lastName: getInputValue(form, 'lastName'),
    email: getInputValue(form, 'email'),
    phone: getInputValue(form, 'phone'),
    message: getInputValue(form, 'message'),
    honeypot: getInputValue(form, 'contact-website'),
  }
}

function validate(values: ContactFormValues): FormErrorMap {
  const errors: FormErrorMap = {}

  if (!values.firstName) {
    errors.firstName = 'Veuillez indiquer votre prénom.'
  }

  if (!values.lastName) {
    errors.lastName = 'Veuillez indiquer votre nom.'
  }

  if (!values.email) {
    errors.email = 'Veuillez indiquer votre courriel.'
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Veuillez saisir une adresse courriel valide.'
  }

  if (!values.phone) {
    errors.phone = 'Veuillez indiquer votre numéro de téléphone.'
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = 'Le numéro doit être au format canadien, par ex. 819-461-7082.'
  }

  if (!values.message) {
    errors.message = 'Veuillez indiquer votre demande ou message.'
  }

  return errors
}

function setStatusMessage(element: HTMLElement | null, message: string, type: 'success' | 'error'): void {
  if (!element) return
  element.textContent = message
  element.className = `form-message form-message--${type}`
}

function setSubmitState(button: HTMLButtonElement | null, isLoading: boolean): void {
  if (!button) return
  button.disabled = isLoading
  button.textContent = isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'
}

export function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('#contact-form')
  const status = document.querySelector<HTMLDivElement>('#contact-form-message')
  const submitButton = form?.querySelector<HTMLButtonElement>('button[type="submit"]') ?? null
  let isSubmitting = false

  if (!form || !status) return

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    clearFormErrors(form)
    setStatusMessage(status, '', 'success')

    const values = getFormValues(form)
    const errors = validate(values)

    if (Object.keys(errors).length > 0) {
      Object.entries(errors).forEach(([fieldName, message]) => {
        if (fieldName) setFieldError(form, fieldName, message)
      })
      const firstErrorField = form.querySelector('[aria-invalid="true"]') as HTMLElement | null
      firstErrorField?.focus()
      setStatusMessage(status, 'Le formulaire contient des erreurs. Veuillez vérifier les champs indiqués.', 'error')
      return
    }

    if (values.honeypot) {
      form.reset()
      setStatusMessage(status, 'Merci ! Votre demande a bien été envoyée.', 'success')
      return
    }

    isSubmitting = true
    setSubmitState(submitButton, true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        setStatusMessage(
          status,
          'Le formulaire n’est pas encore configuré. Veuillez contacter le courtier par téléphone ou par courriel.',
          'error'
        )
        return
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: values.firstName,
          last_name: values.lastName,
          phone: values.phone,
          email: values.email,
          message: values.message,
        },
        { publicKey }
      )

      form.reset()
      setStatusMessage(status, 'Merci ! Votre demande a bien été envoyée.', 'success')
    } catch {
      setStatusMessage(status, 'Une erreur est survenue. Veuillez réessayer.', 'error')
    } finally {
      isSubmitting = false
      setSubmitState(submitButton, false)
    }
  })
}

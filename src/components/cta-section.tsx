import { useState } from 'react'
import { useForm } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { SignatureDivider } from '@/components/ui/signature-divider'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldErrors = {
  nomeCompleto?: string
  emailProfissional?: string
  nomeEscritorio?: string
}

export function CtaSection() {
  const [state, submitForm] = useForm('xkopqpqq')
  const [form, setForm] = useState({
    nomeCompleto: '',
    emailProfissional: '',
    nomeEscritorio: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const next: FieldErrors = {}
    if (!form.nomeCompleto.trim()) next.nomeCompleto = 'Nome é obrigatório'
    if (!form.emailProfissional.trim()) {
      next.emailProfissional = 'E-mail é obrigatório'
    } else if (!EMAIL_REGEX.test(form.emailProfissional)) {
      next.emailProfissional = 'E-mail inválido'
    }
    if (!form.nomeEscritorio.trim()) next.nomeEscritorio = 'Escritório é obrigatório'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    const formData = new FormData()
    formData.append('Nome Completo', form.nomeCompleto)
    formData.append('email', form.emailProfissional)
    formData.append('Nome do Escritório', form.nomeEscritorio)
    submitForm(formData)
  }

  return (
    <section id="cta" className="bg-surface-low py-32 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-24">
        {/* Editorial column */}
        <div className="w-full md:w-1/2">
          <SignatureDivider className="mb-8" />
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-on-surface leading-[1.1] mb-8 max-w-xl">
            Pronto para modernizar a gestão de contratos?
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
            Acesse a infraestrutura definitiva para escritórios de alta
            performance. Segurança, rastro e inteligência em um único cofre
            digital.
          </p>
          <div className="mt-16 flex items-center gap-6">
            <div className="flex -space-x-4">
              <div className="size-12 rounded-full border-2 border-surface-low bg-surface flex items-center justify-center text-xs font-bold text-on-surface-variant">
                RS
              </div>
              <div className="size-12 rounded-full border-2 border-surface-low bg-surface-high flex items-center justify-center text-xs font-bold text-on-surface-variant">
                ML
              </div>
              <div className="size-12 rounded-full border-2 border-surface-low bg-surface flex items-center justify-center text-xs font-bold text-primary">
                +500
              </div>
            </div>
            <span className="text-sm text-on-surface-variant font-medium uppercase tracking-widest">
              Escritórios Confiam
            </span>
          </div>
        </div>

        {/* Form column */}
        <div className="w-full md:w-1/2 max-w-lg">
          <div className="bg-surface p-10 md:p-12 rounded-xl relative">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center gap-6 py-12">
                <CheckCircle2 className="size-12 text-primary" />
                <h3 className="font-display text-2xl font-bold text-on-surface text-center">
                  Solicitação enviada!
                </h3>
                <p className="text-sm text-on-surface-variant text-center max-w-xs">
                  Nossa equipe entrará em contato em até 1 dia útil para agendar sua demonstração.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                <div className="group">
                  <label className="block text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    value={form.nomeCompleto}
                    onChange={handleChange('nomeCompleto')}
                    placeholder="Ex: Rodrigo Silva"
                    className={`w-full bg-transparent border-0 border-b ${errors.nomeCompleto ? 'border-red-400' : 'border-outline-variant/20'} focus:border-primary focus:ring-0 text-on-surface py-3 px-0 placeholder:text-surface-bright transition-all outline-none`}
                  />
                  {errors.nomeCompleto && (
                    <p className="text-[11px] text-red-400 mt-1.5">{errors.nomeCompleto}</p>
                  )}
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                    E-mail profissional
                  </label>
                  <input
                    type="email"
                    value={form.emailProfissional}
                    onChange={handleChange('emailProfissional')}
                    placeholder="rodrigo@escritorio.com.br"
                    className={`w-full bg-transparent border-0 border-b ${errors.emailProfissional ? 'border-red-400' : 'border-outline-variant/20'} focus:border-primary focus:ring-0 text-on-surface py-3 px-0 placeholder:text-surface-bright transition-all outline-none`}
                  />
                  {errors.emailProfissional && (
                    <p className="text-[11px] text-red-400 mt-1.5">{errors.emailProfissional}</p>
                  )}
                </div>
                <div className="group">
                  <label className="block text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">
                    Nome do escritório
                  </label>
                  <input
                    type="text"
                    value={form.nomeEscritorio}
                    onChange={handleChange('nomeEscritorio')}
                    placeholder="Ex: Advocacia Silva & Associados"
                    className={`w-full bg-transparent border-0 border-b ${errors.nomeEscritorio ? 'border-red-400' : 'border-outline-variant/20'} focus:border-primary focus:ring-0 text-on-surface py-3 px-0 placeholder:text-surface-bright transition-all outline-none`}
                  />
                  {errors.nomeEscritorio && (
                    <p className="text-[11px] text-red-400 mt-1.5">{errors.nomeEscritorio}</p>
                  )}
                </div>
                <div className="pt-6">
                  <Button
                    className="w-full bg-linear-to-br from-primary to-primary-container text-on-primary py-5 rounded-lg font-display font-bold text-sm uppercase tracking-widest active:scale-[0.98] transition-all cursor-pointer h-auto flex items-center justify-center gap-3"
                    disabled={state.submitting}
                    onClick={handleSubmit}
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Agendar Demonstração
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-wider opacity-60">
                    Sem compromisso. Respondemos em até 1 dia útil.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

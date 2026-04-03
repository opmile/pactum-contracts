import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Lock, Sparkles, Bell, ArrowRight, ShieldCheck, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Extração Automatizada',
    description: 'Análise neural de sintaxe jurídica complexa em dados acionáveis.',
  },
  {
    icon: Bell,
    title: 'Alertas em Tempo Real',
    description: 'Notificações instantâneas para oportunidades de receita e exposições de risco.',
  },
]

export function IntelligenceVault() {
  return (
    <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-surface-low rounded-lg overflow-hidden shadow-2xl shadow-black/40 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)] transition-shadow duration-500">
      {/* Content Side */}
      <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
        {/* Badge */}
        <div className="flex items-center gap-2 text-primary-container mb-5">
          <Lock className="size-3.5" />
          <span className="font-display font-bold uppercase tracking-[0.2em] text-[10px]">
            Premium Intelligence Module
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-display font-bold text-on-surface tracking-tight mb-4">
          Cofre de Inteligência de Dados
        </h2>

        <p className="text-on-surface-variant leading-relaxed text-sm font-body mb-8">
          Transforme o passivo documental em ativos estratégicos. Nosso motor de IA
          extrai automaticamente cláusulas de renovação, multas e índices de
          reajuste, notificando o comercial em tempo real.
        </p>

        {/* Feature items */}
        <div className="flex flex-col gap-5 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4 group">
              <div className="mt-1 size-8 rounded-lg bg-surface flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300">
                <f.icon className="size-4" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-on-surface text-sm uppercase tracking-wider">
                  {f.title}
                </h4>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Separator className="opacity-10 mb-6" />

        {/* CTA link */}
        <div className="flex items-center gap-4 group/link cursor-pointer">
          <span className="text-primary font-display font-bold uppercase text-xs tracking-widest">
            Explore Architecture
          </span>
          <ArrowRight className="size-4 text-primary group-hover/link:translate-x-2 transition-transform duration-300" />
        </div>
      </div>

      {/* Visual Side */}
      <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden bg-surface-lowest">
        {/* Gradient overlay from left */}
        <div className="absolute inset-0 bg-linear-to-r from-surface-low to-transparent z-10" />

        {/* Radial gold glow */}
        <div className="absolute inset-0 opacity-30">
          <div className="size-full bg-[radial-gradient(circle_at_70%_50%,rgba(244,189,94,0.1)_0%,transparent_60%)]" />
        </div>

        {/* Glass vault */}
        <div className="relative z-20 size-full flex items-center justify-center p-12">
          <div className="relative w-full max-w-md aspect-square">
            {/* Main vault card */}
            <div className="absolute inset-0 rounded-lg border border-outline-variant/10 bg-linear-to-br from-surface/80 to-surface-low/40 backdrop-blur-xl flex flex-col shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-4 gap-4 p-8 size-full">
                {/* Header row */}
                <div className="col-span-4 row-span-1 border-b border-outline-variant/10 flex items-center justify-between pb-4">
                  <div className="flex gap-2">
                    <div className="size-2 rounded-full bg-primary-container/40" />
                    <div className="size-2 rounded-full bg-primary-container/40" />
                    <div className="size-2 rounded-full bg-primary-container/40" />
                  </div>
                  <span className="text-[10px] font-display font-bold uppercase tracking-tighter text-primary-container/60">
                    System Active
                  </span>
                </div>

                {/* Stats block */}
                <div className="col-span-2 row-span-2 bg-surface/40 rounded-lg p-4 flex flex-col justify-end">
                  <BarChart3 className="size-5 text-primary-container mb-2" />
                  <div className="h-1 w-12 bg-primary-container/20 mb-1 rounded-full" />
                  <div className="h-1 w-8 bg-primary-container/10 rounded-full" />
                </div>

                {/* Progress bar */}
                <div className="col-span-2 row-span-1 bg-surface-bright/20 rounded-lg p-4 flex items-center justify-center">
                  <div className="w-full h-2 bg-linear-to-r from-primary-container/40 to-transparent rounded-full" />
                </div>

                {/* Text lines */}
                <div className="col-span-2 row-span-1 bg-surface/40 rounded-lg p-4">
                  <div className="flex flex-col gap-2">
                    <div className="h-1 w-full bg-outline-variant/20 rounded-full" />
                    <div className="h-1 w-2/3 bg-outline-variant/20 rounded-full" />
                  </div>
                </div>

                {/* Bottom image area */}
                <div className="col-span-4 row-span-1 flex items-end">
                  <div className="w-full h-24 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#2a2a2a_0%,#1c1b1b_40%,#0e0e0e_100%)]" />
                    <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[9px] font-display font-bold uppercase tracking-widest text-primary">
                        Neural Stream 082
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 size-32 bg-primary-container/5 rounded-lg border border-primary-container/10 backdrop-blur-md flex items-center justify-center">
              <ShieldCheck className="size-10 text-primary-container" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

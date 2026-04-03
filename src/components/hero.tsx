import { Button } from '@/components/ui/button'
import { SignatureDivider } from '@/components/ui/signature-divider'
import { FloatingPaths } from '@/components/ui/background-paths'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-surface-lowest pt-16 pb-32 md:pt-24 md:pb-44 min-h-[calc(100svh-4rem)] flex flex-col justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <SignatureDivider className="mb-12" />

        <div className="max-w-3xl space-y-8">
          <span className="inline-block rounded-full bg-surface-high px-4 py-1.5 text-xs font-medium text-primary-fixed tracking-wide">
            Sistema Interno · Escritórios de Advocacia
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-[1.1]">
            Gestão de contratos{' '}
            <br />
            <span className="text-primary-fixed">sem planilha, sem ruído.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            O Pactum centraliza o ciclo completo dos seus contratos —
            do cadastro à conclusão — com controle de acesso por perfil e
            rastreabilidade total.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button
              className="bg-linear-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-base shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all active:scale-95 cursor-pointer h-auto"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              className="border border-outline-variant/30 bg-white/5 backdrop-blur-md text-primary px-8 py-4 rounded-lg font-bold text-base hover:bg-white/10 hover:border-primary/30 transition-all active:scale-95 cursor-pointer h-auto"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Conhecer funcionalidades
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

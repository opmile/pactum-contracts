import { SignatureDivider } from '@/components/ui/signature-divider'
import { IntelligenceVault } from '@/components/intelligence-vault'
import { FilePlus2, Layers, Paperclip, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: FilePlus2,
    module: 'Módulo 01',
    title: 'Cadastro Centralizado',
    description:
      'Gestão unificada de entidades, partes e testemunhas em um repositório soberano com validação automática de dados.',
  },
  {
    icon: Layers,
    module: 'Módulo 02',
    title: 'Status em Tempo Real',
    description:
      'Monitoramento granular de cada etapa do fluxo contratual, desde a minuta inicial até a assinatura final digital.',
  },
  {
    icon: Paperclip,
    module: 'Módulo 03',
    title: 'Gestão de Anexos',
    description:
      'Protocolo de custódia digital para documentos complementares com versionamento imutável e criptografia de ponta.',
  },
  {
    icon: BarChart3,
    module: 'Módulo 04',
    title: 'Visão Financeira',
    description:
      'Consolidado de valores, prazos de pagamento e fluxos de caixa atrelados a cada instrumento jurídico vigente.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <SignatureDivider className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight max-w-2xl">
            Tudo que o escritório precisa, em um lugar
          </h2>
        </div>

        {/* Feature grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-surface-high p-6 md:p-7 rounded-xl border border-white/5 hover:border-primary/20 hover:bg-surface-bright transition-all duration-500 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <feature.icon className="size-6 text-primary" />
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
                    {feature.module}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-on-surface">
                  {feature.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
              <div className="mt-5">
                <div className="h-1 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Vault spotlight */}
        <div className="mt-25">
          <IntelligenceVault />
        </div>
      </div>
    </section>
  )
}

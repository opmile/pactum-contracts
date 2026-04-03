import { SignatureDivider } from '@/components/ui/signature-divider'
import { DashboardPreview } from '@/components/dashboard-preview'
import { FolderOpen, BrainCircuit, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: FolderOpen,
    title: 'Contratos espalhados',
    description:
      'Documentos perdidos entre e-mails, pastas locais e serviços de nuvem fragmentados. A busca por uma cláusula torna-se um processo de horas, não segundos.',
    label: 'Risco de Extravio',
  },
  {
    icon: BrainCircuit,
    title: 'Status gerenciado na memória',
    description:
      'Prazos de renovação e rescisão dependem da memória individual ou de planilhas manuais. Uma falha humana resulta em multas e renovações automáticas indesejadas.',
    label: 'Ineficiência Cognitiva',
  },
  {
    icon: TrendingDown,
    title: 'Visibilidade financeira zero',
    description:
      'Impossibilidade de prever o fluxo de caixa comprometido com contratos recorrentes. Gastos fantasmas e duplicidade de serviços tornam-se a regra, não a exceção.',
    label: 'Vazamento de Receita',
  },
]

export function ProblemSection() {
  return (
    <section id="problema" className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-20">
          <SignatureDivider className="mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-on-surface max-w-2xl leading-tight">
            O que acontece sem um sistema centralizado
          </h2>
          <p className="mt-6 font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
            A descentralização de documentos jurídicos cria vulnerabilidades
            invisíveis que comprometem a integridade operacional e financeira da
            sua empresa.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group bg-surface p-6 md:p-7 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="mb-4 inline-flex items-center justify-center size-10 rounded-lg bg-surface-low text-primary group-hover:scale-110 transition-transform duration-500">
                  <problem.icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-on-surface">
                  {problem.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {problem.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="mr-2">{problem.label}</span>
                <TrendingDown className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-24">
          <DashboardPreview />
        </div>
      </div>
    </section>
  )
}

import { SignatureDivider } from '@/components/ui/signature-divider'
import { CheckCircle2, Shield, KeyRound, GitBranch } from 'lucide-react'

const editorCapabilities = [
  {
    title: 'Criação de novos contratos',
    description: 'Capacidade de iniciar minutas a partir de templates aprovados.',
  },
  {
    title: 'Edição de cláusulas variáveis',
    description: 'Ajuste de valores, prazos e qualificações das partes envolvidas.',
  },
  {
    title: 'Gestão de anexos e documentos',
    description: 'Upload e organização de documentação suporte para análise.',
  },
  {
    title: 'Visualização de histórico',
    description: 'Acesso total ao log de alterações e comentários internos.',
  },
]

const approverCapabilities = [
  {
    title: 'Assinatura Digital Qualificada',
    description: 'Poder de formalização final com validade jurídica plena.',
  },
  {
    title: 'Aprovação de Alçadas Financeiras',
    description: 'Validação de contratos que excedam os limites operacionais.',
  },
  {
    title: 'Veto e Devolução de Minutas',
    description: 'Capacidade de interromper o fluxo e solicitar revisões críticas.',
  },
  {
    title: 'Configuração de Regras de Compliance',
    description: 'Definição dos parâmetros obrigatórios para segurança do negócio.',
  },
]

const bottomCards = [
  {
    icon: Shield,
    title: 'Auditabilidade Total',
    description: 'Cada clique e alteração é registrado em um log imutável de segurança.',
  },
  {
    icon: KeyRound,
    title: 'Multi-fator (MFA)',
    description: 'Acesso exigido via token criptográfico para perfis de aprovação.',
  },
  {
    icon: GitBranch,
    title: 'Hierarquia Dinâmica',
    description: 'Os fluxos se adaptam automaticamente baseados no valor do contrato.',
  },
]

export function PermissionsSection() {
  return (
    <section id="permissoes" className="bg-surface-lowest py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <header className="mb-20">
          <SignatureDivider className="mb-6" />
          <h2 className="text-5xl font-display font-bold text-on-surface tracking-tighter mb-4">
            Controle de acesso por perfil
          </h2>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            Gerencie as permissões e níveis de autoridade dentro do sistema. Defina
            quem pode editar minutas e quem possui o poder final de aprovação
            jurídica e financeira.
          </p>
        </header>

        {/* Permissions grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Editor */}
          <div className="bg-surface-low p-6 md:p-8 rounded-xl relative overflow-hidden border border-white/5 hover:border-outline-variant/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-outline-variant/20 rounded-l-xl" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold tracking-tight">
                Perfil Editor
              </h3>
              <span className="bg-surface-bright px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-on-surface-variant">
                Nível Operacional
              </span>
            </div>
            <div className="flex flex-col gap-5">
              {editorCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle2 className="size-4 text-primary fill-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-on-surface mb-0.5">{cap.title}</p>
                    <p className="text-xs text-on-surface-variant">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-5 border-t border-white/5">
              <p className="text-[10px] text-on-surface-variant/60 italic">
                Última atualização: 24 de Outubro, 2024
              </p>
            </div>
          </div>

          {/* Aprovador */}
          <div className="bg-surface-low p-6 md:p-8 rounded-xl relative overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 rounded-l-xl" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold tracking-tight">
                Perfil Aprovador
              </h3>
              <span className="bg-primary/10 px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest text-primary">
                Nível Estratégico
              </span>
            </div>
            <div className="flex flex-col gap-5">
              {approverCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle2 className="size-4 text-primary fill-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-on-surface mb-0.5">{cap.title}</p>
                    <p className="text-xs text-on-surface-variant">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-5 border-t border-white/5 flex justify-between items-end">
              <p className="text-[10px] text-on-surface-variant/60 italic">
                Acesso Restrito à Diretoria
              </p>
              <div className="flex -space-x-3">
                <div className="size-7 rounded-full border-2 border-surface-low bg-surface-bright flex items-center justify-center text-[9px] font-bold">
                  JS
                </div>
                <div className="size-7 rounded-full border-2 border-surface-low bg-primary text-on-primary flex items-center justify-center text-[9px] font-bold">
                  MT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom mini-cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {bottomCards.map((card) => (
            <div
              key={card.title}
              className="p-5 md:p-6 bg-surface rounded-xl border border-white/5 border-b-2 border-b-transparent hover:border-b-primary/30 transition-all duration-500"
            >
              <card.icon className="size-4 text-on-surface-variant mb-3" />
              <h4 className="font-display font-semibold text-sm mb-1.5">{card.title}</h4>
              <p className="text-xs text-on-surface-variant">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

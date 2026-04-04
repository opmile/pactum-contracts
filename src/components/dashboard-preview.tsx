import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SignatureDivider } from '@/components/ui/signature-divider'
import {
  TrendingUp,
  FileText,
  CreditCard,
  CheckCircle2,
  SlidersHorizontal,
  Activity,
  BarChart3,
  LayoutDashboard,
  MoreHorizontal,
  Clock,
} from 'lucide-react'

const metrics = [
  {
    label: 'Valor Total em Contratos',
    value: 'R$ 4.892.300',
    indicator: '+12.4% vs mês anterior',
    icon: TrendingUp,
    highlight: true,
  },
  {
    label: 'Contratos Assinados',
    value: '142',
    indicator: '85 pendentes de assinatura',
    icon: FileText,
    highlight: false,
  },
  {
    label: 'Ticket Médio',
    value: 'R$ 34.452',
    indicator: 'Aumento de 5% este trim.',
    icon: CreditCard,
    highlight: false,
  },
  {
    label: 'Status da Operação',
    value: 'Saudável',
    indicator: 'SLA de 98.2% mantido',
    icon: CheckCircle2,
    highlight: false,
    valueColor: 'text-emerald-400',
  },
]

const timeline = [
  {
    company: 'Gomes & Associados',
    contract: 'Contrato de Consultoria Master',
    value: 'R$ 128.000,00',
    time: 'Agora',
    active: true,
  },
  {
    company: 'TechLaw Solutions',
    contract: 'Renovação de Licença Enterprise',
    value: 'R$ 45.900,00',
    time: 'há 14 min',
    active: false,
  },
  {
    company: 'Banco Aliança S.A.',
    contract: 'Aditivo Contratual v.04',
    value: 'R$ 12.000,00',
    time: 'há 2h',
    active: false,
  },
  {
    company: 'Construtora Norte',
    contract: 'Novo Contrato de Prestação',
    value: 'R$ 89.200,00',
    time: 'há 5h',
    active: false,
  },
]

export function DashboardPreview() {
  return (
    <div className="group max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] hover:shadow-[0_40px_72px_-16px_rgba(0,0,0,0.9)] hover:-translate-y-1 transition-all duration-500">
      {/* macOS Title Bar */}
      <div className="bg-surface-high h-12 flex items-center px-4 justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="size-3.5 rounded-full bg-[#FF5F56]" />
          <div className="size-3.5 rounded-full bg-[#FFBD2E]" />
          <div className="size-3.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="bg-surface-low px-6 py-1 rounded-t-lg text-xs font-medium text-muted-foreground flex items-center gap-2 border-t border-x border-white/5">
          <LayoutDashboard className="size-3.5" />
          Pactum - Dashboard
        </div>
        <MoreHorizontal className="size-4 text-muted-foreground" />
      </div>

      {/* Dashboard Content */}
      <ScrollArea className="h-[600px] w-auto bg-surface-low">
        <div className="p-6 flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(244,189,94,0.8)]" />
                <Badge variant="outline" className="text-primary border-primary/20 text-[10px] uppercase tracking-widest font-bold">
                  Live
                </Badge>
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight">Dashboard Comercial</h2>
              <SignatureDivider />
            </div>
            <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <Badge variant="secondary" className="italic">Atualizado em tempo real</Badge>
              <div className="size-10 rounded-lg bg-surface-high flex items-center justify-center text-primary">
                <SlidersHorizontal className="size-4" />
              </div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <Card key={m.label} className={m.highlight ? 'border-b-2 border-primary/20 shadow-xl' : 'border-b border-white/5 shadow-inner'}>
                <CardHeader className="pb-2">
                  <CardDescription className="text-[10px] uppercase tracking-widest font-semibold">
                    {m.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className={`font-display text-3xl font-extrabold tracking-tighter ${m.valueColor ?? (m.highlight ? 'text-primary' : 'text-foreground')}`}>
                    {m.value}
                  </h3>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <m.icon className="size-3.5" />
                    <span>{m.indicator}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Chart + Timeline grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chart area */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <Card className="border border-white/5 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-lg font-bold">Volume de Vendas &amp; Receita</h4>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">Receita</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-purple-500" />
                        <span className="text-xs text-muted-foreground">Volume</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full relative pb-8">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                      <div className="w-full h-px bg-on-surface/10" />
                      <div className="w-full h-px bg-on-surface/10" />
                      <div className="w-full h-px bg-on-surface/10" />
                      <div className="w-full h-px bg-on-surface/10" />
                    </div>
                    {/* Chart SVG */}
                    <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="goldGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#f4bd5e" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                      <path d="M0,180 Q50,160 100,190 T200,140 T300,170 T400,100 T500,120 T600,60 T700,90 T800,40" fill="none" stroke="#f4bd5e" strokeLinecap="round" strokeWidth="3" />
                      <path d="M0,180 Q50,160 100,190 T200,140 T300,170 T400,100 T500,120 T600,60 T700,90 T800,40 L800,256 L0,256 Z" fill="url(#goldGradient)" fillOpacity="0.1" />
                      <path d="M0,220 Q100,200 200,210 T400,180 T600,190 T800,150" fill="none" stroke="#a855f7" strokeDasharray="8,4" strokeLinecap="round" strokeWidth="3" />
                    </svg>
                    {/* X-Axis Labels */}
                    <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sab</span><span>Dom</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary metrics */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="border border-white/5">
                  <CardContent className="flex items-center justify-between pt-4 pb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Taxa de Conversão</p>
                      <h5 className="text-xl font-bold font-display">24.8%</h5>
                    </div>
                    <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      <Activity className="size-4" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-white/5">
                  <CardContent className="flex items-center justify-between pt-4 pb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Churn Mensal</p>
                      <h5 className="text-xl font-bold font-display">1.2%</h5>
                    </div>
                    <div className="size-10 bg-surface rounded-lg flex items-center justify-center text-muted-foreground">
                      <BarChart3 className="size-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Timeline */}
            <Card className="border border-white/5 flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-lg font-bold">Assinaturas Recentes</h4>
                  <Badge variant="outline" className="text-primary border-primary/20 text-[8px] uppercase tracking-widest font-bold px-2 py-0.5">
                    Live Feed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-col gap-0">
                  {timeline.map((item, i) => (
                    <div key={item.company} className="group/item relative pl-6 pb-6 border-l border-outline-variant/20">
                      <div className={`absolute -left-[5px] top-1 size-2.5 rounded-full ${item.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-outline-variant group-hover/item:bg-primary transition-colors'}`} />
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm">{item.company}</span>
                          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                            <Clock className="size-2.5" />
                            {item.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.contract}</p>
                        <div className="bg-surface-low px-3 py-2 rounded-lg border border-white/5 group-hover/item:bg-surface-bright/20 transition-colors mt-1">
                          <span className={`font-bold text-sm tracking-tight ${item.active ? 'text-primary' : 'text-foreground'}`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                      {i < timeline.length - 1 && <div className="h-2" />}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-widest gap-3">
                  <Clock className="size-3 shrink-0" data-icon="inline-start" />
                  Ver Histórico Completo
                </Button>
              </CardFooter>
            </Card>
          </div>

          <Separator className="opacity-10" />

          {/* Footer */}
          <Card className="border border-white/5">
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 pb-4">
              <div className="flex items-center gap-6">
                <Avatar className="size-16 rounded-lg border-2 border-primary/20">
                  <AvatarFallback className="rounded-lg font-display font-bold text-lg bg-surface-high">
                    RA
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Diretor Comercial</p>
                  <h6 className="font-display font-bold text-lg">Ricardo Albuquerque</h6>
                  <p className="text-sm text-muted-foreground">Meta Trimestral: 88% concluída</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-center px-6 border-r border-white/10">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Contratos/Mês</p>
                  <p className="text-xl font-bold font-display">312</p>
                </div>
                <div className="text-center px-6">
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Taxa Retenção</p>
                  <p className="text-xl font-bold font-display text-primary">94.1%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

import { SignatureDivider } from '@/components/ui/signature-divider'
import portraitSrc from '@/assets/social-proof-portrait.png'

export function SocialProofSection() {
  return (
    <section id="social-proof" className="bg-surface-low py-24 px-8 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-12 relative z-10">
        {/* Signature Divider */}
        <SignatureDivider className="mb-4" />

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Portrait */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-primary/5 rounded-lg blur-xl transition-all group-hover:bg-primary/10" />
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={portraitSrc}
                alt="Sócia responsável pela área comercial"
                className="absolute inset-0 size-full object-cover object-[center_80%] scale-110 grayscale opacity-90 transition-transform duration-800 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface-low via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-surface-high/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/5 flex items-center gap-3">
                <div className="size-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs tracking-widest uppercase text-on-surface-variant">
                  Verificado em Rede Interna
                </span>
              </div>
            </div>
          </div>

          {/* Right: Quote */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-16 -left-8 md:-left-12 pointer-events-none select-none">
              <span className="text-[12rem] font-display font-extrabold text-primary opacity-5 leading-none">
                &ldquo;
              </span>
            </div>

            <blockquote className="relative">
              <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-on-surface leading-tight tracking-tight mb-8">
                Antes, eu precisava ligar para o assistente jurídico toda vez que
                um cliente pedia status. Hoje, tenho a soberania da informação em
                minhas mãos.
              </p>
              <footer className="flex flex-col gap-2">
                <SignatureDivider className="opacity-40" />
                <p className="text-lg font-display font-semibold text-on-surface">
                  Sócia responsável pela área comercial
                </p>
                <p className="text-sm font-body text-on-surface-variant tracking-wider uppercase">
                  Escritório de Advocacia Boutique &amp; Partners
                </p>
              </footer>
            </blockquote>

            {/* Closing quote */}
            <div className="absolute -bottom-24 right-0 pointer-events-none select-none opacity-5">
              <span className="text-[10rem] font-display font-extrabold text-primary leading-none">
                &rdquo;
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent pointer-events-none" />
    </section>
  )
}

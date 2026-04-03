import { PactumLogo } from '@/components/ui/pactum-logo'

export function Footer() {
  return (
    <footer className="bg-surface-lowest w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-primary">
            <PactumLogo className="size-6" />
            <span className="text-lg font-display font-bold">PACTUM</span>
          </div>
          <p className="text-sm text-on-surface-variant opacity-80">
            © 2024 PACTUM. Todos os direitos reservados.
          </p>
        </div>
        <nav className="flex items-center gap-12">
          <span className="text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold cursor-pointer">
            Termos
          </span>
          <span className="text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold cursor-pointer">
            Privacidade
          </span>
          <span className="text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest text-[10px] font-bold cursor-pointer"> 
            Compliance
          </span>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-12">
        <div className="h-px bg-white/5 w-full" />
        <div className="flex justify-center mt-8">
          <p className="text-[10px] text-on-surface-variant/30 uppercase tracking-[0.2em] text-center">
            Infraestrutura de alta fidelidade para o ecossistema jurídico brasileiro.
          </p>
        </div>
      </div>
    </footer>
  )
}

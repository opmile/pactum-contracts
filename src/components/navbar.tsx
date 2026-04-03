import { Button } from '@/components/ui/button'
import { PactumLogo } from '@/components/ui/pactum-logo'

const navLinks = [
  { label: 'Problema', target: 'problema' },
  { label: 'Funcionalidades', target: 'features' },
  { label: 'Permissões', target: 'permissoes' },
  { label: 'Contato', target: 'cta' },
]

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full h-16 z-50 bg-neutral-900/75 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center justify-between px-8 w-full max-w-7xl mx-auto h-full">
        <div className="flex items-center gap-2 text-primary">
          <PactumLogo className="size-7" />
          <span className="text-xl font-display font-bold tracking-tighter">
            PACTUM
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <span
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-on-surface-variant hover:text-on-surface transition-colors font-display text-sm font-medium tracking-tight cursor-pointer"
            >
              {link.label}
            </span>
          ))}
        </div>

        <Button
          className="bg-linear-to-br from-primary to-primary-container text-on-primary font-semibold text-sm px-5 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all cursor-pointer"
          onClick={() => scrollTo('cta')}
        >
          Solicitar Acesso
        </Button>
      </div>
    </nav>
  )
}

const logos = [
  { name: 'Catalog', src: 'https://www.untitledui.com/logos/logotype/white/catalog.svg' },
  { name: 'Pictel AI', src: 'https://www.untitledui.com/logos/logotype/white/pictel-ai.svg' },
  { name: 'Leapyear', src: 'https://www.untitledui.com/logos/logotype/white/leapyear.svg' },
  { name: 'Peregrin', src: 'https://www.untitledui.com/logos/logotype/white/peregrin.svg' },
  { name: 'Easytax', src: 'https://www.untitledui.com/logos/logotype/white/easy-tax.svg' },
  { name: 'Core OS', src: 'https://www.untitledui.com/logos/logotype/white/core-os.svg' },
]

export function TrustBar() {
  return (
    <section className="bg-surface-low py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col gap-8">
        <p className="text-center text-sm font-medium text-on-surface-variant md:text-base">
          Confiado por Instituições de Elite
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((logo) => (
            <img
              key={logo.name}
              alt={logo.name}
              src={logo.src}
              className="h-7 md:h-8 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 duration-600"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

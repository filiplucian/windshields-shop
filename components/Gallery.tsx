import Image from 'next/image'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format&fit=crop',
    alt: 'Crăpătură și ciubitură în parbriz – înainte de reparație',
    label: 'Problema',
    title: 'Ciobituri și fisuri în parbriz',
    description: 'Chiar și o lovitură mică de piatră poate evolua într-o fisură care traversează întreg parbrizul. Nu amâna – cu cât aștepți mai mult, cu atât reparația devine mai costisitoare.',
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180-c573c42e1448?w=1200&q=85&auto=format&fit=crop',
    alt: 'Echipament profesional de reparat parbrize în service',
    label: 'Soluția',
    title: 'Echipament de ultimă generație',
    description: 'Folosim aparatură modernă și adezivi certificați pentru reparații invizibile. Rezultatul: vizibilitate perfectă, fără urme, în 30–60 de minute.',
  },
]

export default function Gallery() {
  return (
    <section className="py-0 bg-brand-black">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {photos.map((photo, i) => (
          <div key={photo.label} className="relative group overflow-hidden" style={{ minHeight: '320px' }}>
            {/* Photo */}
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />

            {/* Red accent line */}
            <div className={`absolute top-0 ${i === 0 ? 'left-0' : 'right-0'} w-1 h-full bg-brand-red`} />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              {/* Badge */}
              <span className="inline-flex w-fit items-center bg-brand-red text-white font-heading font-bold text-xs uppercase tracking-widest px-3 py-1 rounded mb-3">
                {photo.label}
              </span>
              <h3 className="font-heading font-bold text-white text-xl sm:text-2xl mb-2 leading-tight">
                {photo.title}
              </h3>
              <p className="font-body text-brand-mid-gray text-sm leading-relaxed max-w-sm">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-brand-red py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-heading font-bold text-white text-sm sm:text-base uppercase tracking-wide text-center sm:text-left">
            Ai o fisură sau ciubitură? Nu amâna — fiecare zi contează!
          </p>
          <a href="#contact" className="shrink-0 inline-flex items-center justify-center bg-white text-brand-red font-heading font-bold uppercase tracking-wide text-sm px-6 py-2.5 rounded hover:bg-brand-light-gray transition-colors touch-manipulation">
            Programează Gratuit
          </a>
        </div>
      </div>
    </section>
  )
}

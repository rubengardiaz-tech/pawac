'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/language-context'

const copy = {
  es: {
    eyebrow: 'Proyectos e investigaciones',
    title: 'Nuestros proyectos',
    intro: 'Iniciativas que llevan el arte y la cultura al centro de la construcción de paz, desde la investigación hasta el trabajo directo con la comunidad.',
    titleWorkshop: 'Taller «Los soles de la paz»',
    description: 'Proceso creativo colectivo para fortalecer la cohesión social y construir paz a través de las prácticas artísticas.',
    imageAlt: 'Obra colectiva colorida del taller Los soles de la paz',
  },
  en: {
    eyebrow: 'Projects and research',
    title: 'Our projects',
    intro: 'Initiatives that place arts and culture at the heart of peacebuilding, from research to direct work with communities.',
    titleWorkshop: 'The Suns of Peace workshop',
    description: 'A collective creative process to strengthen social cohesion and build peace through artistic practices.',
    imageAlt: 'Colorful collective artwork from The Suns of Peace workshop',
  },
}

export function ProjectsSection() {
  const { language } = useLanguage()
  const t = copy[language]

  return (
    <section id="proyectos" className="bg-dots bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">{t.eyebrow}</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t.title}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{t.intro}</p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <Card className="group overflow-hidden border-border bg-card text-center transition-shadow hover:shadow-lg">
            <div className="bg-accent/10 px-6 pt-6 md:px-10 md:pt-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-10-12%20at%2020.59.49-ua1aAqzKDhx3XcCr7rSz1vnE5uHO5P.jpeg"
                alt={t.imageAlt}
                className="mx-auto max-h-[34rem] w-full rounded-t-xl object-contain object-center"
              />
            </div>
            <CardHeader className="items-center gap-3 px-6 pb-3 pt-7 md:px-10">
              <CardTitle className="text-xl text-foreground">{t.titleWorkshop}</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8 text-sm leading-relaxed text-muted-foreground md:px-10">{t.description}</CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

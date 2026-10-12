'use client'

import { ArrowRight, CalendarHeart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'

const copy = {
  es: { badge: 'Arts-Based Peacebuilding · Lanzarote, Islas Canarias', title: 'Construyendo paz a través del arte y la cultura', subtitle: 'Arts-Based Peacebuilding decolonial, participativo y plural desde Lanzarote', body: 'Generamos una cultura avanzada de construcción de paz basada en las artes, de forma interdisciplinaria y participativa, mediante investigaciones, encuentros, formación y proyectos de campo.', projects: 'Conoce nuestros proyectos', meeting: 'Reserva un encuentro' },
  en: { badge: 'Arts-Based Peacebuilding · Lanzarote, Canary Islands', title: 'Building peace through arts and culture', subtitle: 'Decolonial, participatory and plural Arts-Based Peacebuilding from Lanzarote', body: 'We build an advanced culture of peacebuilding through the arts, in an interdisciplinary and participatory way, through research, encounters, training and field projects.', projects: 'Discover our projects', meeting: 'Book an encounter' },
}

export function HeroSection() {
  const { language } = useLanguage()
  const t = copy[language]
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary pt-28 pb-20 md:pt-36 md:pb-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden"><div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-2xl" /><div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" /><div className="absolute right-1/4 top-1/3 h-24 w-24 rotate-45 rounded-3xl bg-accent/20" /><div className="absolute left-10 top-24 h-16 w-16 rounded-full border-4 border-background/20" /></div>
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="mb-6 inline-block rounded-full border border-background/30 bg-background/10 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur">{t.badge}</span>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">{t.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-primary-foreground/90 md:text-xl">{t.subtitle}</p>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">{t.body}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button nativeButton={false} render={<a href="#proyectos" />} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">{t.projects}<ArrowRight className="ml-1 h-4 w-4" /></Button><Button nativeButton={false} render={<a href="#contacto" />} size="lg" variant="outline" className="w-full border-background/40 bg-background/10 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground sm:w-auto"><CalendarHeart className="mr-1 h-4 w-4" />{t.meeting}</Button></div>
      </div>
    </section>
  )
}

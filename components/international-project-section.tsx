'use client'

import { BookOpen, Globe2, Network, Search, UsersRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/components/language-context'

const content = {
  es: {
    eyebrow: 'Proyecto internacional', title: 'PAWAC International', intro: 'Una plataforma internacional para investigar, compartir y activar el poder del arte y la cultura en la construcción de paz.',
    objectives: 'Objetivos principales', research: 'Investigación y conocimiento', researchText: 'Generar conocimiento sobre prácticas de construcción de paz basada en las artes, con una mirada crítica, situada y transdisciplinar.', network: 'Crear una red internacional', networkText: 'Conectar organizaciones, universidades, artistas, mediadores y comunidades para aprender y actuar juntas.', platform: 'Una plataforma digital para conectar experiencias', platformText: 'El proyecto articula cinco funcionalidades que hacen visible el conocimiento y facilitan la colaboración:', incidence: 'Red internacional e incidencia', incidenceText: 'La red permitirá compartir metodologías, impulsar alianzas y llevar las voces de las comunidades a espacios de decisión e incidencia.', consortium: 'Consorcio y colaboradores clave', consortiumText: 'El proyecto se construye con instituciones académicas, redes de gobiernos locales y organizaciones culturales, incluyendo UCLG, Deakin University y la Universidad de La Laguna.', impact: 'Impacto esperado', impactText: 'Más conocimiento compartido, nuevas colaboraciones y herramientas concretas para fortalecer la cohesión social, el diálogo intercultural y la resolución pacífica de conflictos.', esButton: 'Descargar presentación completa (Español)', enButton: 'Download full presentation (English)', features: ['Foro', 'Biblioteca', 'Formación', 'Directorio', 'Matchmaking']
  },
  en: {
    eyebrow: 'International project', title: 'PAWAC International', intro: 'An international platform to research, share and activate the power of arts and culture in peacebuilding.',
    objectives: 'Main objectives', research: 'Research and knowledge generation', researchText: 'Generate knowledge about arts-based peacebuilding practices through a critical, situated and transdisciplinary lens.', network: 'Build an international network', networkText: 'Connect organisations, universities, artists, mediators and communities to learn and act together.', platform: 'A digital platform to connect experiences', platformText: 'The project brings together five features that make knowledge visible and collaboration easier:', incidence: 'International network and advocacy', incidenceText: 'The network will share methodologies, build partnerships and bring community voices into decision-making and advocacy spaces.', consortium: 'Consortium and key partners', consortiumText: 'The project is built with academic institutions, local government networks and cultural organisations, including UCLG, Deakin University and Universidad de La Laguna.', impact: 'Expected impact', impactText: 'More shared knowledge, new collaborations and practical tools to strengthen social cohesion, intercultural dialogue and peaceful conflict resolution.', esButton: 'Descargar presentación completa (Español)', enButton: 'Download full presentation (English)', features: ['Forum', 'Library', 'Training', 'Directory', 'Matchmaking']
  }
}

export function InternationalProjectSection() {
  const { language } = useLanguage()
  const t = content[language]
  return <section id="proyecto-internacional" className="bg-background py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-wider text-accent">{t.eyebrow}</p><h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">{t.title}</h2><p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">{t.intro}</p></div>
      <div className="mt-14 grid gap-6 md:grid-cols-2"><Card className="border-border bg-card"><CardHeader><span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><Search /></span><CardTitle>{t.research}</CardTitle></CardHeader><CardContent className="leading-relaxed text-muted-foreground">{t.researchText}</CardContent></Card><Card className="border-border bg-card"><CardHeader><span className="flex size-12 items-center justify-center rounded-xl bg-accent/15 text-accent"><Network /></span><CardTitle>{t.network}</CardTitle></CardHeader><CardContent className="leading-relaxed text-muted-foreground">{t.networkText}</CardContent></Card></div>
      <div className="mt-6 rounded-2xl bg-muted/50 p-6 md:p-8"><div className="flex items-start gap-4"><Globe2 className="mt-1 shrink-0 text-primary" /><div><h3 className="text-xl font-semibold text-foreground">{t.platform}</h3><p className="mt-2 text-muted-foreground">{t.platformText}</p><div className="mt-6 grid gap-3 sm:grid-cols-5">{t.features.map((feature) => <div key={feature} className="rounded-xl border border-border bg-card px-3 py-4 text-center text-sm font-semibold text-primary">{feature}</div>)}</div></div></div></div>
      <div className="mt-6 grid gap-6 md:grid-cols-3"><InfoCard icon={UsersRound} title={t.incidence} text={t.incidenceText} /><InfoCard icon={Network} title={t.consortium} text={t.consortiumText} /><InfoCard icon={BookOpen} title={t.impact} text={t.impactText} /></div>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Button nativeButton={false} render={<a href="/docs/pawac-es.pdf" />} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">{t.esButton}</Button><Button nativeButton={false} render={<a href="/docs/pawac-en.pdf" />} size="lg" variant="outline">{t.enButton}</Button></div>
    </div>
  </section>
}

function InfoCard({ icon: Icon, title, text }: { icon: typeof UsersRound; title: string; text: string }) { return <Card className="border-border bg-card"><CardHeader><Icon className="text-primary" /><CardTitle className="text-lg">{title}</CardTitle></CardHeader><CardContent className="leading-relaxed text-muted-foreground">{text}</CardContent></Card> }

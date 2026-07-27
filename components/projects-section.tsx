// Sección "Nuestros proyectos": tarjetas de investigaciones y proyectos de campo.
import {
  Palette,
  MessagesSquare,
  Sun,
  HandHeart,
  BookOpen,
  Handshake,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Ejemplos de proyectos coherentes con la misión de la asociación
const PROJECTS = [
  {
    icon: Palette,
    title: 'Mediación artística en escuelas',
    text: 'Talleres de arte que enseñan a niñas y niños a resolver conflictos sin violencia.',
  },
  {
    icon: MessagesSquare,
    title: 'Foros de diálogo intercultural',
    text: 'Encuentros abiertos donde distintas culturas comparten memoria, música y palabra.',
  },
  {
    icon: Sun,
    title: 'Taller «Los Soles de la Vida»',
    text: 'Proceso creativo colectivo para sanar y reconstruir el tejido comunitario.',
  },
  {
    icon: HandHeart,
    title: 'Acompañamiento a víctimas',
    text: 'Espacios seguros de expresión artística para personas afectadas por la violencia.',
  },
  {
    icon: BookOpen,
    title: 'Investigación decolonial',
    text: 'Estudios transdisciplinarios sobre las artes como herramienta de paz en Canarias.',
  },
  {
    icon: Handshake,
    title: 'Alianzas por la paz',
    text: 'Colaboraciones con instituciones públicas, educativas y organizaciones sociales.',
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="bg-dots bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Proyectos e investigaciones
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros proyectos
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Iniciativas que llevan el arte y la cultura al centro de la construcción de
            paz, desde la investigación hasta el trabajo directo con la comunidad.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Card
              key={project.title}
              className="group border-border bg-card transition-shadow hover:shadow-lg"
            >
              <CardHeader className="gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <project.icon className="h-6 w-6" />
                </span>
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {project.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

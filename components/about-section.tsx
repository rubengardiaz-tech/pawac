// Sección "Quiénes somos": descripción, misión, fines, tarjetas de actividad y dirección.
import {
  Microscope,
  Users,
  GraduationCap,
  Sprout,
  MapPin,
  Check,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Cuatro ejes de trabajo de la asociación
const PILLARS = [
  {
    icon: Microscope,
    title: 'Investigación',
    text: 'Estudios sobre construcción de paz basada en las artes desde una mirada decolonial.',
  },
  {
    icon: Users,
    title: 'Encuentros',
    text: 'Espacios de diálogo intercultural, foros y seminarios abiertos a la comunidad.',
  },
  {
    icon: GraduationCap,
    title: 'Formación',
    text: 'Educación para la paz, la no violencia y la mediación en todas las etapas de la vida.',
  },
  {
    icon: Sprout,
    title: 'Proyectos de campo',
    text: 'Iniciativas comunitarias de cohesión social, justicia social y apoyo a víctimas.',
  },
]

// Fines principales de la asociación
const GOALS = [
  'Fomentar la educación para la paz y la no violencia en todas las etapas de la vida.',
  'Promover el diálogo intercultural y el respeto a los derechos humanos.',
  'Desarrollar habilidades de mediación y resolución pacífica de conflictos.',
  'Impulsar proyectos comunitarios de cohesión social, justicia social y apoyo a víctimas de violencia.',
  'Realizar campañas de sensibilización, foros, seminarios y alianzas estratégicas.',
  'Contribuir a sociedades más pacíficas y a la reducción de la violencia.',
]

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Sobre nosotros
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Quiénes somos
          </h2>
        </div>

        {/* Descripción y misión */}
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            La <strong className="text-foreground">Asociación PAWAC</strong> (Peacebuilding
            Also With Art and Culture) es una asociación cultural sin ánimo de lucro,
            de ámbito principalmente canario, constituida por tiempo indefinido bajo la
            Ley Orgánica 1/2002 reguladora del Derecho de Asociación.
          </p>
          <p>
            Su misión central es generar una cultura avanzada de construcción de paz
            basada en las artes (Arts-Based Peacebuilding) de forma decolonial,
            participativa, interdisciplinaria, transdisciplinaria, unificada y plural.
            Trabaja mediante investigaciones, encuentros, formación y proyectos de campo.
          </p>
          <p>
            PAWAC está formada por socios —de número, honor, mérito, fundadores y
            protectores/colaboradores— y se rige por una Junta Directiva y una Asamblea
            General. Todas sus acciones se orientan a crear espacios seguros, fortalecer
            la cohesión social y promover la paz como valor central a través del arte y
            la cultura.
          </p>
        </div>

        {/* Tarjetas: los cuatro ejes de trabajo */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} className="border-border bg-card transition-shadow hover:shadow-md">
              <CardHeader className="items-start gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <CardTitle className="text-lg text-foreground">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {pillar.text}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fines principales + dirección */}
        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-foreground">Fines principales</h3>
            <ul className="mt-5 space-y-3">
              {GOALS.map((goal) => (
                <li key={goal} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-pretty leading-relaxed text-muted-foreground">
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tarjeta de dirección */}
          <Card className="border-border bg-secondary/20 lg:col-span-2">
            <CardHeader className="gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <MapPin className="h-6 w-6" />
              </span>
              <CardTitle className="text-lg text-foreground">Dónde estamos</CardTitle>
            </CardHeader>
            <CardContent className="leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">Asociación PAWAC</p>
              <p>Calle Perdiz 9</p>
              <p>35560 Tinajo</p>
              <p>Lanzarote, Islas Canarias, España</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

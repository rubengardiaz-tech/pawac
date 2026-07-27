// Sección "Voces de la comunidad": testimonios (ficticios) de personas participantes.
import { Quote, User } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const TESTIMONIALS = [
  {
    quote:
      'Participar en los talleres de mediación artística cambió la forma en que mi alumnado resuelve sus diferencias. El arte les dio un lenguaje común.',
    name: 'Candelaria Betancort',
    role: 'Educadora, Tinajo',
  },
  {
    quote:
      'En los foros de diálogo intercultural encontré un espacio seguro para compartir mi historia. Sentí, por fin, que pertenecía a la comunidad.',
    name: 'Amadou Diallo',
    role: 'Participante y socio de número',
  },
  {
    quote:
      'PAWAC demuestra que la construcción de paz decolonial no es teoría: es práctica viva, hecha con la gente y desde el territorio canario.',
    name: 'Dra. Elena Marrero',
    role: 'Investigadora asociada',
  },
  {
    quote:
      'El acompañamiento artístico me ayudó a reconstruirme tras la violencia. Volví a confiar en las personas y en mí misma.',
    name: 'Rosario Perdomo',
    role: 'Participante del programa de apoyo',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Testimonios
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Voces de la comunidad
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="relative border-border bg-secondary/15">
              <CardContent className="pt-8">
                {/* Comillas decorativas */}
                <Quote
                  className="absolute right-6 top-6 h-8 w-8 text-accent/30"
                  aria-hidden="true"
                />
                <p className="text-pretty leading-relaxed text-foreground">
                  «{t.quote}»
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

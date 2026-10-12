'use client'

// Sección de contacto con formulario.
// Dos acciones: enviar por email (mailto) y abrir WhatsApp (wa.me).
import { useState } from 'react'
import { Mail, MessageCircle, MapPin, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'

// ⚠️ Sustituye estos datos por los reales de la asociación:
const EMAIL = 'info@pawac.es'
const WHATSAPP_NUMBER = '34600000000' // formato internacional sin "+", ni espacios

export function ContactSection() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  // Actualiza el estado del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Construye un enlace mailto con los datos del formulario
  const handleEmail = () => {
    const asunto = encodeURIComponent(`Contacto web PAWAC — ${form.nombre || 'Sin nombre'}`)
    const cuerpo = encodeURIComponent(
      `Nombre: ${form.nombre}\n` +
        `Email: ${form.email}\n` +
        `Teléfono: ${form.telefono}\n\n` +
        `Mensaje:\n${form.mensaje}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`
  }

  // Construye un enlace de WhatsApp con un mensaje predefinido
  const handleWhatsApp = () => {
    const texto = encodeURIComponent(
      `Hola PAWAC, soy ${form.nombre || '...'}. ${
        form.mensaje || 'Me gustaría recibir más información sobre la asociación.'
      }`,
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/90">
            Contacto
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            Contacta con PAWAC
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/80">
            ¿Quieres unirte, colaborar o reservar un encuentro? Escríbenos y te
            responderemos lo antes posible.
          </p>
        </div>

        <Card className="mt-10 border-none bg-card shadow-xl">
          <CardContent className="p-6 md:p-8">
            {/* El formulario no recarga la página: cada botón elige su acción */}
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault()
                handleEmail()
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="telefono">Teléfono (opcional)</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué podemos ayudarte…"
                  rows={5}
                  required
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg" className="w-full sm:flex-1">
                  <Mail className="mr-1 h-4 w-4" />
                  Enviar por email
                </Button>
                <Button
                  type="button"
                  size="lg"
                  onClick={handleWhatsApp}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:flex-1"
                >
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Abrir WhatsApp
                </Button>
              </div>

              {/* Datos legales y domicilio postal */}
              <div className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <address className="not-italic">
                  <p className="font-medium text-foreground">
                    Asociación PEACEBUILDING ALSO WITH ART AND CULTURE (PAWAC)
                  </p>
                  <p>Número de Registro: 27248 (G1/S1/27248-24/L)</p>
                  <p>Registro de Asociaciones de Canarias</p>
                  <p>Domicilio social: C/ Perdiz, Nº 9, Tinajo – 35560, Lanzarote, Islas Canarias, España</p>
                </address>
              </div>

              {/* Nota de privacidad */}
              <p className="flex items-start gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Tus datos se usarán únicamente para responder a tu consulta y no se
                compartirán con terceros, conforme a la normativa de protección de datos.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

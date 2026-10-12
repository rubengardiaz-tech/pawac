'use client'

// Pie de página con logo, dirección, enlaces y nota legal.
import { PawacLogo } from '@/components/pawac-logo'
import { useLanguage } from '@/components/language-context'

const FOOTER_LINKS = [{ href: '#inicio', es: 'Inicio', en: 'Home' }, { href: '#sobre-nosotros', es: 'Sobre nosotros', en: 'About us' }, { href: '#proyectos', es: 'Proyectos', en: 'Projects' }, { href: '#proyecto-internacional', es: 'Proyecto internacional', en: 'International project' }, { href: '#contacto', es: 'Contacto', en: 'Contact' }]

export function SiteFooter() {
  const { language } = useLanguage()
  const english = language === 'en'
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo e identidad */}
          <div>
            <div className="flex items-center gap-3">
              <PawacLogo className="h-11 w-11" />
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">PAWAC</span>
                <span className="text-xs text-background/70">
                  Peacebuilding Also With Art and Culture
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
              Construyendo paz a través del arte y la cultura, de forma decolonial,
              participativa y plural desde Lanzarote.
            </p>
          </div>

          {/* Datos legales y domicilio */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Datos legales
            </h3>
            <div className="mt-4 text-sm leading-relaxed text-background/70">
              <p className="font-medium text-background/90">
                Asociación PEACEBUILDING ALSO WITH ART AND CULTURE (PAWAC)
              </p>
              <p className="mt-2">Número de Registro: 27248 (G1/S1/27248-24/L)</p>
              <p>Registro de Asociaciones de Canarias</p>
              <address className="mt-2 not-italic">
                Domicilio social: C/ Perdiz, Nº 9, Tinajo – 35560, Lanzarote,
                Islas Canarias, España
              </address>
            </div>
          </div>

          {/* Enlaces */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
{FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {english ? link.en : link.es}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Nota legal y copyright */}
        <div className="mt-12 flex flex-col gap-2 border-t border-background/15 pt-6 text-sm text-background/60 sm:flex-row sm:items-center sm:justify-between">
          <p>Asociación cultural sin ánimo de lucro — Ley Orgánica 1/2002</p>
          <p>© 2026 PAWAC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

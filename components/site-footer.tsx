// Pie de página con logo, dirección, enlaces y nota legal.
import { PawacLogo } from '@/components/pawac-logo'

const FOOTER_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export function SiteFooter() {
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

          {/* Dirección */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Dónde estamos
            </h3>
            <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-background/70">
              <p>Asociación PAWAC</p>
              <p>Calle Perdiz 9</p>
              <p>35560 Tinajo</p>
              <p>Lanzarote, Islas Canarias, España</p>
            </address>
          </div>

          {/* Enlaces */}
          <nav aria-label="Navegación del pie de página">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
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

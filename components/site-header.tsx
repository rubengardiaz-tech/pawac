'use client'

// Cabecera fija con navegación responsive.
// En móvil se muestra un menú hamburguesa; en escritorio, los enlaces en línea.
import { useEffect, useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-context'
import { PawacLogo } from '@/components/pawac-logo'

// Enlaces de navegación (todos apuntan a secciones de la misma página)
const NAV_LINKS = {
  es: [{ href: '#inicio', label: 'Inicio' }, { href: '#sobre-nosotros', label: 'Sobre nosotros' }, { href: '#proyectos', label: 'Proyectos' }, { href: '#proyecto-internacional', label: 'Proyecto internacional' }, { href: '#contacto', label: 'Contacto' }],
  en: [{ href: '#inicio', label: 'Home' }, { href: '#sobre-nosotros', label: 'About us' }, { href: '#proyectos', label: 'Projects' }, { href: '#proyecto-internacional', label: 'International project' }, { href: '#contacto', label: 'Contact' }],
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()
  const links = NAV_LINKS[language]
  const isEnglish = language === 'en'

  // Añade sombra/fondo sólido a la cabecera al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'bg-background/95 shadow-sm backdrop-blur border-b border-border'
          : 'bg-background/70 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-20">
        {/* Logo + subtítulo */}
        <a href="#inicio" className="flex items-center gap-3" aria-label="PAWAC, ir al inicio">
          <PawacLogo className="h-10 w-10 shrink-0 md:h-11 md:w-11" />
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-primary md:text-xl">
              PAWAC
            </span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              Peacebuilding Also With Art and Culture
            </span>
          </span>
        </a>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA de escritorio */}
        <div className="hidden lg:block">
          <Button
            nativeButton={false}
            render={<a href="#contacto" />}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Únete / Contacta
          </Button>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Languages className="size-4 text-primary" aria-hidden="true" />
          <div className="flex rounded-full border border-border bg-background/80 p-1 text-xs font-semibold" aria-label="Language selector">
            <button type="button" onClick={() => setLanguage('es')} className={`rounded-full px-2 py-1 ${!isEnglish ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>ES</button>
            <button type="button" onClick={() => setLanguage('en')} className={`rounded-full px-2 py-1 ${isEnglish ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>EN</button>
          </div>
        </div>

        {/* Botón del menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary transition-colors hover:bg-muted lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-background px-4 py-4 lg:hidden"
          aria-label="Navegación móvil"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <Button
                nativeButton={false}
                render={<a href="#contacto" onClick={() => setOpen(false)} />}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Únete / Contacta
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

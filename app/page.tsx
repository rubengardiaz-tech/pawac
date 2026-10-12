// Página única (single-page) de la Asociación PAWAC.
// Compone todas las secciones en el orden solicitado.
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ContactSection } from '@/components/contact-section'
import { InternationalProjectSection } from '@/components/international-project-section'
import { SiteFooter } from '@/components/site-footer'
import { LanguageProvider } from '@/components/language-context'

export default function HomePage() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        {/* 1. Portada / Hero */}
        <HeroSection />
        {/* 2. Sobre nosotros */}
        <AboutSection />
        <ProjectsSection />
        <InternationalProjectSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}

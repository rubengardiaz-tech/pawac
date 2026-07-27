// Página única (single-page) de la Asociación PAWAC.
// Compone todas las secciones en el orden solicitado.
import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <>
      {/* Cabecera fija con navegación */}
      <SiteHeader />
      <main>
        {/* 1. Portada / Hero */}
        <HeroSection />
        {/* 2. Sobre nosotros */}
        <AboutSection />
        {/* 3. Proyectos e investigaciones */}
        <ProjectsSection />
        {/* 4. Testimonios */}
        <TestimonialsSection />
        {/* 5. Formulario de contacto */}
        <ContactSection />
      </main>
      {/* 6. Pie de página */}
      <SiteFooter />
    </>
  )
}

import Image from 'next/image'

// Logotipo oficial de PAWAC (imagen aportada por la asociación).
// Se muestra en un contenedor redondo para integrarse en la cabecera y el pie.
export function PawacLogo({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <span className={`relative inline-block overflow-hidden rounded-full ${className}`}>
      <Image
        src="/logo-pawac.jpg"
        alt="Logotipo de la Asociación PAWAC"
        fill
        sizes="48px"
        className="object-cover"
        priority
      />
    </span>
  )
}

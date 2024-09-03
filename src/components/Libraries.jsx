import Image from 'next/image'
import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoAlpine from '@/images/logos/alpine.svg'
import logoTailwind from '@/images/logos/tailwind.svg'

const libraries = [
  {
    href: 'https://alpinejs.dev/',
    name: 'Alpine.js',
    description:
      'Alpine es una herramienta robusta y minimalista para componer comportamiento directamente en tu marcado.',
    logo: logoAlpine,
  },
  {
    href: 'https://tailwindcss.com/',
    name: 'Tailwind',
    description:
      'Un framework de CSS enfocado en utilidades, lleno de clases que se pueden combinar para construir cualquier diseño directamente en tu marcado.',
    logo: logoTailwind,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
          Framework y líbrerias usadas
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right" target="_blank">
                  Ver más
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}

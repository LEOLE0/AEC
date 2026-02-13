import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const footerNavigation = {
  main: [
    { name: "Expertises", href: "/expertises" },
    { name: "Méthodologie", href: "/methodologie" },
    { name: "Étude en ligne", href: "/etude-en-ligne" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="container-centered pb-8 pt-0" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="rounded-[2.5rem] bg-slate-950 text-white px-8 py-12 md:p-16 shadow-2xl overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="xl:grid xl:grid-cols-4 xl:gap-12 relative z-10">
          {/* Brand Column */}
          <div className="xl:col-span-1 space-y-6">
            <Link href="/" className="inline-block relative w-20 h-20">
               <Image 
                 src="/LOGO.png" 
                 alt="Logo AEC" 
                 fill 
                 sizes="80px"
                 className="object-contain brightness-0 invert"
               />
            </Link>
            <p className="text-sm leading-6 text-slate-400 font-light max-w-xs">
              Cabinet d&apos;ingénierie indépendant dédié à la performance énergétique et environnementale du bâtiment.
            </p>
          </div>

          {/* Links Columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0 xl:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white tracking-wider uppercase">Navigation</h3>
              <ul role="list" className="mt-6 space-y-3">
                {footerNavigation.main.slice(0, 3).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-slate-400 hover:text-emerald-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white tracking-wider uppercase">Entreprise</h3>
              <ul role="list" className="mt-6 space-y-3">
                 {footerNavigation.main.slice(3).map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-slate-400 hover:text-emerald-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-white tracking-wider uppercase">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-400 group">
                  <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                  <span>6 rue d’Armaillé<br/>75017 Paris, France</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400 group">
                  <Phone className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  <span>+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400 group">
                  <Mail className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                  <a href="mailto:contact@aec-conseil.fr" className="hover:text-white transition-colors">contact@aec-conseil.fr</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-slate-500">
              &copy; {new Date().getFullYear()} AEC. Tous droits réservés.
            </p>
            <div className="flex gap-6">
               {footerNavigation.legal.map((item) => (
                  <Link key={item.name} href={item.href} className="text-xs text-slate-500 hover:text-white transition-colors">
                    {item.name}
                  </Link>
               ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

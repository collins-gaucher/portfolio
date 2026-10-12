import Logo_blanc from '../assets/Logo-blanc.png'
import Logo_noir from '../assets/favicon-dark.ico'
import { NavLink } from 'react-router'
import { Lien } from '../UI/Lien'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MapPin, Phone } from 'lucide-react'
import { Cadre } from '../UI/Cadre'
import Traduire from './Traduires'

// Type du contexte
interface ContexteType {
  langue: 'fr' | 'en'
}

function Footer({ langue }: ContexteType) {
  const liens = [
    { to: '/', label: 'Accueil', end: true },
    { to: '/propos', label: 'A propos' },
    { to: '/projet', label: 'Projet' },
    { to: '/competences', label: 'Compétences' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="flex w-full flex-col gap-10 overflow-hidden bg-gray-200/40 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 lg:py-20 xl:px-24 dark:bg-blue-950/10">

      {/* Contenu principal */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10 xl:gap-16">

        {/* Identité */}
        <div className="flex min-w-0 flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <img
              src={Logo_noir}
              alt="Logo du portfolio de Collins"
              className="hidden h-12 w-12 rounded-lg object-contain sm:h-14 sm:w-14 dark:block"
              loading="lazy"
            />

            <img
              src={Logo_blanc}
              alt="Logo du portfolio de Collins"
              className="block h-12 w-12 rounded-lg object-contain sm:h-14 sm:w-14 dark:hidden"
              loading="lazy"
            />

            <span
              className="flex items-center text-2xl font-bold tracking-wider text-black sm:text-3xl dark:text-white"
              aria-label="Collins"
            >
              <span className="text-blue-600">C</span>ollins
              <span className="text-blue-600">.</span>
            </span>
          </div>

          <p className="text-base font-semibold text-gray-600 sm:text-lg dark:text-gray-400">
            <Traduire lang={langue}>
              Développeur Web Full Stack
            </Traduire>
          </p>

          {/* Réseaux sociaux */}
          <div className="flex w-fit items-center gap-2">
            <Lien
              variant="reseau"
              taille="sm1"
              href="https://www.linkedin.com/in/collins-lonfouo-naha-656610337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </Lien>

            <Lien
              variant="reseau"
              taille="sm1"
              href="https://github.com/collins-gaucher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </Lien>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="flex min-w-0 flex-col items-start gap-4">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-100">
            <Traduire lang={langue}>LIENS RAPIDES</Traduire>
          </h3>

          <nav
            aria-label="Navigation du pied de page"
            className="flex flex-col items-start gap-3 text-base font-semibold text-gray-600 sm:gap-4 sm:text-lg dark:text-gray-400"
          >
            {liens.map((lien) => (
              <NavLink
                key={lien.to}
                to={lien.to}
                end={lien.end}
                className="transition-colors duration-300 hover:text-black dark:hover:text-white"
              >
                <Traduire lang={langue}>{lien.label}</Traduire>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="flex min-w-0 flex-col items-start gap-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-100">
            <Traduire lang={langue}>CONTACT</Traduire>
          </h3>

          <a
            href="https://wa.me/237658599369"
            target="_blank"
            rel="noopener noreferrer"
            className="flex max-w-full items-center gap-3 text-base font-semibold text-gray-600 transition-colors hover:text-blue-600 sm:text-lg dark:text-gray-400"
          >
            <Phone
              size={20}
              strokeWidth={1.5}
              className="shrink-0"
            />
            <span>+237 658 599 369</span>
          </a>

          <div className="flex items-center gap-3 text-base font-semibold text-gray-600 sm:text-lg dark:text-gray-400">
            <MapPin
              size={20}
              strokeWidth={1.5}
              className="shrink-0"
            />
            <span>
              <Traduire lang={langue}>
                Douala, Cameroun
              </Traduire>
            </span>
          </div>

          {/* Disponibilité */}
          <Cadre variant="dispo">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
            <p className="text-sm font-semibold sm:text-base">
              <Traduire lang={langue}>Ouvert au travail</Traduire>
            </p>
          </Cadre>
        </div>
      </div>

      {/* Séparateur */}
      <div className="mx-auto h-px w-full max-w-7xl bg-gray-300 dark:bg-blue-900" />

      {/* Copyright */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 text-center sm:gap-4 md:flex-row md:text-left">
        <span className="text-sm font-semibold text-gray-600 sm:text-base dark:text-gray-400">
          LNC © {new Date().getFullYear()}
        </span>

        <span className="text-sm font-semibold text-gray-600 sm:text-base dark:text-gray-400">
          Designed &amp; Built by Collins
        </span>
      </div>
    </footer>
  )
}

export default Footer
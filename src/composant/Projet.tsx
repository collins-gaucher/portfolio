
import { useOutletContext } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import Site_voyage from '../assets/Site-voyage.png'
import Site_debut from '../assets/Site-debut.png'

import { Traduction } from '../hooks/Traduction'
import { Carte } from '../UI/Carte'
import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'

interface ContexteType {
  langue: 'fr' | 'en'
}

const Projet = () => {
  const { langue } = useOutletContext<ContexteType>()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      {/* En-tête */}
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">

        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl">
          {Traduction('Projets', langue)}
        </h1>

        <p className="w-full max-w-3xl text-base font-semibold leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg md:text-xl">
          {Traduction(
            'Découvrez mes réalisations à travers une sélection de projets mettant en valeur mon développement, ma maîtrise des technologies et ma capacité à transformer des idées en solutions concrètes.',
            langue
          )}
        </p>
      </div>

      {/* Cartes des projets */}
      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 items-stretch justify-items-center gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-8 xl:gap-12">

        {/* PROJET 1 : MAKE MY LEMONADE */}
        <Carte className="relative flex h-full min-w-0 w-full max-w-xl flex-col overflow-hidden text-left">

          {/* Image */}
          <img
            src={Site_debut}
            alt="Aperçu du site Make My Lemonade"
            loading="lazy"
            className="h-48 w-full object-cover object-top sm:h-60 lg:h-64"
          />

          {/* Statuts */}
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-2 px-2 py-2 sm:px-3">
            <Cadre variant="Secondaire">
              {Traduction('Web', langue)}
            </Cadre>

            <Cadre variant="dernier">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
              {Traduction('En cours', langue)}
            </Cadre>
          </div>

          {/* Contenu */}
          <div className="flex flex-1 flex-col p-4 sm:p-5">

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Make My Lemonade
              </h2>

              <p className="mt-1 text-sm tracking-widest text-gray-600 dark:text-gray-400">
                {Traduction('SITE E-COMMERCE', langue)}
              </p>
            </div>

            <p className="mb-5 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
              {Traduction(
                'Site e-commerce permettant de présenter les produits et de faciliter les achats en ligne.',
                langue
              )}
            </p>

            {/* Technologies */}
            <div className="mb-6 flex flex-wrap gap-2">
              <Cadre>HTML</Cadre>
              <Cadre>CSS</Cadre>
              <Cadre>JavaScript</Cadre>
              <Cadre>Laravel</Cadre>
            </div>

            {/* Lien */}
            <div className="mt-auto w-full">
              <Lien
                href="https://collins-gaucher.github.io/Nouveau/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ternaire"
                taille="lg"
              >
                {Traduction('Voir le projet', langue)}
                <ArrowRight size={18} />
              </Lien>
            </div>
          </div>
        </Carte>

        {/* PROJET 2 : VOYAGE ELITE */}
        <Carte className="relative flex h-full min-w-0 w-full max-w-xl flex-col overflow-hidden text-left">

          {/* Image */}
          <img
            src={Site_voyage}
            alt="Aperçu du site Voyage Elite"
            loading="lazy"
            className="h-48 w-full object-cover object-top sm:h-60 lg:h-64"
          />

          {/* Statut */}
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between gap-2 px-2 py-2 sm:px-3">
            <Cadre variant="Secondaire">
              {Traduction('Web', langue)}
            </Cadre>

            <Cadre variant="dernier">
              {Traduction('Terminé', langue)}
            </Cadre>
          </div>

          {/* Contenu */}
          <div className="flex flex-1 flex-col p-4 sm:p-5">

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Voyage Elite
              </h2>

              <p className="mt-1 text-sm tracking-widest text-gray-600 dark:text-gray-400">
                {Traduction('SITE VITRINE', langue)}
              </p>
            </div>

            <p className="mb-5 text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
              {Traduction(
                "Site vitrine permettant de présenter l'entreprise et de faciliter la prise de contact par e-mail.",
                langue
              )}
            </p>

            {/* Technologies */}
            <div className="mb-6 flex flex-wrap gap-2">
              <Cadre>TypeScript</Cadre>
              <Cadre>Tailwind CSS</Cadre>
            </div>

            {/* Lien */}
            <div className="mt-auto w-full">
              <Lien
                href="https://collins-gaucher.github.io/Voyage/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ternaire"
                taille="lg"
              >
                {Traduction('Voir le projet', langue)}
                <ArrowRight size={18} />
              </Lien>
            </div>
          </div>
        </Carte>
      </div>
    </motion.section>
  )
}

export default Projet

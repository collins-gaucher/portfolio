
import Photo_Profil from '../assets/Photo-profil.jpg'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useOutletContext } from 'react-router'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'

import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'
import { A } from '../UI/A'
import { Traduction } from '../hooks/Traduction'

// Types
interface ContexteType {
  langue: 'fr' | 'en'
}

// Animation réutilisable
const animationEntree = {
  initial: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Propos = () => {
  const { langue } = useOutletContext<ContexteType>()

  // Détection de visibilité des sections
  const [profilRef, profilVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [parcoursRef, parcoursVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [contactRef, contactVisible] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <>
      {/* SECTION 1 : PROFIL ET PRÉSENTATION */}
      <motion.section
        ref={profilRef}
        variants={animationEntree}
        initial="initial"
        animate={profilVisible ? 'visible' : 'initial'}
        transition={{ duration: 0.8 }}
        className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">

          {/* PROFIL */}
          <div className="flex w-full shrink-0 flex-col items-center gap-5 sm:max-w-md lg:sticky lg:top-24 lg:w-72 lg:items-start">

            {/* Photo */}
            <div className="relative">
              <img
                src={Photo_Profil}
                alt="Photo de profil de Collins"
                className="h-36 w-36 rounded-2xl object-cover shadow-xl dark:shadow-blue-800/40 sm:h-44 sm:w-44"
              />

              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 h-6 w-6 animate-ping rounded-full border-4 border-white bg-green-500 dark:border-gray-950"
              />

              <span
                aria-label="Disponible"
                className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white bg-green-500 dark:border-gray-950"
              />
            </div>

            {/* Nom */}
            <h2 className="text-3xl font-bold tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl">
              COLLINS
            </h2>

            {/* Ville et diplôme */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Cadre variant="profil" taille="lg">
                Douala
              </Cadre>

              <Cadre variant="profil" taille="lg" className='text-nowrap'>
                {Traduction('Licence Génie Logiciel', langue)}
              </Cadre>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              <Lien
                variant="reseau"
                taille="sm1"
                href="https://www.linkedin.com/in/collins-lonfouo-naha-656utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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

          {/* PRÉSENTATION */}
          <div className="flex min-w-0 w-full flex-col gap-6 sm:gap-8">

            <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-left">
              {Traduction('Développeur Web Full Stack', langue)}
            </h1>

            {/* Qui suis-je ? */}
            <Cadre variant="propos" taille="xl">
              <h2 className="mb-4 font-bold text-blue-700 dark:text-blue-400">
                {Traduction('QUI SUIS-JE ?', langue)}
              </h2>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {Traduction(
                  'Titulaire d’une licence en technologie du génie logiciel, je suis un informaticien polyvalent passionné par le développement web et la conception de solutions numériques. Curieux et rigoureux, je m’investis dans la création d’interfaces modernes, intuitives et performantes, tout en développant continuellement mes compétences.',
                  langue,
                )}
              </p>
            </Cadre>

            {/* Ce qui m'anime */}
            <Cadre variant="propos" taille="lg">
              <h2 className="mb-4 font-bold text-blue-700 dark:text-blue-400">
                {Traduction("CE QUI M'ANIME", langue)}
              </h2>

              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {Traduction(
                  'Ce qui m’anime, c’est la passion de créer, d’apprendre et de transformer des idées en solutions numériques concrètes. J’aime relever des défis techniques, explorer de nouvelles technologies et concevoir des applications qui allient innovation, simplicité et efficacité. Chaque projet est pour moi une occasion de repousser mes limites, d’enrichir mes compétences et de contribuer à des solutions qui répondent à de véritables besoins.',
                  langue,
                )}
              </p>
            </Cadre>
          </div>
        </div>
      </motion.section>

      
{/* SECTION 2 : MON PARCOURS */}
<section
  ref={parcoursRef}
  className="w-full overflow-hidden bg-radial from-blue-300 to-white dark:from-blue-900/50 dark:to-gray-950/90 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 flex flex-col items-center"
>
  {/* Titre */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.8 }}
    className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100"
  >
    {Traduction('Mon parcours', langue)}
  </motion.h2>

  {/* VERSION MOBILE ET TABLETTE */}
  <div className="relative mt-12 sm:mt-16 w-full max-w-2xl xl:hidden">

    {/* Ligne verticale */}
    <div className="absolute top-4 bottom-4 left-3.5 w-0.5 bg-linear-to-b from-violet-600 via-violet-600/50 to-transparent" />

    <div className="flex flex-col gap-8 sm:gap-10">

      {/* Stage professionnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex min-w-0 items-start gap-4 sm:gap-6"
      >
        <div className="mt-5 h-7 w-7 shrink-0 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950 sm:h-8 sm:w-8" />

        <Cadre
          variant="propos"
          taille="xl"
          className="min-w-0 flex-1 flex flex-col gap-4 bg-transparent border-blue-500 dark:border-blue-500"
        >
          <p className="text-blue-600">
            {Traduction('Stage Professionnel', langue)}
          </p>
          <h3 className="wrap-break-word text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            GROUPE NJS (CEMA-VET)
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            {Traduction(
              'Technicien support IT et gestion du parc informatique avec GLPI et Dolibarr ERP.',
              langue
            )}
          </p>
        </Cadre>
      </motion.div>

      {/* Parcours académique */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 flex min-w-0 items-start gap-4 sm:gap-6"
      >
        <div className="mt-5 h-7 w-7 shrink-0 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950 sm:h-8 sm:w-8" />

        <Cadre
          variant="propos"
          taille="xl"
          className="min-w-0 flex-1 flex flex-col gap-4 bg-transparent border-blue-500 dark:border-blue-500"
        >
          <p className="text-blue-600">
            {Traduction('Académique', langue)}
          </p>
          <h3 className="wrap-break-word text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {Traduction('LICENCE GENIE LOGICIEL', langue)}
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            {Traduction(
              'Institut Universitaire du Golfe de Guinée, Douala. Formation en développement logiciel, algorithmique, bases de données et architecture applicative.',
              langue
            )}
          </p>
        </Cadre>
      </motion.div>

      {/* Formation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex min-w-0 items-start gap-4 sm:gap-6"
      >
        <div className="mt-5 h-7 w-7 shrink-0 rounded-full border-4 border-green-700 bg-gray-100 dark:bg-gray-950 sm:h-8 sm:w-8" />

        <Cadre
          variant="propos"
          taille="xl"
          className="min-w-0 flex-1 flex flex-col gap-4 border border-l-4 border-green-500 dark:border-green-500 bg-green-200/90 dark:bg-green-600/5"
        >
          <p className="text-green-700 dark:text-green-400">
            {Traduction('Formation', langue)}
          </p>
          <h3 className="wrap-break-word text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            PYTHON / DATA ANALYST / IA
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            {Traduction(
              "Évolution vers l'analyse des données et la conception des solutions technologiques toujours plus pertinentes.",
              langue
            )}
          </p>
        </Cadre>
      </motion.div>

    </div>
  </div>

  {/* VERSION GRAND ÉCRAN : DESIGN ALTERNÉ CONSERVÉ */}
  <div className="relative mt-16 hidden w-full max-w-6xl flex-col gap-16 px-4 xl:flex">

    {/* Ligne centrale */}
    <div className="pointer-events-none absolute top-4 bottom-4 left-1/2 w-0.5 -translate-x-1/2 bg-linear-to-b from-violet-600 via-violet-600/50 to-transparent" />

    {/* Stage à droite */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative z-10 flex w-1/2 self-end items-start gap-5 mr-4"
    >
      <div className="mt-6 h-8 w-8 shrink-0 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950" />

      <Cadre
        variant="propos"
        taille="xl"
        className="min-w-0 flex-1 flex flex-col gap-4 bg-transparent border-l border-blue-500 dark:border-blue-500"
      >
        <p className="text-blue-600">
          {Traduction('Stage Professionnel', langue)}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          GROUPE NJS (CEMA-VET)
        </h3>
        <p className="leading-relaxed">
          {Traduction(
            'Technicien support IT et gestion du parc informatique avec GLPI et Dolibarr ERP.',
            langue
          )}
        </p>
      </Cadre>
    </motion.div>

    {/* Licence à gauche */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative z-10 flex w-1/2 self-start flex-row-reverse items-start gap-5 ml-4"
    >
      <div className="mt-6 h-8 w-8 shrink-0 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950" />

      <Cadre
        variant="propos"
        taille="xl"
        className="min-w-0 flex-1 flex flex-col gap-4 bg-transparent border-r border-blue-500 dark:border-blue-500 text-right"
      >
        <p className="text-blue-600">
          {Traduction('Académique', langue)}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {Traduction('LICENCE GENIE LOGICIEL', langue)}
        </h3>
        <p className="leading-relaxed">
          {Traduction(
            'Institut Universitaire du Golfe de Guinée, Douala. Formation en développement logiciel, algorithmique, bases de données et architecture applicative.',
            langue
          )}
        </p>
      </Cadre>
    </motion.div>

    {/* Formation à droite */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={parcoursVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative z-10 flex w-1/2 self-end items-start gap-5 mr-4"
    >
      <div className="mt-6 h-8 w-8 shrink-0 rounded-full border-4 border-green-700 bg-gray-100 dark:bg-gray-950" />

      <Cadre
        variant="propos"
        taille="xl"
        className="min-w-0 flex-1 flex flex-col gap-4 border border-l-4 border-green-500 dark:border-green-500 bg-green-200/90 dark:bg-green-600/10"
      >
        <p className="text-green-700 dark:text-green-400">
          {Traduction('Formation', langue)}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          PYTHON / DATA ANALYST / IA
        </h3>
        <p className="leading-relaxed">
          {Traduction(
            "Évolution vers l'analyse des données et la conception des solutions technologiques toujours plus pertinentes.",
            langue
          )}
        </p>
      </Cadre>
    </motion.div>

  </div>
</section>


      {/* SECTION 3 : CONTACT */}
      <motion.section
        ref={contactRef}
        variants={animationEntree}
        initial="initial"
        animate={contactVisible ? 'visible' : 'initial'}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-6 border-y border-gray-300 px-4 py-16 dark:border-gray-700 sm:gap-8 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        {/* Disponibilité */}
        <Cadre variant="dispo">
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500"
          />
          <p className="text-sm sm:text-base">
            {Traduction('Disponible pour de nouveaux projets', langue)}
          </p>
        </Cadre>

        {/* Titre */}
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
          {Traduction('Envie de collaborer ?', langue)}
        </h2>

        {/* Description */}
        <p className="w-full max-w-2xl text-center text-base font-medium leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
          {Traduction(
            'Que ce soit pour un projet, une idée ou juste discuter — je suis toujours ouvert à une bonne conversation.',
            langue,
          )}
        </p>

        {/* Boutons */}
        <div className="mt-2 flex flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center">
          <A taille="lg" to="/contact">
            {Traduction('Me contacter', langue)}
            <ArrowRight size={18} />
          </A>

          <A variant="secondaire" taille="lg" to="/projet">
            {Traduction('Voir mes projets', langue)}
          </A>
        </div>
      </motion.section>
    </>
  )
}

export default Propos

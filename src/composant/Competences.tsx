
import { useOutletContext } from 'react-router'
import { motion } from 'framer-motion'
import { FaCss3, FaReact } from 'react-icons/fa'
import {
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import { Traduction } from '../hooks/Traduction'

interface ContexteType {
  langue: 'fr' | 'en'
}

const TableauCompetence = [
  {
    nom: 'HTML5',
    icon: SiHtml5,
    couleur:
      'hover:bg-[#E34F26]/20 hover:border-[#E34F26] bg-[#E34F26]/20 shadow-lg hover:shadow-[#E34F26]/20 hover:text-[#E34F26]',
    iconcouleur: 'text-[#E34F26]',
  },
  {
    nom: 'CSS3',
    icon: FaCss3,
    couleur:
      'hover:bg-[#1572B6]/20 hover:border-[#1572B6] bg-[#1572B6]/20 shadow-lg hover:shadow-[#1572B6]/20 hover:text-[#1572B6]',
    iconcouleur: 'text-[#1572B6]',
  },
  {
    nom: 'JavaScript',
    icon: SiJavascript,
    couleur:
      'hover:bg-[#F7DF1E]/20 hover:border-[#F7DF1E] bg-[#F7DF1E]/20 shadow-lg hover:shadow-[#F7DF1E]/20 hover:text-[#F7DF1E]',
    iconcouleur: 'text-[#F7DF1E]',
  },
  {
    nom: 'React',
    icon: FaReact,
    couleur:
      'hover:bg-cyan-400/20 hover:border-cyan-600 bg-cyan-400/20 shadow-lg hover:shadow-cyan-400/20 hover:text-cyan-400',
    iconcouleur: 'text-cyan-400',
  },
  {
    nom: 'TypeScript',
    icon: SiTypescript,
    couleur:
      'hover:bg-[#3178C6]/20 hover:border-[#3178C6] bg-[#3178C6]/20 shadow-lg hover:shadow-[#3178C6]/20 hover:text-[#3178C6]',
    iconcouleur: 'text-[#3178C6]',
  },
  {
    nom: 'Tailwind CSS',
    icon: SiTailwindcss,
    couleur:
      'hover:bg-[#06B6D4]/20 hover:border-[#06B6D4] bg-[#06B6D4]/20 shadow-lg hover:shadow-[#06B6D4]/20 hover:text-[#06B6D4]',
    iconcouleur: 'text-[#06B6D4]',
  },
  {
    nom: 'PostgreSQL',
    icon: SiPostgresql,
    couleur:
      'hover:bg-[#1572B6]/20 hover:border-[#1572B6] bg-[#1572B6]/20 shadow-lg hover:shadow-[#1572B6]/20 hover:text-[#1572B6]',
    iconcouleur: 'text-[#1572B6]',
  },
  {
    nom: 'MySQL',
    icon: SiMysql,
    couleur:
      'hover:bg-[#4479A1]/20 hover:border-[#4479A1] bg-[#4479A1]/20 shadow-lg hover:shadow-[#4479A1]/20 hover:text-[#4479A1]',
    iconcouleur: 'text-[#4479A1]',
  },
  {
    nom: 'Django',
    icon: SiDjango,
    couleur:
      'hover:bg-[#092E20]/20 hover:border-[#092E20] bg-[#092E20]/20 shadow-lg hover:shadow-[#092E20]/20 hover:text-[#092E20]',
    iconcouleur: 'text-[#092E20]',
  },
  {
    nom: 'PHP',
    icon: SiPhp,
    couleur:
      'hover:bg-[#777BB4]/20 hover:border-[#777BB4] bg-[#777BB4]/20 shadow-lg hover:shadow-[#777BB4]/20 hover:text-[#777BB4]',
    iconcouleur: 'text-[#777BB4]',
  },
  {
    nom: 'Laravel',
    icon: SiLaravel,
    couleur:
      'hover:bg-[#1572B6]/20 hover:border-[#1572B6] bg-[#1572B6]/20 shadow-lg hover:shadow-[#1572B6]/20 hover:text-[#1572B6]',
    iconcouleur: 'text-[#1572B6]',
  },
]

const Competences = () => {
  const { langue } = useOutletContext<ContexteType>()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Titre */}
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl lg:text-6xl">
          {Traduction('Technologies', langue)}
        </h1>

        {/* Grille responsive */}
        <div className="grid grid-cols-2 gap-3 p-1 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">

          {TableauCompetence.map((c) => (
            <motion.div
              key={c.nom}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`flex min-w-0 flex-col items-center justify-center gap-3 rounded-2xl border border-gray-300 bg-gray-200/50 px-2 py-6 text-center font-semibold text-gray-600 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900/50 sm:rounded-3xl sm:py-8 ${c.couleur}`}
            >
              <c.icon
                aria-hidden="true"
                size={40}
                className={`shrink-0 sm:h-12 sm:w-12 ${c.iconcouleur}`}
              />

              <p className="text-sm sm:text-base">
                {c.nom}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  )
}

export default Competences

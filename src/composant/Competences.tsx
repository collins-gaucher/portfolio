// import React from 'react'
import { useOutletContext } from 'react-router'
import { motion } from 'framer-motion'
import { FaCss3, FaReact } from 'react-icons/fa'
import { SiDjango, SiHtml5, SiJavascript, SiMysql, SiPhp, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { Traduction } from '../hooks/Traduction'

// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

const TableauCompetence = [
  {
    nom: "React",
    icon: FaReact,
    couleur: "hover:bg-cyan-400/20 hover:border-cyan-600 bg-cyan-400/20 shadow-lg hover:shadow-cyan-400/20 hover:text-cyan-400",
    iconcouleur: "text-cyan-400"
  },
  {
    nom: "TypeScript",
    icon: SiTypescript,
    couleur: "hover:bg-[#3178C6]/20 hover:border-[#3178C6] bg-[#3178C6]/20 shadow-lg hover:shadow-[#3178C6]/20 hover:text-[#3178C6]",
    iconcouleur: "text-[#3178C6]"
  },
  {
    nom: "JavaScript",
    icon: SiJavascript,
    couleur: "hover:bg-[#F7DF1E]/20 hover:border-[#F7DF1E] bg-[#F7DF1E]/20 shadow-lg hover:shadow-[#F7DF1E]/20 hover:text-[#F7DF1E]",
    iconcouleur: "text-[#F7DF1E]"
  },
  {
    nom: "PHP",
    icon: SiPhp,
    couleur: "hover:bg-[#777BB4]/20 hover:border-[#777BB4] bg-[#777BB4]/20 shadow-lg hover:shadow-[#777BB4]/20 hover:text-[#777BB4]",
    iconcouleur: "text-[#777BB4]"
  },
  {
    nom: "MySQL",
    icon: SiMysql,
    couleur: "hover:bg-[#4479A1]/20 hover:border-[#4479A1] bg-[#4479A1]/20 shadow-lg hover:shadow-[#4479A1]/20 hover:text-[#4479A1]",
    iconcouleur: "text-[#4479A1]"
  },
  {
    nom: "Tailwind CSS",
    icon: SiTailwindcss,
    couleur: "hover:bg-[#06B6D4]/20 hover:border-[#06B6D4] bg-[#06B6D4]/20 shadow-lg hover:shadow-[#06B6D4]/20 hover:text-[#06B6D4]",
    iconcouleur: "text-[#06B6D4]"
  },
  {
    nom: "Django",
    icon: SiDjango,
    couleur: "hover:bg-[#092E20]/20 hover:border-[#092E20] bg-[#092E20]/20 shadow-lg hover:shadow-[#092E20]/20 hover:text-[#092E20]",
    iconcouleur: "text-[#092E20]"
  },
  {
    nom: "HTML5",
    icon: SiHtml5,
    couleur: "hover:bg-[#E34F26]/20 hover:border-[#E34F26] bg-[#E34F26]/20 shadow-lg hover:shadow-[#E34F26]/20 hover:text-[#E34F26]",
    iconcouleur: "text-[#E34F26]"
  },
  {
    nom: "CSS3",
    icon: FaCss3,
    couleur: "hover:bg-[#1572B6]/20 hover:border-[#1572B6] bg-[#1572B6]/20 shadow-lg hover:shadow-[#1572B6]/20 hover:text-[#1572B6]",
    iconcouleur: "text-[#1572B6]"
  }
]

const Competences = () => {

  // Récupère la langue passée par Outlet dans Layout.tsx
   const { langue } = useOutletContext<ContexteType>()

  return (
    <>
       <motion.section
         initial={{opacity:0, y:20}}
         animate={{opacity:1, y:0}}
         transition={{duration: 0.8}} 
         className='px-8 py-30 xl:px-30'
       >
        <div>
          <h2 className='text-5xl md:text-6xl text-gray-900 dark:text-gray-100 font-bold mb-8'>{Traduction("Technologies", langue)}</h2>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4 overflow-hidden p-2 '>
            {
              TableauCompetence.map((c, index) => (
                <div key={index} className={`py-8 rounded-4xl border border-gray-300 dark:border-gray-700 bg-gray-200/50 dark:bg-gray-900/50 flex flex-col justify-center items-center gap-2 text-gray-500 font-semibold hover:text-gray-900 dark:hover:text-gray-100 text-nowrap hover:-translate-y-1 transition-all duration-800 ${c.couleur}`}>
                  <c.icon size={50} className={`${c.iconcouleur}`}/>
                  <p>{c.nom}</p>
                </div>
              ))
            }
          </div>
        </div>
       </motion.section>
    </>
  )
}

export default Competences

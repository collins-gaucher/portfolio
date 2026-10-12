// import React from 'react'
import { useOutletContext } from 'react-router'
import Site_voyage from '../assets/Site-voyage.png'
import Site_debut from '../assets/Site-debut.png'
import { motion } from 'framer-motion'
import { Traduction } from '../hooks/Traduction'
import { Carte } from '../UI/Carte'
import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'
import { ArrowRight } from 'lucide-react'


// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

const Projet = () => {

   // Récupère la langue passée par Outlet dans Layout.tsx
   const { langue } = useOutletContext<ContexteType>()

  return (
    <>
        <motion.section
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.8}} 
          className='px-8 py-30 xl:px-30 text-center'
        >
          <h2 className='text-6xl text-gray-900 dark:text-gray-100 font-bold mb-8'>{Traduction("Projets", langue)}</h2>

          <span className='text-gray-600 flex items-center sm:px-10 md:px-20 lg:px-30 xl:px-40 font-semibold text-xl'>
            {Traduction("Découvrez mes réalisations à travers une sélection de projets mettant en développement, ma maîtrise des technologies et ma capacité à transformer des idées en solutions concrètes.", langue)}
          </span>

          {/* Conteneur des carte des projets  */}
          <div className='grid grid-col-1 xl:grid-cols-2 xl:gap-30 justify-items-center mt-20'>

            <Carte className='xl:col-start-1 text-left'>
              <img src={Site_debut} alt='Photo du site de Make my lemonade' loading='lazy' className='rounded-t-xl h-65 w-200 object-top object-cover'/>

              <div className='absolute w-full top-0 my-2 px-2 flex items-center justify-between'>
                <Cadre variant={'Secondaire'}>{Traduction("Web", langue)}</Cadre>
                <Cadre variant={'dernier'}>
                  <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></span>
                  {Traduction("En cours", langue)}
                </Cadre>
              </div>

              <span className='inline-block m-4'>
                <h3 className='text-gray-900 dark:text-gray-100 text-2xl font-semibold'>Make My Lemonade</h3>
                <p className='text-gray-600 text-md tracking-widest'>{Traduction("SITE E-COMMERCE", langue)}</p>
              </span>

              <span className='text-gray-600 text-xl font-semibold inline-flex items-center mx-4'>{Traduction("Site e-commerce permettant de presenter les produits et de faciliter les achats en ligne.", langue)}</span>

              <div className='flex items-start flex-wrap gap-4 sm:flex-nowrap m-4'>
                <Cadre>HTML</Cadre>
                <Cadre>CSS</Cadre>
                <Cadre>JAVASCRIPT</Cadre>
                <Cadre>LARAVEL</Cadre>
              </div>

              <div className='w-full px-4'>
                <Lien href='https://collins-gaucher.github.io/Nouveau/' target='_blank' rel='noopener noreferrer' variant={'ternaire'} taille={'lg'}>
                  {Traduction("Voir le projet", langue)}
                  <ArrowRight/>
                </Lien>
              </div>
            </Carte>

            <Carte className='xl:col-start-2 text-left'>
              <img src={Site_voyage} alt='Photo du site de voyage' loading='lazy' className='rounded-t-xl h-65 w-200 object-top object-cover'/>

              <div className='absolute w-full top-0 my-2 px-2 flex items-center justify-between'>
                <Cadre variant={'Secondaire'}>{Traduction("Web", langue)}</Cadre>
                <Cadre variant={'dernier'}>{Traduction("Terminé", langue)}</Cadre>
              </div>

              <span className='inline-block m-4'>
                <h3 className='text-gray-900 dark:text-gray-100 text-2xl font-semibold'>Voyage Elite</h3>
                <p className='text-gray-600 text-md tracking-widest'>{Traduction("SITE VITRINE", langue)}</p>
              </span>

              <span className='text-gray-600 text-xl font-semibold inline-flex items-center mx-4'>{Traduction("Site vitrine permettant de présenter l'entreprise et de faciliter la prise de contact par e-mail.", langue)}</span>

              <div className='flex gap-4 m-4'>
                <Cadre>Typescript</Cadre>
                <Cadre>Tailwind</Cadre>
              </div>

              <div className='w-full px-4'>
                <Lien href='https://collins-gaucher.github.io/Voyage/' target='_blank' rel='noopener noreferrer' variant={'ternaire'} taille={'lg'}>
                  {Traduction("Voir le projet", langue)}
                  <ArrowRight/>
                </Lien>
              </div>
            </Carte>
          </div>
        </motion.section>
    </>
  )
}

export default Projet

// import React from 'react'
import { NavLink, useOutletContext } from 'react-router'
import Traduire from './Traduires'
import Typewriter from 'typewriter-effect'
import { ArrowRight, ArrowRightIcon, Check, Mail, MapPin, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Photo_code from '../assets/Photo-code.png'
import { useInView } from 'react-intersection-observer'
import { Carte } from '../UI/Carte'
import Site_voyage from '../assets/Site-voyage.png'
import Site_debut from '../assets/Site-debut.png'
import { Cadre } from '../UI/Cadre'
import { A } from '../UI/A'
import { Lien } from '../UI/Lien'

// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

// Definition d'un tableau de mot pour effacer et afficher de maniere repetitive et infini 
const competences = [
  "Développeur Web Full Stack",
  "Full Stack Web Developer",
  "Apprenant Data Analyste",
  "Data Analysts Learner",
  "Apprenant Intelligence Artificielle",
  "Artificial Intelligence Learner"
]

const Accueil = () => {
  // Recuperation de la langue 
  const {langue} = useOutletContext<ContexteType>()

  // Activer l'animation motion si l'ecran est a la section 2 
  const [ref, Voir] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })
   // Activer l'animation motion si l'ecran est a la section 3
  const [refe, Voire] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })
   // Activer l'animation motion si l'ecran est a la section 4
  const [refer, Voiret] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })

  return (
    <>
      {/* Premiere section  */}
      <section 
        className='min-h-[calc(100vh-100px)] w-full flex items-center justify-center gap-4 font-semibold
        bg-radial from-blue-300 to-white dark:from-blue-900/50 dark:to-gray-950/90 px-4 overflow-x-hidden
        '>

        {/* Premiere div qui represente le segment de la description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col items-center gap-4 xl:items-baseline-last'
        >

          {/* Texte en vert */}
          <Cadre variant={'dispo'}>
            {/* Span qui pulse  */}
            <span className='h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse'></span>
            <p><Traduire lang={langue}>OUVERT AU TRAVAIL</Traduire></p>
          </Cadre>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-gray-600 text-3xl'
          >
            <Traduire lang={langue}>Bonjour, je suis</Traduire>
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*2 }}
            className="text-7xl font-bold tracking-wider bg-linear-to-r from-blue-600 via-blue-900 to-indigo-700 bg-clip-text text-transparent dark:via-white dark:to-blue-700 "
          >
            Collins.
          </motion.h1>

          {/* Span qui poret les mots qui s'ecrive et s'efface automatiquement */}
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*3 }}
            className='text-3xl text-blue-600'
          >
            <Typewriter options={{
              strings: competences,
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70
            }}/>
          </motion.span>

          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*4 }}
            className='text-gray-500 text-xl xl:w-130  text-center xl:text-left'
          >
            <Traduire lang={langue}>Je transforme les idées en solutions digitales modernes, utiles et performantes.</Traduire>
          </motion.span>

          {/* Div des boutons  */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*5 }}
            className="flex flex-col items-center gap-4 mt-4 sm:flex-row"
          >
            <A taille={'lg'} to="/projet"><Traduire lang={langue}>Voir mes projets</Traduire><ArrowRight/></A>
            <A variant={'secondaire'} taille={'lg'} to="/contact"><Traduire lang={langue}>Me contacter</Traduire></A>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*6 }}
            className="flex items-center gap-4 mt-4"
          >
            <span className=''>
              <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>10+</p>
              <p className='text-gray-600 text-sm'><Traduire lang={langue}>Projets</Traduire></p>
            </span>
            <span className='h-10 w-px bg-gray-800 dark:bg-gray-300 mx-4 shrink-0'></span>
            <span className=''>
              <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>3+</p>
              <p className='text-gray-600 text-sm'><Traduire lang={langue}>Années</Traduire></p>
            </span>
            <span className='h-10 w-px bg-gray-800 dark:bg-gray-300 mx-4 shrink-0'></span>
            <span className=''>
              <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>100%</p>
              <p className='text-gray-600 text-sm'><Traduire lang={langue}>Satisfaction</Traduire></p>
            </span>
          </motion.div>
        </motion.div>

        {/* Deuxieme div qui represente un screen d'un bout de code */}
        <div className='hidden relative py-5 pb-10 px-10 xl:block'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*3 }}
            className='p-6 bg-gray-100 shadow-2xl rounded-2xl border dark:bg-transparent dark:border-gray-800 border-white flex flex-col items-center justify-center'
          >
            <img src={Photo_code} alt="Photo d'un bout de code de mes competences" className='rounded-xl w-80' loading='lazy'/>
            <div className='flex items-center gap-4 mt-2'>
              <Cadre>React</Cadre>
              <Cadre>Typescript</Cadre>
              <Cadre>Tailwind</Cadre>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*5 }}
            className={`absolute flex items-center gap-2 px-4 py-3 bg-gray-100 shadow-2xl rounded-xl top-0 -left-5 border dark:bg-blue-950/50 dark:border-gray-800 border-white`}
          >
            <div className='h-7 w-7 bg-green-600 dark:bg-green-500 rounded-lg flex items-center-safe justify-center'><Check className='text-gray-900 dark:text-gray-200' size={20}/></div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-950 dark:text-gray-200 leading-3'><Traduire lang={langue}>Projects Délivré</Traduire></span>
              <span className='text-sm text-gray-500'><Traduire lang={langue}>A l'heure & dans le budget</Traduire></span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2*5 }}
            className={`absolute flex items-center gap-2 px-4 py-3 bg-gray-100 shadow-2xl rounded-xl bottom-0 -right-5 border dark:bg-blue-950/50 dark:border-gray-800 border-white`}
          >
            <div className='h-7 w-7 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center-safe justify-center'><Check className='text-gray-600 bg-black rounded-full dark:text-purple-500 dark:bg-gray-100' size={15}/></div>
            <div className='flex flex-col'>
              <span className='text-sm text-gray-950 dark:text-gray-200 leading-3'><Traduire lang={langue}>Client Satisfait</Traduire></span>
              <span className='text-sm text-gray-500'><Traduire lang={langue}>Avis 5 étoiles</Traduire></span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Deuxieme section  */}
      <section  ref={ref}  
        className='w-full border-y border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-950/90 py-15 flex flex-col gap-8 xl:flex-row justify-center items-center xl:gap-30 overflow-x-hidden'
      >
        <motion.div
          initial={{opacity:0, y:20}}
          animate={Voir ? {opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='text-center'
        >
          <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>10+</p>
          <p className='text-gray-600 text-lg'><Traduire lang={langue}>PROJETS REALISES</Traduire></p>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:20}}
          animate={Voir ? {opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='text-center'
        >
          <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>3</p>
          <p className='text-gray-600 text-lg'><Traduire lang={langue}>ANS D'EXPERIENCE</Traduire></p>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:20}}
          animate={Voir ? {opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='text-center'
        >
          <p className='text-4xl text-blue-800 dark:text-gray-300 font-bold'>Douala</p>
          <p className='text-gray-600 text-lg'><Traduire lang={langue}>CAMEROUN</Traduire></p>
        </motion.div>

        <motion.div
          initial={{opacity:0, y:20}}
          animate={Voir ? {opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='flex flex-col items-center justify-center'
        >
          <div className='flex items-baseline gap-2'>
            <div className='h-3 w-3 rounded-full bg-green-600 dark:bg-green-500 animate-pulse'></div>
            <p className='text-3xl text-green-600 dark:text-green-500 font-bold'><Traduire lang={langue}>Ouvert au travail</Traduire></p>
          </div>
          <span className='text-gray-600 text-lg flex items-baseline gap-2'><Traduire lang={langue}>DISPONIBLE</Traduire><Check size={15} className='text-gray-200 bg-green-600 dark:bg-green-500'/></span>
        </motion.div>
      </section>

      {/* Troisieme section  */}
      <section ref={refe}
        className='min-h-[calc(100vh-100px)] w-full bg-radial dark:from-blue-900/50 dark:to-gray-950/90 overflow-hidden px-8 md:px-40'
      >
        <motion.div 
          initial={{opacity:0, y:20}}
          animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='flex flex-col gap-6 md:flex-row md:justify-between translate-y-20 mb-15'
        >

          {/* Titre de la section  */}
          <h2 className='text-gray-950 dark:text-gray-100 font-bold text-4xl'><Traduire lang={langue}>Projets en vedette</Traduire></h2>
          <NavLink to="/projet" end className={`text-blue-600 flex items-center gap-1 font-semibold text-xl xl:text-lg`}>
            <Traduire lang={langue}>Voir tous les projets</Traduire>
            <ArrowRight className='text-blue-600' strokeWidth={1}/>
          </NavLink>
        </motion.div>

        {/* Conteneur des different carte des projets */}
        <motion.div 
          initial={{opacity:0, y:20}}
          animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}}
          className='grid grid-col-1 xl:grid-cols-2 xl:gap-30 justify-items-center translate-y-20 pb-30 sm:pb-30 xl:pb-0'
        >

          <Carte className='xl:col-start-1'>
            <img src={Site_debut} alt='Photo du site de Make my lemonade' loading='lazy' className='rounded-t-xl h-65 w-200 object-top object-cover'/>

            <div className='absolute w-full top-0 my-2 px-2 flex items-center justify-between'>
              <Cadre variant={'Secondaire'}><Traduire lang={langue}>Web</Traduire></Cadre>
              <Cadre variant={'dernier'}>
                <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></span>
                <Traduire lang={langue}>En cours</Traduire>
              </Cadre>
            </div>

            <span className='inline-block items-center m-4'>
              <h3 className='text-gray-900 dark:text-gray-100 text-2xl font-semibold'>Make My Lemonade</h3>
              <p className='text-gray-600 text-md tracking-widest'><Traduire lang={langue}>SITE E-COMMERCE</Traduire></p>
            </span>

            <span className='text-gray-600 text-xl font-semibold inline-flex items-center mx-4'><Traduire lang={langue}>Site e-commerce permettant de presenter les produits et de faciliter les achats en ligne.</Traduire></span>

            <div className='flex items-start flex-wrap gap-4 sm:flex-nowrap m-4'>
              <Cadre>HTML</Cadre>
              <Cadre>CSS</Cadre>
              <Cadre>JAVASCRIPT</Cadre>
              <Cadre>LARAVEL</Cadre>
            </div>

            <div className='w-full px-4'>
              <Lien href='https://collins-gaucher.github.io/Nouveau/' target='_blank' rel='noopener noreferrer' variant={'ternaire'} taille={'lg'}>
                <Traduire lang={langue}>Voir le projet</Traduire>
                <ArrowRight/>
              </Lien>
            </div>
          </Carte>

          <Carte className='xl:col-start-2'>
            <img src={Site_voyage} alt='Photo du site de voyage' loading='lazy' className='rounded-t-xl h-65 w-200 object-top object-cover'/>

            <div className='absolute w-full top-0 my-2 px-2 flex items-center justify-between'>
              <Cadre variant={'Secondaire'}><Traduire lang={langue}>Web</Traduire></Cadre>
              <Cadre variant={'dernier'}><Traduire lang={langue}>Terminé</Traduire></Cadre>
            </div>

            <span className='inline-block items-center m-4'>
              <h3 className='text-gray-900 dark:text-gray-100 text-2xl font-semibold'>Voyage Elite</h3>
              <p className='text-gray-600 text-md tracking-widest'><Traduire lang={langue}>SITE VITRINE</Traduire></p>
            </span>

            <span className='text-gray-600 text-xl font-semibold inline-flex items-center mx-4'><Traduire lang={langue}>Site vitrine permettant de présenter l'entreprise et de faciliter la prise de contact par e-mail.</Traduire></span>

            <div className='flex gap-4 m-4'>
              <Cadre>Typescript</Cadre>
              <Cadre>Tailwind</Cadre>
            </div>

            <div className='w-full px-4'>
              <Lien href='https://collins-gaucher.github.io/Voyage/' target='_blank' rel='noopener noreferrer' variant={'ternaire'} taille={'lg'}>
                <Traduire lang={langue}>Voir le projet</Traduire>
                <ArrowRight/>
              </Lien>
            </div>
          </Carte>
        </motion.div>
      </section>

      <motion.section ref={refer}
        initial={{opacity:0, y:20}}
        animate={Voiret ?{opacity:1, y:0} : {opacity:0, y:20}}
        transition={{duration: 0.8}}
        className='w-full flex flex-col justify-center items-center gap-8 py-25 border-y border-gray-300 dark:border-gray-700'
      >
        <Cadre variant={'dispo'}>
          <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></span>
          <p className='text-lg'><Traduire lang={langue}>Disponible pour de nouveaux projets</Traduire></p>
        </Cadre>

        <div className='flex items-center gap-2 text-gray-600'>
            Collins
            <div className='h-1 w-1 rounded-full bg-gray-600'></div>
            <Traduire lang={langue}>
            Douala, Cameroun
          </Traduire>
        </div>

        <span className='text-gray-900 dark:text-gray-100 text-4xl md:text-5xl font-bold text-center'>
          <p><Traduire lang={langue}>Vous avez un projet ?</Traduire></p>
        <p><Traduire lang={langue}>Parlons-en.</Traduire></p>
        </span>

        <span className='flex items-center justify-center flex-wrap text-center px-8 lg:w-200 font-semibold text-gray-600 text-lg'><Traduire lang={langue}>Creatif et logique, j'adore batir des systemes robustes et accessibles. Peu importe le projet web, je suis partant.</Traduire></span>

        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <A taille={'lg'} to="/contact" end className={`flex gap-2`}><Traduire lang={langue}>Me contacter</Traduire><ArrowRightIcon/></A>
          <Lien href={`mailto: collinsgaucher@gmail.com`} target='_blank' rel='noopener noreferrer' variant={'secondaire'} taille={'lg'}><Mail/><Traduire lang={langue}>collinsgaucher@gmail.com</Traduire></Lien>
        </div>

        <div className='text-gray-600 flex items-center gap-8 flex-wrap justify-center'>
          <div className='flex items-center gap-1'>
            <div className='h-2 w-2 rounded-full bg-green-600'></div>
            <Traduire lang={langue}>Disponible en freelance</Traduire>
          </div>

          <div className='flex items-center gap-1'>
            <Zap className='text-yellow-500'/>
            <Traduire lang={langue}>Répond sous 24h</Traduire>
          </div>

          <div className='flex items-center gap-1'>
            <MapPin className='text-red-600'/>
            <Traduire lang={langue}>A distance</Traduire>
            <div className='h-1 w-1 bg-gray-600 rounded-full mx-1'></div>
            Douala
          </div>
        </div>

      </motion.section>
    </>
  )
}

export default Accueil

 

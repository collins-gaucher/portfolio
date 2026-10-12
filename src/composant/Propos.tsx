// import React from 'react'
import Photo_Profil from '../assets/Photo-profil.jpg'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { A } from '../UI/A'
import { ArrowRight } from 'lucide-react'
import { useOutletContext } from 'react-router'
import { Traduction } from '../hooks/Traduction'

// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

const Propos = () => {
  // Activer l'animation motion sur la premiere section 
  const [ref, Voir] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })
   // Activer l'animation motion sur la deuxieme section
   const [refe, Voire] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })
   // Activer l'animation motion sur la troisieme section
   const [refer, Voirer] = useInView({
        triggerOnce: true,
        threshold: 0.2
   })

   // Récupère la langue passée par Outlet dans Layout.tsx
   const { langue } = useOutletContext<ContexteType>()

  return (
    <> 
        <motion.section 
          ref={ref}
          initial={{opacity:0, y:20}}
          animate={Voir ?{opacity:1, y:0} : {opacity:0, y:20}}
          transition={{duration: 0.8}} 
          className='px-12 overflow-hidden py-30 flex items-center justify-center'
        >

          <div className='w-full gap-8 flex flex-col xl:px-20 items-center xl:items-start md:w-350  xl:flex-row justify-center mx-auto'>

            {/* Conteneur qui en globe l'idententite  */}
          <div className='min-w-fit flex flex-col justify-center items-center gap-4 xl:items-start'>

            {/* Conteneur pour la photo de profil  */}
            <div className='relative'>

              {/* Image de la photo de profil */}
              <img src={Photo_Profil} alt="Photo de profil de collins" className='w-45 h-45 object-cover rounded-2xl shadow-2xl dark:shadow-blue-800'/>

              {/* Element qui est anime  */}
              <div className='z-2 absolute left-40 -bottom-1  border-gray-100 dark:border-gray-900 h-6 w-6 rounded-full bg-green-500 animate-ping'></div>

              {/* Element non anime  */}
              <div className='z-1 absolute left-39 -bottom-2 h-8 w-8 border-5 border-gray-100 dark:border-gray-900 rounded-full bg-green-500'></div>

            </div>

            {/* Declaration du prenom  */}
            <h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-widest'>COLLINS</h2>

            {/* Conteneur de la ville et du diplome  */}
            <div className='flex gap-2'>
              <Cadre variant={'profil'} taille={'lg'}>Douala</Cadre>
              <Cadre variant={'profil'} taille={'lg'}>{Traduction("Licence Génie Logiciel", langue)}</Cadre>
            </div>

            {/* Conteneur des liens de mes autres pages privees */}
            <div className='w-fit flex items-center gap-2'>
              <Lien variant={'reseau'} taille={'sm1'} href='https://www.linkedin.com/in/collins-lonfouo-naha-656utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='nonoreferrer'><FaLinkedinIn size={20}></FaLinkedinIn></Lien>
              <Lien variant={'reseau'} taille={'sm1'} href='https://github.com/collins-gaucher'><FaGithub size={20}></FaGithub></Lien>
            </div>

          </div>

          {/* Conteneur de ma desciption */}
          <div className='px-10 flex flex-col gap-8'>

            {/* Titre du poste  */}
            <h2 className='text-6xl font-bold text-gray-900 dark:text-gray-100 text-center'>{Traduction("Développeur Web Full Stack", langue)}</h2>

            {/* Bloc contenant une description de moi  */}
            <Cadre variant={'propos'} taille={'xl'}>
              <h3 className='font-bold text-blue-700 mb-4'>{Traduction("QUI SUIS-JE ?", langue)}</h3>
              <p>{Traduction("Titulaire d’une licence en technologie du génie logiciel, je suis un informaticien polyvalent passionné par le développement web et la conception de solutions numériques. Curieux et rigoureux, je m’investis dans la création d’interfaces modernes, intuitives et performantes, tout en développant continuellement mes compétences.", langue)}</p>
            </Cadre>

            {/* Bloc contenant ce qui m'anime  */}
            <Cadre variant={'propos'} taille={'lg'}>
              <h3 className='font-bold text-blue-700 mb-4'>{Traduction("CE QUI M'ANIME", langue)}</h3>
              <p className='italic'>{Traduction("Ce qui m’anime, c’est la passion de créer, d’apprendre et de transformer des idées en solutions numériques concrètes. J’aime relever des défis techniques, explorer de nouvelles technologies et concevoir des applications qui allient innovation, simplicité et efficacité. Chaque projet est pour moi une occasion de repousser mes limites, d’enrichir mes compétences et de contribuer à des solutions qui répondent à de véritables besoins.", langue)}</p>
            </Cadre>

          </div>
          </div>

        </motion.section>

        {/* Deuxieme section: mon parcours */}
        <section ref={refe} className='bg-radial from-blue-300 to-white dark:from-blue-900/50 dark:to-gray-950/90 p-30 flex items-center justify-center flex-col'>

          {/* Titre de la section  */}
          <motion.h2
            initial={{opacity:0, y:20}}
            animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
            transition={{duration: 0.8}}   
            className='text-gray-900 dark:text-gray-100 text-5xl font-bold'
          >
            {Traduction("Mon parcours", langue)}
          </motion.h2>

          {/* Conteneur du graphe de parcours pour ecran moyen et petit */}
          <div className='relative mt-20 flex flex-col gap-20 xl:hidden'>

            {/* Conteur du stage professionnel  */}
            <motion.div
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2}} 
              className='z-1 flex gap-8 xl:w-150'
            >

              {/* Div du rond */}
              <div className='h-8 min-w-8 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950/90'></div>

              {/* Conteneu du stage pro  */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 bg-transparent border-blue-500 dark:border-blue-500'>
                <p className='text-blue-600'>{Traduction("Stage Professionnel", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>GROUPE NJS (CEMA-VET)</h2>
                <p className='text-md'>{Traduction("Technicien support IT et gestion du parc informatique avec GLPI et Dolibarr ERP.", langue)}</p>
              </Cadre>

            </motion.div>

            {/* Conteneur academique  */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2*2}} 
              className='z-1 flex gap-8 xl:w-150'
            >

              {/* Div du rond */}
              <div className='h-8 min-w-8 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950/90'></div>

              {/* Contenu academique */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 bg-transparent border-blue-500 dark:border-blue-500'>
                <p className='text-blue-600'>{Traduction("Académique", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>{Traduction("LICENCE GENIE LOGICIEL", langue)}</h2>
                <p className='text-md'>{Traduction("Institut Universitaire du Golfe de Guinée, Douala. Formation en développement logiciel, algorithmique, bases de données et architecture applicative.", langue)}</p>
              </Cadre>

            </motion.div>

            {/* Conteneur formation */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2*3}} 
              className='z-1 flex gap-8 xl:w-150'
            >

              {/* Div rond  */}
              <div className='h-8 min-w-8 rounded-full border-4 border-green-700 bg-gray-100 dark:bg-gray-950/90'></div>

              {/* Contenu formation */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 border border-l-5 border-green-500 dark:border-green-500 bg-green-200/90 dark:bg-green-600/5'>
                <p className='text-blue-600'>{Traduction("Formation", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>PYTHON / DATA ANALYST / IA</h2>
                <p className='text-md'>{Traduction("Évolution vers l'analyse des données et la conception des solutions technologiques toujours plus pertinentes.", langue)}</p>
              </Cadre>

            </motion.div>

            {/* Div qui represente le trait du milieu */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8}} 
              className='z-0 absolute -top-4 left-3.5 h-280 sm:h-200 md:h-150 w-px bg-linear-to-b from-violet-600 via-violet-600/50 to-transparent'
            >
            </motion.div>

          </div>
          
          {/* Conteneur du graphe de parcours pour ecran large  */}
          <div className='relative w-300 mt-20 hidden flex-col px-4 items-end gap-20 xl:flex'>

            {/* Conteneur stage professionnel  */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2}} 
              className='z-1 flex gap-8 w-150'
            >

              {/* Div du rond */}
              <div className='h-8 min-w-8 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950/90'></div>

              {/* Contenu stage professionnel */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 bg-transparent border-blue-500 border-l dark:border-blue-500'>
                <p className='text-blue-600'>{Traduction("Stage Professionnel", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>GROUPE NJS (CEMA-VET)</h2>
                <p className='text-md'>{Traduction("Technicien support IT et gestion du parc informatique avec GLPI et Dolibarr ERP.", langue)}</p>
              </Cadre>

            </motion.div>

            {/* Conteneur academique */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2*2}} 
              className='z-1 flex gap-8 w-150 mr-auto'
            >

              {/* Contenu academique */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 bg-transparent border-l border-blue-500 dark:border-blue-500 text-right'>
                <p className='text-blue-600'>{Traduction("Académique", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>{Traduction("LICENCE GENIE LOGICIEL", langue)}</h2>
                <p className='text-md'>{Traduction("Institut Universitaire du Golfe de Guinée, Douala. Formation en développement logiciel, algorithmique, bases de données et architecture applicative.", langue)}</p>
              </Cadre>

              {/* Div du rond  */}
              <div className='h-8 min-w-8 rounded-full border-4 border-blue-700 bg-gray-100 dark:bg-gray-950/90'></div>

            </motion.div>

            {/* Conteneur formation  */}
            <motion.div
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8, delay: 0.2*3}}  
              className='z-1 flex gap-8 w-150'
            >

              {/* Div du rond  */}
              <div className='h-8 min-w-8 rounded-full border-4 border-green-700 bg-gray-100 dark:bg-gray-950/90'></div>

              {/* Contenu formation */}
              <Cadre variant={'propos'} taille={'xl'} className='w-full flex flex-col gap-4 border border-l border-green-500 dark:border-green-500 bg-green-200/90 dark:bg-green-600/10'>
                <p className='text-blue-600'>{Traduction("Formation", langue)}</p>
                <h2 className='text-2xl text-gray-900 dark:text-gray-100 font-bold'>PYTHON / DATA ANALYST / IA</h2>
                <p className='text-md'>{Traduction("Évolution vers l'analyse des données et la conception des solutions technologiques toujours plus pertinentes.", langue)}</p>
              </Cadre>

            </motion.div>

            {/* Div qui represente le trait du milieu */}
            <motion.div 
              initial={{opacity:0, y:20}}
              animate={Voire ?{opacity:1, y:0} : {opacity:0, y:20}}
              transition={{duration: 0.8}} 
              className='z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-200 w-0.5 bg-linear-to-b from-violet-600 via-violet-600/50 to-transparent'
            >
            </motion.div>

          </div>

        </section>

        {/* Troisieme et derniere section du main  */}
        <motion.section ref={refer}
        initial={{opacity:0, y:20}}
        animate={Voirer ?{opacity:1, y:0} : {opacity:0, y:20}}
        transition={{duration: 0.8}}
        className='w-full flex flex-col justify-center items-center gap-8 py-25 border-y border-gray-300 dark:border-gray-700'
      >

        <Cadre variant={'dispo'}>
          <span className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></span>
          <p className='text-lg'>{Traduction("Disponible pour de nouveaux projets", langue)}</p>
        </Cadre>

        <span className='text-gray-900 dark:text-gray-100 text-4xl md:text-5xl font-bold text-center'>
          <p>{Traduction("Envie de collaborer ?", langue)}</p>
        </span>

        <span className='flex items-center justify-center flex-wrap text-center px-8 lg:w-200 font-semibold text-gray-600 text-lg'>{Traduction("Que ce soit pour un projet, une idée ou juste discuter — je suis toujours ouverte à une bonne conversation.", langue)}</span>

        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
          <A taille={'lg'} to="/contact">{Traduction("Me contacter", langue)}<ArrowRight/></A>
          <A variant={'secondaire'} taille={'lg'} to="/projet">{Traduction("Voir mes projets", langue)}</A>
        </div>

      </motion.section>
    </>
  )
}

export default Propos

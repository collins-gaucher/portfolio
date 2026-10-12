import { Mail, MapPin, Phone } from 'lucide-react'
import Traduire from './Traduires'
import { useOutletContext } from 'react-router'
import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import z from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from "sonner"
import emailjs from '@emailjs/browser'
import { Traduction } from '../hooks/Traduction'
import { motion } from 'framer-motion'

// Definition du type de contexte transmis par Outlet 
interface ContexteType {
  langue: "fr" | "en"
}

const DonneForm = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.email("L'adresse e-mail n'est pas valide"),
   sujet: z.string()
    .min(1, "Veuillez faire un choix")
    .pipe(z.enum(["Projet web", "Collaboration", "Autre"])),
  message: z.string().optional()
})
export type DonneesFormulaire = z.input<typeof DonneForm>;
export type Donnees = z.output<typeof DonneForm>;

const Contact = () => {

  // Configurer le lien whatsap 
   const Whatsap = `https://wa.me/237658599369?text=${encodeURIComponent("Bonjour Monsieur Collins, je souhaite échanger sur un projet.")}`

  // Récupère la langue passée par Outlet dans Layout.tsx
  const { langue } = useOutletContext<ContexteType>()

  const {control, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<DonneesFormulaire, unknown, Donnees>({
    resolver: zodResolver(DonneForm),
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    }
  })

  async function onSubmit(donnee: Donnees) {
    try{
      // Simuler un délai pour l'envoi du formulaire
      await emailjs.send(
        'service_hq8sz4a',
        'template_4xxivld',
        {
          nom: donnee.nom,
          email: donnee.email,
          sujet: donnee.sujet,
          message: donnee.message
        },
        '50SeLIf_wMgp0jITW'
      )
      toast.success(Traduction("Message envoyé avec succès !", langue))
      reset()
    }
    catch (error) {
      console.error(error)
      toast.error(Traduction("Une erreur est survenue lors de l'envoie du mail. Veuillez réessayer.", langue))
    }
  }
  

  return (
    <>
        <motion.section 
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.8}}
          className='bg-radial from-blue-300 to-white dark:from-blue-900/50 dark:to-gray-950/90 px-4 py-30 md:px-6  xl:px-30'
        >
        
            <h2 className='text-6xl text-gray-900 text-center dark:text-gray-100 font-bold mb-25'>{Traduction("Contact", langue)}</h2>
          <div className='max-w-7xl sm:px-4 md:px-8 lg:px-30 mx-auto flex flex-col justify-center gap-8 xl:gap-15 xl:flex-row'>

            <div className='flex flex-col gap-8 min-w-full xl:min-w-lg'>
              <div className='border border-gray-400 dark:border-gray-800 bg-transparent flex flex-col gap-8 p-8 rounded-2xl'>
                <div className='flex items-center'>

                  <div className='w-12 h-12 rounded-xl text-blue-700 flex items-center justify-center border border-gray-300 dark:border-gray-800 bg-transparent dark:bg-blue-500/10'>
                    <Phone strokeWidth={1.5}/>
                  </div>
                  <div className='ml-4'>
                    <p className='text-gray-600 font-bold text-sm tracking-widest'><Traduire lang={langue}>TELEPHONE / WHATSAPP</Traduire></p>
                    <a href={Whatsap} target="_blank" rel="noopener noreferrer" aria-label="Contacter sur WhatsApp" className='font-semibold text-xl text-gray-900 dark:text-gray-400 hover:text-blue-600'>+237 658 599 369</a>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-xl text-blue-700 flex items-center justify-center border border-gray-300 dark:border-gray-800 bg-transparent dark:bg-blue-500/10'>
                    <Mail strokeWidth={1.5}/>
                  </div>
                  <div className='ml-4'>
                    <p className='text-gray-600 font-bold text-sm tracking-widest'><Traduire lang={langue}>EMAIL</Traduire></p>
                    <a href={`mailto: collinsgaucher@gmail.com`} target='_blank' rel='noopener noreferrer' className='font-semibold text-xl text-gray-900 dark:text-gray-400 hover:text-blue-600'>collinsgaucher@gmail.com</a>
                  </div>
                </div>

                <div className='flex items-center'>
                  <div className='w-12 h-12 rounded-xl text-blue-700 flex items-center justify-center border border-gray-300 dark:border-gray-800 bg-transparent dark:bg-blue-500/10'>
                    <MapPin strokeWidth={1.5}/>
                  </div>
                  <div className='ml-4'>
                    <p className='text-gray-600 font-bold text-sm tracking-widest'><Traduire lang={langue}>LOCALISATION</Traduire></p>
                    <p className='font-semibold text-xl text-gray-900 dark:text-gray-400'><Traduire lang={langue}>Douala, Cameroun</Traduire></p>
                  </div>
                </div>
                
              </div>

              {/* Texte en vert */}
              <Cadre variant={'dispo'} taille={'xl'} className='rounded-2xl bg-transparent dark:bg-green-500/10'>
                {/* Span qui pulse  */}
                <span className='h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse'></span>
                <p className='font-bold text-xl'><Traduire lang={langue}>Disponible pour des projets freelance</Traduire></p>
              </Cadre>

              {/* Conteneur des liens de mes autres pages privees */}
              <div className='w-fit flex items-center gap-2'>
                <Lien variant={'reseau'} taille={'sm1'} href='https://www.linkedin.com/in/collins-lonfouo-naha-656utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='nonoreferrer'><FaLinkedinIn size={20}></FaLinkedinIn></Lien>
                <Lien variant={'reseau'} taille={'sm1'} href='https://github.com/collins-gaucher'><FaGithub size={20}></FaGithub></Lien>
              </div>
            </div>

            {/* Formulaire  */}
            <form onSubmit={handleSubmit(onSubmit)} className='min-w-full xl:min-w-xl mx-auto p-8 bg-transparent rounded-2xl border border-gray-400 dark:border-gray-800 shadow-2xl'>
              <div className='mb-8'>
                <label htmlFor="nom complet" className="block text-gray-600 font-bold mb-2 tracking-widest"><Traduire lang={langue}>NOM COMPLET</Traduire></label>
                <Controller
                  name='nom'
                  control={control}
                  render={({field}) => (
                    <input
                      {...field}
                      id="nom"
                      type="text"
                      placeholder={Traduction("Votre nom", langue)}
                      className={`w-full px-5 py-5 border ${errors.nom ? 'border-red-500' : 'border-gray-400 dark:border-gray-800'} rounded-2xl focus:outline-none focus:border-blue-500 hover:border-blue-500 text-gray-900 dark:text-gray-100 font-medium text-xl` }
                    />
                  )}
                />
                {errors.nom?.message && <p className="text-red-500 text-sm mt-1">{Traduction(errors.nom.message, langue)}</p>}
              </div>

              <div className='mb-8'>
                <label htmlFor="email" className="block text-gray-600 font-bold mb-2 tracking-widest"><Traduire lang={langue}>EMAIL</Traduire></label>
                <Controller
                  name='email'
                  control={control}
                  render={({field}) => (
                    <input
                      {...field}
                      id="email"
                      type="mail"
                      placeholder={Traduction("Votre@email.com", langue)}
                      className={`w-full px-5 py-5 border ${errors.email ? 'border-red-500' : 'border-gray-400 dark:border-gray-800'} rounded-2xl focus:outline-none focus:border-blue-500 hover:border-blue-500 text-gray-900 dark:text-gray-100 font-medium text-xl` }
                    />
                  )}
                />
                {errors.email?.message && <p className="text-red-500 text-sm mt-1">{Traduction(errors.email.message, langue)}</p>}
              </div>

              <div className='mb-8'>
                <label htmlFor="sujet" className="block text-gray-600 font-bold mb-2 tracking-widest"><Traduire lang={langue}>SUJET</Traduire></label>
                <Controller
                  name='sujet'
                  control={control}
                  render={({field}) => (
                    <select
                      {...field}
                      id="select"
                      className={`w-full px-5 py-5 border ${errors.sujet ? 'border-red-500' : 'border-gray-400 dark:border-gray-800'} rounded-2xl focus:outline-none focus:border-blue-500 hover:border-blue-500 text-gray-900 dark:text-gray-100 font-medium text-xl bg-transparent appearance-none` }
                    >
                      <option value="">{Traduction("Choisir un sujet", langue)}</option>
                      <option value="Projet web">{Traduction("Projet web", langue)}</option>
                      <option value="Collaboration">{Traduction("Collaboration", langue)}</option>
                      <option value="Autre">{Traduction("Autre", langue)}</option>
                    </select>
                  )}
                />
                {errors.sujet?.message && <p className="text-red-500 text-sm mt-1">{Traduction(errors.sujet.message, langue)}</p>}
              </div>

              <div className='mb-8'>
                <label htmlFor="message" className="block text-gray-600 font-bold mb-2 tracking-widest"><Traduire lang={langue}>MESSAGE</Traduire></label>
                <Controller
                  name='message'
                  control={control}
                  render={({field}) => (
                    <textarea
                      {...field}
                      id="message"
                      placeholder={Traduction("Décrivez votre projet ou votre idée", langue)}
                      className="w-full h-60 px-5 py-5 border rounded-2xl focus:outline-none focus:border-blue-500 hover:border-blue-500 text-gray-900 dark:text-gray-100 font-medium text-xl border-gray-400 dark:border-gray-800"
                    ></textarea>
                  )}
                />
              </div>

              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl focus:outline-none focus:shadow-outline w-full" disabled={isSubmitting}>
                {Traduction("Envoyez votre message", langue)}
              </button>
            </form>

            
          </div>
        </motion.section>
    </>
  )
}

export default Contact

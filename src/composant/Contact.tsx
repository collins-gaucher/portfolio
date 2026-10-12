import { Mail, MapPin, Phone } from 'lucide-react'
import { useOutletContext } from 'react-router'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

import Traduire from './Traduires'
import { Cadre } from '../UI/Cadre'
import { Lien } from '../UI/Lien'
import { Traduction } from '../hooks/Traduction'

// Type du contexte transmis par Outlet
interface ContexteType {
  langue: 'fr' | 'en'
}

// Schéma de validation du formulaire
const DonneForm = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.email("L'adresse e-mail n'est pas valide"),
  sujet: z
    .string()
    .min(1, 'Veuillez faire un choix')
    .pipe(z.enum(['Projet web', 'Collaboration', 'Autre'])),
  message: z.string().optional(),
})

export type DonneesFormulaire = z.input<typeof DonneForm>
export type Donnees = z.output<typeof DonneForm>

const Contact = () => {
  // Lien WhatsApp
  const Whatsap = `https://wa.me/237658599369?text=${encodeURIComponent(
    'Bonjour Monsieur Collins, je souhaite échanger sur un projet.',
  )}`

  // Récupération de la langue
  const { langue } = useOutletContext<ContexteType>()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DonneesFormulaire, unknown, Donnees>({
    resolver: zodResolver(DonneForm),
    defaultValues: {
      nom: '',
      email: '',
      sujet: '',
      message: '',
    },
  })

  // Envoi du formulaire
  async function onSubmit(donnee: Donnees) {
    try {
      await emailjs.send(
        'service_hq8sz4a',
        'template_4xxivld',
        {
          nom: donnee.nom,
          email: donnee.email,
          sujet: donnee.sujet,
          message: donnee.message,
        },
        '50SeLIf_wMgp0jITW',
      )

      toast.success(
        Traduction('Message envoyé avec succès !', langue),
      )

      reset()
    } catch (error) {
      console.error(error)

      toast.error(
        Traduction(
          "Une erreur est survenue lors de l'envoie du mail. Veuillez réessayer.",
          langue,
        ),
      )
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden bg-radial from-blue-300 to-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24 xl:px-16 dark:from-blue-900/50 dark:to-gray-950/90"
    >
      {/* Titre */}
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:mb-16 sm:text-4xl md:text-5xl lg:mb-20 lg:text-6xl dark:text-gray-100">
        {Traduction('Contact', langue)}
      </h2>

      {/* Conteneur principal */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-8 lg:gap-10 xl:flex-row xl:gap-12">

        {/* Coordonnées */}
        <div className="flex min-w-0 w-full flex-col gap-6 sm:gap-8 xl:flex-1">

          {/* Carte des coordonnées */}
          <div className="flex flex-col gap-6 rounded-2xl border border-gray-400 bg-transparent p-4 sm:gap-8 sm:p-6 md:p-8 dark:border-gray-800">

            {/* Téléphone */}
            <div className="flex min-w-0 items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-transparent text-blue-700 sm:h-12 sm:w-12 dark:border-gray-800 dark:bg-blue-500/10">
                <Phone size={22} strokeWidth={1.5} />
              </div>

              <div className="ml-3 min-w-0 sm:ml-4">
                <p className="text-xs font-bold tracking-widest text-gray-600 sm:text-sm">
                  <Traduire lang={langue}>
                    TELEPHONE / WHATSAPP
                  </Traduire>
                </p>

                <a
                  href={Whatsap}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter sur WhatsApp"
                  className="wrap-break-word text-base font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:text-lg xl:text-xl dark:text-gray-400"
                >
                  +237 658 599 369
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex min-w-0 items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-transparent text-blue-700 sm:h-12 sm:w-12 dark:border-gray-800 dark:bg-blue-500/10">
                <Mail size={22} strokeWidth={1.5} />
              </div>

              <div className="ml-3 min-w-0 sm:ml-4">
                <p className="text-xs font-bold tracking-widest text-gray-600 sm:text-sm">
                  <Traduire lang={langue}>EMAIL</Traduire>
                </p>

                <a
                  href="mailto:collinsgaucher@gmail.com"
                  className="break-all text-base font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:text-lg xl:text-xl dark:text-gray-400"
                >
                  collinsgaucher@gmail.com
                </a>
              </div>
            </div>

            {/* Localisation */}
            <div className="flex min-w-0 items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-transparent text-blue-700 sm:h-12 sm:w-12 dark:border-gray-800 dark:bg-blue-500/10">
                <MapPin size={22} strokeWidth={1.5} />
              </div>

              <div className="ml-3 min-w-0 sm:ml-4">
                <p className="text-xs font-bold tracking-widest text-gray-600 sm:text-sm">
                  <Traduire lang={langue}>LOCALISATION</Traduire>
                </p>

                <p className="text-base font-semibold text-gray-900 sm:text-lg xl:text-xl dark:text-gray-400">
                  <Traduire lang={langue}>
                    Douala, Cameroun
                  </Traduire>
                </p>
              </div>
            </div>
          </div>

          {/* Disponibilité */}
          <Cadre
            variant="dispo"
            taille="xl"
            className="rounded-2xl bg-transparent dark:bg-green-500/10"
          >
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-500" />

            <p className="text-base font-bold sm:text-lg xl:text-xl">
              <Traduire lang={langue}>
                Disponible pour des projets freelance
              </Traduire>
            </p>
          </Cadre>

          {/* Réseaux sociaux */}
          <div className="flex w-fit items-center gap-3">
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

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto w-full min-w-0 rounded-2xl border border-gray-400 bg-transparent p-4 shadow-2xl sm:p-6 md:p-8 xl:flex-1 dark:border-gray-800"
        >
          {/* Nom complet */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="nom"
              className="mb-2 block text-sm font-bold tracking-widest text-gray-600 sm:text-base"
            >
              <Traduire lang={langue}>NOM COMPLET</Traduire>
            </label>

            <Controller
              name="nom"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="nom"
                  type="text"
                  autoComplete="name"
                  placeholder={Traduction('Votre nom', langue)}
                  aria-invalid={!!errors.nom}
                  className={`w-full rounded-2xl border px-4 py-4 text-base font-medium text-gray-900 transition-colors focus:border-blue-500 focus:outline-none sm:px-5 sm:py-5 sm:text-lg dark:text-gray-100 hover:border-blue-600 ${
                    errors.nom
                      ? 'border-red-500'
                      : 'border-gray-400 dark:border-gray-800'
                  }`}
                />
              )}
            />

            {errors.nom?.message && (
              <p className="mt-1 text-sm text-red-500">
                {Traduction(errors.nom.message, langue)}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold tracking-widest text-gray-600 sm:text-base"
            >
              <Traduire lang={langue}>EMAIL</Traduire>
            </label>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder={Traduction('Votre@email.com', langue)}
                  aria-invalid={!!errors.email}
                  className={`w-full rounded-2xl border px-4 py-4 text-base font-medium text-gray-900 transition-colors focus:border-blue-500 focus:outline-none sm:px-5 sm:py-5 sm:text-lg dark:text-gray-100 hover:border-blue-600 ${
                    errors.email
                      ? 'border-red-500'
                      : 'border-gray-400 dark:border-gray-800'
                  }`}
                />
              )}
            />

            {errors.email?.message && (
              <p className="mt-1 text-sm text-red-500">
                {Traduction(errors.email.message, langue)}
              </p>
            )}
          </div>

          {/* Sujet */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="sujet"
              className="mb-2 block text-sm font-bold tracking-widest text-gray-600 sm:text-base"
            >
              <Traduire lang={langue}>SUJET</Traduire>
            </label>

            <Controller
              name="sujet"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="sujet"
                  aria-invalid={!!errors.sujet}
                  className={`w-full appearance-none rounded-2xl border bg-transparent px-4 py-4 text-base font-medium text-gray-900 transition-colors focus:border-blue-500 focus:outline-none sm:px-5 sm:py-5 sm:text-lg dark:text-gray-100 hover:border-blue-600 ${
                    errors.sujet
                      ? 'border-red-500'
                      : 'border-gray-400 dark:border-gray-800'
                  }`}
                >
                  <option value="" className="text-gray-900">
                    {Traduction('Choisir un sujet', langue)}
                  </option>

                  <option value="Projet web" className="text-gray-900">
                    {Traduction('Projet web', langue)}
                  </option>

                  <option value="Collaboration" className="text-gray-900">
                    {Traduction('Collaboration', langue)}
                  </option>

                  <option value="Autre" className="text-gray-900">
                    {Traduction('Autre', langue)}
                  </option>
                </select>
              )}
            />

            {errors.sujet?.message && (
              <p className="mt-1 text-sm text-red-500">
                {Traduction(errors.sujet.message, langue)}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6 sm:mb-8">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-bold tracking-widest text-gray-600 sm:text-base"
            >
              <Traduire lang={langue}>MESSAGE</Traduire>
            </label>

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  id="message"
                  rows={6}
                  placeholder={Traduction(
                    'Décrivez votre projet ou votre idée',
                    langue,
                  )}
                  className="w-full resize-y rounded-2xl border border-gray-400 px-4 py-4 text-base font-medium text-gray-900 transition-colors focus:border-blue-500 focus:outline-none sm:px-5 sm:py-5 sm:text-lg dark:border-gray-800 dark:text-gray-100 hover:border-blue-600"
                />
              )}
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-blue-500 px-4 py-4 text-base font-bold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
          >
            {isSubmitting
              ? Traduction('Envoi en cours...', langue)
              : Traduction('Envoyez votre message', langue)}
          </button>
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
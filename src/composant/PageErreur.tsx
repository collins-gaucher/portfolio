import { Link } from 'react-router'
import { ArrowLeft, Home, SearchX } from 'lucide-react'
import { motion } from 'framer-motion'

const PageErreur = () => {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-radial from-blue-200/60 to-white px-4 py-16 sm:px-6 md:min-h-screen dark:from-blue-900/30 dark:to-gray-950">

      {/* Décoration d'arrière-plan */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Contenu */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center"
      >
        {/* Icône */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-600 sm:h-20 sm:w-20 dark:text-blue-400">
          <SearchX size={36} strokeWidth={1.5} />
        </div>

        {/* Code erreur */}
        <h1 className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-7xl font-extrabold tracking-tight text-transparent sm:text-8xl md:text-9xl">
          404
        </h1>

        {/* Titre */}
        <h2 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
          Page non trouvée
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-lg text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-400">
          Oups ! La page que vous recherchez n'existe pas,
          a été déplacée ou son adresse est incorrecte.
        </p>

        {/* Boutons */}
        <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Home size={19} />
            Retour à l'accueil
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-800 transition-colors duration-300 hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:text-gray-200 dark:hover:text-blue-400"
          >
            <ArrowLeft size={19} />
            Page précédente
          </button>
        </div>

        {/* Signature */}
        <p className="mt-12 text-sm font-medium text-gray-500 dark:text-gray-500">
          LNC <span className="text-blue-500">©</span> Collins
        </p>
      </motion.div>
    </section>
  )
}

export default PageErreur
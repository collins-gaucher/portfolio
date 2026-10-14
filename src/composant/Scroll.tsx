import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const Scroll = () => {
  const [visible, setVisible] = useState(false)

  // Afficher ou masquer le bouton selon le défilement
  useEffect(() => {
    const gererScroll = () => {
      setVisible(window.scrollY > 100)
    }

    // Vérifier la position initiale
    gererScroll()

    window.addEventListener('scroll', gererScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', gererScroll)
    }
  }, [])

  // Remonter en haut de la page
  const Remonter = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={Remonter}
      aria-label="Remonter en haut de la page"
      title="Retour en haut"
      className="
        fixed bottom-4 right-4 z-50
        flex h-11 w-11 items-center justify-center
        rounded-full border border-gray-400
        bg-gray-300/90 text-gray-700 shadow-lg
        transition-all duration-500
        hover:scale-110 hover:bg-blue-500 hover:text-white
        focus:outline-none focus:ring-2 focus:ring-blue-500
        focus:ring-offset-2
        sm:bottom-6 sm:right-6 sm:h-12 sm:w-12
        md:bottom-8 md:right-8 md:h-14 md:w-14
        dark:border-gray-700 dark:bg-gray-950/90
        dark:text-gray-300 dark:hover:bg-blue-600
        dark:hover:text-white
      "
    >
      <ArrowUp size={22} strokeWidth={1.7} />
    </button>
  )
}

export default Scroll
import { ArrowUp } from 'lucide-react'
import React from 'react'

const Scroll = () => {
    const [visible, setVisible] = React.useState(false)

    // Ecoute du scroll pour afficher/masquer le bouton 
    React.useEffect(() => {
        const gererScroll = () => {
            if(window.scrollY > 100) {
                setVisible(true)
            }else{
                setVisible(false)
            }
        }

        window.addEventListener("scroll", gererScroll)
        return () => window.removeEventListener("scroll", gererScroll)

    }, [])

    // Function de remontee fluide 
    const Remonter = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!visible) return null
  return (
    <button 
        onClick={Remonter}
        className='z-60 h-15 w-15 rounded-full bg-gray-300 dark:bg-gray-950 border border-gray-400 dark:border-gray-700 text-gray-500 dark:text-gray-600 flex items-center justify-center cursor-pointer fixed bottom-10 right-10 hover:scale-110 transition-all duration-400'
    >
        <ArrowUp/>
    </button>
  )
}

export default Scroll

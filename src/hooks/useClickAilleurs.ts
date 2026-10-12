import { useEffect } from 'react'

export function useClickAilleurs(
    ref: React.RefObject<HTMLElement | null>,
    handler: () => void,
    actif: boolean = true
) {
    useEffect(() => {
        if (!actif) return

        const listener = (event: MouseEvent | TouchEvent) => {
            const target = event.target as Node

            // Ne rien faire si le clic est à L'INTÉRIEUR du menu
            if (ref.current && ref.current.contains(target)) {
                return
            }

            // Ignorer les clics sur le bouton hamburger/toggle (classe CSS .btn-toggle-menu)
            if ((target as HTMLElement).closest('.btn-toggle-menu')) {
                return
            }

            handler()
        }

        // Utiliser 'click' ou 'mousedown'
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)

        return () => {
            document.removeEventListener('mousedown', listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, handler, actif])
}
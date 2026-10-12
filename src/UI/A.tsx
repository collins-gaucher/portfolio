import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../hooks/Utils'
import { NavLink, type NavLinkProps } from 'react-router'
const a = cva(
    "font-semibold flex items-center gap-2 rounded-xl transition-colors duration-800 cursor-pointer",{
        variants: {
            variant: {
                primaire: "text-white bg-blue-600 hover:bg-blue-700",
                secondaire: "text-black dark:text-white bg-gray-100 dark:bg-gray-950/40 dark:hover:bg-blue-900/30 border border-gray-300 dark:border-gray-700",
                ternaire: "w-full inline-flex justify-between border border-gray-300 dark:border-gray-700 text-lg text-blue-600 bg-gray-200 dark:bg-gray-950/90 hover:bg-gray-300 dark:hover:bg-blue-950/90 dark:hover:border-gray-700 dark:bg-transparent"
            },
            taille: {
                sm: "py-2 px-4",
                lg: "px-8 py-4"
            }
        },
        defaultVariants: {
            variant: "primaire",
            taille: "sm"
        }
    }
)

interface Props extends NavLinkProps, VariantProps<typeof a> {}

export function A ({to,variant, taille, className, ...props}: Props) {
    return <NavLink to={to} className={cn(a({variant, taille}), className)} {...props} />
}

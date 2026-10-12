import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../hooks/Utils'
import React from 'react'
const cadres = cva(
    "font-bold text-sm rounded-lg",{
        variants: {
            variant: {
                primaire: "bg-gray-200 text-blue-600 border border-gray-300 dark:bg-blue-950/40 dark:border-gray-700",
                Secondaire: "bg-gray-950/90 text-purple-600 border border-purple-600",
                tertiaire: "bg-gray-950/40 text-blue-800 border border-blue-800",
                dernier: "bg-gray-950/90 text-green-600 border border-green-600 flex items-center gap-1",
                dispo: "flex items-baseline rounded-full gap-2 border border-green-600 bg-gray-300/40 dark:bg-gray-950/40 text-green-600",
                profil: "bg-gray-200 text-gray-600 dark:bg-gray-950/40 border border-gray-300 dark:border-gray-600 rounded-full",
                propos: "font-semibold text-lg bg-transparent text-gray-700 dark:text-gray-400 border-l-6 border-y border-r border-l-blue-600 rounded-2xl border-y-gray-300 border-r-gray-300 dark:border-y-gray-700 dark:border-r-gray-700",
            },
            taille: {
                sm: "px-4 py-1",
                lg: "px-4 py-2",
                xl: "p-4"
            }
        },
        defaultVariants: {
            variant: "primaire",
            taille: "sm"
        }
    }
)

interface Props extends React.ComponentProps<'div'>, VariantProps<typeof cadres> {}

export function Cadre ({variant, taille, className, ...props}: Props) {
    return React.createElement('div', {className: cn(cadres({variant, taille}), className), ...props})
}

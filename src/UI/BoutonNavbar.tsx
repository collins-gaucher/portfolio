import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../hooks/Utils'
const bouton = cva(
    "flex justify-center items-center rounded-lg text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 transition-colors duration-800 cursor-pointer",{
        variants: {
            variant: {
                primaire: "border border-gray-300 dark:border-gray-700 bg-transparent "
            },
            taille: {
                sm: "py-2 px-2",
                lg: "h-10 p-6"
            }
        },
        defaultVariants: {
            variant: "primaire",
            taille: "sm"
        }
    }
)

interface Props extends React.ComponentProps<"button">, VariantProps<typeof bouton> {}

export function Bouton ({variant, taille, className, ...props}: Props) {
    return <button className={cn(bouton({variant, taille}), className)} {...props} />
}

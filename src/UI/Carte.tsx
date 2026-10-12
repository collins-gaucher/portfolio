import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../hooks/Utils'
const cartes = cva(
    "",{
        variants: {
            variant: {
                primaire: "relative max-w-200 sm:max-w-lg rounded-xl bg-transparent border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:-translate-y-2 dark:shadow-blue-500/90 hover:shadow-lg transition-all duration-800",
            },
            taille: {
                sm: "pb-4 my-2",
            }
        },
        defaultVariants: {
            variant: "primaire",
            taille: "sm"
        }
    }
)

interface Props extends React.ComponentProps<"div">, VariantProps<typeof cartes> {}

export function Carte ({variant, taille, className, ...props}: Props) {
    return <div className={cn(cartes({variant, taille}), className)} {...props} />
}

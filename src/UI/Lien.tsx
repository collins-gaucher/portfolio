import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../hooks/Utils'
const liens = cva(
    "font-semibold flex items-center gap-2 rounded-xl transition-colors duration-800 cursor-pointer",{
        variants: {
            variant: {
                primaire: "text-white bg-blue-600 hover:bg-blue-700",
                secondaire: "text-black dark:text-white bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700",
                ternaire: "w-full inline-flex justify-between border border-gray-300 dark:border-gray-700 text-lg text-blue-600 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-blue-950/40 dark:hover:border-gray-700 dark:bg-transparent",
                reseau: "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-gray-200 border border-gray-300 dark:border-gray-700 bg-transparent "
            },
            taille: {
                sm: "py-2 px-4",
                lg: "px-8 py-4",
                sm1: "py-3 px-3"
            }
        },
        defaultVariants: {
            variant: "primaire",
            taille: "sm"
        }
    }
)

interface Props extends React.ComponentProps<"a">, VariantProps<typeof liens> {}

export function Lien ({variant, taille, className, ...props}: Props) {
    return <a className={cn(liens({variant, taille}), className)} {...props} />
}

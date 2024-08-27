import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

twMerge (
    'text-red',
    'bg-blue'
)
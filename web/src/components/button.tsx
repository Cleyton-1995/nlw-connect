import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
      )}
      {...props}
    />
  )
}

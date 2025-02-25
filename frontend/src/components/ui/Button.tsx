import React from 'react'
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/utils/util';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
    'flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants: {
            variant: {
                primary: 'bg-white text-primary-foreground shadow-sm hover:bg-gray-200',
                secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
            },
            size: {
                default: 'h-7 px-2 py-2',
                sm: 'h-7 px-2',
                lg: 'h-11 px-8',
                icon: 'h-8 w-10',
            },
            defaultVariants: {
                variant: 'default',
                size: 'default',
            },
        },
        compoundVariants: [
            {
                variant: 'primary',
                size: 'sm',
                className: 'h-9 px-3',
            },
        ],
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
);



interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    size?: 'default' | 'sm' | 'lg' | 'icon'
    className?: string
    isLoading?: boolean
    disabled?: boolean
    icon?: React.ReactNode
    iconPosition?: 'left' | 'right'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, isLoading, disabled, children, icon, iconPosition = 'right', ...props }, ref) => {
    return (
       <button
        className={cn(buttonVariants({ variant: variant as 'primary' | 'secondary', size: size as 'default' | 'sm' | 'lg' | 'icon', className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
       >
        {
            isLoading && <Loader2 className="h-4 w-4 animate-spin" />
        }
        {
           !isLoading && icon && iconPosition === 'left' && icon
        }
        {
            !isLoading && icon && iconPosition === 'right' && icon
        }
       </button>
    )
})

Button.displayName = 'Button'

export default Button
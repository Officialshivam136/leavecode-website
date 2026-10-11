import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: 'sm' | 'default' | 'wide' | 'full';
}

export function Container({
  as: Component = 'div',
  size = 'default',
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  spacing?: 'sm' | 'default' | 'lg' | 'none';
}

export function Section({
  as: Component = 'section',
  spacing = 'default',
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-6 md:py-8',
    default: 'py-10 md:py-14',
    lg: 'py-14 md:py-18',
  };

  return (
    <Component className={cn('relative w-full', spacingClasses[spacing], className)} {...props}>
      {children}
    </Component>
  );
}

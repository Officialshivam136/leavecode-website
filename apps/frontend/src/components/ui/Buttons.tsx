import React from 'react';
import Link from 'next/link';
import { ArrowRight, Loader2 } from 'lucide-react';
import { cn } from './Container';

interface BaseButtonProps {
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export interface ButtonAsButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

export interface ButtonAsLinkProps
  extends BaseButtonProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const sizeStyles = {
  sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
  lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
};

export const PrimaryButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      size = 'md',
      isLoading = false,
      icon,
      iconPosition = 'right',
      className,
      children,
      disabled,
      ...rest
    } = props;

    const baseClasses = cn(
      'inline-flex items-center justify-center font-display transition-all duration-200 select-none cursor-pointer',
      'bg-brand-primary hover:bg-brand-hover text-white shadow-glow-sm hover:shadow-glow-lg',
      'border border-brand-light/30 active:scale-[0.98]',
      'focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          iconPosition === 'left' && icon
        )}
        <span>{children}</span>
        {!isLoading && iconPosition === 'right' && (icon || <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />)}
      </>
    );

    if (rest.href !== undefined) {
      return (
        <Link
          href={rest.href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={cn(baseClasses, 'group')}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={cn(baseClasses, 'group')}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
PrimaryButton.displayName = 'PrimaryButton';

export const SecondaryButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      size = 'md',
      isLoading = false,
      icon,
      iconPosition = 'right',
      className,
      children,
      disabled,
      ...rest
    } = props;

    const baseClasses = cn(
      'inline-flex items-center justify-center font-display transition-all duration-200 select-none cursor-pointer',
      'bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-white',
      'border border-surface-border hover:border-brand-light/40 backdrop-blur-sm',
      'active:scale-[0.98]',
      'focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          iconPosition === 'left' && icon
        )}
        <span>{children}</span>
        {!isLoading && iconPosition === 'right' && icon}
      </>
    );

    if (rest.href !== undefined) {
      return (
        <Link
          href={rest.href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={cn(baseClasses, 'group')}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        disabled={disabled || isLoading}
        className={cn(baseClasses, 'group')}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);
SecondaryButton.displayName = 'SecondaryButton';

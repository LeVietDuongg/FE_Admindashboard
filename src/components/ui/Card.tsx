'use client';

import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('rounded-xl border border-gray-200 bg-white shadow-sm', className)}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return (
    <div className={clsx('flex flex-col space-y-1.5 p-6', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <h3 className={clsx('text-2xl font-semibold leading-none tracking-tight', className)}>
      {children}
    </h3>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent = ({ children, className }: CardContentProps) => {
  return (
    <div className={clsx('p-6', className)}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };

import { cn } from './utils';

export function buttonVariants({ variant }: { variant?: string } = {}) {
  const baseClasses = 'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  
  switch (variant) {
    case 'outline':
      return cn(baseClasses, 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50');
    default:
      return cn(baseClasses, 'bg-primary text-white hover:bg-primary-dark');
  }
}

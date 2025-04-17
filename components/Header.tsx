import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  backButton: {
    href: string;
    label: string;
  };
}

export function Header({ backButton }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center text-primary">
          <Shield className="h-6 w-6" />
          <span className="font-bold text-lg">LLM Safety Simulator</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href={backButton.href} className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> {backButton.label}
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import { Shield } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  backButton: {
    href: string;
    label: string;
  };
}

export function Layout({ children, backButton }: LayoutProps) {
  return (
    <>
      <Header backButton={backButton} />
      <main className="flex-1 container py-10">{children}</main>
    </>
  );
}

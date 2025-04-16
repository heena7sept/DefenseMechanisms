import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">LLM Safety Simulator</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

          <div className="prose prose-sm">
            <p>Last updated: April 13, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              Welcome to the LLM Safety Simulator ("we," "our," or "us"). By accessing or using our educational platform, you agree to be bound by these Terms of Service ("Terms").
            </p>

            <h2>2. Educational Purpose</h2>
            <p>
              The LLM Safety Simulator is designed exclusively for educational and research purposes. The platform demonstrates potential vulnerabilities in language models to
              promote understanding and development of robust safety measures.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>You agree to use the LLM Safety Simulator only for its intended educational purpose. You must not:</p>
            <ul>
              <li>Use techniques learned from the simulator to exploit vulnerabilities in production AI systems</li>
              <li>Attempt to bypass safety measures in real-world applications</li>
              <li>Share or distribute attack sequences with the intent to cause harm</li>
              <li>Use the simulator for any illegal or unethical purposes</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the LLM Safety Simulator, including but not limited to text, graphics, logos, and code, are owned by us and are protected
              by intellectual property laws.
            </p>

            <h2>5. Disclaimer</h2>
            <p>The LLM Safety Simulator is provided "as is" without warranties of any kind. We do not guarantee that the simulator will be error-free or uninterrupted.</p>

            <h2>6. Limitation of Liability</h2>
            <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the simulator.</p>

            <h2>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the simulator after such modifications constitutes your acceptance of the revised Terms.
            </p>

            <h2>8. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at support@llmsafetysimulator.edu.</p>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {new Date().getFullYear()} LLM Safety Simulator. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

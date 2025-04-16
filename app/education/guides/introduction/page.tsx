import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

export default function IntroductionToLLMSafetyPage() {
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
              <Link href="/education" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Education
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Introduction to LLM Safety</h1>
            <p className="text-muted-foreground mt-2">A beginner-friendly guide to understanding the importance of safety in language models</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-medium">Educational Purpose Notice</h3>
              <p className="text-sm mt-1">This page introduces essential safety concepts for those new to working with or using large language models.</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>What is LLM Safety?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                LLM safety refers to the practices, technologies, and principles that ensure large language models operate in ways that are ethical, reliable, and aligned with
                human values. It's a growing area of focus as these models are used in increasingly sensitive and impactful settings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Why Safety Matters</CardTitle>
              <CardDescription>Understanding the risks and responsibilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Preventing Harmful Outputs',
                    description: 'Avoiding offensive, misleading, or dangerous content generation.',
                  },
                  {
                    title: 'Building User Trust',
                    description: 'Helping users feel confident and secure when interacting with AI systems.',
                  },
                  {
                    title: 'Complying with Regulations',
                    description: 'Adhering to laws and industry standards that govern AI usage.',
                  },
                ].map((reason, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Safety Areas</CardTitle>
              <CardDescription>Major concerns that safety work aims to address</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Bias and Fairness',
                    description: 'Minimizing harmful stereotypes or unfair treatment in generated outputs.',
                  },
                  {
                    title: 'Robustness and Reliability',
                    description: 'Ensuring the model behaves predictably and can resist manipulation.',
                  },
                  {
                    title: 'Privacy and Security',
                    description: 'Protecting user data and avoiding information leakage.',
                  },
                ].map((area, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {new Date().getFullYear()} LLM Safety Simulator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

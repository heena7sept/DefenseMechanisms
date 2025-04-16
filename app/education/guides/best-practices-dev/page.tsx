import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

export default function DeveloperBestPracticesPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Best Practices for Developers</h1>
            <p className="text-muted-foreground mt-2">Practical guidelines for implementing safe LLM applications</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-medium">Educational Purpose Notice</h3>
              <p className="text-sm mt-1">
                This material is provided for educational purposes to support responsible AI development. Do not use this knowledge to create or deploy unsafe systems.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Core principles for safe LLM development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When developing applications using LLMs, safety should be a core design consideration. Developers must proactively anticipate misuse, ensure clarity in outputs, and
                respect user privacy and well-being.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Best Practices</CardTitle>
              <CardDescription>Actions developers can take to enhance safety</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Prompt Guardrails',
                    description: 'Design prompts that discourage unsafe behavior and encourage transparency.',
                  },
                  {
                    title: 'Input Sanitization',
                    description: 'Always sanitize and validate user inputs to avoid prompt injection or harmful patterns.',
                  },
                  {
                    title: 'Output Filtering',
                    description: 'Use post-processing filters or moderation tools to detect and block unsafe responses.',
                  },
                  {
                    title: 'User Feedback Loops',
                    description: 'Implement easy ways for users to report issues and guide future safety improvements.',
                  },
                  {
                    title: 'Explainability Tools',
                    description: 'Provide contextual explanations when needed to help users interpret LLM responses safely.',
                  },
                ].map((practice, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">{practice.title}</h3>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Developer Ethics</CardTitle>
              <CardDescription>Upholding responsibility in LLM deployment</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Developers play a key role in shaping the safety profile of AI systems. Ethical development includes documenting limitations, warning users about misuse, and
                collaborating with safety researchers and impacted communities.
              </p>
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

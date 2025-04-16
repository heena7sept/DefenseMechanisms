import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

export default function SafetyMechanismsPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Safety Mechanisms Explained</h1>
            <p className="text-muted-foreground mt-2">A detailed look at the various safety mechanisms implemented in modern LLMs</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-medium">Educational Purpose Notice</h3>
              <p className="text-sm mt-1">This material aims to increase transparency around AI safety features. It is not intended to reveal or exploit vulnerabilities.</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>What safety mechanisms are and why they matter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Large language models are equipped with various safety systems designed to prevent harmful, misleading, or unethical outputs. These mechanisms are essential to
                reduce risks, build trust, and guide responsible AI deployment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Safety Mechanisms</CardTitle>
              <CardDescription>Common methods used to protect users and outputs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Content Filtering',
                    description: 'Blocking or flagging outputs that contain unsafe or inappropriate material.',
                  },
                  {
                    title: 'Instruction Tuning',
                    description: 'Training the model on helpful, harmless, and honest behaviors through carefully curated data.',
                  },
                  {
                    title: 'Reinforcement Learning from Human Feedback (RLHF)',
                    description: 'Aligning model responses with human values using feedback from real users and evaluators.',
                  },
                  {
                    title: 'System-Level Guards',
                    description: 'External rules or constraints imposed by the application hosting the model, such as API filters.',
                  },
                ].map((mechanism, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">{mechanism.title}</h3>
                    <p className="text-sm text-muted-foreground">{mechanism.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges and Limitations</CardTitle>
              <CardDescription>Understanding current safety trade-offs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  {
                    title: 'Overblocking',
                    description: 'Safety filters may block legitimate and harmless content, limiting usability.',
                  },
                  {
                    title: 'False Negatives',
                    description: 'Not all unsafe content is detected, especially in nuanced or adversarial prompts.',
                  },
                  {
                    title: 'Context Sensitivity',
                    description: 'Safety mechanisms may struggle to understand intent or context in long, multi-turn exchanges.',
                  },
                ].map((challenge, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-1">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
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

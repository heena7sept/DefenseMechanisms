import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function DeveloperBestPracticesPage() {
  return (
    <Layout backButton={{ href: '/#education', label: 'Back to Home' }}>
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
    </Layout>
  );
}

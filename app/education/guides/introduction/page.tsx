import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function IntroductionToLLMSafetyPage() {
  return (
    <Layout backButton={{ href: '/#education', label: 'Back to Home' }}>
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
              LLM safety refers to the practices, technologies, and principles that ensure large language models operate in ways that are ethical, reliable, and aligned with human
              values. It's a growing area of focus as these models are used in increasingly sensitive and impactful settings.
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
    </Layout>
  );
}

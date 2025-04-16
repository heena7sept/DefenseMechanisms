import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function EthicalConsiderationsPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ethical Considerations in AI Safety</h1>
          <p className="text-muted-foreground mt-2">Exploring the ethical dimensions of AI safety research and implementation</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium">Educational Purpose Notice</h3>
            <p className="text-sm mt-1">
              This material is provided for educational purposes to encourage thoughtful, ethical development and use of AI technologies. It is not intended to justify unsafe or
              unethical practices.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Why ethics matter in AI safety</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Ethical considerations are foundational to building trustworthy AI. Beyond technical challenges, developers and researchers must weigh how their models may affect
              users, amplify biases, or be misused. Proactive ethics help prevent unintended harm and promote beneficial outcomes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Core Ethical Issues</CardTitle>
            <CardDescription>Important themes in responsible AI research</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Bias and Fairness',
                  description: 'Identify and mitigate biased outputs that may marginalize or disadvantage users.',
                },
                {
                  title: 'Transparency and Explainability',
                  description: 'Ensure users understand model behavior and potential limitations.',
                },
                {
                  title: 'Privacy and Consent',
                  description: 'Respect data privacy and obtain proper consent when using sensitive information.',
                },
                {
                  title: 'Accountability',
                  description: 'Define responsibility for harms or errors caused by AI outputs or decisions.',
                },
              ].map((issue, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{issue.title}</h3>
                  <p className="text-sm text-muted-foreground">{issue.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Implementing Ethical AI</CardTitle>
            <CardDescription>Steps toward responsible deployment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Ethics Reviews',
                  description: 'Incorporate ethics evaluations throughout the development cycle.',
                },
                {
                  title: 'Stakeholder Involvement',
                  description: 'Engage communities impacted by AI applications to inform design choices.',
                },
                {
                  title: 'Ongoing Audits',
                  description: 'Regularly assess model behavior for ethical compliance post-deployment.',
                },
              ].map((step, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function SafetyMechanismsPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
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
              Large language models are equipped with various safety systems designed to prevent harmful, misleading, or unethical outputs. These mechanisms are essential to reduce
              risks, build trust, and guide responsible AI deployment.
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
    </Layout>
  );
}

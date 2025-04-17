import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function MultiTurnRisksPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Multi-turn Interaction Risks</h1>
          <p className="text-muted-foreground mt-2">Understanding vulnerabilities that emerge across multiple conversation turns</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium">Educational Purpose Notice</h3>
            <p className="text-sm mt-1">
              This material is provided for educational purposes to help understand and prevent vulnerabilities. Do not use this knowledge to exploit systems.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Understanding the basics of multi-turn interaction risks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Multi-turn interactions serve as a unique approach to challenging an LLM's safety protocols. One big problem with single-turn exchanges is that they can result in the
              LLM blocking you out without learning any valuable information about a potential vulnerability. Multi-turn exchanges, on the other hand, allow for a step by step
              approach where you can see the LLM's behavior changing as you keep feeding it new prompts leading it to your intended goal.
            </p>
            <div className="grid gap-4 mt-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">Key Characteristics</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>Slowly manipulate the context over multiple turns</li>
                  <li>Abuse of LLM's conversation history handling</li>
                  <li>Use of subtle redirections to shift the goal of the LLM's response</li>
                  <li>Intention masking through complex, misleading prompts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Attack Patterns</CardTitle>
            <CardDescription>Understanding frequently observed manipulation techniques</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              {[
                {
                  title: 'Goal Hijacking',
                  description: 'Gradually shifting the conversation goal from legitimate to harmful purposes',
                },
                {
                  title: 'Context Manipulation',
                  description: 'Creating ambiguity in the conversation context to bypass safety measures',
                },
                {
                  title: 'Persona Exploitation',
                  description: 'Using roleplay or personas to attempt bypassing ethical guidelines',
                },
              ].map((pattern, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Attack</CardTitle>
            <CardDescription>A technique we found to trick an LLM into providing dangerous information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              {[
                {
                  title: 'Relationship Manipulation',
                  description: 'Developing a false sense of relationship with the LLM and some nonexistent entity to extract sensitive or dangerous information',
                },
              ].map((pattern, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{pattern.title}</h3>
                  <p className="text-sm text-muted-foreground">{pattern.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mitigation Strategies</CardTitle>
            <CardDescription>Best practices in LLMs for safe-guarding multi-turn vulnerabilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Consistent Goal Monitoring',
                  description: 'Always monitor the current goal of the conversation and ensure it aligns with safety protocols',
                },
                {
                  title: 'Context Verification',
                  description: 'Routinely verify that the context is not being manipulated or misinterpreted',
                },
                {
                  title: 'Safety Persistence',
                  description: 'Ensure that safety measures are implemented and maintained across the full conversation.',
                },
              ].map((strategy, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{strategy.title}</h3>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

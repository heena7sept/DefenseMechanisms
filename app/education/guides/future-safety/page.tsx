import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function FutureOfLLMSafetyPage() {
  return (
    <Layout backButton={{ href: '/#education', label: 'Back to Home' }}>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Future of LLM Safety</h1>
          <p className="text-muted-foreground mt-2">Emerging trends and approaches in LLM safety research</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium">Educational Purpose Notice</h3>
            <p className="text-sm mt-1">
              This content is intended to inform developers, researchers, and the public about the evolving landscape of LLM safety and inspire proactive approaches.
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>How LLM safety continues to evolve</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              As large language models become more powerful and widely used, the field of AI safety is rapidly evolving. New approaches, research initiatives, and collaborations
              are shaping the way we think about ethical and effective safeguards for generative AI.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emerging Trends</CardTitle>
            <CardDescription>Key developments to watch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Proactive Alignment Techniques',
                  description: 'Shifting from reactive safety filters to proactive behavior shaping during training.',
                },
                {
                  title: 'Interdisciplinary Collaboration',
                  description: 'Combining insights from social science, philosophy, and law with technical research.',
                },
                {
                  title: 'Scalable Oversight',
                  description: 'Developing systems that allow human oversight to keep pace with increasingly autonomous models.',
                },
              ].map((trend, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{trend.title}</h3>
                  <p className="text-sm text-muted-foreground">{trend.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Research Directions</CardTitle>
            <CardDescription>Where the field is heading next</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {[
                {
                  title: 'Constitutional AI',
                  description: 'Training models to follow a transparent set of ethical principles or guidelines.',
                },
                {
                  title: 'AI Model Evaluation Benchmarks',
                  description: 'Improving methods to measure safety, robustness, and fairness across tasks.',
                },
                {
                  title: 'Long-Term AI Alignment',
                  description: 'Ensuring future advanced systems remain aligned with human values even as capabilities grow.',
                },
              ].map((direction, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-1">{direction.title}</h3>
                  <p className="text-sm text-muted-foreground">{direction.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

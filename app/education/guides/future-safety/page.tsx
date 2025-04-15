'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

export default function FutureOfLLMSafetyPage() {
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
                As large language models become more powerful and widely used, the field of AI safety is rapidly evolving. New approaches, research initiatives, and collaborations are shaping the way we think about ethical and effective safeguards for generative AI.
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
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {new Date().getFullYear()} LLM Safety Simulator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

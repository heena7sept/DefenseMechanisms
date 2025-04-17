'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, BookOpen, ExternalLink, Shield } from 'lucide-react';

export default function ResearchersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Research Resources</h1>
            <p className="text-muted-foreground mt-2">Datasets and methodologies for researchers studying LLM safety</p>
          </div>

          <Tabs defaultValue="datasets" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="datasets">Datasets</TabsTrigger>
              <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            </TabsList>

            <TabsContent value="datasets" className="space-y-4 mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Anthropic's Red Team Attempts",
                    description: 'A dataset of red team attempts against Claude, including successful and unsuccessful jailbreak attempts',
                    size: '38,961 examples',
                    format: 'JSON',
                    url: 'https://github.com/anthropics/hh-rlhf',
                  },
                  {
                    title: 'ToxicChat',
                    description: 'A dataset for detecting and classifying toxic content in conversational AI interactions',
                    size: '10,000+ conversations',
                    format: 'JSON/CSV',
                    url: 'https://huggingface.co/datasets/lmsys/toxic-chat',
                  },
                  {
                    title: 'AdvBench',
                    description: 'Benchmark dataset for evaluating adversarial attacks against language models',
                    size: '500+ adversarial examples',
                    format: 'JSON',
                    url: 'https://github.com/llm-attacks/llm-attacks',
                  },
                  {
                    title: 'HarmBench',
                    description: 'A benchmark for evaluating harmful capabilities in language models',
                    size: '1,000+ test cases',
                    format: 'JSON/YAML',
                    url: 'https://github.com/centerforaisafety/HarmBench',
                  },
                  {
                    title: 'SafetyBench',
                    description: 'A comprehensive benchmark for evaluating safety in language models',
                    size: '5,000+ test cases',
                    format: 'JSON',
                    url: 'https://huggingface.co/datasets/thu-coai/SafetyBench',
                  },
                  {
                    title: 'TruthfulQA',
                    description: 'Dataset for measuring truthfulness in language models',
                    size: '817 questions',
                    format: 'JSON/CSV',
                    url: 'https://github.com/sylinrl/TruthfulQA',
                  },
                ].map((dataset, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>{dataset.title}</CardTitle>
                      <CardDescription>{dataset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Size:</span>
                          <span className="text-sm text-muted-foreground">{dataset.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">Format:</span>
                          <span className="text-sm text-muted-foreground">{dataset.format}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                      <Button className="w-full" asChild>
                        <Link href={dataset.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Access Dataset
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="methodologies" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Methodologies</CardTitle>
                  <CardDescription>Standardized approaches for studying LLM safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Red Teaming Methodology</h3>
                    <p className="text-sm text-muted-foreground">A systematic approach to identifying vulnerabilities in language models through adversarial testing.</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href="https://www.anthropic.com/research/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> Anthropic's Red Teaming Methodology
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">NIST AI Risk Management Framework</h3>
                    <p className="text-sm text-muted-foreground">A comprehensive framework for managing risks in AI systems, including language models.</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> NIST AI RMF
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Adversarial Testing Framework</h3>
                    <p className="text-sm text-muted-foreground">A framework for systematically testing language models against adversarial inputs.</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://github.com/QData/TextAttack" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> TextAttack Framework
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Responsible AI Maturity Model</h3>
                    <p className="text-sm text-muted-foreground">A model for assessing and improving the maturity of responsible AI practices within organizations.</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://www.microsoft.com/en-us/ai/responsible-ai-resources" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Microsoft Responsible AI Resources
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="collaboration" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Research Collaboration Opportunities</CardTitle>
                  <CardDescription>Join research communities focused on LLM safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Research Organizations</h3>
                    <p className="text-sm text-muted-foreground">Organizations actively conducting research on LLM safety that welcome collaborations.</p>
                    <div className="grid gap-4 sm:grid-cols-2 mt-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Alignment Research Center</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">Research organization focused on AI alignment and safety</CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="https://alignment.org/" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" /> Visit Website
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Center for AI Safety</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">Research organization focused on reducing societal-scale risks from AI</CardContent>
                        <CardFooter>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link href="https://www.safe.ai/" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" /> Visit Website
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Research Conferences</h3>
                    <p className="text-sm text-muted-foreground">Conferences focused on AI safety research for presenting and discussing findings.</p>
                    <div className="bg-muted p-4 rounded-md mt-4">
                      <h4 className="text-sm font-medium">Key Conferences</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                        <li>NeurIPS (Neural Information Processing Systems)</li>
                        <li>ICLR (International Conference on Learning Representations)</li>
                        <li>AIES (AAAI/ACM Conference on AI, Ethics, and Society)</li>
                        <li>FAccT (ACM Conference on Fairness, Accountability, and Transparency)</li>
                      </ul>
                      <Button variant="outline" size="sm" className="mt-2" asChild>
                        <Link href="https://www.unite.ai/conferences/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Conference Information
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Research Grants</h3>
                    <p className="text-sm text-muted-foreground">Organizations offering grants to support research on AI safety and alignment.</p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://futureoflife.org/grants-program/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Future of Life Institute Grants
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Research Communities</h2>
            <p className="text-muted-foreground mb-6">Join communities of researchers focused on LLM safety to share findings and collaborate.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <Button className="w-full" asChild>
                <Link href="https://forum.effectivealtruism.org/topics/ai-safety" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> EA Forum - AI Safety
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="https://www.alignmentforum.org/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> Alignment Forum
                </Link>
              </Button>
              <Button className="w-full" asChild>
                <Link href="https://www.lesswrong.com/tag/ai" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2" /> LessWrong - AI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">© {new Date().getFullYear()} LLM Safety Simulator. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

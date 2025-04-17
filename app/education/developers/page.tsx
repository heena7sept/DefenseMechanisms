import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Download, ExternalLink, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function DevelopersPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Developer Resources</h1>
          <p className="text-muted-foreground mt-2">Tools, libraries, and guides for implementing robust safety measures in LLM applications</p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Implementation Guides</TabsTrigger>
            <TabsTrigger value="code">Code Examples</TabsTrigger>
            <TabsTrigger value="testing">Safety Testing</TabsTrigger>
            <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'OpenAI Safety Best Practices',
                  description: 'Official guide to implementing safety measures in applications using OpenAI models',
                  icon: <Shield className="h-6 w-6" />,
                  url: 'https://platform.openai.com/docs/guides/safety-best-practices',
                },
                {
                  title: "Anthropic's Constitutional AI",
                  description: 'Research and implementation guide for constitutional AI approaches',
                  icon: <Code className="h-6 w-6" />,
                  url: 'https://www.anthropic.com/news/claudes-constitution',
                },
                {
                  title: "Microsoft's Responsible AI Toolkit",
                  description: 'Tools and guidelines for implementing responsible AI practices',
                  icon: <Code className="h-6 w-6" />,
                  url: 'https://www.microsoft.com/en-us/ai/responsible-ai-resources',
                },
                {
                  title: "Google's AI Safety Framework",
                  description: 'Framework for developing and deploying AI systems safely',
                  icon: <Shield className="h-6 w-6" />,
                  url: 'https://ai.google/responsibility/principles/',
                },
                {
                  title: 'Hugging Face Safety Documentation',
                  description: 'Guidelines for implementing safety measures in Transformer-based models',
                  icon: <Shield className="h-6 w-6" />,
                  url: 'https://huggingface.co/docs/transformers/main/en/model_doc/llama#safety',
                },
                {
                  title: 'NVIDIA NeMo Guardrails Guide',
                  description: 'Documentation for implementing guardrails in LLM applications',
                  icon: <Code className="h-6 w-6" />,
                  url: 'https://github.com/NVIDIA/NeMo-Guardrails',
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Guide
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'NVIDIA NeMo Guardrails',
                  description: 'Open-source toolkit for adding programmable guardrails to LLM-based conversational systems',
                  language: 'Python',
                  url: 'https://github.com/NVIDIA/NeMo-Guardrails',
                },
                {
                  title: "Anthropic's Claude Cookbook",
                  description: 'Implementation examples for responsible use of Claude and other LLMs',
                  language: 'Python',
                  url: 'https://github.com/anthropics/anthropic-cookbook',
                },
                {
                  title: 'OpenAI Moderation API',
                  description: 'Code examples for implementing content moderation in applications',
                  language: 'Python/TypeScript',
                  url: 'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_use_moderation.ipynb',
                },
                {
                  title: 'Microsoft Guidance',
                  description: 'A guidance language for controlling large language models',
                  language: 'Python',
                  url: 'https://github.com/microsoft/guidance',
                },
                {
                  title: 'Garak - LLM Vulnerability Scanner',
                  description: 'A tool for testing LLMs against various attack vectors and vulnerabilities',
                  language: 'Python',
                  url: 'https://github.com/leondz/garak',
                },
                {
                  title: 'LangChain Safety Tooling',
                  description: 'Safety tools and components for LangChain applications',
                  language: 'Python/TypeScript',
                  url: 'https://github.com/langchain-ai/langchain/tree/master/libs/langchain/langchain/chains/llm_checker',
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary/10 px-2 py-1 rounded-md text-xs">{resource.language}</div>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" asChild>
                      <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Repository
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="testing" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Safety Testing Methodologies</CardTitle>
                <CardDescription>Approaches to testing LLM safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Red Teaming</h3>
                  <p className="text-sm text-muted-foreground">Simulating attacks on your LLM system to identify vulnerabilities and improve safety measures.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href="https://www.anthropic.com/research/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Anthropic's Red Teaming Guide
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Automated Testing</h3>
                  <p className="text-sm text-muted-foreground">Implementing automated testing pipelines to continuously evaluate LLM safety as your system evolves.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/openai/evals" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> OpenAI Evals Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Adversarial Testing</h3>
                  <p className="text-sm text-muted-foreground">Systematic approaches to testing LLMs against adversarial inputs designed to bypass safety measures.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://github.com/QData/TextAttack" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> TextAttack Framework
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="best-practices" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>LLM Safety Best Practices</CardTitle>
                <CardDescription>Essential guidelines for developing safe LLM applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Defense in Depth</h3>
                  <p className="text-sm text-muted-foreground">Implement multiple layers of safety measures rather than relying on a single approach.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Pre-processing filters for user inputs</li>
                    <li>Post-processing filters for model outputs</li>
                    <li>Context tracking across conversation turns</li>
                    <li>Real-time monitoring for suspicious patterns</li>
                  </ul>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://platform.openai.com/docs/guides/safety-best-practices/defense-in-depth" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> OpenAI's Defense in Depth Guide
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Continuous Evaluation</h3>
                  <p className="text-sm text-muted-foreground">Regularly test your LLM system against known and emerging attack vectors.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Regular safety testing schedules</li>
                    <li>Stay updated on new vulnerability research</li>
                    <li>Test against the latest attack techniques</li>
                    <li>Implement regression testing for all updates</li>
                  </ul>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://azure.github.io/AI-in-Production-Guide/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> AI in Production Guide
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Incident Response Plan</h3>
                  <p className="text-sm text-muted-foreground">Develop a clear plan for responding to safety incidents.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Establish a dedicated incident response team</li>
                    <li>Create clear escalation procedures</li>
                    <li>Develop templates for user communications</li>
                    <li>Implement post-incident analysis processes</li>
                  </ul>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://csrc.nist.gov/pubs/sp/800/61/r3/final" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> NIST Incident Response Guide
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Developer Communities</h2>
          <p className="text-muted-foreground mb-6">Join communities of developers working on LLM safety to share knowledge and collaborate.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="w-full" asChild>
              <Link href="https://github.com/topics/llm-security" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> GitHub LLM Security
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="https://discord.gg/openai" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> OpenAI Discord
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="https://discuss.huggingface.co/" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Hugging Face Forums
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

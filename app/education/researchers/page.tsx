import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function ResearchersPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Research Resources</h1>
          <p className="text-muted-foreground mt-2">Comprehensive resources for researchers studying LLM safety and vulnerabilities</p>
        </div>

        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
            <TabsTrigger value="datasets">Datasets</TabsTrigger>
            <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="space-y-4 mt-6">
            <div className="grid gap-6">
              {[
                {
                  title: 'Multi-turn Jailbreaking of LLMs',
                  authors: 'Smith et al., 2023',
                  abstract: "This paper explores the vulnerabilities of language models to multi-turn interaction patterns that gradually shift the model's behavior.",
                  keywords: ['multi-turn attacks', 'jailbreaking', 'goal hijacking'],
                  pdfUrl: '/downloads/papers/multi-turn-jailbreaking.pdf',
                  citationUrl: '/downloads/citations/multi-turn-jailbreaking.bib',
                },
                {
                  title: 'Robust Safety Mechanisms for Conversational AI',
                  authors: 'Johnson et al., 2023',
                  abstract: 'A comprehensive analysis of safety mechanisms designed to maintain consistent behavior across complex multi-turn interactions.',
                  keywords: ['safety mechanisms', 'conversational AI', 'robustness'],
                  pdfUrl: '/downloads/papers/robust-safety-mechanisms.pdf',
                  citationUrl: '/downloads/citations/robust-safety-mechanisms.bib',
                },
                {
                  title: 'Context Manipulation in Large Language Models',
                  authors: 'Garcia et al., 2024',
                  abstract: 'This study examines how context can be manipulated across multiple turns to influence language model outputs.',
                  keywords: ['context manipulation', 'multi-turn interactions', 'safety'],
                  pdfUrl: '/downloads/papers/context-manipulation.pdf',
                  citationUrl: '/downloads/citations/context-manipulation.bib',
                },
                {
                  title: 'Instruction Persistence in LLMs',
                  authors: 'Williams et al., 2024',
                  abstract: 'An investigation into how language models maintain or lose adherence to initial instructions across extended conversations.',
                  keywords: ['instruction persistence', 'safety', 'multi-turn interactions'],
                  pdfUrl: '/downloads/papers/instruction-persistence.pdf',
                  citationUrl: '/downloads/citations/instruction-persistence.bib',
                },
                {
                  title: 'Evaluating Multi-turn Safety in Commercial LLMs',
                  authors: 'Chen et al., 2024',
                  abstract: 'A comparative study of how different commercial language models respond to potential multi-turn manipulation attempts.',
                  keywords: ['commercial LLMs', 'safety evaluation', 'comparative analysis'],
                  pdfUrl: '/downloads/papers/evaluating-multi-turn-safety.pdf',
                  citationUrl: '/downloads/citations/evaluating-multi-turn-safety.bib',
                },
              ].map((paper, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{paper.title}</CardTitle>
                    <CardDescription>{paper.authors}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, i) => (
                        <div key={i} className="bg-muted px-2 py-1 rounded-md text-xs">
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={paper.pdfUrl}>
                        <Download className="h-4 w-4 mr-2" /> PDF
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={paper.citationUrl}>
                        <ExternalLink className="h-4 w-4 mr-2" /> Citation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="datasets" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Multi-turn Attack Dataset',
                  description: 'A comprehensive dataset of multi-turn attack sequences against various LLMs',
                  size: '10,000 conversations',
                  format: 'JSON',
                  downloadUrl: '/downloads/datasets/multi-turn-attack-dataset.zip',
                },
                {
                  title: 'Safety Response Corpus',
                  description: 'Collection of LLM responses to potentially harmful requests, annotated for safety',
                  size: '25,000 responses',
                  format: 'JSON/CSV',
                  downloadUrl: '/downloads/datasets/safety-response-corpus.zip',
                },
                {
                  title: 'Context Manipulation Examples',
                  description: 'Annotated examples of context manipulation attempts and model responses',
                  size: '5,000 examples',
                  format: 'JSON',
                  downloadUrl: '/downloads/datasets/context-manipulation-examples.zip',
                },
                {
                  title: 'Instruction Persistence Test Set',
                  description: 'Test set for evaluating how well models maintain adherence to initial instructions',
                  size: '3,000 test cases',
                  format: 'JSON/YAML',
                  downloadUrl: '/downloads/datasets/instruction-persistence-test-set.zip',
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
                      <Link href={dataset.downloadUrl}>
                        <Download className="h-4 w-4 mr-2" /> Download Dataset
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
                  <h3 className="text-lg font-medium">Multi-turn Attack Evaluation</h3>
                  <p className="text-sm text-muted-foreground">
                    A standardized methodology for evaluating LLM vulnerability to multi-turn attacks. This includes protocols for designing attack sequences, measuring success
                    rates, and analyzing model responses.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/methodologies/multi-turn-attack-evaluation.pdf">
                        <Download className="h-4 w-4 mr-2" /> Methodology Guide
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Safety Mechanism Benchmarking</h3>
                  <p className="text-sm text-muted-foreground">
                    A framework for benchmarking the effectiveness of different safety mechanisms against standardized attack vectors. This allows for comparative analysis across
                    different approaches.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/methodologies/safety-mechanism-benchmarking.pdf">
                        <Download className="h-4 w-4 mr-2" /> Benchmarking Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Longitudinal Safety Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Methodology for tracking changes in LLM safety over time, as models are updated and new safety measures are implemented. This helps identify trends and evaluate
                    progress.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/methodologies/longitudinal-safety-analysis.pdf">
                        <Download className="h-4 w-4 mr-2" /> Analysis Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Cross-model Comparative Studies</h3>
                  <p className="text-sm text-muted-foreground">
                    Standardized approach for comparing safety characteristics across different LLM architectures and implementations. This helps identify which approaches are most
                    effective.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/methodologies/cross-model-comparative-studies.pdf">
                        <Download className="h-4 w-4 mr-2" /> Comparative Framework
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
                <CardDescription>Join our research community and contribute to LLM safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Open Research Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain several open research projects that welcome contributions from researchers around the world. These projects focus on various aspects of LLM safety
                    and are designed for collaborative work.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Multi-turn Vulnerability Analysis</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">Comprehensive analysis of multi-turn vulnerabilities across different LLM architectures</CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="/research/projects/multi-turn-vulnerability-analysis">View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Safety Measure Effectiveness</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">Evaluating the effectiveness of different safety measures against multi-turn attacks</CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href="/research/projects/safety-measure-effectiveness">View Project</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Research Workshops</h3>
                  <p className="text-sm text-muted-foreground">
                    We regularly organize research workshops focused on LLM safety. These workshops bring together researchers from academia and industry to share findings and
                    collaborate on solutions.
                  </p>
                  <div className="bg-muted p-4 rounded-md mt-4">
                    <h4 className="text-sm font-medium">Upcoming Workshop</h4>
                    <p className="text-sm text-muted-foreground mt-1">Multi-turn Safety in Large Language Models: Challenges and Solutions</p>
                    <p className="text-sm text-muted-foreground mt-1">Date: June 15-16, 2025 | Location: Virtual</p>
                    <Button variant="outline" size="sm" className="mt-2" asChild>
                      <Link href="/events/multi-turn-safety-workshop">Workshop Details</Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Research Grants</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer research grants to support work on LLM safety. These grants are available to academic researchers, independent researchers, and research-focused
                    organizations.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/research/grants">Grant Information</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/research/collaboration">View All Collaboration Opportunities</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Research Community</h2>
          <p className="text-muted-foreground mb-6">
            Join our community of researchers focused on LLM safety. Share findings, discuss methodologies, and collaborate on advancing the field.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="w-full" asChild>
              <Link href="https://forum.llm-safety.org/researchers" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Research Forum
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="https://discord.gg/llm-safety-research" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Research Discord
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/research/newsletter">
                <BookOpen className="h-4 w-4 mr-2" /> Research Newsletter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

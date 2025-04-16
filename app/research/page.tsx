import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Code, Download, ExternalLink, FileText, Lightbulb, Shield } from 'lucide-react';

export default function ResearchPage() {
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
              <Link href="/" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Research & Development</h1>
            <p className="text-muted-foreground mt-2">Our ongoing research efforts to improve LLM safety and develop more robust AI systems</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Research Methodology</CardTitle>
                <CardDescription>Our approach to studying multi-turn vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Literature Review</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive analysis of existing research on LLM vulnerabilities and safety mechanisms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Scenario Development</h3>
                      <p className="text-sm text-muted-foreground">Creation of realistic scenarios that demonstrate potential vulnerabilities in multi-turn interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Safety Measure Testing</h3>
                      <p className="text-sm text-muted-foreground">Evaluation of various safety measures and their effectiveness against identified vulnerabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Documentation & Publication</h3>
                      <p className="text-sm text-muted-foreground">
                        Thorough documentation of findings and publication of results to contribute to the broader AI safety research community
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Future Directions</CardTitle>
                <CardDescription>Upcoming research and development initiatives</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Advanced Detection Methods</h3>
                      <p className="text-sm text-muted-foreground">Developing more sophisticated methods for detecting potential manipulation attempts in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Robust Safety Frameworks</h3>
                      <p className="text-sm text-muted-foreground">Creating comprehensive safety frameworks specifically designed for multi-turn interactions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Educational Outreach</h3>
                      <p className="text-sm text-muted-foreground">Expanding educational resources for developers, researchers, and policymakers on LLM safety</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Code className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cross-model Evaluation</h3>
                      <p className="text-sm text-muted-foreground">Comparative studies of safety mechanisms across different language model architectures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Current Research Projects</h2>
            <div className="grid gap-6">
              {[
                {
                  title: 'Multi-turn Vulnerability Analysis',
                  status: 'Ongoing',
                  description: 'A systematic study of how language models respond to various multi-turn interaction patterns that attempt to manipulate model behavior.',
                  objectives: [
                    'Identify common patterns in multi-turn manipulation attempts',
                    'Categorize vulnerability types and their characteristics',
                    'Develop a taxonomy of multi-turn vulnerabilities',
                  ],
                },
                {
                  title: 'Safety Mechanism Effectiveness',
                  status: 'Ongoing',
                  description: 'Evaluation of different safety mechanisms and their effectiveness against identified multi-turn vulnerabilities.',
                  objectives: [
                    'Test existing safety mechanisms against multi-turn attacks',
                    'Identify strengths and weaknesses in current approaches',
                    'Propose improvements to enhance robustness',
                  ],
                },
                {
                  title: 'Educational Impact Assessment',
                  status: 'Planning',
                  description: "Study to measure the educational impact of the simulator on developers' understanding and implementation of LLM safety measures.",
                  objectives: [
                    'Develop metrics for measuring educational effectiveness',
                    'Conduct pre and post assessments with developer groups',
                    'Refine educational materials based on findings',
                  ],
                },
              ].map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{project.title}</CardTitle>
                      <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">{project.status}</div>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-medium mb-2">Key Objectives:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {project.objectives.map((objective, i) => (
                        <li key={i}>{objective}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/research/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <FileText className="h-4 w-4 mr-2" /> View Project Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Publications</h2>
            <div className="grid gap-4">
              {[
                {
                  title: 'A Framework for Analyzing Multi-turn Vulnerabilities in Language Models',
                  authors: 'Johnson, A., Smith, B., et al.',
                  journal: 'Journal of AI Safety Research',
                  year: '2024',
                  abstract:
                    'This paper presents a comprehensive framework for analyzing and categorizing vulnerabilities that emerge in multi-turn interactions with language models.',
                },
                {
                  title: 'Educational Approaches to AI Safety: The Case of Interactive Simulators',
                  authors: 'Williams, C., Garcia, D., et al.',
                  journal: 'Conference on AI Education',
                  year: '2023',
                  abstract: 'An examination of how interactive simulators can enhance understanding of AI safety concepts among developers and researchers.',
                },
                {
                  title: 'Measuring the Effectiveness of Safety Mechanisms Against Multi-turn Attacks',
                  authors: 'Chen, E., Rodriguez, F., et al.',
                  journal: 'Proceedings of the International Conference on AI Safety',
                  year: '2023',
                  abstract: 'A quantitative study of how different safety mechanisms perform against sophisticated multi-turn manipulation attempts.',
                },
              ].map((publication, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{publication.title}</CardTitle>
                    <CardDescription>
                      {publication.authors} • {publication.journal} • {publication.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{publication.abstract}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/research/papers/${publication.title.toLowerCase().replace(/\s+/g, '-')}.pdf`} download>
                        <Download className="h-4 w-4 mr-2" /> PDF
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/research/citations/${publication.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <ExternalLink className="h-4 w-4 mr-2" /> View Citation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">Research Collaboration</h2>
            <p className="text-muted-foreground mb-6">
              We actively collaborate with academic institutions, industry partners, and independent researchers to advance the field of AI safety. If you're interested in
              collaborating on research related to LLM safety, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Contact Research Team</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/research/collaboration">View Collaboration Guidelines</Link>
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

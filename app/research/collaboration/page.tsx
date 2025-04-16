import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function CollaborationPage() {
  return (
    <Layout backButton={{ href: '/research', label: 'Back to Research' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Research Collaboration Guidelines</h1>
          <p className="text-muted-foreground mt-2">Guidelines and opportunities for collaborating on LLM safety research</p>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Collaboration Opportunities</h2>
          <p className="text-muted-foreground mb-6">
            We actively seek collaboration with researchers, developers, and organizations interested in advancing LLM safety. Our collaborative research focuses on understanding
            vulnerabilities, developing robust safety measures, and creating educational resources for the AI community.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Academic Partnerships</CardTitle>
                <CardDescription>Collaborate with academic institutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We partner with universities and research institutions to conduct rigorous studies on LLM safety, publish peer-reviewed research, and develop educational
                  curricula.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/contact">Contact for Academic Partnerships</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Industry Collaboration</CardTitle>
                <CardDescription>Work with AI companies and developers</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We collaborate with AI companies to test safety measures, develop industry standards, and implement best practices for LLM deployment.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/contact">Contact for Industry Collaboration</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Open Source Contributors</CardTitle>
                <CardDescription>Join our open source community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We welcome contributions to our open source tools, including the LLM Safety Simulator, documentation, and educational resources.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://github.com/llm-safety-simulator" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> GitHub Repository
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Collaboration Guidelines</h2>
          <Card>
            <CardHeader>
              <CardTitle>Responsible Research Practices</CardTitle>
              <CardDescription>Guidelines for conducting collaborative research on LLM safety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">1. Ethical Considerations</h3>
                <p className="text-sm text-muted-foreground">
                  All collaborative research must adhere to ethical guidelines for AI safety research. This includes responsible disclosure of vulnerabilities, consideration of
                  potential misuse, and prioritizing the development of safety measures.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">2. Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Research methodologies, findings, and limitations should be transparently documented and shared with collaborators. We encourage open discussion of challenges and
                  uncertainties in the research process.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">3. Educational Focus</h3>
                <p className="text-sm text-muted-foreground">
                  All collaborative research should maintain an educational focus, with the goal of improving understanding and developing better safety measures. Research should
                  not be conducted with the intent to exploit vulnerabilities in production systems.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">4. Responsible Disclosure</h3>
                <p className="text-sm text-muted-foreground">
                  When vulnerabilities are discovered, they should be responsibly disclosed to the relevant AI system developers before public disclosure. This gives developers
                  time to implement safety measures.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">5. Collaborative Attribution</h3>
                <p className="text-sm text-muted-foreground">
                  All contributors to research projects will receive appropriate attribution in publications, presentations, and other outputs. We follow standard academic
                  practices for authorship and acknowledgment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Current Collaboration Opportunities</h2>
          <div className="grid gap-6">
            {[
              {
                title: 'Multi-turn Vulnerability Analysis',
                description: 'Seeking collaborators for comprehensive analysis of multi-turn vulnerabilities across different LLM architectures',
                expertise: ['LLM architecture knowledge', 'Safety evaluation', 'Red teaming experience'],
                timeline: '6-12 months',
                status: 'Accepting applications',
              },
              {
                title: 'Educational Resource Development',
                description: 'Developing comprehensive educational materials on LLM safety for developers, researchers, and policymakers',
                expertise: ['Technical writing', 'Curriculum development', 'LLM safety knowledge'],
                timeline: '3-6 months',
                status: 'Accepting applications',
              },
              {
                title: 'Safety Measure Effectiveness Evaluation',
                description: 'Evaluating the effectiveness of different safety measures against multi-turn attacks',
                expertise: ['Safety engineering', 'Evaluation methodology', 'Statistical analysis'],
                timeline: '6-9 months',
                status: 'Accepting applications',
              },
            ].map((opportunity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{opportunity.title}</CardTitle>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">{opportunity.status}</div>
                  </div>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium">Desired Expertise:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {opportunity.expertise.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Timeline:</h4>
                      <p className="text-sm text-muted-foreground">{opportunity.timeline}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/contact">Apply for Collaboration</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Contact Research Team</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

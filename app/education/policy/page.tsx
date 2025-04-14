import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Download, FileText, Lightbulb, Shield } from 'lucide-react';

export default function PolicyPage() {
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
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Policy Resources</h1>
            <p className="text-muted-foreground mt-2">Resources for policymakers and regulators working on AI governance and safety</p>
          </div>

          <Tabs defaultValue="briefs" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="briefs">Policy Briefs</TabsTrigger>
              <TabsTrigger value="frameworks">Governance Frameworks</TabsTrigger>
              <TabsTrigger value="standards">Standards & Guidelines</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            </TabsList>

            <TabsContent value="briefs" className="space-y-4 mt-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: 'LLM Safety: Policy Considerations',
                    description: 'Key policy considerations for ensuring the safe development and deployment of LLMs',
                    icon: <Shield className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/llm-safety-policy-considerations.pdf',
                  },
                  {
                    title: 'Multi-turn Vulnerabilities: Regulatory Approaches',
                    description: 'Regulatory approaches to addressing multi-turn vulnerabilities in conversational AI',
                    icon: <FileText className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/multi-turn-vulnerabilities-regulatory-approaches.pdf',
                  },
                  {
                    title: 'AI Safety Testing Requirements',
                    description: 'Recommendations for safety testing requirements in AI regulation',
                    icon: <Shield className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/ai-safety-testing-requirements.pdf',
                  },
                  {
                    title: 'International Coordination on AI Safety',
                    description: 'Approaches to international coordination on AI safety standards and regulation',
                    icon: <FileText className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/international-coordination-ai-safety.pdf',
                  },
                  {
                    title: 'Risk Assessment Frameworks for LLMs',
                    description: 'Policy frameworks for assessing and categorizing risks from large language models',
                    icon: <Shield className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/risk-assessment-frameworks-llms.pdf',
                  },
                  {
                    title: 'Balancing Innovation and Safety',
                    description: 'Policy approaches that balance innovation with safety considerations in AI development',
                    icon: <Lightbulb className="h-6 w-6" />,
                    downloadUrl: '/downloads/policy/balancing-innovation-safety.pdf',
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
                        <Link href={resource.downloadUrl}>
                          <Download className="h-4 w-4 mr-2" /> Download Brief
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="frameworks" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Governance Frameworks</CardTitle>
                  <CardDescription>Comprehensive frameworks for governing AI development and deployment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Risk-Based Governance Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      A comprehensive framework for governing AI systems based on their risk level. This includes categorization criteria, oversight requirements, and compliance
                      mechanisms.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/frameworks/risk-based-governance-framework.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Framework
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Safety Certification Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      A framework for certifying the safety of AI systems before deployment. This includes testing requirements, documentation standards, and ongoing monitoring
                      obligations.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/frameworks/safety-certification-framework.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Framework
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Transparency and Accountability Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      A framework for ensuring transparency and accountability in AI development and deployment. This includes documentation requirements, audit procedures, and
                      incident reporting mechanisms.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/frameworks/transparency-accountability-framework.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Framework
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">International Coordination Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      A framework for international coordination on AI governance. This includes mechanisms for harmonizing standards, sharing information, and coordinating
                      enforcement actions.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/frameworks/international-coordination-framework.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Framework
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="standards" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standards & Guidelines</CardTitle>
                  <CardDescription>Technical standards and guidelines for AI safety</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">LLM Safety Testing Standards</h3>
                    <p className="text-sm text-muted-foreground">
                      Technical standards for testing the safety of large language models. These standards define minimum testing requirements, methodologies, and documentation.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/standards/llm-safety-testing-standards.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Standards
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Safety Documentation Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Guidelines for documenting safety measures, testing procedures, and known limitations of AI systems. These guidelines help ensure transparency and
                      accountability.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/standards/safety-documentation-guidelines.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Guidelines
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Incident Reporting Standards</h3>
                    <p className="text-sm text-muted-foreground">
                      Standards for reporting safety incidents involving AI systems. These standards define what constitutes a reportable incident, reporting timelines, and
                      required information.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/standards/incident-reporting-standards.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Standards
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Model Evaluation Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Guidelines for evaluating AI models before deployment. These guidelines cover safety testing, bias assessment, and performance evaluation across different
                      scenarios.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/downloads/standards/model-evaluation-guidelines.pdf">
                          <Download className="h-4 w-4 mr-2" /> Download Guidelines
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="case-studies" className="space-y-4 mt-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: 'EU AI Act: Safety Requirements for LLMs',
                    description: "Analysis of the EU AI Act's safety requirements for large language models",
                    region: 'European Union',
                    year: '2024',
                    downloadUrl: '/downloads/case-studies/eu-ai-act-llm-safety.pdf',
                  },
                  {
                    title: 'US Executive Order on AI: Safety Testing Provisions',
                    description: 'Analysis of safety testing provisions in the US Executive Order on AI',
                    region: 'United States',
                    year: '2023',
                    downloadUrl: '/downloads/case-studies/us-executive-order-safety-testing.pdf',
                  },
                  {
                    title: 'UK AI Safety Institute: Governance Model',
                    description: "Case study of the UK AI Safety Institute's governance model for AI safety research",
                    region: 'United Kingdom',
                    year: '2023',
                    downloadUrl: '/downloads/case-studies/uk-ai-safety-institute.pdf',
                  },
                  {
                    title: "Singapore's AI Governance Framework",
                    description: "Analysis of Singapore's approach to AI governance and safety regulation",
                    region: 'Singapore',
                    year: '2023',
                    downloadUrl: '/downloads/case-studies/singapore-ai-governance.pdf',
                  },
                ].map((caseStudy, index) => (
                  <Card key={index} className="flex flex-col h-full">
                    <CardHeader>
                      <CardTitle>{caseStudy.title}</CardTitle>
                      <CardDescription>{caseStudy.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-4">
                        <div className="bg-muted px-2 py-1 rounded-md text-xs">{caseStudy.region}</div>
                        <div className="bg-muted px-2 py-1 rounded-md text-xs">{caseStudy.year}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto pt-4">
                      <Button className="w-full" asChild>
                        <Link href={caseStudy.downloadUrl}>
                          <Download className="h-4 w-4 mr-2" /> Download Case Study
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-6 rounded-lg mt-6">
            <h2 className="text-xl font-bold mb-4">Policy Advisory Services</h2>
            <p className="text-muted-foreground mb-6">
              We offer advisory services to policymakers and regulators working on AI governance and safety. Our team of experts can provide technical guidance, policy
              recommendations, and implementation support.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Technical Briefings</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">Technical briefings on LLM safety for policymakers and their staff</CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Request Briefing</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Policy Workshops</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">Interactive workshops on developing effective AI safety policies</CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Request Workshop</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Implementation Support</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">Support for implementing AI safety policies and regulations</CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/contact">Request Support</Link>
                  </Button>
                </CardFooter>
              </Card>
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

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink, FileText, Lightbulb, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function PolicyPage() {
  return (
    <Layout backButton={{ href: '/education', label: 'Back to Education' }}>
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
                  title: 'Blueprint for an AI Bill of Rights',
                  description: "White House Office of Science and Technology Policy's framework for responsible AI use",
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: 'https://bidenwhitehouse.archives.gov/ostp/ai-bill-of-rights/',
                },
                {
                  title: 'NIST AI Risk Management Framework',
                  description: 'Guidance for managing risks in the design, development, and deployment of AI systems',
                  icon: <FileText className="h-6 w-6" />,
                  downloadUrl: 'https://www.nist.gov/itl/ai-risk-management-framework',
                },
                {
                  title: 'EU AI Act Overview',
                  description: "Overview of the European Union's comprehensive legislation on artificial intelligence",
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
                },
                {
                  title: 'OECD AI Principles',
                  description: 'International standards for the responsible development of trustworthy AI',
                  icon: <FileText className="h-6 w-6" />,
                  downloadUrl: 'https://oecd.ai/en/ai-principles',
                },
                {
                  title: 'UNESCO Recommendation on AI Ethics',
                  description: 'Global standard-setting instrument for the ethical development and use of AI',
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: 'https://www.unesco.org/en/artificial-intelligence/recommendation-ethics',
                },
                {
                  title: 'UK AI Regulation Policy Paper',
                  description: "The UK's approach to regulating AI with a focus on innovation and safety",
                  icon: <Lightbulb className="h-6 w-6" />,
                  downloadUrl: 'https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach',
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
                      <Link href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Resource
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
                  <h3 className="text-lg font-medium">NIST AI Risk Management Framework</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive framework for managing risks in AI systems based on their risk level. This includes categorization criteria, oversight requirements, and
                    compliance mechanisms.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">EU AI Act Framework</h3>
                  <p className="text-sm text-muted-foreground">
                    The European Union's regulatory framework for artificial intelligence, categorizing AI systems by risk level and imposing corresponding requirements.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Singapore's AI Governance Framework</h3>
                  <p className="text-sm text-muted-foreground">
                    A framework for the responsible adoption of AI by organizations, focusing on internal governance, decision-making models, operations management, and stakeholder
                    interaction.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">OECD Framework for the Classification of AI Systems</h3>
                  <p className="text-sm text-muted-foreground">
                    A framework for classifying AI systems to inform policy debates and regulatory approaches, considering factors like context, data, algorithms, and capabilities.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://oecd.ai/en/classification" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Framework
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
                  <h3 className="text-lg font-medium">ISO/IEC Standards for AI</h3>
                  <p className="text-sm text-muted-foreground">
                    International standards for artificial intelligence, including risk management, bias, and governance considerations.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://www.iso.org/committee/6794475/x/catalogue/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View ISO Standards
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">IEEE Global Initiative on Ethics of AI</h3>
                  <p className="text-sm text-muted-foreground">Standards and guidelines for ethically aligned design of autonomous and intelligent systems.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://standards.ieee.org/industry-connections/ec/autonomous-systems/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View IEEE Standards
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Partnership on AI Incident Database</h3>
                  <p className="text-sm text-muted-foreground">A database of AI incidents and failures to inform better practices and standards for AI development.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://incidentdatabase.ai/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Incident Database
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">AI Ethics Guidelines Global Inventory</h3>
                  <p className="text-sm text-muted-foreground">A comprehensive collection of AI ethics guidelines from around the world, maintained by AlgorithmWatch.</p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="https://inventory.algorithmwatch.org/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Guidelines Inventory
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
                  downloadUrl: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',
                },
                {
                  title: 'NIST AI Risk Management Framework',
                  description: 'Comprehensive US government framework for managing risks in the design, development, and deployment of AI systems',
                  region: 'United States',
                  year: '2024',
                  downloadUrl: 'https://www.nist.gov/itl/ai-risk-management-framework',
                },
                {
                  title: 'UK AI Safety Institute',
                  description: "Case study of the UK's establishment of a dedicated AI Safety Institute",
                  region: 'United Kingdom',
                  year: '2023',
                  downloadUrl: 'https://www.gov.uk/government/publications/ai-safety-institute-overview',
                },
                {
                  title: "Canada's Voluntary Code of Conduct for Generative AI",
                  description: "Analysis of Canada's approach to governing generative AI through voluntary commitments",
                  region: 'Canada',
                  year: '2023',
                  downloadUrl: 'https://ised-isde.canada.ca/site/ised/en/voluntary-code-conduct-responsible-development-and-management-advanced-generative-ai-systems',
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
                      <Link href={caseStudy.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Case Study
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Policy Advisory Resources</h2>
          <p className="text-muted-foreground mb-6">Additional resources for policymakers and regulators working on AI governance and safety.</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Future of Life Institute</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">Research and advocacy organization focused on existential risks from advanced technologies</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://futureoflife.org/ai-policy-resources/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> View Resources
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Center for AI Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">Organization dedicated to developing policy frameworks for advanced AI systems</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://www.caidp.org/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit Website
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">OECD AI Policy Observatory</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">Platform for policy analysis and guidance on artificial intelligence</CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="https://oecd.ai/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Visit Observatory
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

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
          <p className="text-muted-foreground mt-2">Comprehensive resources for developers implementing LLMs with robust safety measures</p>
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
                  title: 'Implementing Multi-turn Safety',
                  description: 'A comprehensive guide to implementing safety measures for multi-turn conversations',
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: '/downloads/implementing-multi-turn-safety.pdf',
                },
                {
                  title: 'Context Management',
                  description: 'Techniques for managing conversation context to prevent manipulation attacks',
                  icon: <Code className="h-6 w-6" />,
                  downloadUrl: '/downloads/context-management-guide.pdf',
                },
                {
                  title: 'Goal Consistency Tracking',
                  description: 'How to implement systems that track and maintain goal consistency across conversation turns',
                  icon: <Code className="h-6 w-6" />,
                  downloadUrl: '/downloads/goal-consistency-tracking.pdf',
                },
                {
                  title: 'Instruction Persistence',
                  description: 'Techniques to ensure initial instructions persist throughout a conversation',
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: '/downloads/instruction-persistence.pdf',
                },
                {
                  title: 'Safety Monitoring Systems',
                  description: 'Building real-time monitoring systems to detect potential attacks',
                  icon: <Shield className="h-6 w-6" />,
                  downloadUrl: '/downloads/safety-monitoring-systems.pdf',
                },
                {
                  title: 'Deployment Strategies',
                  description: 'Best practices for deploying LLMs with robust safety measures in production',
                  icon: <Code className="h-6 w-6" />,
                  downloadUrl: '/downloads/deployment-strategies.pdf',
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
                        <Download className="h-4 w-4 mr-2" /> Download Guide
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
                  title: 'Context Tracking Implementation',
                  description: 'Code example for implementing a robust context tracking system for multi-turn conversations',
                  language: 'TypeScript',
                  repoUrl: 'https://github.com/llm-safety-simulator/context-tracking',
                },
                {
                  title: 'Safety Filters',
                  description: 'Implementation of various safety filters for detecting potentially harmful content',
                  language: 'Python',
                  repoUrl: 'https://github.com/llm-safety-simulator/safety-filters',
                },
                {
                  title: 'Goal Consistency Checker',
                  description: 'A system for tracking and maintaining goal consistency across conversation turns',
                  language: 'TypeScript/Python',
                  repoUrl: 'https://github.com/llm-safety-simulator/goal-consistency',
                },
                {
                  title: 'Instruction Persistence Framework',
                  description: 'Framework for ensuring initial instructions persist throughout a conversation',
                  language: 'TypeScript',
                  repoUrl: 'https://github.com/llm-safety-simulator/instruction-persistence',
                },
                {
                  title: 'Real-time Monitoring System',
                  description: 'A real-time monitoring system for detecting potential attacks during conversation',
                  language: 'TypeScript/Python',
                  repoUrl: 'https://github.com/llm-safety-simulator/monitoring-system',
                },
                {
                  title: 'Safety Testing Framework',
                  description: 'A comprehensive framework for testing LLM safety against various attack vectors',
                  language: 'TypeScript',
                  repoUrl: 'https://github.com/llm-safety-simulator/safety-testing',
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
                      <Link href={resource.repoUrl} target="_blank" rel="noopener noreferrer">
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
                <CardDescription>Comprehensive approaches to testing LLM safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Red Teaming</h3>
                  <p className="text-sm text-muted-foreground">
                    Red teaming involves simulating attacks on your LLM system to identify vulnerabilities. This approach helps developers understand potential attack vectors and
                    improve safety measures.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/red-teaming-guide.pdf">
                        <Download className="h-4 w-4 mr-2" /> Red Teaming Guide
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Multi-turn Attack Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Testing specifically focused on multi-turn vulnerabilities, including goal hijacking, context manipulation, and instruction injection. Our simulator provides a
                    framework for this type of testing.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/simulator">
                        <ExternalLink className="h-4 w-4 mr-2" /> Try the Simulator
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Automated Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Implementing automated testing pipelines to continuously evaluate LLM safety as your system evolves. This includes regression testing to ensure new updates
                    don't introduce vulnerabilities.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/automated-testing-framework.pdf">
                        <Download className="h-4 w-4 mr-2" /> Automated Testing Framework
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">User Feedback Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Establishing systems to collect and analyze user feedback about potential safety issues. This real-world data is invaluable for identifying unexpected
                    vulnerabilities.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/downloads/user-feedback-guide.pdf">
                        <Download className="h-4 w-4 mr-2" /> User Feedback Guide
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
                  <p className="text-sm text-muted-foreground">
                    Implement multiple layers of safety measures rather than relying on a single approach. This includes input filtering, output moderation, context tracking, and
                    monitoring systems.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Implement pre-processing filters for user inputs</li>
                    <li>Add post-processing filters for model outputs</li>
                    <li>Maintain context tracking across conversation turns</li>
                    <li>Implement real-time monitoring for suspicious patterns</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Continuous Evaluation</h3>
                  <p className="text-sm text-muted-foreground">
                    Regularly test your LLM system against known and emerging attack vectors. Safety is not a one-time implementation but requires ongoing evaluation and
                    improvement.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Establish regular safety testing schedules</li>
                    <li>Stay updated on new vulnerability research</li>
                    <li>Test against the latest attack techniques</li>
                    <li>Implement regression testing for all updates</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">User Education</h3>
                  <p className="text-sm text-muted-foreground">
                    Educate users about the capabilities and limitations of your LLM system. Clear communication helps set appropriate expectations and reduces misuse.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Provide clear documentation on system capabilities</li>
                    <li>Communicate safety measures to build trust</li>
                    <li>Offer guidelines for responsible use</li>
                    <li>Establish clear channels for reporting issues</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Incident Response Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop a clear plan for responding to safety incidents. This includes procedures for investigating issues, implementing fixes, and communicating with affected
                    users.
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    <li>Establish a dedicated incident response team</li>
                    <li>Create clear escalation procedures</li>
                    <li>Develop templates for user communications</li>
                    <li>Implement post-incident analysis processes</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/downloads/llm-safety-best-practices.pdf">
                    <Download className="h-4 w-4 mr-2" /> Download Complete Best Practices Guide
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Developer Community</h2>
          <p className="text-muted-foreground mb-6">
            Join our community of developers working on LLM safety. Share knowledge, ask questions, and collaborate on solutions to common challenges.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="w-full" asChild>
              <Link href="https://github.com/llm-safety-simulator" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> GitHub Organization
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="https://discord.gg/llm-safety" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Discord Community
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="https://forum.llm-safety.org" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" /> Developer Forum
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

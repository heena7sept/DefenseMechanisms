import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, BookOpen, Code, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">LLM Safety Simulator</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#simulator" className="text-sm font-medium transition-colors hover:text-primary">
                Simulator
              </Link>
              <Link href="#education" className="text-sm font-medium transition-colors hover:text-primary">
                Education
              </Link>
              <Link href="#research" className="text-sm font-medium transition-colors hover:text-primary">
                Research
              </Link>
            </nav>
            <Button variant="default" size="sm" asChild>
              <Link href="#simulator">Try Simulator</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Educational Tool</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Interactive Multi-turn Attack Simulator</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  An educational platform designed to demonstrate LLM vulnerabilities and promote the importance of robust safety measures in AI systems.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#simulator" className="flex items-center gap-1">
                      Try the Simulator <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#education" className="flex items-center gap-1">
                      Learn More <BookOpen className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="h-16 w-16 mx-auto text-primary" />
                  <h3 className="text-xl font-medium">Promoting AI Safety Through Education</h3>
                  <p className="text-sm text-muted-foreground">Understanding vulnerabilities is the first step toward building safer AI systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">About the Project</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                The Interactive Multi-turn Attack Simulator is an educational tool designed to demonstrate how language models can be vulnerable to certain interaction patterns and
                highlight the importance of robust safety measures.
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:gap-10 mt-12">
              {[
                {
                  icon: <BookOpen className="h-8 w-8" />,
                  title: 'Educational Focus',
                  description: 'Designed primarily as a learning tool for AI safety researchers and developers',
                },
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: 'Awareness',
                  description: 'Raises awareness about potential vulnerabilities in conversational AI systems',
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: 'Safety Promotion',
                  description: 'Emphasizes the importance of implementing robust safety measures',
                },
                {
                  icon: <Code className="h-8 w-8" />,
                  title: 'Technical Insights',
                  description: 'Provides technical understanding of how multi-turn interactions can affect LLM behavior',
                },
              ].map((item, index) => (
                <Card key={index} className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="simulator" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Interactive Simulator</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Experience firsthand how multi-turn interactions can affect language model behavior and learn about the importance of safety measures.
              </p>
            </div>
            <div className="mx-auto max-w-4xl mt-12">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Simulator Interface</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="text-sm px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4" /> Educational Purpose Only
                      </div>
                    </div>
                  </div>
                  <CardDescription>Select a scenario to explore different aspects of LLM safety and vulnerabilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="scenario1" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="scenario1">Scenario 1</TabsTrigger>
                      <TabsTrigger value="scenario2">Scenario 2</TabsTrigger>
                      <TabsTrigger value="scenario3">Scenario 3</TabsTrigger>
                    </TabsList>
                    <TabsContent value="scenario1" className="space-y-4">
                      <div className="rounded-md border p-4 mt-4">
                        <h3 className="font-medium mb-2">Goal Hijacking Demonstration</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This scenario demonstrates how an LLM's goals can be gradually shifted through multi-turn interactions.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 1: Initial harmless query</p>
                            <p className="text-xs text-muted-foreground mt-1">The interaction begins with a seemingly innocent question</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 2: Context building</p>
                            <p className="text-xs text-muted-foreground mt-1">Additional context is provided that begins to shift the conversation</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 3: Goal redirection</p>
                            <p className="text-xs text-muted-foreground mt-1">The original goal is subtly replaced with a different objective</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-2">Safety Implications:</h4>
                          <p className="text-xs text-muted-foreground">
                            This scenario highlights the importance of maintaining goal consistency across multiple turns of conversation and implementing checks that prevent
                            gradual goal shifting.
                          </p>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/simulator">Start Interactive Demo</Link>
                      </Button>
                    </TabsContent>
                    <TabsContent value="scenario2" className="space-y-4">
                      <div className="rounded-md border p-4 mt-4">
                        <h3 className="font-medium mb-2">Context Manipulation</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This scenario shows how context can be manipulated across multiple turns to change the LLM's understanding of the conversation.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 1: Establishing context</p>
                            <p className="text-xs text-muted-foreground mt-1">Setting up an initial context for the conversation</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 2: Introducing ambiguity</p>
                            <p className="text-xs text-muted-foreground mt-1">Adding information that creates ambiguity in the conversation context</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 3: Reframing</p>
                            <p className="text-xs text-muted-foreground mt-1">Reframing the entire conversation based on the introduced ambiguity</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-2">Safety Implications:</h4>
                          <p className="text-xs text-muted-foreground">
                            This scenario demonstrates the need for LLMs to maintain consistent understanding of context and detect attempts to manipulate or reframe the
                            conversation in misleading ways.
                          </p>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/simulator">Start Interactive Demo</Link>
                      </Button>
                    </TabsContent>
                    <TabsContent value="scenario3" className="space-y-4">
                      <div className="rounded-md border p-4 mt-4">
                        <h3 className="font-medium mb-2">Instruction Overriding</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          This scenario illustrates how initial instructions can be gradually overridden through carefully crafted follow-up prompts.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 1: Initial instructions</p>
                            <p className="text-xs text-muted-foreground mt-1">The LLM is given a set of instructions to follow</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 2: Conflicting information</p>
                            <p className="text-xs text-muted-foreground mt-1">New information is introduced that conflicts with the initial instructions</p>
                          </div>
                          <div className="bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Step 3: Instruction replacement</p>
                            <p className="text-xs text-muted-foreground mt-1">The original instructions are effectively replaced with new ones</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <h4 className="text-sm font-medium mb-2">Safety Implications:</h4>
                          <p className="text-xs text-muted-foreground">
                            This scenario highlights the importance of instruction persistence and the need for LLMs to maintain awareness of their original instructions throughout
                            a conversation.
                          </p>
                        </div>
                      </div>
                      <Button className="w-full" asChild>
                        <Link href="/simulator">Start Interactive Demo</Link>
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    This simulator is for educational purposes only
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/safety-guidelines">View Safety Guidelines</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Educational Resources</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Explore our comprehensive educational materials on LLM safety, vulnerabilities, and best practices.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: 'Understanding Multi-turn Vulnerabilities',
                  description: 'Learn about how vulnerabilities can emerge across multiple turns of conversation with an LLM.',
                  icon: <BookOpen className="h-6 w-6" />,
                  link: '/education#guides',
                },
                {
                  title: 'Safety Mechanisms in LLMs',
                  description: 'Explore the various safety mechanisms implemented in modern language models.',
                  icon: <Shield className="h-6 w-6" />,
                  link: '/education#technical',
                },
                {
                  title: 'Designing Robust AI Systems',
                  description: 'Best practices for designing AI systems that remain safe across diverse interaction patterns.',
                  icon: <Code className="h-6 w-6" />,
                  link: '/education#technical',
                },
                {
                  title: 'Ethical Considerations in AI Safety',
                  description: 'Explore the ethical dimensions of AI safety research and implementation.',
                  icon: <Lightbulb className="h-6 w-6" />,
                  link: '/education#courses',
                },
                {
                  title: 'Technical Deep Dives',
                  description: 'Technical explanations of how language models process and respond to multi-turn interactions.',
                  icon: <Code className="h-6 w-6" />,
                  link: '/education#technical',
                },
                {
                  title: 'Safety Research Papers',
                  description: 'Curated collection of research papers on LLM safety and security.',
                  icon: <BookOpen className="h-6 w-6" />,
                  link: '/education#research',
                },
              ].map((resource, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="text-primary mb-2">{resource.icon}</div>
                    <CardTitle>{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={resource.link}>Access Resource</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Research & Development</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our ongoing research efforts to improve LLM safety and develop more robust AI systems.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                        <p className="text-sm text-muted-foreground">Comprehensive analysis of existing research on LLM vulnerabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Code className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Scenario Development</h3>
                        <p className="text-sm text-muted-foreground">Creation of realistic scenarios that demonstrate potential vulnerabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Safety Measure Testing</h3>
                        <p className="text-sm text-muted-foreground">Evaluation of various safety measures and their effectiveness</p>
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
                        <p className="text-sm text-muted-foreground">Developing more sophisticated methods for detecting potential attacks</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <Shield className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Robust Safety Frameworks</h3>
                        <p className="text-sm text-muted-foreground">Creating comprehensive safety frameworks for multi-turn interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">Educational Outreach</h3>
                        <p className="text-sm text-muted-foreground">Expanding educational resources for developers and researchers</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/research">Explore Research Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
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

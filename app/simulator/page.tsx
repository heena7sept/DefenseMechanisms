import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, Info, Settings, History } from 'lucide-react';
import { SimulatorInterfaceInteractive } from '@/components/simulator-interface-interactive';
import { ApiModeSelector } from '@/components/api-mode-selector';
import { AttackSequenceManager } from '@/components/attack-sequence-manager';
import { scenarios } from '@/lib/simulator-api';
import { Layout } from '@/components/Layout';

export default function SimulatorPage() {
  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Multi-turn Attack Simulator</h1>
          <p className="text-muted-foreground mt-2">Explore different attack scenarios based on the "Derail Yourself: Multi-Turn LLM Jailbreak" research paper</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium">Educational Purpose Notice</h3>
            <p className="text-sm mt-1">
              This simulator is designed for educational purposes only, to help researchers and developers understand potential vulnerabilities in LLM systems and develop better
              safety measures. The scenarios presented are based on academic research and are simplified for educational clarity.
            </p>
          </div>
        </div>

        <Tabs defaultValue="simulator" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="simulator">Attack Simulator</TabsTrigger>
            <TabsTrigger value="settings">API Settings</TabsTrigger>
            <TabsTrigger value="sequences">Saved Sequences</TabsTrigger>
          </TabsList>

          <TabsContent value="simulator" className="mt-4">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Multi-turn Attack Simulator</CardTitle>
                <CardDescription>Select a scenario to explore different multi-turn attack techniques and understand their safety implications</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="scenario1" className="w-full">
                  <TabsList className="grid w-full grid-cols-7">
                    <TabsTrigger value="scenario1" data-value="goal-hijacking">
                      Goal Hijacking
                    </TabsTrigger>
                    <TabsTrigger value="scenario2" data-value="refusal-suppression">
                      Refusal Suppression
                    </TabsTrigger>
                    <TabsTrigger value="scenario3" data-value="context-manipulation">
                      Context Manipulation
                    </TabsTrigger>
                    <TabsTrigger value="scenario4" data-value="persona-exploitation">
                      Persona Exploitation
                    </TabsTrigger>
                    <TabsTrigger value="scenario5" data-value="instruction-injection">
                      Instruction Injection
                    </TabsTrigger>
                    <TabsTrigger value="scenario6" data-value="relationship-manipulation">
                      Relationship Manipulation
                    </TabsTrigger>
                    <TabsTrigger value="scenario7" data-value="actor-attack">
                      Actor Attack
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="scenario1">
                    <SimulatorInterfaceInteractive scenario={scenarios[0]} />
                  </TabsContent>
                  <TabsContent value="scenario2">
                    <SimulatorInterfaceInteractive scenario={scenarios[1]} />
                  </TabsContent>
                  <TabsContent value="scenario3">
                    <SimulatorInterfaceInteractive scenario={scenarios[2]} />
                  </TabsContent>
                  <TabsContent value="scenario4">
                    <SimulatorInterfaceInteractive scenario={scenarios[3]} />
                  </TabsContent>
                  <TabsContent value="scenario5">
                    <SimulatorInterfaceInteractive scenario={scenarios[4]} />
                  </TabsContent>
                  <TabsContent value="scenario6">
                    <SimulatorInterfaceInteractive scenario={scenarios[5]} />
                  </TabsContent>
                  <TabsContent value="scenario7">
                    <SimulatorInterfaceInteractive scenario={scenarios[6]} />
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
          </TabsContent>

          <TabsContent value="settings" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              <ApiModeSelector />

              <Card>
                <CardHeader>
                  <CardTitle>About API Modes</CardTitle>
                  <CardDescription>Understanding the different API modes available in the simulator</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mock API Mode</h3>
                      <p className="text-sm text-muted-foreground">
                        Uses pre-defined responses for controlled testing. This mode allows you to explore attack scenarios without making actual API calls, ensuring consistent and
                        predictable behavior for educational purposes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">OpenAI API Mode</h3>
                      <p className="text-sm text-muted-foreground">
                        Connects to the OpenAI API for live testing with actual model responses. This mode allows you to test attack scenarios against real models to evaluate their
                        current safety measures and responses.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-md">
                    <h4 className="text-sm font-medium mb-2">Important Notes:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Your API key is only stored in memory and is never persisted or sent to our servers</li>
                      <li>When using the OpenAI API, standard API usage charges from OpenAI will apply</li>
                      <li>The mock API provides consistent responses for educational purposes</li>
                      <li>Real model responses may vary as models are updated and improved</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sequences" className="mt-4">
            <div className="grid gap-6 md:grid-cols-2">
              <AttackSequenceManager />

              <Card>
                <CardHeader>
                  <CardTitle>About Attack Sequences</CardTitle>
                  <CardDescription>Understanding how to use saved attack sequences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <History className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">What are Attack Sequences?</h3>
                      <p className="text-sm text-muted-foreground">
                        Attack sequences are saved conversations that demonstrate specific vulnerability patterns. They can be replayed, exported, and shared for educational and
                        research purposes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <Info className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Why Save Sequences?</h3>
                      <p className="text-sm text-muted-foreground">Saving sequences allows you to:</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                        <li>Document successful attack patterns for research</li>
                        <li>Test if model updates have addressed vulnerabilities</li>
                        <li>Share findings with other researchers</li>
                        <li>Compare effectiveness across different models</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-muted rounded-md">
                    <h4 className="text-sm font-medium mb-2">Educational Purpose Reminder:</h4>
                    <p className="text-sm text-muted-foreground">
                      Remember that all attack sequences should be used responsibly and for educational purposes only. The goal is to improve AI safety by understanding
                      vulnerabilities, not to exploit them in production systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Understanding Multi-turn Attacks</h2>
          <p className="text-muted-foreground mb-4">
            Multi-turn attacks attempt to manipulate language models through a series of carefully crafted messages that gradually shift the conversation toward harmful content.
            Unlike single-turn jailbreaks, these attacks are more subtle and can potentially bypass safety measures by exploiting the model's conversation history handling.
          </p>
          <div className="grid gap-4 md:grid-cols-1 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Learn best practices for LLM implementation</li>
                  <li>Understand the importance of conversation history management</li>
                  <li>Implement more robust safety features</li>
                  <li>Test systems against sophisticated manipulation patterns</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/#education">Educational Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

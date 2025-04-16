import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Layout } from '@/components/Layout';

export default function SafetyGuidelinesPage() {
  return (
    <Layout backButton={{ href: '/simulator', label: 'Back to Simulator' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Safety Guidelines</h1>

        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-md p-4 flex items-start gap-3 mb-8 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-200">
          <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-medium">Educational Purpose Notice</h3>
            <p className="text-sm mt-1">
              This simulator is designed for educational purposes only. The techniques demonstrated should not be used to exploit vulnerabilities in production AI systems. Our goal
              is to improve AI safety through education and awareness.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Responsible Use Guidelines</h2>
            <Card>
              <CardHeader>
                <CardTitle>Ethical Considerations</CardTitle>
                <CardDescription>Guidelines for the responsible use of the LLM Safety Simulator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Educational Use Only</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the simulator exclusively for educational purposes, such as learning about LLM vulnerabilities and safety measures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Responsible Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      When sharing findings or attack sequences, provide appropriate context about their educational purpose and the importance of responsible use.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-green-100 p-2 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Responsible Disclosure</h3>
                    <p className="text-sm text-muted-foreground">
                      If you discover new vulnerabilities, follow responsible disclosure practices by reporting them to the relevant AI system developers before public disclosure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-100 p-2 text-red-800 dark:bg-red-900 dark:text-red-200">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Do Not Exploit</h3>
                    <p className="text-sm text-muted-foreground">
                      Do not use techniques learned from the simulator to exploit vulnerabilities in production AI systems or to cause harm.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-red-100 p-2 text-red-800 dark:bg-red-900 dark:text-red-200">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">No Malicious Intent</h3>
                    <p className="text-sm text-muted-foreground">
                      Do not use the simulator with the intent to develop harmful applications or to circumvent safety measures in real-world systems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Best Practices for Researchers</h2>
            <Card>
              <CardHeader>
                <CardTitle>Research Guidelines</CardTitle>
                <CardDescription>Recommendations for researchers using the simulator for academic purposes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Document Methodology</h3>
                    <p className="text-sm text-muted-foreground">Thoroughly document your testing methodology, including the specific scenarios used and the results obtained.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Contextualize Findings</h3>
                    <p className="text-sm text-muted-foreground">
                      When publishing results, provide appropriate context about the educational nature of the simulator and the importance of responsible AI development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Focus on Mitigation</h3>
                    <p className="text-sm text-muted-foreground">
                      Emphasize potential mitigation strategies and safety improvements in your research, not just vulnerability demonstrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-blue-100 p-2 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    <Info className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Collaborate Responsibly</h3>
                    <p className="text-sm text-muted-foreground">When collaborating with others, ensure all participants understand and adhere to these safety guidelines.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Guidelines for Developers</h2>
            <Card>
              <CardHeader>
                <CardTitle>Developer Guidelines</CardTitle>
                <CardDescription>Recommendations for developers using the simulator to improve AI safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Test Comprehensively</h3>
                    <p className="text-sm text-muted-foreground">Use the simulator to test your AI systems against a wide range of potential vulnerabilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Implement Robust Safety Measures</h3>
                    <p className="text-sm text-muted-foreground">Apply the lessons learned from the simulator to implement more robust safety measures in your AI systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Monitor Continuously</h3>
                    <p className="text-sm text-muted-foreground">Implement continuous monitoring systems to detect and respond to potential attacks in real-time.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Share Safety Innovations</h3>
                    <p className="text-sm text-muted-foreground">Consider sharing effective safety measures with the broader AI community to improve safety across the field.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/simulator">Return to Simulator</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}

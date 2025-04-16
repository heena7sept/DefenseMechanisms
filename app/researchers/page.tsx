import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/Layout';

export default function ResearchersPage() {
  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Research Resources</h1>
          <p className="text-muted-foreground mt-2">Comprehensive resources for researchers studying LLM safety and vulnerabilities</p>
        </div>

        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="papers">Research Papers</TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="space-y-4 mt-6">
            <div className="grid gap-6">
              {[
                {
                  title: 'Universal and Transferable Adversarial Attacks on Aligned Language Models',
                  authors: 'Zou et al., 2023',
                  abstract: 'This paper demonstrates that adversarial prompts can universally and transferably jailbreak a wide range of LLMs, bypassing their safety alignment.',
                  keywords: ['adversarial prompts', 'jailbreaking', 'transferability'],
                  pdfUrl: 'https://arxiv.org/pdf/2307.15043.pdf',
                  citationUrl: 'https://arxiv.org/abs/2307.15043',
                },
                {
                  title: 'Multi-Turn Context Jailbreak Attack on Large Language Models From First Principles',
                  authors: 'Xiongtao Sun et al., 2024',
                  abstract:
                    'This study proposes the Context Fusion Attack (CFA), a black-box method that constructs contextual scenarios around key terms to conceal malicious intent in multi-turn dialogues. The approach demonstrates superior success rates and effectiveness against models like Llama3 and GPT-4.',
                  keywords: ['context fusion attack', 'multi-turn jailbreak', 'LLM vulnerabilities'],
                  pdfUrl: 'https://arxiv.org/pdf/2408.04686.pdf',
                  citationUrl: 'https://arxiv.org/abs/2408.04686',
                },
                {
                  title: 'Reasoning-Augmented Conversation for Multi-Turn Jailbreak Attacks on Large Language Models',
                  authors: 'Zonghao Ying et al., 2025',
                  abstract:
                    "This paper introduces RACE, a framework that reformulates harmful queries into benign reasoning tasks, leveraging LLMs' reasoning capabilities to bypass safety alignment. It employs an attack state machine to ensure coherent multi-turn interactions, achieving high success rates against models like OpenAI o1 and DeepSeek R1.",
                  keywords: ['multi-turn jailbreak', 'reasoning-augmented conversation', 'LLM safety'],
                  pdfUrl: 'https://arxiv.org/pdf/2502.11054v3.pdf',
                  citationUrl: 'https://arxiv.org/abs/2502.11054',
                },
                {
                  title: 'Jailbreaking Black Box Large Language Models in Twenty Queries',
                  authors: 'Wei et al., 2023',
                  abstract: 'Presents a black-box attack that can jailbreak LLMs with minimal queries, highlighting the vulnerability of deployed models.',
                  keywords: ['black-box attack', 'jailbreaking', 'LLM vulnerability'],
                  pdfUrl: 'https://arxiv.org/pdf/2310.05201.pdf',
                  citationUrl: 'https://arxiv.org/abs/2310.05201',
                },
                {
                  title: 'Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned',
                  authors: 'Ganguli et al., 2022',
                  abstract: 'Describes red teaming approaches for LLMs, scaling behaviors of harmful outputs, and lessons for improving model safety.',
                  keywords: ['red teaming', 'LLM safety', 'harm reduction'],
                  pdfUrl: 'https://arxiv.org/pdf/2209.07858.pdf',
                  citationUrl: 'https://arxiv.org/abs/2209.07858',
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
                      <Link href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" /> PDF
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={paper.citationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Citation
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

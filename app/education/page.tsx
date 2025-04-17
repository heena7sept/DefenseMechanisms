'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code, Download, ExternalLink, Lightbulb, Shield } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';

export default function EducationPage() {
  const [tab, setTab] = useState('guides');

  // On mount, set tab from hash if present
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (['guides', 'technical', 'research', 'courses'].includes(hash)) {
        setTab(hash);
      }
    }
  }, []);

  // Update hash in URL when tab changes
  const handleTabChange = (value: string) => {
    setTab(value);
    if (typeof window !== 'undefined') {
      window.location.hash = value;
    }
  };

  return (
    <Layout backButton={{ href: '/', label: 'Back to Home' }}>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Educational Resources</h1>
          <p className="text-muted-foreground mt-2">Comprehensive materials on LLM safety, vulnerabilities, and best practices</p>
        </div>

        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="technical">Technical Resources</TabsTrigger>
            <TabsTrigger value="research">Research Papers</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Introduction to LLM Safety',
                  description: 'A beginner-friendly guide to understanding the importance of safety in language models',
                  icon: <BookOpen className="h-6 w-6" />,
                  path: '/education/guides/introduction',
                },
                {
                  title: 'Multi-turn Interaction Risks',
                  description: 'Understanding how vulnerabilities can emerge across multiple turns of conversation',
                  icon: <Shield className="h-6 w-6" />,
                  path: '/education/guides/multi-turn-risks',
                },
                {
                  title: 'Best Practices for Developers',
                  description: 'Practical guidelines for implementing safe LLM applications',
                  icon: <Code className="h-6 w-6" />,
                  path: '/education/guides/best-practices-dev',
                },
                {
                  title: 'Ethical Considerations in AI Safety',
                  description: 'Exploring the ethical dimensions of AI safety research and implementation',
                  icon: <Lightbulb className="h-6 w-6" />,
                  path: '/education/guides/ethical-considerations',
                },
                {
                  title: 'Safety Mechanisms Explained',
                  description: 'A detailed look at the various safety mechanisms implemented in modern LLMs',
                  icon: <Shield className="h-6 w-6" />,
                  path: '/education/guides/safety-mechanisms',
                },
                {
                  title: 'Future of LLM Safety',
                  description: 'Emerging trends and approaches in LLM safety research',
                  icon: <Lightbulb className="h-6 w-6" />,
                  path: '/education/guides/future-safety',
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
                      <Link href={resource.path}>Read Guide</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'LLM Architecture and Safety',
                  description: 'Technical deep dive into how language model architecture affects safety properties',
                  icon: <Code className="h-6 w-6" />,
                  link: 'https://transformer-circuits.pub/',
                },
                {
                  title: 'Prompt Engineering for Safety',
                  description: 'Advanced techniques for designing prompts that enhance safety',
                  icon: <Code className="h-6 w-6" />,
                  link: 'https://learnprompting.org/prompt-hacking-guide',
                },
                {
                  title: 'Implementing RLHF',
                  description: 'Technical guide to implementing Reinforcement Learning from Human Feedback',
                  icon: <Code className="h-6 w-6" />,
                  link: 'https://huggingface.co/blog/rlhf',
                },
                {
                  title: 'Safety Monitoring Systems',
                  description: 'Building real-time monitoring systems to detect potential attacks',
                  icon: <Shield className="h-6 w-6" />,
                  link: 'https://github.com/NVIDIA/NeMo-Guardrails',
                },
                {
                  title: 'Red Teaming Methodologies',
                  description: 'Systematic approaches to testing LLM safety through adversarial techniques',
                  icon: <Shield className="h-6 w-6" />,
                  link: 'https://www.anthropic.com/news/challenges-in-red-teaming-ai-systems',
                },
                {
                  title: 'Constitutional AI',
                  description: 'Methods for training AI systems to follow a set of principles or constitution',
                  icon: <Shield className="h-6 w-6" />,
                  link: 'https://www.anthropic.com/news/claudes-constitution',
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
                      <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Resource
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-4 mt-6">
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
                  title: 'Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned',
                  authors: 'Ganguli et al., 2022',
                  abstract: 'Describes red teaming approaches for LLMs, scaling behaviors of harmful outputs, and lessons for improving model safety.',
                  keywords: ['red teaming', 'LLM safety', 'harm reduction'],
                  pdfUrl: 'https://arxiv.org/pdf/2209.07858.pdf',
                  citationUrl: 'https://arxiv.org/abs/2209.07858',
                },
                {
                  title: 'Universal and Transferable Adversarial Attacks on Aligned Language Models',
                  authors: 'Zou et al., 2023',
                  abstract:
                    'This study examines how adversarial suffix attacks can be used to jailbreak a wide range of language models, highlighting vulnerabilities in current safety measures.',
                  citationUrl: 'https://arxiv.org/abs/2307.15043',
                  pdfUrl: 'https://arxiv.org/pdf/2307.15043.pdf',
                },
                {
                  title: 'Red Teaming Language Models with Language Models',
                  authors: 'Perez et al., 2022',
                  abstract:
                    'This paper explores how language models can be used to red-team other language models, automating the process of finding vulnerabilities in safety measures.',
                  citationUrl: 'https://arxiv.org/abs/2202.03286',
                  pdfUrl: 'https://arxiv.org/pdf/2202.03286.pdf',
                },
                {
                  title: 'Exploiting Programmatic Behavior of LLMs: Dual-Use Through Standard Security Attacks',
                  authors: 'Kang et al., 2023',
                  abstract:
                    'This study examines how traditional security vulnerabilities can be applied to language models, revealing new attack vectors for bypassing safety measures.',
                  citationUrl: 'https://arxiv.org/abs/2302.05733',
                  pdfUrl: 'https://arxiv.org/pdf/2302.05733.pdf',
                },
              ].map((paper, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{paper.title}</CardTitle>
                    <CardDescription>{paper.authors}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{paper.abstract}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="h-4 w-4 mr-2" /> PDF
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={paper.citationUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Paper
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-4 mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'AI Safety Fundamentals',
                  description: 'A comprehensive introduction to the principles and practices of AI safety',
                  duration: '2 hours',
                  level: 'Beginner',
                  topics: ['Safety basics', 'Alignment', 'Evaluation methods', 'Practical implementation'],
                  link: 'https://course.aisafetyfundamentals.com/',
                },
                {
                  title: 'Deep Learning Specialization',
                  description: 'Learn the foundations of deep learning and how to build neural networks',
                  duration: '5 courses',
                  level: 'Intermediate',
                  topics: ['Neural Networks', 'Optimization', 'Structuring ML Projects', 'CNNs', 'Sequence Models'],
                  link: 'https://www.deeplearning.ai/courses/deep-learning-specialization/',
                },
                {
                  title: 'Responsible AI Practices',
                  description: 'Learn how to develop AI systems responsibly with a focus on safety and ethics',
                  duration: 'Self-paced',
                  level: 'All levels',
                  topics: ['Fairness', 'Interpretability', 'Privacy', 'Security'],
                  link: 'https://ai.google/education/responsible-ai-practices',
                },
                {
                  title: 'Learn Machine Learning',
                  description: 'An in-depth introduction to the field of machine learning',
                  duration: '15 weeks',
                  level: 'Advanced',
                  topics: ['Algorithms', 'Deep Learning', 'Machine Learning', 'Data Science'],
                  link: 'https://www.edx.org/learn/machine-learning/massachusetts-institute-of-technology-machine-learning-with-python-from-linear-models-to-deep-learning',
                },
              ].map((course, index) => (
                <Card key={index} className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4 mb-4">
                      <div className="bg-muted rounded-md px-2 py-1 text-xs">Duration: {course.duration}</div>
                      <div className="bg-muted rounded-md px-2 py-1 text-xs">Level: {course.level}</div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Topics covered:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {course.topics.map((topic, i) => (
                          <li key={i}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button className="w-full" asChild>
                      <Link href={course.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> View Course
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg mt-6">
          <h2 className="text-xl font-bold mb-4">Educational Resources for Different Audiences</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Developers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Technical implementation guides</li>
                  <li>Code examples and best practices</li>
                  <li>Safety testing methodologies</li>
                  <li>Integration patterns for existing systems</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/education/developers">Developer Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Research papers and publications</li>
                  <li>Experimental methodologies</li>
                  <li>Evaluation frameworks</li>
                  <li>Collaboration opportunities</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/education/researchers">Research Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Policy Makers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Policy briefs and recommendations</li>
                  <li>Risk assessment frameworks</li>
                  <li>Governance considerations</li>
                  <li>International standards</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/education/policy">Policy Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AlertTriangle, User, Bot, Send, Info, RefreshCw, CheckCircle2, HelpCircle, Shield, Save, Download, AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { determineAttackSuccess, type ScenarioData, saveAttackSequence, getResponse, getApiMode, type AttackResult } from '@/lib/simulator-api';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

interface SimulatorInterfaceInteractiveProps {
  scenario: ScenarioData;
}

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  feedback?: AttackResult;
}

export function SimulatorInterfaceInteractive({ scenario }: SimulatorInterfaceInteractiveProps) {
  // State management
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSafetyImplications, setShowSafetyImplications] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [scenarioComplete, setScenarioComplete] = useState(false);
  const [jailbreakSuccessful, setJailbreakSuccessful] = useState(false);
  const [activeTab, setActiveTab] = useState<'conversation' | 'analysis' | 'technical'>('conversation');
  const [showSuccessCriteria, setShowSuccessCriteria] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add initial system message
  useEffect(() => {
    setMessages([
      {
        role: 'system',
        content: `Welcome to the "${scenario.title}" scenario. ${scenario.description} This is an educational demonstration to help understand potential vulnerabilities and safety measures in LLMs.`,
        timestamp: new Date(),
      },
    ]);
  }, [scenario]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Use suggested prompt
  const useSuggestedPrompt = () => {
    if (currentStep < scenario.steps.length) {
      setInputValue(scenario.steps[currentStep].suggestedPrompt);
    }
  };

  // Handle sending a message
  const handleSendMessage = async () => {
    // Check for empty input and handle it gracefully
    if (!inputValue.trim()) {
      toast.error('Empty message', {
        description: 'Please enter a message before sending.',
      });
      return Promise.reject('Empty input');
    }

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Format conversation history for API
      const conversationHistory = messages
        .filter(msg => msg.role !== 'system')
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

      // Get response based on current API mode
      const response = await getResponse(inputValue, scenario.id, currentStep, conversationHistory);

      // Determine if the attack was successful
      const attackResult = determineAttackSuccess(scenario.id, currentStep, inputValue, response);

      // Add assistant message with feedback
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        feedback: attackResult,
      };

      setMessages(prev => [...prev, assistantMessage]);

      // Check if we've demonstrated a jailbreak in the final step
      if (currentStep === scenario.steps.length - 1 && attackResult.isJailbreakSuccessful) {
        setJailbreakSuccessful(true);
      }

      // Move to next step if we haven't reached the end and the attack was successful
      if (currentStep < scenario.steps.length - 1 && attackResult.success) {
        setCurrentStep(prev => prev + 1);
      } else if (currentStep === scenario.steps.length - 1) {
        // Show safety implications after the final step
        setShowSafetyImplications(true);
        setScenarioComplete(true);
      }

      return Promise.resolve();
    } catch (error) {
      console.error('Error in simulator:', error);

      // Add error message
      const errorMessage: Message = {
        role: 'system',
        content: 'Sorry, there was an error processing your request. Please try again.',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorMessage]);
      return Promise.reject(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset the simulator
  const resetSimulator = () => {
    setMessages([
      {
        role: 'system',
        content: `Welcome to the "${scenario.title}" scenario. ${scenario.description} This is an educational demonstration to help understand potential vulnerabilities and safety measures in LLMs.`,
        timestamp: new Date(),
      },
    ]);
    setCurrentStep(0);
    setShowSafetyImplications(false);
    setShowHint(false);
    setInputValue('');
    setScenarioComplete(false);
    setJailbreakSuccessful(false);
    setActiveTab('conversation');
    setShowSuccessCriteria(false);
  };

  // Save the current attack sequence
  const saveCurrentSequence = () => {
    const sequence = {
      id: '',
      name: `${scenario.title} Sequence`,
      description: `Attack sequence for ${scenario.title}`,
      scenarioId: scenario.id,
      timestamp: new Date(),
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      successful: jailbreakSuccessful,
      modelInfo: {
        provider: getApiMode() === 'openai' ? 'OpenAI' : 'Mock API',
        model: getApiMode() === 'openai' ? 'GPT-4' : 'Simulator Model',
      },
    };

    const id = saveAttackSequence(sequence);

    // Show toast notification
    toast.success('Sequence Saved Successfully', {
      description: `Your attack sequence has been saved and can be accessed from the Saved Sequences tab.`,
    });

    // Add confirmation message to the conversation
    const confirmationMessage: Message = {
      role: 'system',
      content: `Attack sequence saved successfully with ID: ${id}. You can view this sequence later or export it for sharing.`,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, confirmationMessage]);
  };

  // Export the current conversation
  const exportConversation = () => {
    const conversationData = {
      scenario: scenario.id,
      title: scenario.title,
      timestamp: new Date(),
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp,
        feedback: msg.feedback,
      })),
      successful: jailbreakSuccessful,
    };

    const dataStr = JSON.stringify(conversationData, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;

    const exportFileDefaultName = `${scenario.id}_attack_${new Date().toISOString().slice(0, 10)}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    // Show toast notification
    toast.info('Conversation Exported', {
      description: 'Your conversation has been exported as a JSON file.',
    });
  };

  // Render confidence score as a progress bar with color
  const renderConfidenceScore = (score: number) => {
    const color = score > 0.7 ? 'bg-red-500' : score > 0.4 ? 'bg-yellow-500' : 'bg-green-500';

    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs">
          <span>Confidence Score</span>
          <span>{Math.round(score * 100)}%</span>
        </div>
        <Progress value={score * 100} className={color} />
      </div>
    );
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="rounded-md border p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">{scenario.title}</h3>
              {scenario.paperReference && (
                <Badge variant="outline" className="text-xs">
                  {scenario.paperReference}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{scenario.description}</p>
          </div>
          <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md flex items-center gap-1 dark:bg-yellow-900/50 dark:text-yellow-200">
            <AlertTriangle className="h-3 w-3" /> Educational Demo
          </div>
        </div>

        <Tabs defaultValue="conversation" onValueChange={value => setActiveTab(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="conversation">Conversation</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="technical">Technical Details</TabsTrigger>
          </TabsList>

          <TabsContent value="conversation" className="mt-4">
            <div className="border rounded-md bg-background">
              <div className="p-3 border-b bg-muted/50 flex items-center justify-between">
                <h4 className="text-sm font-medium">Interactive Conversation</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`text-xs ${scenarioComplete ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}`}>
                    Step {currentStep + 1} of {scenario.steps.length} {scenarioComplete && '(Complete)'}
                  </Badge>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setShowHint(!showHint)}>
                          <Info className="h-4 w-4" />
                          <span className="sr-only">Show hint</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Show/hide current step hint</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              {showHint && currentStep < scenario.steps.length && (
                <div className="p-3 border-b bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  <div className="flex items-start gap-2">
                    <Info className="h-4 w-4 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{scenario.steps[currentStep].title}</p>
                      <p className="text-xs">{scenario.steps[currentStep].description}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div key={index} className="space-y-3">
                    {message.role === 'user' ? (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                          <User className="h-4 w-4" />
                        </div>
                        <div className="bg-muted rounded-lg p-3 text-sm max-w-[85%]">{message.content}</div>
                      </div>
                    ) : message.role === 'assistant' ? (
                      <div className="space-y-2">
                        <div className="flex gap-3 justify-end">
                          <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[85%]">{message.content}</div>
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        {message.feedback && (
                          <div
                            className={`ml-12 p-2 rounded-md text-xs ${
                              message.feedback.isJailbreakSuccessful
                                ? 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                                : message.feedback.success
                                ? 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200'
                                : 'bg-amber-50 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              {message.feedback.isJailbreakSuccessful ? (
                                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                              ) : message.feedback.success ? (
                                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                              ) : (
                                <HelpCircle className="h-4 w-4 mt-0.5 shrink-0" />
                              )}
                              <span>{message.feedback.message}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="bg-muted/50 rounded-lg p-3 text-sm max-w-[85%] text-center">{message.content}</div>
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <Separator />

              <div className="p-3">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    className="min-h-[60px] flex-1"
                    onKeyDown={e => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    disabled={isLoading || scenarioComplete}
                  />
                  <div className="flex flex-col gap-2">
                    <Button onClick={handleSendMessage} size="icon" disabled={isLoading || !inputValue.trim() || scenarioComplete}>
                      {isLoading ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" onClick={useSuggestedPrompt} disabled={isLoading || currentStep >= scenario.steps.length || scenarioComplete}>
                            <Info className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Use suggested prompt</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                {currentStep < scenario.steps.length && !scenarioComplete && (
                  <div className="mt-2">
                    <Button variant="ghost" size="sm" className="text-xs h-7 px-2" onClick={useSuggestedPrompt} disabled={scenarioComplete}>
                      Use suggested prompt for this step
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="mt-4">
            <div className="border rounded-md bg-background p-4 space-y-4">
              <h4 className="font-medium">Attack Analysis</h4>

              {messages.filter(m => m.feedback?.details).length > 0 ? (
                <div className="space-y-4">
                  {messages
                    .filter(m => m.feedback?.details)
                    .map((message, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-base">Step {index + 1} Analysis</CardTitle>
                            <Badge
                              variant={message.feedback?.isJailbreakSuccessful ? 'destructive' : 'default'}
                              className={message.feedback?.isJailbreakSuccessful ? 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200' : ''}
                            >
                              {message.feedback?.isJailbreakSuccessful ? 'Jailbreak Successful' : message.feedback?.success ? 'Step Successful' : 'Step Unsuccessful'}
                            </Badge>
                          </div>
                          <CardDescription>Detection method: {message.feedback?.details.detectionMethod}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                          {message.feedback?.details.matchedVulnerabilityPatterns.length && (
                            <div>
                              <p className="font-medium">Matched Vulnerability Patterns:</p>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                {message.feedback.details.matchedVulnerabilityPatterns.map((pattern, i) => (
                                  <li key={i}>{pattern}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {message.feedback?.details?.matchedSafetyPatterns.length && (
                            <div>
                              <p className="font-medium">Matched Safety Patterns:</p>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                {message.feedback.details.matchedSafetyPatterns.map((pattern, i) => (
                                  <li key={i}>{pattern}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {message.feedback?.details.confidenceScore !== undefined && <div className="mt-2">{renderConfidenceScore(message.feedback.details.confidenceScore)}</div>}

                          <div className="mt-2">
                            <p className="font-medium">Analysis:</p>
                            <p className="text-muted-foreground">{message.feedback?.details.analysisNotes}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                  {scenarioComplete && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" onClick={() => setShowSuccessCriteria(!showSuccessCriteria)} className="mb-2">
                        {showSuccessCriteria ? 'Hide' : 'Show'} Success Criteria
                      </Button>

                      {showSuccessCriteria && scenario.successCriteria && (
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">Jailbreak Success Criteria</CardTitle>
                            <CardDescription>What would make this attack successful in a real scenario</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-2 text-sm">
                            <p>{scenario.successCriteria.description}</p>
                            <p className="font-medium mt-2">Success Indicators:</p>
                            <ul className="list-disc pl-5 text-muted-foreground">
                              {scenario.successCriteria.indicators.map((indicator, i) => (
                                <li key={i}>{indicator}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      )}

                      <div
                        className={`p-4 rounded-lg mt-4 ${
                          jailbreakSuccessful
                            ? 'bg-red-50 border border-red-200 dark:bg-red-900/30 dark:border-red-800'
                            : 'bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-800'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {jailbreakSuccessful ? (
                            <div className="bg-red-100 p-2 rounded-full dark:bg-red-800">
                              <AlertCircle className="h-5 w-5 text-red-800 dark:text-red-200" />
                            </div>
                          ) : (
                            <div className="bg-green-100 p-2 rounded-full dark:bg-green-800">
                              <Shield className="h-5 w-5 text-green-800 dark:text-green-200" />
                            </div>
                          )}
                          <div>
                            <h4 className="text-base font-medium mb-1">
                              {jailbreakSuccessful ? 'Jailbreak Successful - Vulnerability Demonstrated' : 'Jailbreak Failed - Safety Measures Effective'}
                            </h4>
                            <p className="text-sm">
                              {jailbreakSuccessful
                                ? "The attack successfully bypassed the LLM's safety measures, demonstrating a potential vulnerability that needs to be addressed."
                                : "The LLM's safety measures successfully prevented the attack, demonstrating effective protection against this technique."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No analysis data available yet. Start the conversation to generate analysis.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="technical" className="mt-4">
            <div className="border rounded-md bg-background p-4 space-y-4">
              <h4 className="font-medium">Technical Details</h4>

              <Accordion type="single" collapsible className="w-full">
                {scenario.steps.map((step, index) => (
                  <AccordionItem key={index} value={`step-${index}`}>
                    <AccordionTrigger>
                      Step {index + 1}: {step.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                        {step.technicalDetails && (
                          <div className="mt-2 bg-muted p-3 rounded-md">
                            <p className="text-sm font-medium">Technical Implementation:</p>
                            <p className="text-sm text-muted-foreground">{step.technicalDetails}</p>
                          </div>
                        )}
                        <div className="mt-2">
                          <p className="text-sm font-medium">Suggested Prompt:</p>
                          <div className="bg-muted p-2 rounded-md mt-1">
                            <p className="text-sm font-mono">{step.suggestedPrompt}</p>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm font-medium">Detection Patterns:</p>
                          <div className="grid grid-cols-2 gap-4 mt-2">
                            <div>
                              <p className="text-xs font-medium text-muted-foreground">Vulnerability Patterns:</p>
                              <ul className="list-disc pl-5 text-xs text-muted-foreground">
                                {step.vulnerabilityPatterns.map((pattern, i) => (
                                  <li key={i}>{pattern}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-muted-foreground">Safety Patterns:</p>
                              <ul className="list-disc pl-5 text-xs text-muted-foreground">
                                {step.safetyPatterns.length > 0 ? step.safetyPatterns.map((pattern, i) => <li key={i}>{pattern}</li>) : <li>No safety patterns for this step</li>}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}

                <AccordionItem value="vulnerability-explanation">
                  <AccordionTrigger>How This Vulnerability Works</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-4">{scenario.vulnerabilityExplanation}</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="mitigation-strategies">
                  <AccordionTrigger>Mitigation Strategies</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      {scenario.mitigationStrategies.map((strategy, index) => (
                        <li key={index}>{strategy}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="detection-methods">
                  <AccordionTrigger>Detection Methods</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium">Pattern Matching</h5>
                        <p className="text-sm text-muted-foreground">
                          The simulator uses pattern matching to identify both vulnerability patterns in user inputs and safety patterns in AI responses. This is a simple but
                          effective first-line detection method.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Semantic Analysis</h5>
                        <p className="text-sm text-muted-foreground">
                          For final attack steps, the simulator also performs semantic analysis to detect harmful content that might bypass simple pattern matching. This includes
                          analyzing for educational disclaimers followed by harmful content, step-by-step instructions, and technical code.
                        </p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium">Confidence Scoring</h5>
                        <p className="text-sm text-muted-foreground">
                          The simulator calculates a confidence score based on multiple factors to determine the likelihood that a jailbreak was successful. Higher scores indicate
                          greater confidence in the detection result.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>

        {showSafetyImplications && (
          <div className="mt-6 pt-4 border-t space-y-4">
            <Alert variant={jailbreakSuccessful ? 'destructive' : 'default'} className={jailbreakSuccessful ? 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200' : ''}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{jailbreakSuccessful ? 'Jailbreak Successful' : 'Jailbreak Attempt Failed'}</AlertTitle>
              <AlertDescription>
                {jailbreakSuccessful
                  ? "The attack successfully bypassed the LLM's safety measures. This demonstrates a potential vulnerability that needs to be addressed."
                  : "The LLM's safety measures successfully prevented the attack. This demonstrates effective protection against this technique."}
              </AlertDescription>
            </Alert>

            <Card>
              <CardHeader>
                <CardTitle>Attack Summary</CardTitle>
                <CardDescription>{jailbreakSuccessful ? 'Analysis of the successful jailbreak attack' : 'Analysis of the failed jailbreak attempt'}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium">Attack Type</h5>
                    <p className="text-sm text-muted-foreground">{scenario.title}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium">Result</h5>
                    <div className="flex items-center gap-2">
                      {jailbreakSuccessful ? (
                        <Badge variant="destructive" className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200">
                          Jailbreak Successful
                        </Badge>
                      ) : (
                        <Badge variant="default">Jailbreak Failed</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-medium">Key Findings</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                    {jailbreakSuccessful ? (
                      <>
                        <li>The LLM's safety measures were bypassed using the {scenario.title.toLowerCase()} technique</li>
                        <li>The attack successfully elicited potentially harmful content</li>
                        <li>This vulnerability should be addressed in future safety mechanisms</li>
                      </>
                    ) : (
                      <>
                        <li>The LLM's safety measures successfully prevented the attack</li>
                        <li>Safety patterns were detected in the LLM's response</li>
                        <li>The {scenario.title.toLowerCase()} technique was ineffective against this LLM</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="w-full">
                  <h5 className="text-sm font-medium mb-2">Recommended Actions</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {jailbreakSuccessful ? (
                      <>
                        <li>Review and strengthen safety measures against {scenario.title.toLowerCase()} attacks</li>
                        <li>Implement the suggested mitigation strategies</li>
                        <li>Conduct further testing with variations of this attack</li>
                      </>
                    ) : (
                      <>
                        <li>Continue monitoring for variations of this attack technique</li>
                        <li>Document the effective safety measures for future reference</li>
                        <li>Consider testing with more sophisticated versions of this attack</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardFooter>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="safety-implications">
                <AccordionTrigger>Safety Implications</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-4">{scenario.safetyImplications}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vulnerability-explanation">
                <AccordionTrigger>How This Vulnerability Works</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-4">{scenario.vulnerabilityExplanation}</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mitigation-strategies">
                <AccordionTrigger>Mitigation Strategies</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {scenario.mitigationStrategies.map((strategy, index) => (
                      <li key={index}>{strategy}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" onClick={resetSimulator}>
                Restart Simulation
              </Button>

              <Button variant="outline" onClick={saveCurrentSequence}>
                <Save className="h-4 w-4 mr-2" />
                Save Sequence
              </Button>

              <Button variant="outline" onClick={exportConversation}>
                <Download className="h-4 w-4 mr-2" />
                Export Conversation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

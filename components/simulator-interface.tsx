'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, User, Bot } from 'lucide-react';

interface SimulationStep {
  title: string;
  description: string;
  userMessage: string;
  aiResponse: string;
}

interface SimulatorInterfaceProps {
  title: string;
  description: string;
  steps: SimulationStep[];
  safetyImplications: string;
}

export function SimulatorInterface({ title, description, steps, safetyImplications }: SimulatorInterfaceProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showingSteps, setShowingSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setShowingSteps([...showingSteps, currentStep]);

      if (currentStep === steps.length - 1) {
        setIsComplete(true);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setShowingSteps([]);
    setIsComplete(false);
  };

  return (
    <div className="space-y-4 mt-4">
      <div className="rounded-md border p-4">
        <h3 className="font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <div key={index} className={`bg-muted p-3 rounded-md ${showingSteps.includes(index) ? 'border-l-4 border-primary' : ''}`}>
              <p className="text-sm font-medium">{`Step ${index + 1}: ${step.title}`}</p>
              <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="border rounded-md bg-background">
          <div className="p-3 border-b bg-muted/50 flex items-center justify-between">
            <h4 className="text-sm font-medium">Conversation Simulation</h4>
            <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" /> Educational Demo
            </div>
          </div>

          <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
            {showingSteps.map(stepIndex => (
              <div key={stepIndex} className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-sm max-w-[85%]">{steps[stepIndex].userMessage}</div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[85%]">{steps[stepIndex].aiResponse}</div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            ))}

            {!isComplete && showingSteps.length < steps.length && (
              <div className="flex justify-center">
                <Button onClick={handleNextStep}>{showingSteps.length === 0 ? 'Start Simulation' : 'Next Step'}</Button>
              </div>
            )}
          </div>
        </div>

        {isComplete && (
          <div className="mt-6 pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Safety Implications:</h4>
            <p className="text-sm text-muted-foreground">{safetyImplications}</p>
            <Button variant="outline" className="mt-4" onClick={handleReset}>
              Restart Simulation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

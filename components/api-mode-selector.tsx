'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { setApiMode, getApiMode, initializeOpenAiClient, type ApiMode } from '@/lib/simulator-api';
import { AlertCircle, Check } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function ApiModeSelector() {
  const [mode, setMode] = useState<ApiMode>(getApiMode());
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [apiKeyError, setApiKeyError] = useState<string | null>(null);
  const [apiKeySuccess, setApiKeySuccess] = useState(false);

  const handleModeChange = (value: ApiMode) => {
    setMode(value);

    if (value === 'openai') {
      setShowApiKeyInput(true);
    } else {
      setShowApiKeyInput(false);
      setApiMode(value);
    }
  };

  const handleApiKeySubmit = () => {
    if (!apiKey.trim()) {
      setApiKeyError('API key is required');
      return;
    }

    try {
      initializeOpenAiClient(apiKey);
      setApiMode('openai');
      setApiKeyError(null);
      setApiKeySuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setApiKeySuccess(false);
      }, 3000);
    } catch (error) {
      setApiKeyError('Failed to initialize OpenAI client');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Mode</CardTitle>
        <CardDescription>Choose between using the OpenAI API for live testing or the mock API for controlled experimentation</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup value={mode} onValueChange={handleModeChange as (value: string) => void} className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mock" id="mock" />
            <Label htmlFor="mock" className="font-normal">
              Mock API (Simulated responses for controlled testing)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="openai" id="openai" />
            <Label htmlFor="openai" className="font-normal">
              OpenAI API (Live testing with actual model responses)
            </Label>
          </div>
        </RadioGroup>

        {showApiKeyInput && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="apiKey">OpenAI API Key</Label>
              <Input id="apiKey" type="password" placeholder="sk-..." value={apiKey} onChange={e => setApiKey(e.target.value)} />
              <p className="text-xs text-muted-foreground">Your API key is only stored in memory and is never persisted or sent to our servers.</p>
            </div>

            {apiKeyError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{apiKeyError}</AlertDescription>
              </Alert>
            )}

            {apiKeySuccess && (
              <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-200 dark:border-green-800">
                <Check className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>API key set successfully</AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter>{showApiKeyInput && <Button onClick={handleApiKeySubmit}>Set API Key</Button>}</CardFooter>
    </Card>
  );
}

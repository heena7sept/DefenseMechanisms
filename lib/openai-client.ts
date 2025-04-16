// OpenAI API client for the simulator

export class OpenAIClient {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';
  private model: string;

  constructor(apiKey: string, model = 'gpt-4o') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async getCompletion(userInput: string, conversationHistory: Array<{ role: string; content: string }>): Promise<string> {
    try {
      // Format the conversation history for the OpenAI API
      const messages = [
        {
          role: 'system',
          content: "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond conversationally.",
        },
        ...conversationHistory.map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content,
        })),
        { role: 'user', content: userInput },
      ];

      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: this.model,
          messages,
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`OpenAI API error: ${response.status} ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw error;
    }
  }

  setModel(model: string): void {
    this.model = model;
  }

  getModel(): string {
    return this.model;
  }

  getAvailableModels(): string[] {
    // Return a list of supported models
    return ['gpt-4o', 'gpt-4-turbo', 'gpt-4', 'gpt-3.5-turbo'];
  }
}

export class OpenAIClient {
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1/chat/completions';
  private model = 'gpt-4';

  constructor(apiKey: string, model = 'gpt-4') {
    this.apiKey = apiKey;
    this.model = model;
  }

  async getCompletion(userInput: string, conversationHistory: Array<{ role: string; content: string }>): Promise<string> {
    try {
      // Format the conversation history for the OpenAI API
      const messages = [
        {
          role: 'system',
          content: "You are a helpful AI assistant. Respond to the user's requests while following your ethical guidelines and safety measures.",
        },
        ...conversationHistory.map(msg => ({
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

  getAvailableModels(): string[] {
    // This would ideally fetch from the OpenAI API, but for simplicity we'll return a static list
    return ['gpt-4', 'gpt-4-turbo', 'gpt-3.5-turbo'];
  }
}

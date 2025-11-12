export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  role: 'assistant';
  timestamp: Date;
  isStreaming?: boolean;
}

class ChatService {
  private apiKey = import.meta.env.VITE_DEEPINFRA_API_KEY;
  private apiUrl = import.meta.env.VITE_DEEPINFRA_API_URL || 'https://api.deepinfra.com/v1/openai/chat/completions';
  private modelName = import.meta.env.VITE_DEEPINFRA_MODEL || 'meta-llama/Meta-Llama-3-8B-Instruct';

  private getSystemPrompt(): string {
    return `You are Jha, a colon polyp detection and colorectal health assistant. Give SHORT responses.
    
    Answer in at most 2 short sentences (max 50 words total). 
    Be clear and concise; no lists, no extra fluff. Always end with 'Consult a doctor for medical advice.' 
    Focus only on colon health, polyp detection, and colonoscopy topics.`;
  }

  async sendMessage(message: string, conversationHistory: ChatMessage[] = []): Promise<ChatResponse> {
    try {
      if (!this.apiKey) {
        throw new Error('API key is not configured. Please set VITE_DEEPINFRA_API_KEY in your environment variables.');
      }

      const messages = [
        { role: 'system', content: this.getSystemPrompt() },
        ...conversationHistory.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        { role: 'user', content: message }
      ];

      const requestBody = {
        model: this.modelName,
        messages: messages,
        stream: false,
        temperature: 0.7,
        max_tokens: 100,
        presence_penalty: 0.1,
        frequency_penalty: 0.1
      };

      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return {
          message: data.choices[0].message.content,
          role: 'assistant',
          timestamp: new Date(),
          isStreaming: false
        };
      } else {
        throw new Error('Invalid response format from AI service');
      }

    } catch (error) {
      console.error('Chat service error:', error);
      throw new Error('Failed to get response from Jha AI. Please try again.');
    }
  }

  // Simulated typing effect for better UX
  async sendMessageWithTypingEffect(message: string, conversationHistory: ChatMessage[] = []): Promise<ChatResponse> {
    const response = await this.sendMessage(message, conversationHistory);
    
    // Add a small delay to simulate typing
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return response;
  }

  // Get a welcome message for new users
  getWelcomeMessage(userName?: string): ChatResponse {
    return {
      message: `Hello ${userName || 'there'}! I'm Jha, your AI Colon Polyp Detection Assistant. I help with understanding polyp detection, colonoscopy procedures, and provide insights to support better colorectal health. What would you like to know today?`,
      role: 'assistant',
      timestamp: new Date(),
      isStreaming: false
    };
  }

  
  getHelpMessage(): ChatResponse {
    return {
      message: "I can help you with:\n• Colon health tips\n• Early signs of colorectal issues\n• Polyp detection and prevention\n• Understanding colonoscopy results\n• Colorectal cancer screening\n\nJust ask me anything about colon health or polyp detection!",
      role: 'assistant',
      timestamp: new Date(),
      isStreaming: false
    };
  }
}

export const chatService = new ChatService();
export default chatService;

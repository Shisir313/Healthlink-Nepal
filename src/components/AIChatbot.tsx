import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Minimize2, User, Pill, Thermometer, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'connecting'>('connected');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '**Hello!** I\'m your AI health assistant. How can I help you today?\n\n*Feel free to ask about symptoms, general health advice, or wellness tips.*',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const renderMarkdown = (text: string) => {
    // Simple markdown renderer for basic formatting
    let formatted = text;
    
    // Bold: **text** or __text__
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/__(.*?)__/g, '<strong>$1</strong>');
    
    // Italic: *text* or _text_
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/_(.*?)_/g, '<em>$1</em>');
    
    // Code: `text`
    formatted = formatted.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">$1</code>');
    
    // Line breaks
    formatted = formatted.replace(/\n/g, '<br />');
    
    // Lists: - item or * item
    formatted = formatted.replace(/^[\-\*]\s(.+)$/gm, '<li class="ml-4">• $1</li>');
    
    // Numbers: 1. item
    formatted = formatted.replace(/^\d+\.\s(.+)$/gm, '<li class="ml-4 list-decimal">$1</li>');
    
    return formatted;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setConnectionStatus('connecting');

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY || 'your-api-key-here'}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI health assistant. Provide helpful, accurate health information while always recommending users consult healthcare professionals for serious concerns. Keep responses concise and friendly. Use markdown formatting like **bold** for important points, *italic* for emphasis, and `code` for medical terms or dosages. Use bullet points with - for lists when helpful.'
            },
            {
              role: 'user',
              content: currentInput
            }
          ],
          max_tokens: 150,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API Error:', response.status, errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || 'Sorry, I couldn\'t process that request.';

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Error details:', error);
      setConnectionStatus('disconnected');
      
      // Provide a more helpful fallback response based on common health topics
      let fallbackResponse = '**Connection Issue** - I\'m currently having trouble connecting. ';
      
      const lowerInput = currentInput.toLowerCase();
      if (lowerInput.includes('headache') || lowerInput.includes('pain')) {
        fallbackResponse += 'For **headaches**, try:\n- Rest in a quiet, dark room\n- Stay hydrated\n- Use over-the-counter pain relievers like `ibuprofen` or `acetaminophen`\n\n*Consult a doctor if severe or persistent.*';
      } else if (lowerInput.includes('fever') || lowerInput.includes('temperature')) {
        fallbackResponse += 'For **fever**, remember to:\n- Stay well hydrated\n- Get plenty of rest\n- Monitor your temperature regularly\n\n*Seek medical attention if fever is high (>101.3°F/38.5°C) or persistent.*';
      } else if (lowerInput.includes('cough') || lowerInput.includes('cold')) {
        fallbackResponse += 'For **cough or cold** symptoms:\n- Rest and stay hydrated\n- Consider throat lozenges\n- Use a humidifier if available\n\n*See a doctor if symptoms worsen or persist beyond a week.*';
      } else {
        fallbackResponse += 'Please consult with a **healthcare professional** for personalized medical advice. *Try asking again in a moment.*';
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="fixed bottom-24 right-4 z-50 md:bottom-6">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-white"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] md:bottom-24">
          <Card className={`shadow-2xl border-0 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-md transition-all duration-300 ${
            isMinimized ? 'h-12' : 'h-[32rem]'
          }`}>
            <CardHeader className="pb-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-sm font-medium">
                  <Bot className="h-4 w-4" />
                  AI Health Assistant
                  <div className={`w-2 h-2 rounded-full ${
                    connectionStatus === 'connected' ? 'bg-green-400' :
                    connectionStatus === 'connecting' ? 'bg-yellow-400 animate-pulse' :
                    'bg-red-400'
                  }`} title={`Status: ${connectionStatus}`} />
                </CardTitle>
                <div className="flex gap-1">
                  <Button
                    onClick={() => setIsMinimized(!isMinimized)}
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-white hover:bg-white/20 rounded-md"
                  >
                    <Minimize2 className="h-3 w-3" />
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-white hover:bg-white/20 rounded-md"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            {!isMinimized && (
              <CardContent className="p-0 flex flex-col h-[calc(32rem-3rem)] bg-gradient-to-b from-gray-50/30 to-white/50">
                {/* Messages Area */}
                <ScrollArea className="flex-1 px-3 py-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}
                      >
                        {/* Avatar */}
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarFallback className={`text-xs ${
                            message.isUser 
                              ? 'bg-blue-100 text-blue-700' 
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {message.isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </AvatarFallback>
                        </Avatar>

                        {/* Message Content */}
                        <div className={`flex flex-col max-w-[75%] ${message.isUser ? 'items-end' : 'items-start'}`}>
                          <div
                            className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                              message.isUser
                                ? 'bg-blue-600 text-white rounded-br-md'
                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                            }`}
                          >
                            <div 
                              className="whitespace-pre-wrap break-words markdown-content"
                              dangerouslySetInnerHTML={{ 
                                __html: message.isUser ? message.text : renderMarkdown(message.text) 
                              }}
                            />
                          </div>
                          
                          {/* Timestamp */}
                          <div className={`text-xs text-gray-500 mt-1 px-1 ${
                            message.isUser ? 'text-right' : 'text-left'
                          }`}>
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {isLoading && (
                      <div className="flex gap-3">
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarFallback className="bg-green-100 text-green-700 text-xs">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-bl-md text-sm border border-gray-200 shadow-sm">
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-500">AI is analyzing</span>
                              <div className="dna-helix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
                  <div className="flex gap-3 items-end">
                    <div className="flex-1">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask me about your health..."
                        className="text-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-2xl px-4 py-3 resize-none min-h-[44px] shadow-sm"
                        disabled={isLoading}
                      />
                    </div>
                    <Button
                      onClick={sendMessage}
                      size="icon"
                      className="h-11 w-11 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 shadow-sm transition-all duration-200"
                      disabled={!inputValue.trim() || isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1 h-7 rounded-full border-gray-300 hover:bg-gray-50 flex items-center gap-1"
                      onClick={() => setInputValue("I have a headache")}
                      disabled={isLoading}
                    >
                      <Pill className="w-3 h-3" />
                      Headache
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1 h-7 rounded-full border-gray-300 hover:bg-gray-50 flex items-center gap-1"
                      onClick={() => setInputValue("I have a fever")}
                      disabled={isLoading}
                    >
                      <Thermometer className="w-3 h-3" />
                      Fever
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs px-3 py-1 h-7 rounded-full border-gray-300 hover:bg-gray-50 flex items-center gap-1"
                      onClick={() => setInputValue("I have a cough")}
                      disabled={isLoading}
                    >
                      <Wind className="w-3 h-3" />
                      Cough
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
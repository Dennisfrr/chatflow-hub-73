import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Send,
  Phone,
  Instagram,
  Facebook,
  Paperclip,
  Smile,
  MoreHorizontal
} from "lucide-react";

const conversations = [
  {
    id: 1,
    contact: "Maria Silva",
    avatar: "/placeholder.svg",
    lastMessage: "Gostaria de mais informações sobre o produto...",
    time: "14:32",
    unread: 2,
    channel: "whatsapp",
    online: true
  },
  {
    id: 2,
    contact: "João Santos", 
    avatar: "/placeholder.svg",
    lastMessage: "Qual o prazo de entrega?",
    time: "13:45",
    unread: 0,
    channel: "instagram",
    online: false
  },
  {
    id: 3,
    contact: "Ana Costa",
    avatar: "/placeholder.svg", 
    lastMessage: "Preciso de suporte técnico",
    time: "12:20",
    unread: 1,
    channel: "facebook",
    online: true
  }
];

const messages = [
  {
    id: 1,
    sender: "contact",
    content: "Olá! Gostaria de mais informações sobre o produto que vi no seu Instagram.",
    time: "14:30",
    type: "text"
  },
  {
    id: 2,
    sender: "agent", 
    content: "Olá Maria! Claro, ficaria feliz em ajudar. Sobre qual produto você gostaria de saber mais?",
    time: "14:31",
    type: "text"
  },
  {
    id: 3,
    sender: "contact",
    content: "É sobre aquele conjunto de móveis para sala que vocês postaram ontem.",
    time: "14:32",
    type: "text"
  }
];

const channelIcons = {
  whatsapp: { icon: Phone, color: "text-green-500" },
  instagram: { icon: Instagram, color: "text-pink-500" },
  facebook: { icon: Facebook, color: "text-blue-500" }
};

export const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="p-6 h-[calc(100vh-3rem)]">
      <div className="flex h-full space-x-6">
        {/* Conversations List */}
        <Card className="w-1/3 shadow-card">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-foreground mb-3">Mensagens</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Buscar conversas..." className="pl-10" />
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => {
                const ChannelIcon = channelIcons[conversation.channel as keyof typeof channelIcons].icon;
                const channelColor = channelIcons[conversation.channel as keyof typeof channelIcons].color;
                
                return (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 border-b cursor-pointer hover:bg-crm-gray-light/30 transition-colors ${
                      selectedConversation.id === conversation.id ? "bg-primary/10 border-r-2 border-r-primary" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.avatar} alt={conversation.contact} />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {conversation.contact.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-foreground truncate">
                            {conversation.contact}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <ChannelIcon className={`h-4 w-4 ${channelColor}`} />
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <p className="text-sm text-muted-foreground truncate">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="text-xs">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 shadow-card">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b bg-crm-gray-light/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.contact} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {selectedConversation.contact.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{selectedConversation.contact}</h3>
                    <div className="flex items-center space-x-2">
                      {(() => {
                        const ChannelIcon = channelIcons[selectedConversation.channel as keyof typeof channelIcons].icon;
                        const channelColor = channelIcons[selectedConversation.channel as keyof typeof channelIcons].color;
                        return <ChannelIcon className={`h-3 w-3 ${channelColor}`} />;
                      })()}
                      <span className="text-xs text-muted-foreground">
                        {selectedConversation.online ? "Online" : "Offline"}
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "agent" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === "agent"
                        ? "bg-primary text-primary-foreground"
                        : "bg-crm-gray-light text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === "agent" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-crm-gray-light/10">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Smile className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Digite sua mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-gradient-primary shadow-elegant">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Settings as SettingsIcon,
  Users,
  Bell,
  Shield,
  Smartphone,
  Mail,
  Globe,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const teamMembers = [
  {
    id: 1,
    name: "Admin Master",
    email: "admin@crm.com",
    role: "Administrador",
    status: "active",
    avatar: "/placeholder.svg",
    lastLogin: "Agora"
  },
  {
    id: 2,
    name: "Carlos Atendente",
    email: "carlos@crm.com", 
    role: "Atendente",
    status: "active",
    avatar: "/placeholder.svg",
    lastLogin: "2 horas"
  },
  {
    id: 3,
    name: "Ana Vendas",
    email: "ana@crm.com",
    role: "Vendedor",
    status: "inactive", 
    avatar: "/placeholder.svg",
    lastLogin: "1 dia"
  }
];

const integrations = [
  {
    id: 1,
    name: "WhatsApp Business",
    description: "Integração com WhatsApp Business API",
    status: "connected",
    icon: Smartphone,
    color: "text-green-500"
  },
  {
    id: 2,
    name: "Instagram Direct",
    description: "Mensagens diretas do Instagram",
    status: "connected", 
    icon: Globe,
    color: "text-pink-500"
  },
  {
    id: 3,
    name: "Facebook Messenger",
    description: "Mensagens do Facebook Messenger",
    status: "disconnected",
    icon: Globe,
    color: "text-blue-500"
  },
  {
    id: 4,
    name: "Email",
    description: "Integração com email corporativo",
    status: "disconnected",
    icon: Mail,
    color: "text-gray-500"
  }
];

export const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground mt-1">Gerencie sua conta e preferências</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full lg:w-[600px] grid-cols-4">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
          <TabsTrigger value="integrations">Integrações</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <SettingsIcon className="h-5 w-5 mr-2" />
                Configurações Gerais
              </CardTitle>
              <CardDescription>
                Configurações básicas do seu CRM
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Nome da Empresa</Label>
                  <Input id="company" defaultValue="CRM Hub Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Input id="timezone" defaultValue="America/Sao_Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Input id="language" defaultValue="Português (Brasil)" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda</Label>
                  <Input id="currency" defaultValue="Real (BRL)" />
                </div>
              </div>
              <Button className="bg-gradient-primary shadow-elegant">
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Gerenciamento de Equipe
                </div>
                <Button className="bg-gradient-primary shadow-elegant">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Usuário
                </Button>
              </CardTitle>
              <CardDescription>
                Gerencie usuários e permissões da sua equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm font-medium text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline">{member.role}</Badge>
                          <Badge variant={member.status === "active" ? "default" : "secondary"}>
                            {member.status === "active" ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">
                        Último login: {member.lastLogin}
                      </span>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Integrações
              </CardTitle>
              <CardDescription>
                Conecte suas plataformas de mensagens e canais de comunicação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrations.map((integration) => (
                  <Card key={integration.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <integration.icon className={`h-8 w-8 ${integration.color}`} />
                        <div>
                          <h3 className="text-sm font-medium text-foreground">
                            {integration.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={integration.status === "connected" ? "default" : "secondary"}
                          className={integration.status === "connected" ? "bg-success" : ""}
                        >
                          {integration.status === "connected" ? "Conectado" : "Desconectado"}
                        </Badge>
                        <Button 
                          variant={integration.status === "connected" ? "outline" : "default"}
                          size="sm"
                        >
                          {integration.status === "connected" ? "Configurar" : "Conectar"}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure quando e como você quer receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Novas mensagens</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações quando chegarem novas mensagens
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Novos leads</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificar quando um novo lead for adicionado
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Negociações atualizadas</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber atualizações sobre mudanças no pipeline
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Relatórios semanais</Label>
                    <p className="text-sm text-muted-foreground">
                      Resumo semanal por email
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <Button className="bg-gradient-primary shadow-elegant">
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
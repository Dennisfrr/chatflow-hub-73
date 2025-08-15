import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Phone,
  Instagram,
  Facebook
} from "lucide-react";

const stats = [
  {
    title: "Total de Contatos",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Conversas Ativas",
    value: "156",
    change: "+23%",
    trend: "up", 
    icon: MessageCircle,
    color: "text-success"
  },
  {
    title: "Leads Qualificados",
    value: "89",
    change: "-3%",
    trend: "down",
    icon: Target,
    color: "text-warning"
  },
  {
    title: "Taxa de Conversão",
    value: "24.8%",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
    color: "text-primary"
  }
];

const recentActivities = [
  {
    id: 1,
    type: "whatsapp",
    contact: "Maria Silva",
    message: "Gostaria de mais informações sobre o produto...",
    time: "2 min",
    status: "new"
  },
  {
    id: 2,
    type: "instagram",
    contact: "João Santos",
    message: "Qual o prazo de entrega?",
    time: "5 min",
    status: "responded"
  },
  {
    id: 3,
    type: "facebook",
    contact: "Ana Costa",
    message: "Preciso de suporte técnico",
    time: "12 min",
    status: "pending"
  }
];

const channelIcons = {
  whatsapp: Phone,
  instagram: Instagram,
  facebook: Facebook
};

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral do seu CRM</p>
        </div>
        <Button className="bg-gradient-primary shadow-elegant">
          Novo Contato
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-elegant transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-success mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-destructive mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                  {stat.change}
                </span>
                <span className="ml-1">vs mês anterior</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activities */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Atividades Recentes
            <Button variant="outline" size="sm">Ver Todas</Button>
          </CardTitle>
          <CardDescription>
            Últimas interações com seus clientes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => {
              const Icon = channelIcons[activity.type as keyof typeof channelIcons];
              return (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-crm-gray-light/50 hover:bg-crm-gray-light transition-colors">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground truncate">
                        {activity.contact}
                      </p>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={activity.status === "new" ? "destructive" : activity.status === "responded" ? "default" : "secondary"}
                        >
                          {activity.status === "new" ? "Nova" : activity.status === "responded" ? "Respondida" : "Pendente"}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {activity.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
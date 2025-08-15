import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  DollarSign,
  Calendar,
  User,
  TrendingUp
} from "lucide-react";

const pipelineStages = [
  {
    id: 1,
    name: "Leads",
    color: "bg-blue-500",
    deals: [
      {
        id: 1,
        title: "Software ERP - Tech Corp",
        value: "R$ 45.000",
        contact: "Maria Silva",
        company: "Tech Corp",
        probability: 80,
        daysInStage: 5,
        avatar: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Consultoria Digital",
        value: "R$ 12.000", 
        contact: "João Santos",
        company: "Digital Solutions",
        probability: 60,
        daysInStage: 12,
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: 2,
    name: "Qualificados",
    color: "bg-yellow-500",
    deals: [
      {
        id: 3,
        title: "Sistema CRM Personalizado",
        value: "R$ 78.000",
        contact: "Ana Costa", 
        company: "Marketing Plus",
        probability: 75,
        daysInStage: 8,
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: 3,
    name: "Proposta",
    color: "bg-orange-500",
    deals: [
      {
        id: 4,
        title: "Automação de Processos",
        value: "R$ 32.000",
        contact: "Pedro Lima",
        company: "Indústria XYZ", 
        probability: 90,
        daysInStage: 3,
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: 4,
    name: "Negociação",
    color: "bg-purple-500", 
    deals: [
      {
        id: 5,
        title: "Plataforma E-commerce",
        value: "R$ 95.000",
        contact: "Carla Mendes",
        company: "Varejo Online",
        probability: 85,
        daysInStage: 15,
        avatar: "/placeholder.svg"
      }
    ]
  },
  {
    id: 5,
    name: "Fechamento",
    color: "bg-green-500",
    deals: [
      {
        id: 6,
        title: "App Mobile Corporate",
        value: "R$ 67.000",
        contact: "Roberto Silva",
        company: "Corp Mobile",
        probability: 95,
        daysInStage: 2,
        avatar: "/placeholder.svg"
      }
    ]
  }
];

export const Pipeline = () => {
  const totalValue = pipelineStages.reduce((total, stage) => 
    total + stage.deals.reduce((stageTotal, deal) => 
      stageTotal + parseFloat(deal.value.replace("R$ ", "").replace(".", "")), 0), 0);

  const totalDeals = pipelineStages.reduce((total, stage) => total + stage.deals.length, 0);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Pipeline de Vendas</h1>
          <p className="text-muted-foreground mt-1">Acompanhe suas negociações</p>
        </div>
        <Button className="bg-gradient-primary shadow-elegant">
          <Plus className="h-4 w-4 mr-2" />
          Nova Negociação
        </Button>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total em Negociação</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {totalValue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negociações Ativas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDeals}</div>
            <p className="text-xs text-muted-foreground">
              +12% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              +5% em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Board */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {pipelineStages.map((stage) => (
          <Card key={stage.id} className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center">
                <div className={`w-3 h-3 rounded-full ${stage.color} mr-2`}></div>
                {stage.name}
                <Badge variant="secondary" className="ml-auto">
                  {stage.deals.length}
                </Badge>
              </CardTitle>
              <CardDescription>
                R$ {stage.deals.reduce((total, deal) => 
                  total + parseFloat(deal.value.replace("R$ ", "").replace(".", "")), 0
                ).toLocaleString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {stage.deals.map((deal) => (
                <Card key={deal.id} className="p-3 hover:shadow-md transition-shadow cursor-pointer border-l-4" style={{ borderLeftColor: stage.color.replace('bg-', '').replace('-500', '') }}>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground line-clamp-2">
                        {deal.title}
                      </h4>
                      <p className="text-lg font-bold text-primary mt-1">{deal.value}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={deal.avatar} alt={deal.contact} />
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {deal.contact.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-foreground truncate">
                          {deal.contact}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {deal.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          deal.probability >= 80 ? 'text-success border-success' :
                          deal.probability >= 60 ? 'text-warning border-warning' :
                          'text-muted-foreground'
                        }`}
                      >
                        {deal.probability}%
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {deal.daysInStage} dias
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
              
              <Button variant="ghost" className="w-full mt-3 border-2 border-dashed">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
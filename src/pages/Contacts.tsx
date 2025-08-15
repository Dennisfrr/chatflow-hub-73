import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Filter,
  Phone,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Star
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const contacts = [
  {
    id: 1,
    name: "Maria Silva",
    email: "maria.silva@email.com",
    phone: "+55 11 99999-9999",
    company: "Tech Corp",
    status: "lead",
    lastContact: "2 horas",
    avatar: "/placeholder.svg",
    tags: ["Interessado", "WhatsApp"],
    starred: true
  },
  {
    id: 2,
    name: "João Santos",
    email: "joao.santos@email.com", 
    phone: "+55 11 88888-8888",
    company: "Digital Solutions",
    status: "customer",
    lastContact: "1 dia",
    avatar: "/placeholder.svg",
    tags: ["Cliente", "Instagram"],
    starred: false
  },
  {
    id: 3,
    name: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "+55 11 77777-7777",
    company: "Marketing Plus", 
    status: "prospect",
    lastContact: "3 dias",
    avatar: "/placeholder.svg",
    tags: ["Prospect", "Facebook"],
    starred: true
  }
];

const statusConfig = {
  lead: { label: "Lead", variant: "default" as const, color: "bg-primary" },
  customer: { label: "Cliente", variant: "default" as const, color: "bg-success" },
  prospect: { label: "Prospect", variant: "secondary" as const, color: "bg-warning" }
};

export const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contatos</h1>
          <p className="text-muted-foreground mt-1">Gerencie seus leads e clientes</p>
        </div>
        <Button className="bg-gradient-primary shadow-elegant">
          <Plus className="h-4 w-4 mr-2" />
          Novo Contato
        </Button>
      </div>

      {/* Filters */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar contatos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts List */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Lista de Contatos</CardTitle>
          <CardDescription>
            {filteredContacts.length} contatos encontrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-crm-gray-light/30 transition-colors">
                <div className="flex-shrink-0">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-foreground truncate">
                      {contact.name}
                    </h3>
                    {contact.starred && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.company}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Mail className="h-3 w-3 mr-1" />
                      {contact.email}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      {contact.phone}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={statusConfig[contact.status as keyof typeof statusConfig].variant}
                      className={statusConfig[contact.status as keyof typeof statusConfig].color}
                    >
                      {statusConfig[contact.status as keyof typeof statusConfig].label}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {contact.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 text-right">
                  <p className="text-xs text-muted-foreground mb-2">
                    Último contato: {contact.lastContact}
                  </p>
                  <div className="flex items-center space-x-1">
                    <Button size="sm" variant="ghost">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Ver Histórico</DropdownMenuItem>
                        <DropdownMenuItem>Arquivar</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
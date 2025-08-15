import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Settings,
  Bell,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Contatos", href: "/contacts", icon: Users },
  { name: "Mensagens", href: "/messages", icon: MessageCircle, badge: 3 },
  { name: "Pipeline", href: "/pipeline", icon: TrendingUp },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export const CRMSidebar = () => {
  return (
    <div className="flex flex-col h-full bg-crm-sidebar text-crm-sidebar-foreground">
      {/* Header */}
      <div className="p-6 border-b border-crm-sidebar/20">
        <h1 className="text-xl font-bold text-white">CRM Hub</h1>
        <p className="text-sm text-crm-sidebar-foreground/70 mt-1">Central de Atendimento</p>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-crm-sidebar-foreground/50 w-4 h-4" />
          <Input 
            placeholder="Buscar contatos..." 
            className="pl-10 bg-crm-sidebar/20 border-crm-sidebar/30 text-white placeholder:text-crm-sidebar-foreground/50"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-elegant"
                      : "text-crm-sidebar-foreground hover:bg-crm-sidebar/30 hover:text-white"
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
                {item.badge && (
                  <Badge variant="destructive" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Notifications */}
      <div className="p-4 border-t border-crm-sidebar/20">
        <Button variant="ghost" className="w-full justify-start text-crm-sidebar-foreground hover:bg-crm-sidebar/30 hover:text-white">
          <Bell className="mr-3 h-5 w-5" />
          Notificações
          <Badge variant="secondary" className="ml-auto">
            2
          </Badge>
        </Button>
      </div>
    </div>
  );
};
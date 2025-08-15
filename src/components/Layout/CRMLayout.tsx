import { CRMSidebar } from "./CRMSidebar";

interface CRMLayoutProps {
  children: React.ReactNode;
}

export const CRMLayout = ({ children }: CRMLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <CRMSidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto bg-gradient-subtle">
          {children}
        </main>
      </div>
    </div>
  );
};
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Receipt, 
  Users, 
  Settings,
  LogOut,
  Menu,
  X,
  Zap,
  History
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Devis', href: '/quotes', icon: FileText },
  { name: 'Factures', href: '/invoices', icon: Receipt },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Historique', href: '/history', icon: History },
  { name: 'Paramètres', href: '/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
  };

  const NavContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Zap className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Ankès</h1>
          <p className="text-xs text-gray-400">Devis & Factures</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`
                flex items-center gap-3 px-4 py-3.5 rounded-xl
                font-medium transition-all duration-200
                ${isActive 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl
            text-gray-600 font-medium
            hover:bg-red-50 hover:text-red-600
            transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          Déconnexion
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-3 bg-white rounded-xl shadow-lg"
      >
        <Menu className="w-6 h-6 text-gray-600" />
      </button>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col animate-slideIn">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <NavContent />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-72 lg:fixed lg:inset-y-0 bg-white border-r border-gray-100">
        <NavContent />
      </aside>
    </>
  );
}

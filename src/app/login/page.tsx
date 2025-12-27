'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Zap, ArrowRight } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Button, Input, Card } from '@/components/ui';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Email ou mot de passe incorrect');
      setIsLoading(false);
      return;
    }

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative">
        {/* Logo */}
        <div className="text-center mb-8 animate-slideUp">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800">Ankès</h1>
          </div>
          <p className="text-gray-500">Connectez-vous à votre compte</p>
        </div>

        {/* Login Card */}
        <Card variant="elevated" padding="lg" className="animate-slideUp stagger-1">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-scaleIn">
                {error}
              </div>
            )}

            <Input
              label="Email"
              type="email"
              placeholder="vous@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-5 h-5" />}
              required
            />

            <Input
              label="Mot de passe"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-5 h-5" />}
              required
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500" />
                <span className="text-gray-600">Se souvenir de moi</span>
              </label>
              <Link href="/forgot-password" className="text-blue-500 hover:text-blue-600 font-medium">
                Mot de passe oublié ?
              </Link>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              isLoading={isLoading}
              icon={!isLoading && <ArrowRight className="w-5 h-5" />}
            >
              Se connecter
            </Button>
          </form>
        </Card>

        {/* Sign up link */}
        <p className="text-center mt-6 text-gray-500 animate-slideUp stagger-2">
          Pas encore de compte ?{' '}
          <Link href="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}

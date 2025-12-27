'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Zap, ArrowRight, User } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Button, Input, Card } from '@/components/ui';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }

    // Redirect to onboarding to complete profile
    router.push('/onboarding');
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
          <p className="text-gray-500">Créez votre compte en 2 minutes</p>
        </div>

        {/* Signup Card */}
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
              placeholder="Minimum 6 caractères"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-5 h-5" />}
              required
            />

            <Input
              label="Confirmer le mot de passe"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              icon={<Lock className="w-5 h-5" />}
              required
            />

            <Button 
              type="submit" 
              size="lg" 
              className="w-full" 
              isLoading={isLoading}
              icon={!isLoading && <ArrowRight className="w-5 h-5" />}
            >
              Créer mon compte
            </Button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-4">
            En créant un compte, vous acceptez nos conditions d'utilisation
          </p>
        </Card>

        {/* Login link */}
        <p className="text-center mt-6 text-gray-500 animate-slideUp stagger-2">
          Déjà un compte ?{' '}
          <Link href="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}

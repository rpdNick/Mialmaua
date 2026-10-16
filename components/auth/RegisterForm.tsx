'use client';

import { useState, type FormEvent } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type RegisterFormProps = {
  onSuccess: () => void;
};

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    if (!normalizedEmail || !password) {
      setError('Заповніть email і пароль');
      return;
    }

    if (password.length < 8) {
      setError('Пароль має бути не менше 8 символів');
      return;
    }

    if (password !== confirmPassword) {
      setError('Паролі не збігаються');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: normalizedEmail,
          password,
          ...(trimmedName ? { name: trimmedName } : {}),
        }),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setError(data.error ?? 'Не вдалося зареєструватися');
        return;
      }

      const signInResult = await signIn('credentials', {
        email: normalizedEmail,
        password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError('Акаунт створено, але вхід не вдався. Спробуйте увійти вручну.');
        return;
      }

      if (signInResult?.ok) {
        onSuccess();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="register-name">Ім&apos;я (необов&apos;язково)</Label>
        <Input
          id="register-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isSubmitting}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="register-email">Email</Label>
        <Input
          id="register-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="register-password">Пароль</Label>
        <Input
          id="register-password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="register-password-confirm">Підтвердіть пароль</Label>
        <Input
          id="register-password-confirm"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={isSubmitting}
          required
        />
      </div>

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Реєстрація…' : 'Зареєструватися'}
      </Button>
    </form>
  );
}
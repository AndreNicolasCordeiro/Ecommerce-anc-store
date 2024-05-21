"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

const loginSchema = z.object({
  email: z.string().email('Email inválido').max(100, 'Email não pode exceder 100 caracteres').optional(),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres').max(100, 'Senha não pode exceder 100 caracteres').optional(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
}

  const handleGoogleLogin = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className='container flex flex-col items-center justify-center gap-4 h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <h1 className='text-4xl font-bold text-center'>Fazer Login</h1>
        <div className='w-full'>
          <label htmlFor="email">Email</label>
          <input id="email" className='text-black w-full' type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className='w-full'>
          <label htmlFor="password">Senha</label>
          <input id="password" className='text-black w-full' type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Button className="w-full" type="submit">Entrar</Button>
      </form>
      <Button  className="w-full" onClick={handleGoogleLogin}>Login com Google</Button>
    </div>
  );
};

export default LoginForm;

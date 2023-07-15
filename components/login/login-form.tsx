'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import LoadingDots from './loading-dots';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Form({ type }: { type: 'login' | 'register' }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                if (type === 'login') {
                    signIn('credentials', {
                        redirect: false,
                        email: e.currentTarget.email.value,
                        password: e.currentTarget.password.value,
                        // @ts-ignore
                    }).then(({ error }) => {
                        if (error) {
                            setLoading(false);
                            toast.error(error);
                        } else {
                            router.refresh();
                            router.push('/dashboard');
                        }
                    });
                } else {
                    fetch('/api/auth/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: e.currentTarget.email.value,
                            password: e.currentTarget.password.value,
                        }),
                    }).then(async (res) => {
                        setLoading(false);
                        if (res.status === 200) {
                            toast.success('Account created! Redirecting to login...');
                            setTimeout(() => {
                                router.push('/login');
                            }, 2000);
                        } else {
                            const { error } = await res.json();
                            toast.error(error);
                        }
                    });
                }
            }}
            className='flex flex-col space-y-4 
            border-r border-gray-300
            bg-gradient-to-r from-zinc-200 pb-6 pt-8 backdrop-blur-2xl 
            dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
            lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'
            >
            <div>
                <label
                    htmlFor='email'
                    className='block text-xs text-gray-600 uppercase'
                >
                    Email Address
                </label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='panic@thedis.co'
                    autoComplete='email'
                    required
                    className="mt-4 w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label
                    htmlFor='password'
                    className='block text-xs text-gray-600 uppercase'
                >
                    Password
                </label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    required
                    className="mt-4 w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                disabled={loading}
                className={`${loading
                    ? 'cursor-not-allowed border-gray-200 bg-gray-100'
                    : 'border-black bg-black text-white hover:bg-white hover:text-black'
                    } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
            >
                {loading ? (
                    <LoadingDots color='#808080' />
                ) : (
                    <p>{type === 'login' ? 'Sign In' : 'Sign Up'}</p>
                )}
            </button>
            {type === 'login' ? (
                <p className='text-center text-sm text-gray-600'>
                    Don&apos;t have an account?{' '}
                    <Link href='/register' className='font-semibold text-gray-800'>
                        Sign up
                    </Link>{' '}
                    for free.
                </p>
            ) : (
                <p className='text-center text-sm text-gray-600'>
                    Already have an account?{' '}
                    <Link href='/login' className='font-semibold text-gray-800'>
                        Sign in
                    </Link>{' '}
                    instead.
                </p>
            )}
        </form>
    );
}

import Image from 'next/image'
import Link from "next/link"
import Form from '@/components/login/login-form';

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <Form type='login'></Form>
        </main>
    )
}
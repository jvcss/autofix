import { getServerSession } from 'next-auth/next'

export default async function AuthStatus() {
    const session = await getServerSession();

    return (
        <div>
            {session && (
                <p className='text-stone-200 text-sm'>
                    Congrats (session.user?.email)
                </p>
            )}
        </div>
    )
}
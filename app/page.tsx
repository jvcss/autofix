import Image from 'next/image'
import './home.css'

export default function Home() {
  const clients = [
    {
      id: 1,
      name: 'Empresa A',
      logo: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Empresa B',
      logo: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Empresa C',
      logo: '/placeholder.svg',
    },
    {
      id: 4,
      name: 'Empresa D',
      logo: '/placeholder.svg',
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed right-0 top-0 flex items-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          900 apps automatizados
        </p>
        <a href='/login' className="fixed left-0 top-0 flex items-center justify-center border-r border-gray-300 bg-gradient-to-r from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h2 className="text-2xl font-semibold">Monitorar</h2>
        </a>
      </div>

      <div className="hide-left"></div>
      <div className="flex flex-wrap justify-center mt-12 animate-marquee">
        {clients.map((client) => (


          <a
            href="https://vercel.com/"
            className="group rounded-lg border border-transparent flex items-center px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={client.logo}
              alt={`${client.name} Logo`}
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {client.name}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Explore the Next.js 13 playground.
              </p>
            </div>
          </a>

        ))}
      </div>
      <div className="hide-right"></div>
    </main>
  )
}

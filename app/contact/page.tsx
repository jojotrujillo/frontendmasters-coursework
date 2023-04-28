// By default, all components in the app directory are server components.
// If interested the RFC for React.js is at https://legacy.reactjs.org/blog/2020/12/21/data-fetching-with-react-server-components.html
// and https://github.com/reactjs/rfcs/pull/188.
// The following 'use client' directive tells Next.js to make this a client component
// Client components are the good old React components that we are used to. Next.js aims to make a distinction between
// server and client components.
'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Contact() {
  const router = useRouter()

  return (
    <div>
      <h1>Contact</h1>
      <Link href="/">home</Link>
      <button onClick={() => router.push('/')}>home</button>
    </div>
  )
}

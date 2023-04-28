// The layout.tsx page is a special file that wraps all pages. It is used to add common elements to all pages.
// In this boilerplate, the layout.tsx page is used to add the <head> element to all pages.

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}

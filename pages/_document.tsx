import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Competitive web3 rewards for shopping at retailers across the web."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body className="bg-white text-black dark:bg-gradient-to-r dark:from-slate-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

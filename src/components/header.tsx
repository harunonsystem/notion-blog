import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/harunonsystem/notion-blog' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    // <header className={styles.header}>
    <header className="flex items-center justify-center">
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Notion Blog Sample</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="og:title" content="Notion Blog Sample" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul className="flex  bg-gray-200 py-2">
        {navItems.map(({ label, page, link }) => (
          <li key={label} className="mr-2 flex-1 md:items-center text-white">
            {page ? (
              <Link href={page}>
                {/* <a className={pathname === page ? 'active' : undefined}> */}
                <a className="text-white-300">{label}</a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

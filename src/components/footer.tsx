import ExtLink from './ext-link'
import contactStyles from '../styles/contact.module.css'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import linkedin from './svgs/linkedin'
import notion from './svgs/notion'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/haruonsystem',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/harunonsystem',
  },
  {
    Comp: linkedin,
    alt: 'linkedin icon',
    link: '',
  },
  {
    Comp: notion,
    alt: 'notion icon',
    link: '',
  },
  // {
  //   Comp: keybase,
  //   alt: 'keybase',
  //   link: 'https://keybase.io/harunon',
  // }
]
export default () => (
  <>
    <footer>
      <div className="flex px-20 ">
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <div className="justify-center items-center px-10 py-2 mx-auto">
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} className="justify-center md:items-center" />
              </ExtLink>
            </div>
          )
        })}
      </div>

      <span>© Copyright 2020 Notion Blog Sample</span>
      {/* <span>Deploy your own!</span>
      <ExtLink href="https://vercel.com/import/git?s=https://github.com/ijjk/notion-blog/tree/master&env=NOTION_TOKEN,BLOG_INDEX_ID&envDescription=Required+env+values+for+deploying&envLink=https://github.com/ijjk/notion-blog%23getting-blog-index-and-token">
        <img
          src="https://vercel.com/button"
          height={46}
          width={132}
          alt="deploy to Vercel button"
        />
      </ExtLink>
      <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span> */}
    </footer>
  </>
)

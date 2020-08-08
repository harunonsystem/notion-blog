import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import MailForm from '../components/mailform'

export default () => (
  <>
    <Header titlePre="Contact" />
    <div>
      {/* <div className={sharedStyles.layout}> */}
      {/* <div className={contactStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters JJ" height={60} />
      </div> */}

      {/* <h1 style={{ marginTop: 0 }}>Contact</h1> */}
      <h1 className="text-center">Contact</h1>
      <MailForm />

      {/* <div className={contactStyles.name}>
        JJ Kasper - Next.js Engineer @{' '}
        <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </div> */}

      {/* <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div> */}
    </div>
  </>
)

import MailingList from './MailingList'

interface MailingListSignupProps {
}

const MailingListSignup = (props: MailingListSignupProps) => {

  return <section className="page-section mailing-list-signup bg-primary-smoke color-primary-bone">
    <div className="container">
      <div className="mailing-list-signup__content">
        <h2 className="mailing-list-signup__title typography-heading-lg">Dive into a world of wonder</h2>
      </div>

      <div className="mailing-list-signup__form-wrapper">
        <div className='mailing-list-signup__form-outer'>
          <p className='typography-body-sm'>Get info about new releases, promotions, and updates right to your inbox — never be in the dark about what&rsquo;s new and next.</p>
          <MailingList disableCopy />
        </div>
      </div>
    </div>
  </section>
}

export default MailingListSignup
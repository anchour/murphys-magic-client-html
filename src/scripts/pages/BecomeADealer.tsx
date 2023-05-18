import BenefitsGrid from "../components/BenefitsGrid"
import Header from "../components/Header"
import MailingListSignup from "../components/MailingListSignup"
import SuperHeader from "../components/SuperHeader"
import TextCallout from "../components/TextCallout"

interface BecomeADealerPageProps {
}

const BecomeADealerPage = (props: BecomeADealerPageProps) => {
  return <>
    <SuperHeader />
    <Header />

    <main role="main">
      <TextCallout />
      <BenefitsGrid />
    </main >
    
    <MailingListSignup />
  </>
}

export default BecomeADealerPage
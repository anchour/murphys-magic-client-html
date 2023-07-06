import SuperHeader from "../components/SuperHeader"
import Header from "../components/Header"
import AccountActions from "../components/AccountActions"
import MailingListSignup from "../components/MailingListSignup"
import Footer from "../components/Footer"

interface AccountOverviewProps {
}

const AccountOverview = (props: AccountOverviewProps) => {
  return <>
    <Header />
    <AccountActions />
    <MailingListSignup />
    <Footer />
  </>
}

export default AccountOverview
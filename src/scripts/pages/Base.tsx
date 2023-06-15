import Footer from "../components/Footer";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";

interface BasePageProps {
  children?: JSX.Element | JSX.Element[];
}

const BasePage = (props: BasePageProps) => {
  return <>
    <Header disableCopy />
    <main role="main">
      {props.children}
    </main>
    <MailingListSignup />
    <Footer />
  </>
}

export default BasePage
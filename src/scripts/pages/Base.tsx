import Footer from "../components/Footer";
import Header from "../components/Header";

interface BasePageProps {
  children?: JSX.Element | JSX.Element[];
}

const BasePage = (props: BasePageProps) => {
  return <>
    <Header disableCopy />
    <main role="main">
      {props.children}
    </main>
    <Footer />
  </>
}

export default BasePage
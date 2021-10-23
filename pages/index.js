import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Header from "../components/header";

export default function Index() {
  return (
    <Layout noHentry noBottomMargin>
      <Container>
        <Header pageDescription={"Yep, that's me."} />
        <Intro />
      </Container>
    </Layout>
  );
}

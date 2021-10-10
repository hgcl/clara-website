import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";

export default function Index() {
  return (
    <Layout noHentry noBottomMargin>
      <Container>
        <Intro />
      </Container>
    </Layout>
  );
}

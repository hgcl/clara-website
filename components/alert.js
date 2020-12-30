import Container from "./container";
import Link from "./link";

export default function Alert({ preview }) {
  return (
    <div className="bg-black text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This website is under construction. For now, you can contact me on
          Twitter <Link href="https://twitter.com/clara__le">@clara__le</Link>.
        </div>
      </Container>
    </div>
  );
}

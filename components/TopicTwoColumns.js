import Column from "./Column";
import Flex from "./Flex";
import Link from "./link";

export default function TopicTwoColumns({ topic, href, children }) {
  return (
    <Flex>
      <Column size="1">
        <p>
          <Link href={href}>{topic}</Link>
          &ensp;→
        </p>
      </Column>
      <Column size="2">{children}</Column>
    </Flex>
  );
}

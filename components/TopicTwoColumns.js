import Column from "./Column";
import Flex from "./Flex";
import Link from "./link";

export default function TopicTwoColumns({ topic, href, children }) {
  return (
    <Flex>
      <Column>
        <p>
          <Link href={href}>{topic}</Link>
          &ensp;→
        </p>
      </Column>
      <Column double>{children}</Column>
    </Flex>
  );
}

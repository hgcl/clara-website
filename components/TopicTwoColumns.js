import Column from "./Column";
import Flex from "./Flex";
import Link from "./link";

export default function TopicTwoColumns({ topic, href, children }) {
  const renderFirstColumn = () =>
    href ? (
      <p>
        <Link href={href}>{topic}&ensp;→</Link>
      </p>
    ) : (
      <p className="all-small-caps">{topic}</p>
    );

  return (
    <Flex>
      <Column>{renderFirstColumn()}</Column>
      <Column double>{children}</Column>
    </Flex>
  );
}

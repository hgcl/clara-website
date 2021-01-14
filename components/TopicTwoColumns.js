import Column from "./Column";
import Flex from "./Flex";
import Link from "./link";
import { ARROW } from "../lib/constants";

export default function TopicTwoColumns({ topic, href, children }) {
  const renderFirstColumn = () =>
    href ? (
      <p>
        <Link href={href}>
          {topic}&ensp;{ARROW}
        </Link>
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

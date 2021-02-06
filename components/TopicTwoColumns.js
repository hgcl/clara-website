import Column from "./Column";
import Flex from "./Flex";
import Link from "./link";
import { ARROW } from "../lib/constants";
import Rating from "./Rating";

export default function TopicTwoColumns({
  topic,
  href,
  children,
  type,
  rating,
}) {
  const renderFirstColumn = () =>
    href ? (
      <Link href={href}>
        {topic}&ensp;{ARROW}
      </Link>
    ) : (
      <div className="all-small-caps">{topic}</div>
    );

  return (
    <Flex>
      <Column>
        {renderFirstColumn()}
        {type && <div className="comment">{type}</div>}
        {rating && (
          <div className="text-gray-regular pt-2">
            <Rating rating={rating} color="text-accent" />
          </div>
        )}
      </Column>
      <Column double lastColumn>
        {children}
      </Column>
    </Flex>
  );
}

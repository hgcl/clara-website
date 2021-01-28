import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, dtPublished, shortDate }) {
  const date = parseISO(dateString);
  return (
    <time className={dtPublished && "dt-published"} dateTime={dateString}>
      {shortDate ? format(date, "LLL d") : format(date, "LLLL d, yyyy")}
    </time>
  );
}

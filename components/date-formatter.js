import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, dtPublished }) {
  const date = parseISO(dateString);
  return (
    <time className={dtPublished && "dt-published"} dateTime={dateString}>
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}

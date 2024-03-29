import Hentry from "../../components/Hentry";

export default function Test2() {
  return (
    <>
      <title>Test #2</title>
      <body>
        <Hentry />
        <p>
          in reply to:
          <a
            className="u-in-reply-to"
            href="https://aaronparecki.com/2018/06/30/11/your-first-webmention"
          >
            @aaronpk
          </a>
        </p>
        <p className="e-content">
          Trying out this guide to sending webmentions
        </p>
        <p>
          <a href="https://aaronpk.com/reply.html" className="u-url">
            <time className="dt-published" dateTime="2021-01-07 19:28:36">
              January 7, 2021
            </time>
          </a>
        </p>
      </body>
    </>
  );
}

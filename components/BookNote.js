import Popup from "reactjs-popup";

const overlayStyle = {
  background: "#0f0f0f",
  opacity: 0.9,
  width: "80%",
  height: "80%",
  margin: "auto",
  "border-radius": "0.25rem",
};

const contentStyle = {
  padding: "4rem",
};

export default function BookNote({ trigger, children }) {
  return (
    <Popup
      overlayStyle={overlayStyle}
      contentStyle={contentStyle}
      modal
      trigger={trigger}
    >
      {children}
    </Popup>
  );
}

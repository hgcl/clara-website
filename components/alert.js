import Container from "./container";

export default function Alert({ showAlert }) {
  return (
    <>
      {showAlert && (
        <div className="bg-black text-white">
          <Container>
            <div className="py-2 text-center text-sm">
              This page is still under construction.
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

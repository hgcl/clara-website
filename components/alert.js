import Container from "./container";

export default function Alert({ showAlert }) {
  return (
    <>
      {showAlert && (
        <div className="bg-gray-dark text-gray-lightest">
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

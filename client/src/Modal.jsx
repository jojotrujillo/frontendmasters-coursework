import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  // A reference is local to its component and is something that doesn't affect
  // visual output. Something that also needs to stick around during re-renders.
  // https://react.dev/reference/react/useRef#usage.
  // Also, opting to use refs instead of document.getElementById() because interacting
  // with DOM API is slow compared to native React APIs.
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    // Component cleanup function
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  // https://react.dev/reference/react-dom/createPortal#usage
  // Also, children is a specifically named prop that will allow us to insert things
  // between the component tags, e.g. <Modal><div>Arbitrary tag</div></Modal>
  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;

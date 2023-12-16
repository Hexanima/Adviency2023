import { createContext, useState, ReactNode } from "react";
import useModal from "../hooks/useModal";

interface ModalContextParams {
  component: ReactNode | null;
  handleClose: () => void;
  handleOpen: (component: ReactNode) => void;
}

export const ModalContext = createContext({} as ModalContextParams);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [component, setComponent] = useState(null as ReactNode | null);

  function handleOpen(component: ReactNode) {
    setComponent(component);
  }

  function handleClose() {
    setComponent(null);
  }

  const contextValues: ModalContextParams = {
    component,
    handleOpen,
    handleClose,
  };

  return (
    <ModalContext.Provider value={contextValues}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.Handler = function () {
  const { component, handleClose } = useModal();
  return (
    <div className={`ModalHandler ${component && "active"}`}>
      {component && (
        <div className="Frame">
          {component}
          <button className="Close" onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

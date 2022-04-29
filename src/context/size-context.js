import * as React from "react";

const SizeContext = React.createContext();

function SizeContextProvider({ children }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    async function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      //console.log(width);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <SizeContext.Provider value={dimensions}>{children}</SizeContext.Provider>
  );
}

export { SizeContext, SizeContextProvider };

// custom hook
export const useSizeContext = () => {
  // get the context
  const context = React.useContext(SizeContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("windowSizeContext was used outside of its Provider");
  }

  return context;
};

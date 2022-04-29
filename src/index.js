import "./index.css";
import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

//ReactDOM.render(<App />, document.getElementById("app"));
//const root = ReactDOM.createRoot(document.getElementById("app"));
//root.render(<App />);

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("app")
);

// for react 18
/* const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); */

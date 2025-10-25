import { useState, useEffect } from "react";
import RouteCom from "./route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

type Route = "home" | "verify" | "wallet";

function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>("verify");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "verify") {
        setCurrentRoute("verify");
      } else if (hash === "wallet") {
        setCurrentRoute("wallet");
      } else {
        setCurrentRoute("home");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <RouteCom />
    </QueryClientProvider>
  );
}

export default App;

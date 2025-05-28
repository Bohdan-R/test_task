import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "./components/Layout";

function App() {
  const element = useRoutes(routes);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        {element}
      </Suspense>
    </Layout>
  );
}

export default App;

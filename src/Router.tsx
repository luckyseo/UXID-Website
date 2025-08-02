// THIS IS V6
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./routes/Layout";
import Home from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home></Home>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

//down graded to V6 bc react router dom is upgraded while i was re-installing...
//This is for V7
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/Home";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// export default Router;

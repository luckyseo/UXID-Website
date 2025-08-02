// THIS IS V6
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./routes/Layout";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Mentor from "./pages/Mentor";
import Student from "./pages/Student";

import About from "./pages/About";
import News from "./pages/News";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/projectUX/Client" element={<Client></Client>} />
          <Route path="/projectUX/Mentor" element={<Mentor></Mentor>} />
          <Route path="/projectUX/Student" element={<Student></Student> }/>
          <Route path="/News" element={<News></News>} />
          <Route path="/About" element={<About></About>} />

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

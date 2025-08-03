// THIS IS V6
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Mentor from "./pages/Mentor";
import Student from "./pages/Student";

import News from "./pages/News";
import Events from "./pages/Events";

import Join from "./pages/Join";
import Sponsor from "./pages/Sponsor";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projectUX/Client" element={<Client />}></Route>
          <Route path="/projectUX/Mentor" element={<Mentor />}></Route>
          <Route path="/projectUX/Student" element={<Student />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/news/events" element={<Events />}></Route>
          <Route path="/about/join" element={<Join />}></Route>
          <Route path="/about/sponsor" element={<Sponsor />}></Route>
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

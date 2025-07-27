// THIS IS V6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Sponsor from "./routes/Sponsor";
import Student from "./routes/Student";
import Join from "./routes/Join";
import Client from "./routes/Client";
import Mentor from "./routes/Mentor";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="projectUX/student" element={<Student />}></Route>
          <Route path="projectUX/student" element={<Client />}></Route>
          <Route path="projectUX/student" element={<Mentor />}></Route>
          <Route path="about/join" element={<Join />}></Route>
          <Route path="about/sponsors" element={<Sponsor />}></Route>
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

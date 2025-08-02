// THIS IS V6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./MainLayout/Layout";
import Sponsor from "./routes/Sponsor";
import Student from "./routes/Student";
import Join from "./routes/Join";
import Client from "./routes/Client";
import Mentor from "./routes/Mentor";
import Layout from "./MainLayout/Layout";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="projectUX/student" element={<Student />}></Route>
          <Route path="projectUX/student" element={<Client />}></Route>
          <Route path="projectUX/student" element={<Mentor />}></Route>
          <Route path="about/join" element={<Join />}></Route>
          <Route path="about/sponsors" element={<Sponsor />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;


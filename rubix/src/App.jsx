/* eslint-disable no-unused-vars */
import "./App.css";
import Project from "./Com/Project";
import Product from "./Com/Product";
import Photobanner from "./Com/Photobanner";
import Bgphoto from "./Com/Bgphoto"
import Pay from "./Com/Pay"

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter> */}

      <Project />
      <Product />
      <Photobanner/>
      <Bgphoto/>
      <Pay/>
    </>
  );
}

export default App;

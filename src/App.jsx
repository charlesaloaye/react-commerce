import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;

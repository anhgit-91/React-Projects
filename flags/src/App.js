import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />;
          <Route path='/countries/:countryCode' element={<CountryDetail />} />;
          <Route path='*' element={<h2>ERROR 404 Page not found</h2>} />;
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;

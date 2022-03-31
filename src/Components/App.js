import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import Catalog from './Catalog';

function App() {
  	return (
        <Router>
            <main style={{ width: '100%'}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="catalog" element={<Catalog />} />
                </Routes>
            </main>
        </Router>
  	);
}

export default App;
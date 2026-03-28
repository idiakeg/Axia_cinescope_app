import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import FetchProvider from "./context/FetchProvider";

function App() {
    return (
        <BrowserRouter>
            <FetchProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/movie_detail" element={<MovieDetailPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </FetchProvider>
        </BrowserRouter>
    );
}

export default App;

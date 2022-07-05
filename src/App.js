import './App.css';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dtp" element={<BlogPage/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

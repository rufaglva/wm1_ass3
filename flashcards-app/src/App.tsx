import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/app/Home';
import FlashCards from '@/app/Flashcards';
import FlashCardsCreate from '@/app/Flashcards/create';
import ContactPage from '@/app/Home/contactme'; // Import the ContactPage component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flashcards" element={<FlashCards />} />
          <Route path="/flashcards/create/:id?" element={<FlashCardsCreate />} />
          <Route path="/contact" element={<ContactPage />} /> {/* New route for Contact Me page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

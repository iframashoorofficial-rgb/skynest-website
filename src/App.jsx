// App.jsx - the layout that every page shares, plus the list of pages (routes).
//
// Version 2 – performance: each page is loaded with React.lazy(). The browser first
// downloads only the code for the page you open; the other pages are fetched when
// you visit them. <Suspense> shows a short "Loading…" message in the meantime.
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import MobileContactBar from './components/MobileContactBar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Packages = lazy(() => import('./pages/Packages.jsx'));
const Faq = lazy(() => import('./pages/Faq.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <>
      {/* Lets keyboard users jump straight past the navigation */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <ScrollToTop />
      <Header />

      <main id="main-content" tabIndex="-1">
        <Suspense fallback={<p className="page-loading" role="status">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <MobileContactBar />
    </>
  );
}

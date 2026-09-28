import { Outlet } from 'react-router';
import ScrollManager from './ScrollManager.jsx';
import TopBar from './TopBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useReveal from '../hooks/useReveal.js';

export default function Layout() {
  useReveal();

  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">Skip to main content</a>
      <TopBar />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

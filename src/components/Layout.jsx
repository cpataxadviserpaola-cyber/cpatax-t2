import { Suspense } from 'react';
import { Outlet } from 'react-router';
import ScrollManager from './ScrollManager.jsx';
import PageSeo from './PageSeo.jsx';
import TopBar from './TopBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useReveal from '../hooks/useReveal.js';

export default function Layout() {
  useReveal();

  return (
    <>
      <ScrollManager />
      <PageSeo />
      <a className="skip-link" href="#main">Skip to main content</a>
      <TopBar />
      <Header />
      <main id="main">
        {/* A guide's code downloads the first time it's opened; until then the page keeps its
            height so the footer doesn't jump up. */}
        <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

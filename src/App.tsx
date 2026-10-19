import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Where } from './components/Where';
import { Events } from './components/Events';
import { Kinds } from './components/Kinds';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Where />
        <Events />
        <Kinds />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

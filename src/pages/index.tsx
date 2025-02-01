import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AutomatizacionInteligente from '../components/AutomatizacionInteligente';

function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <AutomatizacionInteligente />
        <Services />
      </main>
    </>
  );
}

export default Home; 
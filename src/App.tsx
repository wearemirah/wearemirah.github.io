import { useEffect, useState } from 'react';
import { COPY, LangKey } from './copy';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('mirah-theme') as Theme | null;
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialLang(): LangKey {
  const stored = localStorage.getItem('mirah-lang') as LangKey | null;
  if (stored === 'pt' || stored === 'en') return stored;
  return navigator.language.startsWith('pt') ? 'pt' : 'en';
}

export default function App() {
  const [theme] = useState<Theme>(getInitialTheme);
  const [lang, setLang] = useState<LangKey>(getInitialLang);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('mirah-lang', lang);
  }, [lang]);

  const L = COPY[lang];

  return (
    <>
      <Nav L={L} lang={lang} setLang={setLang} />
      <main>
        <Hero L={L} />
        <About L={L} />
        <Services L={L} />
        <Approach L={L} />
        <Contact L={L} />
      </main>
      <Footer L={L} />
    </>
  );
}

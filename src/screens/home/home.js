import React from 'react';
import { FiArrowUpRight, FiBookOpen, FiMusic } from 'react-icons/fi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import './home.css';
const ebook = 'https://go.hotmart.com/W107987276G?redirectionUrl=https%3A%2F%2Falemdamissa.hotmart.host%2Fdaniel-moraes-7-dias-para-dar-o-primeiro-passo';
const socials = [
 { name:'Instagram', description:'A fé também se vive no dia a dia.', url:'https://www.instagram.com/alemdamissa/', icon:<FaInstagram /> },
 { name:'TikTok', description:'Uma mensagem pode mudar o seu dia.', url:'https://www.tiktok.com/@alemdamissa', icon:<SiTiktok /> },
 { name:'YouTube', description:'Para conhecer e aprofundar a fé.', url:'https://www.youtube.com/@alemdamissa', icon:<FaYoutube /> },
 { name:'Kwai', description:'Encontre o Além da Missa por lá também.', url:'https://www.kwai.com/@alemdamissa', icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="9" width="12" height="11" rx="3"/><circle cx="6.5" cy="5.5" r="3"/><circle cx="13.5" cy="5.5" r="3"/><path d="m15 12 6-3v12l-6-3M7 14h4"/></svg> }
];
export default function Home(){return <main className="adm-page">
 <div className="adm-orb adm-orb-one" aria-hidden="true"/><div className="adm-orb adm-orb-two" aria-hidden="true"/>
 <div className="adm-content">
  <header className="adm-header">
   <div className="adm-avatar"><img src={`${process.env.PUBLIC_URL}/daniel.jpg`} alt="Daniel Moraes, criador do Além da Missa" width="88" height="88"/></div>
   <p className="adm-eyebrow">DANIEL MORAES</p><h1>Além da <em>Missa</em></h1>
   <p className="adm-intro">A fé que começa no altar<br/>continua na vida.</p><span className="adm-handle">@alemdamissa</span>
  </header>
  <a className="adm-feature adm-glass" href={ebook} target="_blank" rel="noopener noreferrer" aria-label="Conheça o e-book 7 dias para dar o primeiro passo na Hotmart (abre em nova aba)">
   <span className="adm-feature-top"><span className="adm-label"><FiBookOpen aria-hidden="true"/> UM PASSO DE CADA VEZ</span><FiArrowUpRight aria-hidden="true"/></span>
   <div className="adm-feature-body">
    <div className="adm-book" aria-hidden="true"><span>ALÉM DA MISSA</span><strong>7<small>dias</small></strong><div className="adm-book-line"/><p>para dar o<br/>primeiro passo</p><span>DANIEL MORAES</span></div>
    <div className="adm-feature-copy"><span className="adm-tag">E-BOOK</span><h2>7 dias para dar<br/>o primeiro passo</h2><p>Seu próximo passo na fé<br/>pode começar hoje.</p><span className="adm-cta">Conheça o e-book <FiArrowUpRight aria-hidden="true"/></span></div>
   </div>
  </a>
  <nav className="adm-socials" aria-label="Redes sociais do Além da Missa"><p className="adm-section-label">CAMINHE COMIGO</p>
   {socials.map(s=><a key={s.name} className="adm-social adm-glass" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.name}: @alemdamissa (abre em nova aba)`}><span className="adm-icon" aria-hidden="true">{s.icon}</span><span className="adm-social-copy"><strong>{s.name}</strong><span>{s.description}</span></span><FiArrowUpRight className="adm-link-arrow" aria-hidden="true"/></a>)}
  </nav>
  <a className="adm-playlist" href="https://open.spotify.com/playlist/6Z24nvgeNkYYo7YwmRqvhm" target="_blank" rel="noopener noreferrer"><FiMusic aria-hidden="true"/><span>Minha playlist católica<small>Uma trilha para os seus dias.</small></span><FiArrowUpRight aria-hidden="true"/></a>
  <footer className="adm-footer"><span className="adm-footer-line"/><p>Além da Missa <span>·</span> Fé para a vida.</p></footer>
 </div>
</main>}

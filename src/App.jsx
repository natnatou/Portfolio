import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { default as cvFile, default as cvImage } from './img/cv.jpg';
import NathanImage from './img/Nathan.png';
import schemaImage from './img/schema.png';

function Home() {
  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <span style={{ fontWeight: 'bold' }}>Mon Portfolio</span>
          <div className="nav-links">
            <a href="#accueil" className="nav-link">Accueil</a>
            <a href="#competences" className="nav-link">Compétences</a>
            <a href="#projets" className="nav-link">Projets</a>
            <a href="#contact" className="nav-link">Contact</a>
            <Link to="/about" className="nav-link">À Propos</Link>
          </div>
        </div>
      </nav>

      <section id="accueil" className="hero">
        <h1>Nathan Badouaille</h1>
        <h1>Étudiant à l'IPSSI Nice</h1>
        <p>Passionné par le réseau et la cybersécurité</p>
      </section>

      <section id="competences" className="section section-white">
        <h2 className="section-title">Compétences</h2>
        <div className="grid grid-4">
          <div className="card">
            <h3>Architecture Réseau</h3>
            <ul>
              <li>Architecture Réseau Cisco Avancée</li>
              <li>Conception de réseaux d'entreprise</li>
              <li>Routage et Switching</li>
              <li>Architecture de Systèmes Répartis</li>
              <li>CCNA 1</li>
              <li>CCNA 2</li>
            </ul>
          </div>
          <div className="card">
            <h3>Administration Système</h3>
            <ul>
              <li>Windows Server 2022</li>
              <li>Linux Server Administration</li>
              <li>Scripting Bash & Automatisation</li>
              <li>Cloud AWS</li>
            </ul>
          </div>
          <div className="card">
            <h3>Développement</h3>
            <ul>
              <li>React.js</li>
              <li>HTML5 / PHP / SQL</li>
              <li>Node.js / Express</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
          <div className="card disabled">
            <div className="status">En cours...</div>
            <h3>Cybersécurité</h3>
            <ul>
              <li>Tests de Pénétration</li>
              <li>Sécurité des Réseaux</li>
              <li>OWASP</li>
              <li>Analyse de Vulnérabilités</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projets" className="section section-gray">
        <h2 className="section-title">Projets</h2>
        <div className="grid grid-2">
          <Link to="/projet/proxmox" className="card-link">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80"
                alt="Infrastructure Proxmox"
              />
              <h3>Infrastructure Virtualisée Proxmox</h3>
              <p>Conception et déploiement d'une infrastructure complète virtualisée avec Proxmox VE</p>
            </div>
          </Link>
          <Link to="/projet/linux" className="card-link">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Projets Linux"
              />
              <h3>Projets Linux</h3>
              <p>Hardening Linux, WAF, VPN et infrastructure Nginx</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="contact" className="section section-white">
        <h2 className="section-title">Contact</h2>
        <div className="contact-links">
          <a href="https://github.com/natnatou?tab=repositories" target="_blank" rel="noopener noreferrer" className="contact-link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nathan-badouaille-3b9544295/" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn
          </a>
          <a href="mailto:n.badouaille@gmail.com" className="contact-link">
            Email
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} - Tous droits réservés</p>
      </footer>
    </div>
  );
}

function ProxmoxProject() {
  return (
    <div className="section">
      <Link to="/" className="nav-link" style={{ display: 'inline-block', marginBottom: '2rem' }}>
        ← Retour
      </Link>
      <h1 className="section-title">Infrastructure Virtualisée avec Proxmox</h1>
      <div className="card">
        <h2>Description du Projet</h2>
        <p>
          Infrastructure complète virtualisée utilisant Proxmox comme hyperviseur.
          Cette infrastructure répond aux besoins d'une entreprise moderne, avec une
          attention particulière à la redondance, la sécurité et la performance.
        </p>
        <img
          src={schemaImage}
          alt="Illustration de l'infrastructure Proxmox"
          style={{ width: '100%', height: 'auto', marginBottom: '2rem' }}
        />
        <h3>Technologies Utilisées</h3>
        <ul>
          <li>Proxmox VE comme hyperviseur principal</li>
          <li>pfSense pour le routage et la sécurité</li>
          <li>Windows Server 2022 pour les services Active Directory</li>
          <li>Linux (Debian/Ubuntu) pour les services web</li>
          <li>AWS pour des backups et serveur de secours </li>
        </ul>
      </div>
    </div>
  );
}

function LinuxProjects() {
  return (
    <div className="section">
      <Link to="/" className="nav-link" style={{ display: 'inline-block', marginBottom: '2rem' }}>
        ← Retour
      </Link>
      <h1 className="section-title">Projets Linux</h1>
      <div className="grid grid-2">
        <div className="card">
          <img
            src="https://internet-lyon.fr/wp-content/uploads/2021/12/Linux-Ralph-Kattan.png"
            alt="Hardening Linux"
          />
          <h3>Hardening Linux et Sécurité</h3>
          <p>Renforcement de la sécurité sur un serveur Linux</p>
          <ul>
            <li>Mise en place d'un WAF </li>
            <li>Configuration de VPN (OpenVPN, WireGuard)</li>
            <li>Protection contre les attaques DDoS</li>
            <li>Audit de sécurité et correction des vulnérabilités</li>
          </ul>
        </div>
        <div className="card">
          <img
            src="https://kinsta.com/fr/wp-content/uploads/sites/4/2019/01/qu-est-ce-que-nginx.png"
            alt="Infrastructure Nginx"
          />
          <h3>Infrastructure avec Nginx</h3>
          <p>Mise en place d'une infrastructure web avec Nginx</p>
          <ul>
            <li>Configuration de Nginx comme reverse proxy</li>
            <li>Load balancing pour haute disponibilité</li>
            <li>Sécurisation des communications avec SSL/TLS</li>
            <li>Optimisation des performances</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="section">
      <Link to="/" className="nav-link" style={{ display: 'inline-block', marginBottom: '2rem' }}>
        ← Retour à l'Accueil
      </Link>
      <div className="about-container">
        <div className="about-header">
          <div className="about-photo-container">
            <img
              src={NathanImage}
              alt="Nathan Badouaille"
              className="about-photo"
            />
          </div>
          <div className="about-intro">
            <h1 className="section-title">À Propos de Moi</h1>
            <p className="about-text">
              Je m'appelle Nathan Badouaille, étudiant à l'IPSSI Nice, passionné par le réseau et la cybersécurité.
              Mon parcours m'a permis d'acquérir des compétences solides en architecture réseau, administration système,
              et développement. Je suis toujours à la recherche de nouveaux défis et d'opportunités pour apprendre et
              grandir dans le domaine de la cybersécurité.
            </p>
          </div>
        </div>

        <div className="cv-container">
          <img
            src={cvImage}
            alt="Aperçu de mon CV"
            className="cv-preview"
          />
          <span className="arrow-indicator">→</span>
          <div className="cv-download">
            <p className="cv-date">
              Dernière mise à jour : {new Date().toLocaleDateString()}
            </p>
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/proxmox" element={<ProxmoxProject />} />
        <Route path="/projet/linux" element={<LinuxProjects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

const translations = {
  pt: {
    "hero.eyebrow": "Organização Brasileira de Gears of War",
    "hero.title1": "NÓS SOMOS",
    "hero.sub": "Organização brasileira de Gears of War. Competição, conteúdo e comunidade sob uma única bandeira.",
    "hero.btn1": "VER COMPETIÇÃO",
    "hero.btn2": "NOSSA MÍDIA",
    "origin.eyebrow": "EMBRY // ORIGEM",
    "origin.title1": "O que significa",
    "origin.p1": "O nome vem de <strong>Nassar Embry</strong>, o Allfather Prime que uniu a Coalizão em um dos momentos mais críticos da história de Sera. Seu legado deu origem à <strong>Embry Star</strong>.",
    "origin.p2": "É esse o padrão que a organização carrega no nome: liderança, união e a exigência de ir além do esperado.",
    "origin.quote": "A mais alta honra pertence a quem vai além do dever.",
    "roster.title": "THE ROSTER",
    "roster.sub": "Competição, highlights e comunidade. Conheça quem representa a EMBRY.",
    "roster.competitive.tag": "Competitivo",
    "roster.mainLine": "Linha Principal",
    "roster.highlightPlayer": "Jogador de Destaque",
    "roster.communityMedia.role": "Mídia da Comunidade",
    "channels.title": "MÍDIA & CONTEÚDO",
    "channels.sub": "Acompanhe as jogadas, os bastidores e o canal oficial.",
    "channels.content": "// CONTEÚDO",
    "channels.official": "// OFICIAL",
    "channels.cyberz.sub": "Fundador & Líder",
    "channels.cyberz.desc": "Uma história construída na comunidade de Gears. Vontade de competir, evoluir e deixar sua marca.",
    "channels.team.sub": "Desde 2013",
    "channels.team.desc": "Fundada em 04/07/2013, com a ideia de ser um pequeno grupo de amigos reunidos para jogar Gears of War.",
    "channels.watchNow": "Assistir agora →",
    "footer.tagline": "GEARS. COMUNIDADE. LEGADO.",
    "footer.motto": "GEARS. <b>COMUNIDADE.</b> LEGADO."
  },
  es: {
    "hero.eyebrow": "Organización de Gears of War",
    "hero.title1": "SOMOS",
    "hero.sub": "Organización de Gears of War. Competición, contenido y comunidad bajo una sola bandera.",
    "hero.btn1": "VER COMPETICIÓN",
    "hero.btn2": "NUESTRA MEDIA",
    "origin.eyebrow": "EMBRY // ORIGEN",
    "origin.title1": "Qué significa",
    "origin.p1": "El nombre viene de <strong>Nassar Embry</strong>, el Allfather Prime que unió a la Coalición. Su legado dio origen a la <strong>Embry Star</strong>.",
    "origin.p2": "Ese es el estándar que la organización lleva en su nombre: liderazgo, unión y la exigencia de ir más allá de lo esperado.",
    "origin.quote": "El honor más alto pertenece a quien va más allá del deber.",
    "roster.title": "EL ROSTER",
    "roster.sub": "Competición, highlights y comunidad. Conoce a quienes representan a EMBRY.",
    "roster.competitive.tag": "Competitivo",
    "roster.mainLine": "Línea Principal",
    "roster.highlightPlayer": "Jugador Destacado",
    "roster.communityMedia.role": "Medios de la Comunidad",
    "channels.title": "MEDIA Y CONTENIDO",
    "channels.sub": "Sigue las jugadas, el detrás de cámaras y el canal oficial.",
    "channels.content": "// CONTENIDO",
    "channels.official": "// OFICIAL",
    "channels.cyberz.sub": "Fundador & Líder",
    "channels.cyberz.desc": "Una historia construida en la comunidad de Gears. Voluntad de competir, evolucionar y dejar su marca.",
    "channels.team.sub": "Desde 2013",
    "channels.team.desc": "Fundada el 04/07/2013, con la idea de ser un pequeño grupo de amigos reunidos para jugar Gears of War.",
    "channels.watchNow": "Ver ahora →",
    "footer.tagline": "GEARS. COMUNIDAD. LEGADO.",
    "footer.motto": "GEARS. <b>COMUNIDAD.</b> LEGADO."
  },
  en: {
    "hero.eyebrow": "Gears of War Organization",
    "hero.title1": "WE ARE",
    "hero.sub": "Gears of War organization. Competition, content and community under a single banner.",
    "hero.btn1": "VIEW COMPETITION",
    "hero.btn2": "OUR MEDIA",
    "origin.eyebrow": "EMBRY // ORIGIN",
    "origin.title1": "What does",
    "origin.p1": "The name comes from <strong>Nassar Embry</strong>, the Allfather Prime who united the Coalition. His legacy gave rise to the <strong>Embry Star</strong>.",
    "origin.p2": "That is the standard the organization carries in its name: leadership, unity, and the demand to go beyond what is expected.",
    "origin.quote": "The highest honor belongs to those who go beyond duty.",
    "roster.title": "THE ROSTER",
    "roster.sub": "Competition, highlights and community. Meet those who represent EMBRY.",
    "roster.competitive.tag": "Competitive",
    "roster.mainLine": "Main Line",
    "roster.highlightPlayer": "Highlight Player",
    "roster.communityMedia.role": "Community Media",
    "channels.title": "MEDIA & CONTENT",
    "channels.sub": "Follow the plays, the behind the scenes and the official channel.",
    "channels.content": "// CONTENT",
    "channels.official": "// OFFICIAL",
    "channels.cyberz.sub": "Founder & Leader",
    "channels.cyberz.desc": "A story built in the Gears community. Will to compete, evolve and leave his mark.",
    "channels.team.sub": "Since 2013",
    "channels.team.desc": "Founded on 04/07/2013, with the idea of being a small group of friends gathered to play Gears of War.",
    "channels.watchNow": "Watch now →",
    "footer.tagline": "GEARS. COMMUNITY. LEGACY.",
    "footer.motto": "GEARS. <b>COMMUNITY.</b> LEGACY."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.pt;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (dict[key].includes('<')) { el.innerHTML = dict[key]; } 
      else { el.textContent = dict[key]; }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('embry-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('embry-lang') || 'pt';
  setLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
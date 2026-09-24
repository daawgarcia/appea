import { useEffect, useState, type MouseEvent } from 'react'
import './App.css'

const navItems = ['Quem Somos', 'Como Funciona', 'Produtos', 'Casos Clínicos', 'Contato']

const stats = [
  { value: '16k+', label: 'dentistas credenciados' },
  { value: '10', label: 'países com atuação' },
  { value: '2008', label: 'fundação da marca' },
]

const pillars = [
  {
    title: 'Tecnologia avançada',
    text: 'Alinhadores com materiais e engenharia pensados para conforto, previsibilidade e resultados estéticos.',
  },
  {
    title: 'Experiência de tratamento',
    text: 'Fluxo claro, conforto para o paciente e uma rotina que se adapta ao dia a dia da prática.',
  },
  {
    title: 'Presença global',
    text: 'Mais de 16 mil profissionais credenciados e presença em mercados de relevância internacional.',
  },
]

const steps = [
  'Avaliação do caso e planejamento digital',
  'Primeiro alinhador da série em uso por 10 dias',
  'Progressão com alinhadores e acompanhamento clínico',
  'Retenção e protocolos complementares para estabilidade',
]

const timeline = [
  { year: '2008', title: 'Início da produção', detail: 'produção de alinhadores para consumo próprio' },
  { year: '2015', title: 'Primeiro credenciamento', detail: 'expansão da rede e aproximação com o mercado' },
  { year: '2017', title: 'Exportações para Europa', detail: 'fortalecimento do alcance internacional' },
  { year: '2022', title: '8.000 credenciados', detail: 'crescimento consistente da operação global' },
  { year: '2024', title: 'Nova linha de produtos', detail: 'lançamento com foco em inovação e utilidade clínica' },
]

const countries = [
  { flag: '�🇸', city: 'Flórida', country: 'Estados Unidos', role: 'Headquarters' },
  { flag: '🇧🇷', city: 'São Paulo', country: 'Brasil', role: 'Headquarters • Fábrica' },
  { flag: '🇵🇹', city: 'Entroncamento', country: 'Portugal', role: 'Fábrica' },
  { flag: '🇲🇽', city: 'Cidade do México', country: 'México', role: 'Fábrica' },
  { flag: '🇨🇴', city: 'Bogotá', country: 'Colômbia', role: 'Fábrica' },
]

const cases = [
  {
    label: 'Classe I',
    title: 'Apinhamento anterior severo',
    description: 'Correção de disarmonia estética e funcional com planejamento alinhado à necessidade do paciente.',
  },
  {
    label: 'Classe I',
    title: 'Dente 22 cruzado',
    description: 'Caso que exige controle de eixo, alinhamento e estabilidade em um tratamento progressivo.',
  },
  {
    label: 'Classe III',
    title: 'Atresia maxilar e mordida cruzada',
    description: 'Solução em que o alinhamento e a proteção de mordida cruzada exigem condução clínica precisa.',
  },
  {
    label: 'Mista',
    title: 'Desvio de linha média',
    description: 'Correção do equilíbrio dental com foco em estética, funcionalidade e previsibilidade.',
  },
]

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -18
    setPointer({ x, y })
  }

  return (
    <div className="page-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <div className="orb orb-three" aria-hidden="true" />

      <header className="topbar">
        <div className="brand" aria-label="Esthetic Aligner home">
          <span className="brand-mark" />
          <span>ESTHETIC ALIGNER</span>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary" href="#contato">
          Falar com especialista
        </a>
      </header>

      <main>
        <section className="hero" id="quem-somos">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow">Tecnologia • estética • confiança</div>
            <h1>
              Alinhadores que <span>transformam</span> sorrisos com precisão e conforto.
            </h1>
            <p>
              Fundada em 2008, a Esthetic Aligner é a maior empresa brasileira de alinhadores
              ortodônticos, com presença na Europa e América Latina. Nossa missão é oferecer
              tratamentos mais eficientes, estéticos e acessíveis para simplificar a jornada do
              paciente e potencializar a prática odontológica.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary large" href="#contato">
                Solicitar proposta
              </a>
              <a className="btn btn-secondary large" href="#como-funciona">
                Como funciona
              </a>
            </div>

            <div className="stats-row" aria-label="Indicadores principais">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-box" data-reveal>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-visual"
            onMouseMove={handlePointerMove}
            onMouseLeave={() => setPointer({ x: 0, y: 0 })}
            aria-label="Visualização do sistema"
          >
            <div
              className="showcase-shell"
              data-reveal
              style={{ transform: `rotateX(${pointer.y}deg) rotateY(${pointer.x}deg)` }}
            >
              <div className="network-layer" aria-hidden="true">
                <span className="node node-1" />
                <span className="node node-2" />
                <span className="node node-3" />
                <span className="node node-4" />
                <span className="node node-5" />
                <span className="node node-6" />
              </div>

              <div className="showcase-glow" />
              <div className="showcase-topbar">
                <span className="chip">EA System</span>
                <span className="chip chip-soft">3D Printed</span>
              </div>

              <div className="geo-scene" aria-label="Mapa global da Esthetic Aligner">
                <div className="geo-orbit geo-orbit-one" />
                <div className="geo-orbit geo-orbit-two" />
                <div className="geo-core">
                  <span className="geo-pin geo-pin-one" />
                  <span className="geo-pin geo-pin-two" />
                  <span className="geo-pin geo-pin-three" />
                  <span className="geo-pin geo-pin-four" />
                </div>
              </div>

              <div className="showcase-badges">
                {countries.map((country) => (
                  <div key={`${country.city}-${country.country}`} className="country-item">
                    <span className="flag-badge" aria-label={country.country}>
                      {country.flag}
                    </span>

                    <div className="country-copy">
                      <strong>
                        {country.city}, {country.country}
                      </strong>
                      <span>{country.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="timeline-section" id="como-funciona">
          <div className="section-header narrow" data-reveal>
            <span className="eyebrow">Linha do tempo</span>
            <h2>Uma trajetória construída com evolução, presença global e inovação contínua.</h2>
          </div>

          <div className="timeline" aria-label="Linha do tempo da Esthetic Aligner">
            {timeline.map((item) => (
              <div key={item.year} className="timeline-item" data-reveal>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pillars" id="produtos">
          <div className="section-header" data-reveal>
            <span className="eyebrow">Por que a Esthetic Aligner</span>
            <h2>Uma solução completa para tratamento ortodôntico moderno.</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="pillar-card" data-reveal>
                <div className="number">0{index + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cases-section" id="casos-clinicos">
          <div className="section-header narrow" data-reveal>
            <span className="eyebrow">Casos clínicos</span>
            <h2>Tratamentos planejados para diferentes perfis de necessidade estética e funcional.</h2>
          </div>

          <div className="cases-grid">
            {cases.map((item) => (
              <article key={item.title} className="case-card" data-reveal>
                <span className="case-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="case-meta">
                  <span>Plano</span>
                  <strong>EA Protocol</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="contato">
          <div className="process-copy" data-reveal>
            <span className="eyebrow">Como funciona</span>
            <h2>Estéticos, confortáveis e eficientes, os alinhadores corrigem os dentes de forma progressiva.</h2>
          </div>

          <ol className="process-list">
            {steps.map((step) => (
              <li key={step} data-reveal>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  )
}

export default App

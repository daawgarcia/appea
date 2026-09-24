import { useState, type MouseEvent } from 'react'
import './App.css'

const navItems = ['Quem Somos', 'Como Funciona', 'Produtos', 'Casos Clínicos']

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
  { name: '2008', value: 'Início da produção' },
  { name: '2015', value: 'Ortholab e credenciamento' },
  { name: '2024', value: 'Nova linha de produtos' },
]

function App() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

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
          <div className="hero-copy">
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
                <div key={stat.label} className="stat-box">
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
            aria-label="Visualização da interface"
          >
            <div
              className="dashboard-shell"
              style={{ transform: `rotateX(${pointer.y}deg) rotateY(${pointer.x}deg)` }}
            >
              <div className="dashboard-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="status-pill">global</div>
              </div>

              <div className="dashboard-body">
                <div className="panel panel-large">
                  <div className="panel-topline">
                    <span>Resultados</span>
                    <strong>+68%</strong>
                  </div>
                  <div className="bars">
                    <span style={{ height: '34%' }} />
                    <span style={{ height: '52%' }} />
                    <span style={{ height: '44%' }} />
                    <span style={{ height: '74%' }} />
                    <span style={{ height: '92%' }} />
                    <span style={{ height: '100%' }} />
                  </div>
                </div>

                <div className="panel-grid">
                  <div className="panel small-panel">
                    <span>Credenciados</span>
                    <strong>16k+</strong>
                    <div className="sparkline" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="panel small-panel">
                    <span>Presença</span>
                    <strong>10 países</strong>
                    <div className="pulse"></div>
                  </div>
                </div>

                <div className="panel panel-bottom">
                  <div className="mini-row">
                    <span>Tratamentos</span>
                    <strong>Estético</strong>
                  </div>
                  <div className="progress">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics" id="como-funciona">
          {timeline.map((item) => (
            <div key={item.name} className="metric-card">
              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="pillars" id="produtos">
          <div className="section-header">
            <span className="eyebrow">Por que a Esthetic Aligner</span>
            <h2>Uma solução completa para tratamento ortodôntico moderno.</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <article key={pillar.title} className="pillar-card">
                <div className="number">0{index + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="casos-clinicos">
          <div className="process-copy">
            <span className="eyebrow">Como funciona</span>
            <h2>Estéticos, confortáveis e eficientes, os alinhadores corrigem os dentes de forma progressiva.</h2>
          </div>

          <ol className="process-list">
            {steps.map((step) => (
              <li key={step}>
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

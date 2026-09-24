import { useState, type MouseEvent } from 'react'
import './App.css'

const navItems = ['Soluções', 'Resultados', 'Processo', 'Contato']

const stats = [
  { value: '3x', label: 'maior presença online' },
  { value: '48h', label: 'para primeira versão' },
  { value: '94%', label: 'de retenção do público' },
]

const pillars = [
  {
    title: 'Estratégia de marca',
    text: 'Posicionamento claro, narrativa forte e mensagens que conectam com o cliente certo.',
  },
  {
    title: 'Experiência digital',
    text: 'Interfaces refinadas, fluxos simplificados e movimento que orienta a atenção.',
  },
  {
    title: 'Conversão',
    text: 'Conteúdo, CTA e estrutura pensados para transformar visitas em oportunidades reais.',
  },
]

const steps = [
  'Diagnóstico do cenário e público',
  'Criação da narrativa e direção visual',
  'Construção da experiência interativa',
  'Ajustes de conversão e lançamento',
]

const timeline = [
  { name: 'VISÃO', value: 'Marca com clareza' },
  { name: 'EXPERIÊNCIA', value: 'Design premium' },
  { name: 'RESULTADO', value: 'Engajamento real' },
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
        <div className="brand" aria-label="APP Brasil home">
          <span className="brand-mark" />
          <span>APP BRASIL</span>
        </div>

        <nav className="main-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary" href="#contato">
          Falar com especialista
        </a>
      </header>

      <main>
        <section className="hero" id="solucoes">
          <div className="hero-copy">
            <div className="eyebrow">Estratégia • experiência • conversão</div>
            <h1>
              Uma presença digital que <span>atrai</span>, <span>impressiona</span> e vende.
            </h1>
            <p>
              Transformamos apresentação institucional em uma experiência moderna, dinâmica e
              memorável, pensada para reforçar a marca e gerar conexão real com o público.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary large" href="#contato">
                Solicitar proposta
              </a>
              <a className="btn btn-secondary large" href="#resultados">
                Ver como funciona
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
                <div className="status-pill">online</div>
              </div>

              <div className="dashboard-body">
                <div className="panel panel-large">
                  <div className="panel-topline">
                    <span>Performance</span>
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
                    <span>Lead score</span>
                    <strong>92</strong>
                    <div className="sparkline" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="panel small-panel">
                    <span>Campanha</span>
                    <strong>Ativa</strong>
                    <div className="pulse"></div>
                  </div>
                </div>

                <div className="panel panel-bottom">
                  <div className="mini-row">
                    <span>Engajamento</span>
                    <strong>8.4k</strong>
                  </div>
                  <div className="progress">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics" id="resultados">
          {timeline.map((item) => (
            <div key={item.name} className="metric-card">
              <span>{item.name}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="pillars" id="processo">
          <div className="section-header">
            <span className="eyebrow">Por que funciona</span>
            <h2>Do posicionamento à experiência, tudo pensado para impactar.</h2>
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

        <section className="process" id="contato">
          <div className="process-copy">
            <span className="eyebrow">Como trabalhamos</span>
            <h2>Fazemos o produto ganhar presença, profundidade e movimento.</h2>
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

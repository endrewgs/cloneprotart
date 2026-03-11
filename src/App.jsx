import { useEffect, useState } from 'react'
import './App.css'

const SITE = 'https://protart.com.br'

const desktopBanners = ['imagens/banner4.jpg', 'imagens/banner3.jpg', 'imagens/banner2_novo.jpg']
const mobileBanners  = ['imagens/banner-mobile3.jpg', 'imagens/banner-mobile.jpg', 'imagens/banner-mobile2_novo.jpg']

const WA_LINK = 'https://api.whatsapp.com/send?phone=5547992865459'

// Slug helper — cada card abre sua própria "página" em nova aba
const slug = (title) => '/produtos/' + title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

const products = [
  { title: 'Tapete de Vinil',          image: 'imagens/tapete-vinil.jpg'    },
  { title: 'Tapete Cleankap',          image: 'imagens/cleankap.jpg'        },
  { title: 'Grama Sintética',          image: 'imagens/grama-sintetica.jpg' },
  { title: 'Capas para Elevadores',    image: 'imagens/capa-elevador.jpg'   },
  { title: 'Piso Modular',             image: 'imagens/piso-modular.jpg'    },
  { title: 'Rubberkap',                image: 'imagens/rubberkap.jpg'       },
  { title: 'Tapete Italy Elegance',    image: 'imagens/italy-elegance.jpg'  },
  { title: 'Tapete Terra',             image: 'imagens/tapete-terra.jpg'    },
  { title: 'Tapete Laminado Moeda',    image: 'imagens/laminado-moeda.jpg'  },
  { title: 'Tapete Laminado Bus',      image: 'imagens/laminado-bus.jpg'    },
]

function BannerCarousel({ id, banners, index, onPrev, onNext }) {
  return (
    <section id={id}>
      <div className="banners">
        {banners.map((banner, i) => (
          <div
            key={banner}
            className={`imgbanner ${i === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${SITE}/${banner})` }}
          />
        ))}
      </div>

      <div id="SetasCarrossel">
        <button className="Setas SetasEsq" type="button" onClick={onPrev} aria-label="Banner anterior">
          <img src={`${SITE}/imagens/seta-esqb.svg`}  className="SetaEsq1" alt="" />
          <img src={`${SITE}/imagens/seta-esqb2.svg`} className="SetaEsq2" alt="" />
        </button>
        <button className="Setas SetasDir" type="button" onClick={onNext} aria-label="Próximo banner">
          <img src={`${SITE}/imagens/seta-dirb.svg`}  className="SetaDir1" alt="" />
          <img src={`${SITE}/imagens/seta-dirb2.svg`} className="SetaDir2" alt="" />
        </button>
      </div>
    </section>
  )
}

function App() {
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex,  setMobileIndex]  = useState(0)

  useEffect(() => {
    const dt = setInterval(() => setDesktopIndex((p) => (p + 1) % desktopBanners.length), 5000)
    const mt = setInterval(() => setMobileIndex( (p) => (p + 1) % mobileBanners.length),  5000)
    return () => { clearInterval(dt); clearInterval(mt) }
  }, [])

  return (
    <>
      {/* ── HEADER ── */}
      <header id="Topo">
        <div className="centralizar_site">
          <div className="Centralizar">
            <div className="Logotipo">
              <a href="#top" className="LogoTexto">
                <span className="LogoTopo">DESTAQUE VISUAL</span>
                <span className="LogoSub">TAPETES</span>
              </a>
            </div>

            <nav className="MenuGeral">
              <a className="Menus" href="#top">HOME</a>
              <a className="Menus" href="#QuemSomos">QUEM SOMOS</a>
              <a className="Menus" href="#Produtos">PRODUTOS</a>
              <a className="Menus" href="#Contato">CONTATO</a>

              <div className="Contato">
                <img src={`${SITE}/imagens/whats-topo.svg`} alt="Whatsapp" />
                <a href={WA_LINK} target="_blank" rel="noreferrer">(47) 99286-5459</a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ── BANNERS ── */}
        <div id="BannerPrincipal">
          <BannerCarousel
            id="Banner"
            banners={desktopBanners}
            index={desktopIndex}
            onPrev={() => setDesktopIndex((p) => (p - 1 + desktopBanners.length) % desktopBanners.length)}
            onNext={() => setDesktopIndex((p) => (p + 1) % desktopBanners.length)}
          />
        </div>
        <div id="BannerMobile">
          <BannerCarousel
            id="BanerMobile"
            banners={mobileBanners}
            index={mobileIndex}
            onPrev={() => setMobileIndex((p) => (p - 1 + mobileBanners.length) % mobileBanners.length)}
            onNext={() => setMobileIndex((p) => (p + 1) % mobileBanners.length)}
          />
        </div>

        {/* ── QUEM SOMOS ── */}
        <section id="QuemSomos">
          <div className="centralizar_site">
            <div className="Centralizar">
              <div className="Imagem">
                <img src={`${SITE}/imagens/quem-somos.png`} alt="Quem Somos" />
              </div>
              <div className="ConteudoTxt">
                <h2 className="TituloPrincipal">QUEM SOMOS</h2>
                <div className="Linha">&nbsp;</div>
                <p className="TextoPrincipal">
                  A Destaque Visual Tapetes é uma empresa especializada em soluções de alta performance para pisos e
                  tapetes personalizados. Contamos com uma equipe altamente qualificada para atendê-lo com eficiência,
                  qualidade e rapidez.
                  <br /><br />
                  Oferecemos atendimento personalizado, garantindo que o seu projeto – seja residencial, comercial ou
                  industrial – seja executado com comprometimento e resultados visuais impecáveis.
                </p>
                <div className="Distribuidor">
                  <div className="DistaqBadge">
                    <span className="DistaqIcon">✦</span>
                    Mão de obra Especializada
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUTOS ── */}
        <section id="Produtos">
          <div className="centralizar_site">
            <h2 className="TituloPrincipal">PRODUTOS</h2>
            <div className="Linha">&nbsp;</div>

            <div className="BlocoGeral">
              {/* Painel de chamada */}
              <div className="BlocoLivre" style={{ backgroundImage: `url(${SITE}/imagens/produtos.jpg)` }}>
                <div className="SubTituloPrincipal">LINHA COMPLETA</div>
                <div className="SubTextoPrincipal">
                  Conheça todos os nossos produtos que contam com uma ótima qualidade e durabilidade.
                  <br /><br />
                  <span>Destaque Visual</span>
                </div>
                <div className="FiltroLivre">&nbsp;</div>
              </div>

              {products.map((product) => (
                <a
                  className="Blocos"
                  key={product.title}
                  href={slug(product.title)}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="SubTituloPrincipal SubTituloNone">{product.title}</div>
                  <div className="ConteudoTxt">
                    <div className="SubTituloPrincipal">{product.title}</div>
                    <div className="Botao"><span>saiba mais</span></div>
                  </div>
                  <div className="Filtro">&nbsp;</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTATO ── */}
        <section id="Contato">
          <div className="Conteudos">
            <div className="centralizar_site">
              <h2 className="TituloPrincipal">CONTATO</h2>
              <div className="Linha">&nbsp;</div>
              <div className="SubTituloPrincipal2">Entre em contato conosco por um dos canais de atendimento abaixo:</div>

              <div className="BlocoGeral">
                {/* WhatsApp — único canal */}
                <a className="Blocos BlocoWa" href={WA_LINK} target="_blank" rel="noreferrer">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/whatsapp.svg`} alt="Whatsapp" />
                  </div>
                  <div className="Txts">
                    <div className="Txt1">WHATSAPP</div>
                    <div className="Txt2">(47) 99286-5459</div>
                  </div>
                </a>

                {/* Localização */}
                <div className="Blocos BlocoLocal">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/local.svg`} alt="Localização" />
                  </div>
                  <div className="Txts Tam3">
                    <div className="Txt1">LOCALIZAÇÃO</div>
                    <div className="Txt2">Santa Catarina e Região</div>
                  </div>
                </div>

                {/* ── CTA de orçamento ── */}
                <div className="CtaOrcamento">
                  <div className="CtaInner">
                    <h3 className="CtaTitulo">Gostou de algum dos nossos produtos?</h3>
                    <p className="CtaSubtitulo">
                      Fale diretamente com nosso especialista e solicite um orçamento sem compromisso.
                    </p>
                    <a
                      className="CtaBotao"
                      href={WA_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg className="CtaWaIcon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87.98.99-3.76-.24-.39A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.64-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.08-.79.37-.28.3-1.06 1.03-1.06 2.52s1.09 2.92 1.24 3.12c.15.2 2.14 3.26 5.18 4.57.72.31 1.29.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.28-.2-.58-.35z"/>
                      </svg>
                      Solicitar Orçamento via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER CORPORATIVO ── */}
      <footer id="Rodape">
        <div className="RodapeTop">
          <div className="centralizar_site">
            <div className="RodapeTopInner">
              <div className="RodapeBrand">
                <span className="LogoRodapeTopo">DESTAQUE VISUAL</span>
                <span className="LogoRodapeSub">TAPETES</span>
                <p className="RodapeSlogan">Especialistas em proteção, estética e segurança.</p>
              </div>

              <a className="RodapeTopo" href="#top" aria-label="Voltar ao topo">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                VOLTAR AO TOPO
              </a>
            </div>
          </div>
        </div>

        <div className="RodapeBase">
          <div className="centralizar_site">
            <span>© 2026 Destaque Visual Tapetes. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a className="ancora_wp" href={WA_LINK} target="_blank" rel="noreferrer" aria-label="Abrir Whatsapp" />
    </>
  )
}

export default App

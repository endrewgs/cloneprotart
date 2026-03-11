import { useEffect, useState } from 'react'
import './App.css'

const SITE = 'https://protart.com.br'

const desktopBanners = ['imagens/banner4.jpg', 'imagens/banner3.jpg', 'imagens/banner2_novo.jpg']
const mobileBanners = ['imagens/banner-mobile3.jpg', 'imagens/banner-mobile.jpg', 'imagens/banner-mobile2_novo.jpg']

const WA_LINK = 'https://api.whatsapp.com/send?phone=5547992865459'

const products = [
  { title: 'Capas para Elevadores',   image: 'imagens/capa-elevador.jpg',   href: WA_LINK },
  { title: 'Tapetes de Vinil',        image: 'imagens/tapete-vinil.jpg',    href: WA_LINK },
  { title: 'Tapetes Cleankap',        image: 'imagens/cleankap.jpg',        href: WA_LINK },
  { title: 'Grama Sintética',         image: 'imagens/grama-sintetica.jpg', href: WA_LINK },
  { title: 'Piso Modular',            image: 'imagens/piso-modular.jpg',    href: WA_LINK },
  { title: 'Rubberkap',               image: 'imagens/rubberkap.jpg',       href: WA_LINK },
  { title: 'Tapete Italy Elegance',   image: 'imagens/italy-elegance.jpg',  href: WA_LINK },
  { title: 'Piso Vinílico',           image: 'imagens/piso-vinilico.jpg',   href: WA_LINK },
  { title: 'Wind Banner',             image: 'imagens/wind-banner.jpg',     href: WA_LINK },
  { title: 'Tapete Laminado Bus',     image: 'imagens/laminado-bus.jpg',    href: WA_LINK },
  { title: 'Tapete Laminado Moeda',   image: 'imagens/laminado-moeda.jpg',  href: WA_LINK },
  { title: 'Tapete Terra',            image: 'imagens/tapete-terra.jpg',    href: WA_LINK },
]

const contactLinks = {
  whatsapp: WA_LINK,
  instagram: 'http://www.instagram.com/destaquevisualtapetes',
  email: 'mailto:contato@destaquevisualtapetes.com.br',
}

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
          <img src={`${SITE}/imagens/seta-esqb.svg`} className="SetaEsq1" alt="" />
          <img src={`${SITE}/imagens/seta-esqb2.svg`} className="SetaEsq2" alt="" />
        </button>
        <button className="Setas SetasDir" type="button" onClick={onNext} aria-label="Próximo banner">
          <img src={`${SITE}/imagens/seta-dirb.svg`} className="SetaDir1" alt="" />
          <img src={`${SITE}/imagens/seta-dirb2.svg`} className="SetaDir2" alt="" />
        </button>
      </div>
    </section>
  )
}

function App() {
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)

  useEffect(() => {
    const desktopTimer = setInterval(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopBanners.length)
    }, 5000)
    const mobileTimer = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % mobileBanners.length)
    }, 5000)
    return () => {
      clearInterval(desktopTimer)
      clearInterval(mobileTimer)
    }
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
                <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  (47) 99286-5459
                </a>
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
            onPrev={() => setDesktopIndex((prev) => (prev - 1 + desktopBanners.length) % desktopBanners.length)}
            onNext={() => setDesktopIndex((prev) => (prev + 1) % desktopBanners.length)}
          />
        </div>

        <div id="BannerMobile">
          <BannerCarousel
            id="BanerMobile"
            banners={mobileBanners}
            index={mobileIndex}
            onPrev={() => setMobileIndex((prev) => (prev - 1 + mobileBanners.length) % mobileBanners.length)}
            onNext={() => setMobileIndex((prev) => (prev + 1) % mobileBanners.length)}
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
                  <br />
                  <br />
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
              {/* Painel de chamada — ocupa 1 slot no grid de 3 colunas */}
              <div className="BlocoLivre" style={{ backgroundImage: `url(${SITE}/imagens/produtos.jpg)` }}>
                <div className="SubTituloPrincipal">LINHA COMPLETA</div>
                <div className="SubTextoPrincipal">
                  Conheça todos os nossos produtos que contam com uma ótima qualidade e durabilidade.
                  <br />
                  <br />
                  <span>Destaque Visual</span>
                </div>
                <div className="FiltroLivre">&nbsp;</div>
              </div>

              {products.map((product) => (
                <a
                  className="Blocos"
                  key={product.title}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="SubTituloPrincipal SubTituloNone">{product.title}</div>
                  <div className="ConteudoTxt">
                    <div className="SubTituloPrincipal">{product.title}</div>
                    <div className="Botao">
                      <span>saiba mais</span>
                    </div>
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
                <a className="Blocos" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/whatsapp.svg`} alt="Whatsapp" />
                  </div>
                  <div className="Txts">
                    <div className="Txt1">WHATSAPP</div>
                    <div className="Txt2">(47) 99286-5459</div>
                  </div>
                </a>

                <a className="Blocos" href={contactLinks.instagram} target="_blank" rel="noreferrer">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/instagram.svg`} alt="Instagram" />
                  </div>
                  <div className="Txts">
                    <div className="Txt1">INSTAGRAM</div>
                    <div className="Txt2">@destaquevisualtapetes</div>
                  </div>
                </a>

                <a className="Blocos" href={contactLinks.email}>
                  <div className="Icone">
                    <img src={`${SITE}/imagens/email.svg`} alt="Email" />
                  </div>
                  <div className="Txts Tam2">
                    <div className="Txt1">EMAIL</div>
                    <div className="Txt2">contato@destaquevisualtapetes.com.br</div>
                  </div>
                </a>

                <form className="Form" onSubmit={(event) => event.preventDefault()}>
                  <div className="TituloPrincipal">Solicite orçamento agora mesmo</div>

                  <div>
                    <div className="campos">
                      <label htmlFor="contato_nome">Seu nome</label>
                      <input type="text" name="contato_nome" id="contato_nome" />
                    </div>
                    <div className="campos">
                      <label htmlFor="contato_telefone">Seu telefone</label>
                      <input type="tel" name="contato_telefone" id="contato_telefone" />
                    </div>
                  </div>

                  <div>
                    <div className="campos">
                      <label htmlFor="contato_email">Seu e-mail</label>
                      <input type="email" name="contato_email" id="contato_email" />
                    </div>
                    <div className="campos">
                      <label htmlFor="contato_produto">Produto interessado</label>
                      <select name="contato_produto" id="contato_produto" defaultValue="">
                        <option value=""></option>
                        {products.map((p) => (
                          <option value={p.title} key={p.title}>
                            {p.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="campos">
                    <label htmlFor="contato_mensagem">Sua mensagem</label>
                    <textarea name="contato_mensagem" id="contato_mensagem" />
                  </div>

                  <input type="submit" value="Enviar" />
                </form>

                <div className="Blocos">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/local.svg`} alt="Localização" />
                  </div>
                  <div className="Txts Tam3">
                    <div className="Txt1">LOCALIZAÇÃO</div>
                    <div className="Txt2">Santa Catarina e Região</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597217.7897740247!2d-53.27166!3d-27.2423392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8855329765849%3A0x1a8547f3ee2e0af3!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Destaque Visual Tapetes - Santa Catarina"
            />
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer id="Rodape">
        <div className="centralizar_site">
          <div className="Centralizar">
            <div className="LogotipoRodape">
              <span className="LogoRodapeTopo">DESTAQUE VISUAL</span>
              <span className="LogoRodapeSub">TAPETES</span>
            </div>

            <div className="Direitos">© 2026 DESTAQUE VISUAL - Tapetes e Soluções em Pisos</div>

            <a className="IrTopo" href="#top">
              <img src={`${SITE}/imagens/seta-topo.svg`} alt="Topo" />
              VOLTAR AO TOPO
            </a>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a className="ancora_wp" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir Whatsapp" />
    </>
  )
}

export default App

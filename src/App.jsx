import { useEffect, useState } from 'react'
import './App.css'

const SITE = 'https://protart.com.br'

const desktopBanners = ['imagens/banner4.jpg', 'imagens/banner3.jpg', 'imagens/banner2_novo.jpg']
const mobileBanners = ['imagens/banner-mobile3.jpg', 'imagens/banner-mobile.jpg', 'imagens/banner-mobile2_novo.jpg']

const products = [
  { title: 'TAPETE VINIL', image: 'arquivos/tapete-vinil/capa.jpg', href: 'https://protart.com.br/produtos/tapete-vinil' },
  { title: 'TAPETE CLEANKAP', image: 'arquivos/tapete-cleankap/capa.jpg', href: 'https://protart.com.br/produtos/tapete-cleankap' },
  { title: 'TAPETE DUO', image: 'arquivos/tapete-duo/capa.jpg', href: 'https://protart.com.br/produtos/tapete-duo' },
  { title: 'RUBBERKAP', image: 'arquivos/rubberkap/capa.jpg', href: 'https://protart.com.br/produtos/rubberkap' },
  { title: 'PISO MOEDA E BUS', image: 'arquivos/piso-moeda-bus/capa.jpg', href: 'https://protart.com.br/produtos/piso-moeda-bus' },
  { title: 'ÁREAS ÚMIDAS', image: 'arquivos/pisos-areas-umidas/capa.jpg', href: 'https://protart.com.br/produtos/pisos-areas-umidas' },
  { title: 'WIND BANNER', image: 'arquivos/wind-banner/capa.jpg', href: 'https://protart.com.br/produtos/wind-banner' },
  { title: 'TAPETE SANITIZANTE', image: 'arquivos/tapete-sanitizante/capa.jpg', href: 'https://protart.com.br/produtos/tapete-sanitizante' },
  { title: 'FITAS - PROTEPISO - PISO TÁTIL', image: 'arquivos/fitas-protepiso-tatil/capa.jpg', href: 'https://protart.com.br/produtos/fitas-protepiso-tatil' },
  { title: 'GRAMA SINTÉTICA', image: 'arquivos/grama-sintetica/capa.jpg', href: 'https://protart.com.br/produtos/grama-sintetica' },
  { title: 'TAPETE EXCLUSIVO', image: 'arquivos/tapete-exclusivo/capa.jpg', href: 'https://protart.com.br/produtos/tapete-exclusivo' },
]

const productOptions = products.map((item) => item.title)

const contactLinks = {
  whatsapp:
    'https://api.whatsapp.com/send?phone=5511984199355&text=Ol%C3%A1%2C%20vi%20seu%20an%C3%BAncio%20e%20gostaria%20de%20saber%20mais%20sobre%20produtos%20no%20site%3A%20www.protart.com.br',
  instagram: 'http://www.instagram.com/protart.tapetes',
  email: 'mailto:tapetes@protart.com.br',
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
      <header id="Topo">
        <div className="centralizar_site">
          <div className="Centralizar">
            <div className="Logotipo">
              <a href="#top">
                <img src={`${SITE}/imagens/logotipo.png`} alt="Prot & Art" />
              </a>
            </div>

            <nav className="MenuGeral">
              <a className="Menus" href="#top">
                HOME
              </a>
              <a className="Menus" href="#QuemSomos">
                QUEM SOMOS
              </a>
              <a className="Menus" href="#Produtos">
                PRODUTOS
              </a>
              <a className="Menus" href="#Contato">
                CONTATO
              </a>

              <div className="Contato">
                <img src={`${SITE}/imagens/whats-topo.svg`} alt="Whatsapp" />
                <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                  (11) 98419-9355
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main id="top">
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
                  A Prot & Art é uma empresa especializada na distribuição de tapetes e proteção para pisos, que
                  conta com uma ótima estrutura, estoque permanente e uma equipe altamente qualificada para atendê-lo
                  com eficiência e rapidez.
                  <br />
                  <br />
                  Os profissionais da Prot & Art oferecem um atendimento personalizado de acordo com as suas
                  necessidades para um trabalho comprometido com resultados.
                </p>

                <div className="Distribuidor">
                  <div className="TextoPrincipal2">
                    Distribuidor
                    <br />
                    Autorizado
                  </div>
                  <div className="TextoPrincipal2">
                    <img src={`${SITE}/imagens/kapazi.png`} alt="Kapazi" className="kapazi" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Produtos">
          <div className="centralizar_site">
            <h2 className="TituloPrincipal">PRODUTOS</h2>
            <div className="Linha">&nbsp;</div>

            <div className="BlocoGeral">
              <div className="BlocoLivre" style={{ backgroundImage: `url(${SITE}/imagens/produtos.jpg)` }}>
                <div className="SubTituloPrincipal">LINHA PROFISSIONAL</div>
                <div className="SubTextoPrincipal">
                  Conheça todos os nossos produtos que contam com uma ótima qualidade.
                  <br />
                  <br />
                  <span>by KAPAZI</span>
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
                  style={{ backgroundImage: `url(${SITE}/${product.image})` }}
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
                    <div className="Txt2">(11) 98419-9355</div>
                  </div>
                </a>

                <a className="Blocos" href={contactLinks.instagram} target="_blank" rel="noreferrer">
                  <div className="Icone">
                    <img src={`${SITE}/imagens/instagram.svg`} alt="Instagram" />
                  </div>
                  <div className="Txts">
                    <div className="Txt1">INSTAGRAM</div>
                    <div className="Txt2">@protart.tapetes</div>
                  </div>
                </a>

                <a className="Blocos" href={contactLinks.email}>
                  <div className="Icone">
                    <img src={`${SITE}/imagens/email.svg`} alt="Email" />
                  </div>
                  <div className="Txts Tam2">
                    <div className="Txt1">EMAIL</div>
                    <div className="Txt2">tapetes@protart.com.br</div>
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
                        {productOptions.map((option) => (
                          <option value={option} key={option}>
                            {option}
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
                    <div className="Txt2">Rua Deputado Emílio Carlos, 142 - Vila Campesina / Osasco-SP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7825398104396!2d-46.77329738549198!3d-23.540322566699682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff6b75d4ea23%3A0x34ac5974b98aee75!2sR.%20Dep.%20Em%C3%ADlio%20Carlos%2C%20142%20-%20Vila%20Campesina%2C%20Osasco%20-%20SP%2C%2006028-000!5e0!3m2!1spt-BR!2sbr!4v1648490927681!5m2!1spt-BR!2sbr"
              width="100%"
              height="440"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Prot & Art"
            />
          </div>
        </section>
      </main>

      <footer id="Rodape">
        <div className="centralizar_site">
          <div className="Centralizar">
            <div className="LogotipoEvernet">
              <a href="https://www.evernet.com.br/" target="_blank" rel="noreferrer">
                <img src={`${SITE}/imagens/logoevernetbranco.svg`} alt="Evernet" />
              </a>
            </div>

            <div className="Direitos">© 2022 PROT & ART - Tapetes e Capachos</div>

            <a className="IrTopo" href="#top">
              <img src={`${SITE}/imagens/seta-topo.svg`} alt="Topo" />
              VOLTAR AO TOPO
            </a>
          </div>
        </div>
      </footer>

      <a className="ancora_wp" href={contactLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir Whatsapp" />
    </>
  )
}

export default App

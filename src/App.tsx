import { useState } from 'react'
import sapinhoimg from './assets/img_frog.png'
import oncinhaLove from './assets/img_jaguar.png'
import img2 from './assets/img2.jpeg'
import img3 from './assets/img3.jpeg'
import img4 from './assets/img4.jpeg'
import img5 from './assets/img5.jpeg'
import './App.css'

const fotosDoCasal = [
  {
    url: img2,
    legenda: 'Amo cada detalhe nosso! 💖',
  },
  {
    url: img3,
    legenda: 'Mais um dia especial ao seu lado! ✨',
  },
  {
    url: img4,
    legenda: 'Sempre criando memórias incríveis! 📸',
  },
  {
    url: img5,
    legenda: 'Você me faz o homem mais feliz do mundo! 🐆',
  },
]

function App() {
  const [beijinhos, setBeijinhos] = useState<number>(0)
  const [etapa, setEtapa] = useState<'inicio' | 'presentes'>('inicio')
  const [presentesAbertos1, setPresentesAbertos1] = useState<boolean>(false)
  const [presentesAbertos2, setPresentesAbertos2] = useState<boolean>(false)
  const [presentesAbertos3, setPresentesAbertos3] = useState<boolean>(false)
  const [opcaoEscolhida, setOpcaoEscolhida] = useState<string>('')
  const [opcaoPersonalizada, setOpcaoPersonalizada] = useState<string>('')
  const [fotoAtual, setFotoAtual] = useState<number>(0)

  const proximaFoto = () => {
    setFotoAtual((prev) => (prev + 1) % fotosDoCasal.length)
  }

  const fotoAnterior = () => {
    setFotoAtual((prev) => (prev - 1 + fotosDoCasal.length) % fotosDoCasal.length)
  }

  const lidarComClique = () => {
    if (beijinhos < 13) {
      setBeijinhos(beijinhos + 1)
    }
  }

  const itensCaindo = [
    { id: 1, tipo: 'sapinho', left: '10%', delay: '0s', duracao: '6s' },
    { id: 2, tipo: 'oncinha', left: '25%', delay: '2s', duracao: '8s' },
    { id: 3, tipo: 'coracao', left: '40%', delay: '1s', duracao: '5s' },
    { id: 4, tipo: 'sapinho', left: '60%', delay: '4s', duracao: '7s' },
    { id: 5, tipo: 'oncinha', left: '75%', delay: '0.5s', duracao: '9s' },
    { id: 6, tipo: 'coracao', left: '90%', delay: '3s', duracao: '6s' },
  ]

  //=================== GIFT PAGE ===================//

  if (etapa === 'presentes') {
    return (
      <>
        {/* Chuva de fundo */}
        <div className="chuva-background">
          {itensCaindo.map((item) => (
            <div
              key={item.id}
              className={`bichinho-caindo ${item.tipo}`}
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duracao,
              }}
            >
              {item.tipo === 'sapinho' && <img src={sapinhoimg} alt="sapinho" />}
              {item.tipo === 'oncinha' && <img src={oncinhaLove} alt="oncinha" />}
              {item.tipo === 'coracao' && <span>💖</span>}
            </div>
          ))}
        </div>

        <div className="pagina-limpa">
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Preparei 3 surpresas especiais. Clique em uma por vez:
          </p>

          {!presentesAbertos1 && !presentesAbertos2 && !presentesAbertos3 && (
            <div className="container-presentes">
              <div className="caixa-presente" onClick={() => setPresentesAbertos1(true)}>
                <span className="nome-presente">Presente 1 📸</span>
              </div>

              <div className="caixa-presente" onClick={() => setPresentesAbertos2(true)}>
                <span className="nome-presente">Presente 2 ✉️</span>
              </div>

              <div className="caixa-presente" onClick={() => setPresentesAbertos3(true)}>
                <span className="nome-presente">Presente 3 🎟️</span>
              </div>
            </div>
          )}

          {/* PRESENTE 1: GALERIA DE FOTOS */}
          {presentesAbertos1 && (
            <div className="wrapper-presente">
              <div className="conteudo-presente">
                <h2>Nossa Galeria 📸</h2>

                {/* Carrossel de Fotos */}
                <div style={{ margin: '10px 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img
                    src={fotosDoCasal[fotoAtual].url}
                    alt="Foto do casal"
                    style={{
                      width: '100%',
                      maxHeight: '260px',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      borderRadius: '12px',
                      border: '2px solid #f8bbd0',
                      display: 'block',
                      margin: '0 auto',
                      boxSizing: 'border-box'
                    }}
                  />
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', margin: '8px 0', textAlign: 'center' }}>
                    {fotosDoCasal[fotoAtual].legenda}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                    <button onClick={fotoAnterior} className="btn-opcao">
                      ◀ Anterior
                    </button>
                    <button onClick={proximaFoto} className="btn-opcao">
                      Próxima ▶
                    </button>
                  </div>
                </div>

                <div className="frase-oncinha">
                  TEMOS QUE TIRAR MAIS FOTOS DONA ONÇAA 🐆📸
                </div>
              </div>

              <div className="botoes-presentes">
                <button className="btn-gifts-back-in" onClick={() => setPresentesAbertos1(false)}>
                  Fechar
                </button>
                <button
                  className="btn-gifts-next-in"
                  onClick={() => {
                    setPresentesAbertos2(true)
                    setPresentesAbertos1(false)
                  }}
                >
                  Próximo
                </button>
              </div>
            </div>
          )}

          {/* PRESENTE 2: CARTINHA COM STICKERS */}
          {presentesAbertos2 && (
            <div className="wrapper-presente">
              <div className="conteudo-presente">
                <h2>Carta para Você 💌</h2>

                {/* Papel da Carta com Stickers */}
                <div className="papel-carta">
                  <img src={sapinhoimg} className="sticker sticker-top-left" alt="Adesivo Sapinho" />
                  <span className="sticker sticker-top-right">💖</span>
                  <span className="sticker sticker-bottom-left">✨</span>
                  <img src={oncinhaLove} className="sticker sticker-bottom-right" alt="Adesivo Oncinha" />

                  <p className="carta-titulo">Meu Amor,</p>
                  <p className="carta-texto">
                    Olha amor, eu preparei essa cartinha para você, estava sem ideias do que escrever, mas queria te fazer sorrir e tentar te deixar feliz kkkkk.
                    Só queria de te dizer que eu te amo muito, e não tenho vergonha de falar para você o que eu sinto, mesmo tendo ""POUCO"" tempo que
                    estou com voce, me lembro de quando te vi pela primeira vez na sala, fiquei um pouco com medo pela sua carinha de brava
                    (dizendo você "concentrada🙄" kkkk,)mas eu ja tinha gostado de você ali mesmo, você meu amor tem algo muito especial,
                    e eu sinto que é algo único, você me fazer sentir um garoto mais feliz do mundo até mesmo naquele
                    silencio que as vezes fica entre a gente, quero q saiba que eu te amo muito, e quero sempre estar ao seu lado amor da minha vida.
                  </p>
                  <p style={{ marginTop: '10px', fontStyle: 'italic', color: '#d81b60', fontWeight: 'bold' }}>
                    Com muito carinho, seu amor sapinho ;)
                  </p>
                </div>
              </div>

              <div className="botoes-presentes">
                <button
                  className="btn-gifts-back"
                  onClick={() => {
                    setPresentesAbertos2(false)
                    setPresentesAbertos1(true)
                  }}
                >
                  Anterior
                </button>
                <button
                  className="btn-gifts-next"
                  onClick={() => {
                    setPresentesAbertos3(true)
                    setPresentesAbertos2(false)
                  }}
                >
                  Próximo
                </button>
              </div>
            </div>
          )}

          {/* PRESENTE 3: VALE ENCONTRO */}
          {presentesAbertos3 && (
            <div className="wrapper-presente">
              <div className="conteudo-presente">
                <h2>Vale-Encontro Especial! 🎟️💖</h2>
                <p>Você abriu o Presente 3 e ganhou um dia inteirinho comigo!</p>

                <p style={{ marginTop: '10px' }}><strong>Escolha o nosso rolê:</strong></p>

                <div className="opcoes-encontro" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', margin: '10px 0' }}>
                  <button
                    className={`btn-opcao ${opcaoEscolhida === 'Piquenique' ? 'selecionado' : ''}`}
                    onClick={() => {
                      setOpcaoEscolhida('Piquenique no Parque 🧺')
                      setOpcaoPersonalizada('')
                    }}
                  >
                    🧺 Piquenique no parque
                  </button>

                  <button
                    className={`btn-opcao ${opcaoEscolhida === 'Cinema' ? 'selecionado' : ''}`}
                    onClick={() => {
                      setOpcaoEscolhida('Cinema com muita pipoca 🍿')
                      setOpcaoPersonalizada('')
                    }}
                  >
                    🍿 Cinema com pipoca
                  </button>

                  <button
                    className={`btn-opcao ${opcaoEscolhida === 'Passeio' ? 'selecionado' : ''}`}
                    onClick={() => {
                      setOpcaoEscolhida('Passeio + Sorvete 🍦')
                      setOpcaoPersonalizada('')
                    }}
                  >
                    🍦 Passeio + Sorvete
                  </button>
                </div>

                <div style={{ marginTop: '10px', width: '100%' }}>
                  <p style={{ fontSize: '0.85rem', marginBottom: '5px' }}><strong>Ou digite sua ideia:</strong></p>
                  <input 
                    type="text"
                    placeholder="Ex: Ir ao parque ... 00/00/0000"
                    value={opcaoPersonalizada}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setOpcaoPersonalizada(e.target.value)
                      setOpcaoEscolhida('')
                    }}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #f8bbd0',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                {(() => {
                  const textoFinal = opcaoPersonalizada || opcaoEscolhida

                  if (!textoFinal) {
                    return (
                      <p style={{ fontSize: '0.8rem', color: '#d81b60', marginTop: '10px', fontWeight: 'bold' }}>
                        Escolha uma opção ou digite sua ideia acima para enviar! 👆
                      </p>
                    )
                  }

                  return (
                    <div style={{ marginTop: '12px' }}>
                      <a
                        href={`https://wa.me/5562996940874?text=${encodeURIComponent(
                          `oii amor da minha vida, meu homem, meu amorzinho, minha vida kk, ja escolhi oq nos vamos fazer, nos vamos: ${textoFinal}! 💖`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#25D366',
                          color: '#FFF',
                          padding: '10px 15px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          fontSize: '0.9rem'
                        }}
                      >
                        💬 Combinar no WhatsApp
                      </a>
                    </div>
                  )
                })()}
              </div>

              <div className="botoes-presentes">
                <button
                  className="btn-gifts-back"
                  onClick={() => {
                    setPresentesAbertos3(false)
                    setPresentesAbertos2(true)
                  }}
                >
                  Anterior
                </button>
                <button
                  className="btn-gifts-next"
                  onClick={() => {
                    setPresentesAbertos3(false)
                    setEtapa('inicio')
                  }}
                >
                  Início
                </button>
              </div>
            </div>
          )}

          <button className="btn-reset" onClick={() => { setEtapa('inicio'); setBeijinhos(0); }}>
            RESET
          </button>
        </div>
      </>
    )
  }

  // ========================== PRINCIPAL PAGE =================================//

  return (
    <>
      <div className="chuva-background">
        {itensCaindo.map((item) => (
          <div
            key={item.id}
            className={`bichinho-caindo ${item.tipo}`}
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duracao,
            }}
          >
            {item.tipo === 'sapinho' && <img src={sapinhoimg} alt="sapinho" />}
            {item.tipo === 'oncinha' && <img src={oncinhaLove} alt="oncinha" />}
            {item.tipo === 'coracao' && <span>💖</span>}
          </div>
        ))}
      </div>

      <section className="sessao1">
        <div className="container-principal">
          <img src={sapinhoimg} id="btn-key" className="imgSapinho" alt="Sapinho Principal" />

          {beijinhos >= 13 && (
            <div className="cartao_prox">
              <div className="conteudo-cartao">
                <h2 className="titulo-presente">Parabéns, meu amor! 💖</h2>
                <p className="texto-presente">
                  Você espalhou beijinhos suficientes e provou o quanto me ama! 🥰 <br />
                  Agora, preparada para descobrir as surpresas que guardei para você?
                </p>
                <p style={{ fontSize: '0.85rem' }}>OBS: Não é mt coisa mas queria fazer algo para você</p>

                <button className="btn-abrir-presentes" onClick={() => setEtapa('presentes')}>
                  🎁 Abrir meus presentes!
                </button>
              </div>
            </div>
          )}

          <h3 style={{display:'flex', flexDirection: 'column'}}>
            Envie seu numero da sorte em beijinhos continuar
          <button className="btn-enviar-beijinhos" onClick={lidarComClique}>Beijinhos aqui {beijinhos}😘</button>
          </h3>


          <img src={oncinhaLove} alt="Oncinha Principal" className="imgOncinha" />
        </div>

        <div>
          <button className="btn-reset" onClick={() => setBeijinhos(0)}>
            RESET
          </button>

          {beijinhos >= 0 && (
            <>
              <div className="setinha-animada">▲</div>
              <p>Se quiser voltar clique aqui</p>
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default App
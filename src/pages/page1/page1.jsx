import React from "react";
import './page1.css';

function Inicio() {

    return (


        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Star Wars</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="">Início</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Galeria">Galeria</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <p></p> Embarque em uma jornada épica pelas galáxias distantes e explore o universo de Star Wars como nunca antes! Descubra segredos de Jedi, encare impérios galácticos e conheça personagens lendários. Deixe-se envolver pela Força e mergulhe em uma saga repleta de aventuras, batalhas intergalácticas e mistérios cósmicos. Seja um herói rebelde ou abrace o lado sombrio como um Sith, a escolha é sua. Esteja preparado para explorar planetas exóticos, enfrentar alienígenas e descobrir tecnologias futuristas. Bem-vindo ao universo Star Wars, onde a imaginação não tem limites.
                <p></p>
                Star Wars é mais do que apenas uma franquia de filmes. É um fenômeno cultural que transcende gerações, uma história que se desenrola em um cenário de galáxias infinitas, e um mundo que captura a imaginação de milhões. Desde que uma nave espacial icônica cruzou pela primeira vez a tela grande em 1977, os fãs têm sido transportados para um universo repleto de maravilhas e desafios.

                Este site é uma homenagem a essa jornada épica. Aqui, você encontrará informações sobre seus personagens favoritos. Que a Força esteja com você!
                <p></p>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src="https://s3.wasabisys.com/instax/74/instax/2023/04/star-wars-1680799242.jpg" className="card-img" alt="Imagem do Card" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">O icônico Darth Vader</h5>
                                    <p className="card-text"> Além de ter sido o primeiro personagem do universo Star Wars criado por George Lucas,  O som da respiração do Darth Vader foi criado por Ben Burtt, que colocou um pequeno microfone do bocal de um respirador de mergulho e gravou o som da própria respiração usando o aparelho.</p>
                                    <p className="card-text"><small></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src="https://cdn.ome.lt/FxbrpD_nJo5F2UBE-arQfBeQaZE=/fit-in/837x500/smart/uploads/conteudo/fotos/jedi.jpeg" className="card-img" alt="Imagem do Card" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Eworks</h5>
                                    <p className="card-text">A língua falada pelos Ewoks foi baseada no tibetano. O designer de som Ben Burtt teve como inspiração um documentário da BBC sobre línguas tibetanas, nepalesas e calmucas, tendo entrevistado diversos tibetanos para o filme.</p>
                                    <p className="card-text"><small></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card text-bg-dark">
                                <img src="https://cdn.ome.lt/EV_5YnpD23dovrJ9iBXdjfOvbGE=/fit-in/837x500/smart/uploads/conteudo/fotos/Albert-Einstein-principal.jpg" className="card-img" alt="Imagem do Card" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Albert Einstein</h5>
                                    <p className="card-text"> A língua falada pelos Ewoks foi baseada no tibetano. O designer de som Ben Burtt teve como inspiração um documentário da BBC sobre línguas tibetanas, nepalesas e calmucas, tendo entrevistado diversos tibetanos para o filme.</p>
                                    <p className="card-text"><small></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Inicio;
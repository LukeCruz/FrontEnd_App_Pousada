import React from "react";
import { Link } from "react-router-dom";

import beachParaty from '../../assets/jpeg/beachParaty.jpeg';
import beachParaty2 from '../../assets/jpeg/Praia.jpeg'

export default function ContainerArticles() {
    return (
      <body id="homePage">
        <div>
            <div className="explorer">
                <h1 className="textRed">Explore</h1>
                <h1 className="textWhite"> Paraty</h1>
            </div>
            <div className="floatMenu">
                <div className="explorerFloatMenu"><h3>Hospedagens</h3></div>
                <div className="explorerFloatMenu"><h3>Passeios</h3></div>
                <div className="explorerFloatMenu"><h3>O que fazer</h3></div>
                <div className="explorerFloatMenu"><h3>Restaurantes</h3></div>
            </div>

            <div className="photos">

                <img className='gridPhotosRefer' src={beachParaty} />
                <button>Ver todas as fotos</button>
                <div className="drawPhotos">
                    <img className='gridPhotos' src={beachParaty2} />
                    <img className='gridPhotos' src={beachParaty2} />
                </div>
            </div>
            <div className="articles">
                <div className="articlesLeft">

                    <Link to='/1'>
                        <div className="containerArticles">
                            <h1 className="hiddenPhrase">Ler mais...</h1>
                            <h1 className="articleTitle">
                                Quais as 10 melhores praias de Paraty
                            </h1>
                            <div className="containerRow">
                                <p className="articleParagraph">
                                    Embora a arquitetura colonial seja um destaque e tanto entre as dezenas de atrações
                                    da cidade histórica mais famosa do Rio de Janeiro, as praias...
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="containerArticles">
                        <h1 className="hiddenPhrase2">Ler mais...</h1>

                        <h1 className="articleTitle">
                            Um guia completo de Paraty
                        </h1>
                        <p className="articleParagraph">
                            Paraty une história e paisagens naturais realmente estonteantes e, o melhor de tudo,
                            Paraty está em uma das mais lindas baías do país.
                        </p>
                    </div>

                    <div className="containerArticles">
                        <h1 className="hiddenPhrase3">Ler mais...</h1>

                        <h1 className="articleTitle">
                            Titulo
                        </h1>
                        <p className="articleParagraph">
                            paragrafo
                        </p>
                    </div>
                    <div className="containerArticles">
                        <h1 className="hiddenPhrase4">Ler mais...</h1>

                        <h1 className="articleTitle">
                            Titulo
                        </h1>
                        <p className="articleParagraph">
                            paragrafo
                        </p>
                    </div>


                    <div className="containerArticles">
                        <h1 className="hiddenPhrase5">Ler mais...</h1>

                        <h1 className="articleTitle">
                            Titulo
                        </h1>
                        <p className="articleParagraph">
                            paragrafo
                        </p>
                    </div>

                    <div className="containerArticles">
                        <h1 className="hiddenPhrase6">Ler mais...</h1>

                        <h1 className="articleTitle">
                            Titulo
                        </h1>
                        <p className="articleParagraph">
                            paragrafo
                        </p>
                    </div>

                </div>

                <div className="articlesRight">
                    <div className="containerAds">


                    </div>
                </div>

            </div>
        </div>
    </body>
    )
}

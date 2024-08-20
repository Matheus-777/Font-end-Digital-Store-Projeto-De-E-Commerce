import LogoFooter from "../../projeto-digital-store/assets/logo-footer.svg";
import LogoFace from "../../projeto-digital-store/assets/facebook.svg";
import Logoinsta from "../../projeto-digital-store/assets/instagram.svg";
import Logott from "../../projeto-digital-store/assets/twitter.svg";
import LogoF from "./LogoF"
import LogoFacebook from "./redessocias/Facebook";
import LogoInstagram from "./redessocias/Instagram";
import LogoTwitter from "./redessocias/Twitter";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <section className="blocofooter">
                <section className="box-container">
                <section className="blocofooter1">
                    <div>
                        <div >
                            <LogoF className="logoFooter" source={LogoFooter} />

                        </div>
                        <div className="descricao">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.

                        </div>
                        <div className="redessocias">
                            <div className="facebook">
                                <LogoFacebook source={LogoFace} />
                            </div>
                            <div className="instagram">
                                <LogoInstagram source={Logoinsta} />
                            </div>
                            <div className="twitter">
                                <LogoTwitter source={Logott} />
                            </div>
                        </div>

                    </div>

                </section>
                <section className="blocofooter2">
                    <div className="informacoes">
                        <h6>Informação</h6>
                    </div>
                    <div >
                        <a href="" className="linksfooterr">Sobre Drip Store</a>
                        <a href="" className="linksfooter">Segurança</a>
                        <a href="" className="linksfooter">Wishlist</a>
                        <a href="" className="linksfooter">Blog</a>
                        <a href="" className="linksfooter">Trabalhe Conosco</a>
                        <a href="" className="linksfooter">Meus Pedidos</a>
                    </div>

                </section> 
                <section className="blocofooter3">
                <div className="categorias">
                        <h6>Categorias</h6>
                    </div>
                <div >
                        <a href="" className="categoriaslinkss">Camisetas</a>
                        <a href="" className="categoriaslinks">Calças</a>
                        <a href="" className="categoriaslinks">Bonés</a>
                        <a href="" className="categoriaslinks">Headphones</a>
                        <a href="" className="categoriaslinks">Tênis</a>
                        
                    </div>

                </section>
                <section >
                    <div className="contato">
                    <h6>Contato</h6>
                    </div>
                
                <div >
                    <a href="" className="blocofooter4">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</a>
                    <a href="(85) 3051-3411" className="blocofooter4">(85) 3051-3411</a>
                </div>
                </section>
                </section>
                <hr />
                <section className="rodape">
                
                <p> @ 2022 Digital College</p>
                </section>
                </section>
               
                
            </footer>
        </>
    );
}

export default Footer;
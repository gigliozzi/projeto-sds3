import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container py-5">
                <div className="jumbotron">
                    <h1 className="display-4">Sales Report</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end. Este dados
                        podem ser capturados de uma API que responda com dados em formato JSON.
                        Utliza <a href="https://apexcharts.com/" target="blank"> Apexcharts JS</a>
                    </p>
                    <Link className="btn btn-primary bt-large mt-4" to="/dashboard" target="_blank">acessar dashboard</Link>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Home;

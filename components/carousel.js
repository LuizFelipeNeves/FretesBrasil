import { Carousel, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

export default () => {
    return (
    <Carousel>
        <Carousel.Item>
            <Image src="static/img/img1.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Economize tempo e reduza custos de frete</h3>
              <p>Na hora de enviar um frete cada minuto conta. Encontre o veiculo e motorista que precisa em minutos, contrate diretamente e melhore a performance do seu negócio com uma redução de custos de transporte de até 30%.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="static/img/img2.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Contrate e acompanhe o serviço em tempo real</h3>
              <p>Divulgar seu frete é apenas o começo. A plataforma FRETES BRASIL oferece uma solução completa: da publicação à contratação, gerenciamento e avaliação do serviço prestado, estamos com você em todos os passos.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="static/img/img3.jpg" className="img-fluid d-block w-100"/>
            <Carousel.Caption className='d-none d-md-block'>
              <h3>Segurança, confiabilidade e eficiência</h3>
              <p>Confie seu frete aos melhores profissionais. O FRETES BRASIL traz a eficiência e a qualidade de serviço que seu negócio precisa, te conectando com a maior e mais qualificada base de caminhoneiros autônomos do Brasil.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}
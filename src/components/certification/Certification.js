import './Certification.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Certification = () => {
      const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
        <div className="certificate">
            <h1>Certification</h1>
            <div className="cert-list">
                <div className="card">
                    <Slider {...settings}>
                        <div>
                                            <img src="/Cer4.png" alt='CyberSecurity' />
                        </div>
                        <div>
                            <img src="/Cisco.png" alt='Cisco' />
                        </div>
                    </Slider>
                    <p>Introduction To CyberSecurity</p>
                </div>
                <div className="card">
                    <img src="/Cer5.png" alt='Cloud' />
                    <p>Udemy – MERN Stack E-Commerce Mobile App with React Native</p>
                </div>
                <div className="card">
                    <img src="/Cer2.png" alt='Cloud' />
                    <p>AWS Academy Graduate - AWS Academy Cloud Foundations</p>
                </div>
                <div className="card">
                    <img src="/Cer1.png" alt='aws' />
                    <p>AWS Academy Graduate - AWS Academy Machine Learning Foundations</p>
                </div>
                <div className="card">
                    <img src="/Cer3.png" alt='Machine' />
                    <p>LinkedIn – Artificial Intelligence Foundations (Machine Learning)</p>
                </div>
            </div>
        </div>
    );
}
export default Certification;
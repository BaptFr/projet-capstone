import HomeIntro from './HomeIntro';
import Specializations from './Specializations';
import Testimonials from './Testimonials';
import ChicagoDescribes from './ChicagoDescribe';
import './home.css';


function Home () {

    return (
        <div className="home-container">  
            <HomeIntro />
            <Specializations />
            <Testimonials />
            <ChicagoDescribes />
        </div>
    )
};

export default Home;
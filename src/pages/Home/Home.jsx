import HeroSection from './HeroSection/HeroSection';
import HowDoesItWork from './HowDoesItWork/HowDoesItWork';
import BrowseByCategory from './BrowseByCategory/BrowseByCategory';
import Favourite from './Favourite/Favourite';
import CookieConsentForm from '../../components/CookieConsentForm/CookieConsentForm';

const Home = () => {
    return (
        <div>
        <CookieConsentForm />
            <HeroSection />
            <HowDoesItWork/>
            <BrowseByCategory/>
            <Favourite/>
        </div>
    );
};

export default Home;
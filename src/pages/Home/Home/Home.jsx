import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BookingCategories from "../BookingCategories/BookingCategories";
import ExtraSection from "../ExtraSection/ExtraSection";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";
import SearchFunctionality from "../SearchFunctionality/SearchFunctionality";
import Services from "../TopServices/Services";
import Recommended from "../Recommended/Recommended";
import Statistics from "../Statistics/Statistics";
// import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Book Swiftly | Home
                </title>
            </Helmet>
            <div  className=" ">
            <Banner></Banner>
            <SearchFunctionality></SearchFunctionality>
            <Statistics></Statistics>
            <ExtraSection></ExtraSection>
            <Services></Services>
            <Offers></Offers>
            <ReactTabs></ReactTabs>
            <BookingCategories></BookingCategories>
            <Recommended></Recommended>
            {/* <Gallery></Gallery> */}
            
        </div>
        </>
    );
};

export default Home;
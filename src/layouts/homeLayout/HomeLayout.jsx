import { BannerSlide } from "../../components/bannerSlider/BannerSlider";
import CustomerReview from "../../components/customerReview/Customerreview";

const HomeLayout = () => {
    return (
        <div className="w-full ">
            <BannerSlide />
            <CustomerReview />
        </div>
    );
};

export default HomeLayout;
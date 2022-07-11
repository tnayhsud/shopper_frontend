import React from "react";
import HeroSlider from './components/static/HeroSlider';
import ShippingSection from './components/static/SippingSection';
import BannerCard from './components/static/BannerCard';
import Brands from './components/static/Brands';
import BottomBannerCard from './components/static/BottomBannerCard';
import ProductTab from './components/ProductTab';
import XclusiveCollection from './components/XclusiveCollection';

function Main() {
    return (
        <React.Fragment>
            <HeroSlider />
            <ShippingSection />
            <BannerCard />
            <Brands />
            <ProductTab />
            <BottomBannerCard />
            <XclusiveCollection />
        </React.Fragment>
    )
};

export default Main;
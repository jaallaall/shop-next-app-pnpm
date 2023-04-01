"use client";

import Agencies from "./Agencies";
import Clients from "./Clients";
import ProductsCarousel from "./ProductsCarousel";
import ProductsCategorization from "./ProductsCategorization";
import PurchaseProcess from "./PurchaseProcess";
import Slider from "./Slider";
import SuccessReport from "./SuccessReport";

const Home: React.FC = (): React.ReactElement => {
  return (
    <>
      <section className="!pb-0">
        <div className="container mx-auto px-2">
          <Slider />
        </div>
      </section>

      <section>
        <div className="container mx-auto px-2">
          <ProductsCategorization />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <Clients />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <ProductsCarousel />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <Agencies />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <SuccessReport />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-2">
          <PurchaseProcess />
        </div>
      </section>
    </>
  );
};

export default Home;

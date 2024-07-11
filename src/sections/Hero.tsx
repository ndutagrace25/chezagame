import { arrowRight } from "../assets/icons";
import { RentModal } from "../components";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36">
        <p className="text-xl font-montserrat text-purple-900">
          Our Games Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[68px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 xl:pr-10 max-sm::p-0">
            Game Collection
          </span>
          <br />
          <span className="yellow-text inline-block mt-3">To Rent</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Rent a game, gather your crew & have the time of your life!
        </p>
        <Button
          label="Click here to rent"
          iconURL={arrowRight}
          backgroundColor="yellow-btn"
          textColor="text-white"
          dataToggle="modal"
          dataTarget="#rentModal"
        />
        <RentModal id="rentModal" />
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"></div>
    </section>
  );
};

export default Hero;

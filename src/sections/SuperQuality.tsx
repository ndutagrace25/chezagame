import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            We provide you
          </span>
          <span className="text-purple-900">Super </span>
          <span className="text-purple-900">Fun</span> Games
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Remember afternoons of "Cha Baba Cha Mama", the dusty football
          matches, "Blada" and "Kati"? We built forts, collected stones and
          bottle caps — our imaginations ran wild. But somewhere along the way,
          spreadsheets & responsibilities snuck in. This isn't goodbye to that
          joy, though. Instead, it's an invitation to rediscover it, this time
          with a grown-up twist. So, ditch the stress, rent a game, and have
          fun! Because adulthood doesn't have to mean the end of play, it just
          means we get to choose the games we play now.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          {" "}
          <Button label="View details" />
        </div>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 flex justify-center items-center w-full ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img
              src={shoe8}
              alt="shoe8"
              width={650}
              height={600}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default SuperQuality;

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
          <span className="yellow-text">Super </span>
          <span className="yellow-text">Fun</span> Games
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
            {" "}
            {!isVisible && (
              <div className="object-contain rounded-lg">Image Loading...</div>
            )}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pushnotifications-3134c.appspot.com/o/chezahive%2F20240314_134748-min.jpg?alt=media&token=7451729d-5421-42e7-a69f-1df1705dea93"
              alt="aboutus"
              width={650}
              height={500}
              className="object-contain rounded-lg"
              style={{ display: isVisible ? "block" : "none" }}
            />
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default SuperQuality;

import { star } from "../assets/icons";

interface PopularProductCardProps {
  name: string;
  price: string;
  images: string[];
  id: string;
}

const PopularProductCard = ({
  name,
  price,
  images,
  id,
}: PopularProductCardProps) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <div id={id} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {/* @ts-ignore */}
          {images.map((image: string, index: number) => (
            <li
              data-target={`#${id}`}
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
              key={index}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {images.map((image: string, index: number) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={image}
                alt={`image ${index}`}
                className="w-[280px] h-[280px] d-block w-100"
              />
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href={`#${id}`}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href={`#${id}`}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={16} height={16} />
        <p className="font-montserrat leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-gray-900 leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

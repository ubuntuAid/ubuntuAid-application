/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

function LawyerCarousel() {
  const colors = {
    orange: "#6AA84F",
    grey: "#a9a9a9",
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <img src="/exports/Prev-Button.png" alt="prev-arrow" />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <img src="/exports/Next-Button.png" alt="next-arrow" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://localhost:1337/api/lawyers?populate=*"
        );
        const dataObject = await response.json();
        let lawyerData = dataObject.data;
        setLawyers(lawyerData);
        console.log(lawyerData);
      } catch (error) {
        console.error("Error fetching lawyer data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="w-[70%] m-auto">
      <Slider {...settings}>
        {lawyers !== null ? (
          lawyers.map((lawyer) => {
            return (
              <div
                key={lawyer.id}
                className="border border-gray-300 rounded-xl w-1/4 my-5 p-5"
              >
                <div>
                  <div className="flex gap-5 mb-5">
                    <div>
                      <img
                        src={`http://localhost:1337${lawyer.attributes.profile.data.attributes.url}`}
                        alt="Lawyer Image"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-[#0A72BA] mb-1">
                        {lawyer?.attributes?.name}
                      </h1>
                      <div className="flex gap-2 my-2">
                        <div>
                          {lawyer.attributes.reviews.data.map((review) => (
                            <div key={review.id} className="flex gap-2">
                              {Array.from({
                                length: review.attributes.rating,
                              }).map((_, starIndex) => (
                                <FaStar
                                  key={starIndex}
                                  size={16}
                                  color={colors.orange}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                        <p className="text-[#0A72BA]">
                          {/* Reviews counted */}
                        </p>
                      </div>

                      <div className="flex justify-between items-center gap-3 my-1 w-full">
                        <h3 className=" text-sm">
                          <span>UbuntuRating</span>{" "}
                          <span>{lawyer.attributes.ubunturating}</span>
                        </h3>
                        <i className="bx bxs-info-circle text-base"></i>
                      </div>

                      <div className="my-1">
                      <h3 className="uppercase font-bold text-[#6AA84F]">Location</h3>
                      <div className="flex items-center gap-2">
                        <i className="bx bxs-map text-base"></i>
                        <p>{lawyer.attributes.location}</p>
                      </div>
                      </div>

                    </div>
                  </div>
                  <div className="border-b border-gray-200">
                    <h3 className="font-semibold">PRACTICE AREA</h3>
                    <h4 className="pb-1">{lawyer.attributes.practice}</h4>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div>
                        {lawyer.attributes.reviews.data.map((review) => (
                          <div key={review.id} className="flex flex-col gap-2">
                            <p className="my-2 font-medium leading-tight">
                              {review.attributes?.title || ""}
                            </p>
                            <div className="flex  gap-4 items-center">
                              <div className="flex">
                                {Array.from({
                                  length: review.attributes.rating,
                                }).map((_, starIndex) => (
                                  <FaStar
                                    key={starIndex}
                                    size={16}
                                    color={colors.orange}
                                  />
                                ))}
                              </div>
                              <div className="flex justify-between md:gap-2 flex-wrap text-sm">
                                <span className="">
                                 By {review.attributes?.firstName || ""}
                                </span>
                                <span>
                                  {review.attributes?.publishedAt || ""}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p>{review.attributes.reviewbody}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-2 text-[#0A72BA]">
                  {/* Routes to the Single Lawyer page with their details */}
                  <Link to={`/lawyers/${lawyer.id}`}>
                    Read More
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading Lawyers...</p>
        )}
      </Slider>
    </div>
  );
}

export default LawyerCarousel;

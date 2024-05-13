/* eslint-disable react/prop-types */
// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCard() {
    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <img src="/src/assets/exports/Prev-Button.png" alt="next-arrow" />
          </div>
        )
        }
  
   function SampleNextArrow(props) {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
             <img src="/src/assets/exports/Next-Button.png" alt="next-arrow" />
          </div>
        )
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
      };
  return (
    <div className="w-[70%] m-auto">
        <Slider {...settings}>
            {data.map((d) => (
                <div key={d.id} className="border border-gray-300 rounded-xl w-1/4 my-5 p-5">
                    <div>
                        <div className="flex gap-5 mb-5">
                            <div>
                            <img src={d.profilePic} alt="AiderImage" />
                            </div>
                            <div>
                            <h1 className="text-xl font-bold text-[#0A72BA] mb-1">{d.name}</h1>
                            <div className="flex items-center gap-2">
                                <div>
                                    <img src={d.reviewStars} alt="reviewStars" />
                                </div>
                                <p>
                                {d.reviewCount}{''} <span>{d.reviewCount === 1 ? 'review' : 'reviews'}</span>
                                </p>
                            </div>
                            <h3>Location</h3>
                            <div className="flex items-center gap-2">
                                <div>
                                    <img
                                src="/src/assets/exports/map-marker.png"
                                alt="location icon"
                                />
                                </div>
                                <p>{d.location}</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-200">
                    <h3>PRACTICE AREA</h3>
                    <h4>{d.area}</h4>
                    </div>
                    <div>
                    <p>{d.reviewTitle}</p>
                    <div className="flex items-center gap-2">
                        <div><img src={d.reviewStars} alt="reviewStars" /></div>
                        <p>
                        <span>{d.reviewerName}</span>
                        <span>{d.reviewDate}</span>
                        </p>
                    </div>
                    <p>{d.review}</p>
                    </div>
                </div>
                <div>
                    <button>Read More</button>
                </div>
                </div>
            ))}
        </Slider>

    </div>
  );
}

const data = [
  {
    id: 1,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 1,
  },
  {
    id: 2,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 2,
  },
  {
    id: 3,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 20,
  },
  {
    id: 4,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 40,
  },
  {
    id: 5,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 30,
  },
  {
    id: 6,
    name: "Timothy Musoke",
    profilePic: "/src/assets/exports/Timothy-Musoke.png",
    reviewStars: "/src/assets/exports/Timothy-Rating.png",
    ubuntuRating: 10.0,
    location: "Kampala, UG",
    area: "Education",
    reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
    reviewerStars: "/src/assets/exports/Timothy-Rating.png",
    reviewerName: "By Anonymous",
    reviewDate: "June 06, 2007",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    reviewCount: 25,
  },
];

export default CarouselCard;

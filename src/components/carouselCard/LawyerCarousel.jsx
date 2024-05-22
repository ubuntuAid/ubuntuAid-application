/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaStar } from "react-icons/fa";

function CarouselCard() {
    // const colors = {
    //   orange: "#FFBA5A",
    //   grey: "#a9a9a9",
    // };

// Setting up the react slick
    const SamplePrevArrow = (props) => {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
            <img src="/exports/Prev-Button.png" alt="next-arrow" />
          </div>
        )
        }
  
   function SampleNextArrow(props) {
        const { className, onClick } = props;
        return(
          <div onClick={onClick} className={`arrow ${className}`} >
             <img src="/exports/Next-Button.png" alt="next-arrow" />
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

// Making an API request
const [lawyers, setLawyers] = useState([]);

      function fetchData() {
        let apiurl = "https://ubuntuaid-backend.onrender.com/api/lawyers?populate=*";
        fetch(apiurl)
        .then((response) => {
          return response.json();
        })
        .then((dataObject) => {
          let lawyerData = dataObject.data;
          setLawyers(lawyerData)
        })
      }

      useEffect(() =>{
        fetchData();
      }, []);

  return (
    <div className="w-[70%] m-auto">
        <Slider {...settings}>
          {
            lawyers !== null ? (
                lawyers.map((item)=>{
                return(
                  <div key={item.id} className="border border-gray-300 rounded-xl w-1/4 my-5 p-5">
                    <div>
                          <div className="flex gap-5 mb-5">
                              <div>
                                  <img src={`https://ubuntuaid-backend.onrender.com${item.attributes.profile.data.attributes.url}`} alt="AiderImage" />
                              </div>
                              <div>
                              <h1 className="text-xl font-bold text-[#0A72BA] mb-1">{item.attributes.name}</h1>
                              <div className="flex gap-2">
                                  <div>
                                 {/* {Array.from({ length: item.attributes.reviews.data.attributes.rating}).map((i) => (
                            <FaStar key={i} size={18} color={colors.orange} />
                          ))}
                           */}
                                    <p>item.attributes.reviews.data.attributes.rating</p>
                                  </div>
                                  <p className="text-[#0A72BA]">
                                  {item.attributes.reviewsCount}{''} <span>{item.attributes.reviewsCount === 1 ? 'review' : 'reviews'}</span>
                                  </p>
                              </div>
                              <div className="flex items-center gap-3 my-1">
                                  <div>
                                    <h3><span>UbuntuRating</span> <span>{item.attributes.ubunturating}</span></h3>
                                  </div>
                                  <div>
                                      <img src="/exports/info-circleInfo-Alert.png" alt="info-circleInfo-Alert" />
                                  </div>
                              </div>
                              <h3>Location</h3>
                              <div className="flex items-center gap-2">
                                  <div>
                                    <img src="/exports/map-marker.png" alt="location icon"/>
                                  </div>
                                  <p>{item.attributes.location}</p>
                              </div>
                          </div>
                      </div>
                      <div className="border-b border-gray-200">
                        <h3 className="font-semibold">PRACTICE AREA</h3>
                        <h4 className="pb-1">{item.attributes.practiceArea}</h4>
                      </div>
                      <div>
                        <p className="py-2 font-medium">{item.attributes.reviewTitle}</p>
                        <div className="flex items-center gap-2">
                            <div>
                                <p>item.attributes.reviews.data.attributes.rating</p>
                            </div>
                            <p className="text-sm">
                            <span>By</span> 
                            <span>
                                {item.attributes.reviews.data.attributes.firstname}
                                </span>
                            <span className="pr-2">{item.attributes.reviews.data.attributes.title}</span>                       
                            <span>{item.attributes.reviewDate}</span>
                            </p>
                        </div>
                        <p className="my-2">{item.attributes.reviews.attributes.createdAt}</p>
                      </div>
                    </div>
                      <div>
                      <Link to={`/lawyer/${lawyers.id}`} className="text-blue">Read More</Link>
                      </div>
                </div>
                )
              })
            ) :
            <p>Loading Aiders...</p>
          }
        </Slider>

    </div>
  );
}


export default CarouselCard;

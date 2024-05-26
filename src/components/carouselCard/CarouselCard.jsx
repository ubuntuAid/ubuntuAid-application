/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselCard() {

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
let [aiders, setAiders] = useState(null);

      function fetchData() {
        let apiurl = "http://localhost:1337/api/ubuntu-aidercarouselcards?populate=*";
        fetch(apiurl)
        .then((response) => {
          return response.json();
        })
        .then((dataObject) => {
          let aiderData = dataObject.data;
          setAiders(aiderData)
        })
      }

      useEffect(() =>{
        fetchData();
      }, []);

  return (
    <div className="w-[70%] m-auto">
        <Slider {...settings}>
          {
            aiders !== null ? (
              aiders.map((item)=>{
                return(
                  <div key={item.id} className="border border-gray-300 rounded-xl w-1/4 my-5 p-5">
                    <div>
                          <div className="flex gap-5 mb-5">
                              <div>
                                  <img src={`http://localhost:1337${item.attributes.profileImage.data.attributes.url}`} alt="AiderImage" />
                              </div>
                              <div>
                              <h1 className="text-xl font-bold text-[#0A72BA] mb-1">{item.attributes.AiderName}</h1>
                              <div className="flex gap-2">
                                  <div>
                                      <img src={`http://localhost:1337${item.attributes.reviewerStars.data.attributes.url}`} alt="reviewStars" />
                                  </div>
                                  <p className="text-[#0A72BA] ">
                                  {item.attributes.reviewsCount}{''} <span>{item.attributes.reviewsCount === 1 ? 'review' : 'reviews'}</span>
                                  </p>
                              </div>
                              <div className="flex items-center gap-3 my-1">
                                  <div>
                                    <h3><span>UbuntuRating</span> <span>{item.attributes.ubuntuRating}</span></h3>
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
                                  <p>{item.attributes.aiderLocation}</p>
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
                                <img src={`http://localhost:1337${item.attributes.reviewerStars.data.attributes.url}`} alt="reviewStars" />
                            </div>
                            <p className="text-sm">
                            <span>By</span> <span className="pr-2">{item.attributes.reviewerName}</span>                       
                            <span>{item.attributes.reviewDate}</span>
                            </p>
                        </div>
                        <p className="my-2">{item.attributes.review}</p>
                      </div>
                    </div>
                      <div>
                      <Link to={`/lawyers/${aiders.id}`} className="btn btn-primary">Read More</Link>
                      </div>
                </div>
                )
              })
            ) :
            <p>Loading Aiders...</p>
          }
            {/* {data.map((d) => (
                <div key={d.id} className="border border-gray-300 rounded-xl w-1/4 my-5 p-5">
                    <div>
                        <div className="flex gap-5 mb-5">
                            <div>
                                <img src={d.profilePic} alt="AiderImage" />
                            </div>
                            <div>
                            <h1 className="text-xl font-bold text-[#0A72BA] mb-1">{d.name}</h1>
                            <div className="flex gap-2">
                                <div>
                                    <img src={d.reviewStars} alt="reviewStars" />
                                </div>
                                <p className="text-[#0A72BA]">
                                {d.reviewCount}{''} <span>{d.reviewCount === 1 ? 'review' : 'reviews'}</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-3 my-1">
                                <div>
                                <h3><span>UbuntuRating</span> <span>{d.ubuntuRating}</span></h3>
                                </div>
                                <div>
                                    <img src="/src/assets/exports/info-circleInfo-Alert.png" alt="info-circleInfo-Alert" />
                                </div>
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
                    <h3 className="font-semibold">PRACTICE AREA</h3>
                    <h4 className="pb-1">{d.area}</h4>
                    </div>
                    <div>
                    <p className="py-2 font-medium">{d.reviewTitle}</p>
                    <div className="flex items-center gap-2">
                        <div>
                            <img src={d.reviewStars} alt="reviewStars" />
                        </div>
                        <p className="text-sm">
                        <span className="pr-2">{d.reviewerName}</span>                       
                        <span>{d.reviewDate}</span>
                        </p>
                    </div>
                    <p className="my-2">{d.review}</p>
                    </div>
                </div>
                <div>
                    <button>Read More</button>
                </div>
                </div>
            ))} */}
        </Slider>

    </div>
  );
}

// const data = [
//   {
//     id: 1,
//     name: "Timothy Musoke",
//     profilePic: "/src/assets/exports/Timothy-Musoke.png",
//     reviewStars: "/src/assets/exports/Timothy-Rating.png",
//     ubuntuRating: 10.0,
//     location: "Kampala, UG",
//     area: "Education",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 1,
//   },
//   {
//     id: 2,
//     name: "Diane Akello",
//     profilePic: "/src/assets/exports/Diane-Akello.png",
//     reviewStars: "/src/assets/exports/LinkDaine-Rate.png",
//     ubuntuRating: 10.0,
//     location: "Gulu, UG",
//     area: "Immigration",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 2,
//   },
//   {
//     id: 3,
//     name: "Sophia Nankunda",
//     profilePic: "/src/assets/exports/Sophia-Nankunda.png",
//     reviewStars: "/src/assets/exports/LinkSophia-Rating.png",
//     ubuntuRating: 10.0,
//     location: "Kampala, UG",
//     area: "Education",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 20,
//   },
//   {
//     id: 4,
//     name: "Timothy Musoke",
//     profilePic: "/src/assets/exports/Timothy-Musoke.png",
//     reviewStars: "/src/assets/exports/Timothy-Rating.png",
//     ubuntuRating: 10.0,
//     location: "Kampala, UG",
//     area: "Education",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerStars: "/src/assets/exports/Timothy-Rating.png",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 40,
//   },
//   {
//     id: 5,
//     name: "Timothy Musoke",
//     profilePic: "/src/assets/exports/Timothy-Musoke.png",
//     reviewStars: "/src/assets/exports/Timothy-Rating.png",
//     ubuntuRating: 10.0,
//     location: "Kampala, UG",
//     area: "Education",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerStars: "/src/assets/exports/Timothy-Rating.png",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 30,
//   },
//   {
//     id: 6,
//     name: "Timothy Musoke",
//     profilePic: "/src/assets/exports/Timothy-Musoke.png",
//     reviewStars: "/src/assets/exports/Timothy-Rating.png",
//     ubuntuRating: 10.0,
//     location: "Kampala, UG",
//     area: "Education",
//     reviewTitle: "Neque porro quisquam est qui dolorem ipsum...",
//     reviewerStars: "/src/assets/exports/Timothy-Rating.png",
//     reviewerName: "By Anonymous",
//     reviewDate: "June 06, 2007",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at urna sollicitudin, rhoncus neque fringilla, dictum nibh. Nam at purus quis arcu ornare tempus. Nam dapibus neque at purus hendrerit convallis eu vitae metus. Pellentesque eu metus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     reviewCount: 25,
//   },
// ];

export default CarouselCard;

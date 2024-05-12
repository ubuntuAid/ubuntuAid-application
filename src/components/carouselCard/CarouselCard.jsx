// import React from 'react'

function CarouselCard() {
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>
          <div>
            <div><img src={d.profilePic} alt="AiderImage" /></div>
            <div>
                <h1>{d.name}</h1>
                <div>
                    <img src={d.reviewStars} alt="reviewStars" />
                    <p>{d.reviewCount}</p>
                </div>
                <h3>Location</h3>
                <div>
                    <img src="/src/assets/exports/map-marker.png" alt="location icon" />
                    <p>{d.location}</p>
                </div>
            </div>
            <div>
                <h3>PRACTICE AREA</h3>
                <h4>{d.area}</h4>
            </div>
            <div>
                <p>{d.reviewTitle}</p>
                <div>
                    <img src={d.reviewStars} alt="reviewStars" />
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
    reviewCount:1
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
      reviewCount:2
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
      reviewCount:20
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
      reviewCount:40
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
      reviewCount:30
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
      reviewCount:25
  },
];

export default CarouselCard;

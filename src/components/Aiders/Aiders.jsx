import { useState, useEffect } from "react";

function Aiders() {
  // Making an API request
  let [aider, setAider] = useState(null);

  function fetchData() {
    let apiurl = "https://ubuntuaid-backend.onrender.com/api/aiders?populate=*";
    fetch(apiurl)
      .then((response) => {
        return response.json();
      })
      .then((dataObject) => {
        let aiderData = dataObject.data;
        setAider(aiderData);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap justify-between max-w-[70%] mx-auto my-36">
      {aider !== null ? (
        aider.map((item) => {
          return (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="border border-gray-300 rounded-xl p-5">
                <div className="flex gap-5 mb-5">
                  <div>
                    <img
                      src={`https://ubuntuaid-backend.onrender.com${item.attributes.AiderImage.data.attributes.url}`}
                      alt=""
                      width={150}
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">
                      {item.attributes.name}
                    </h1>
                    <div>
                      <div className="flex gap-2">
                        <div>
                          <img
                            src="/exports/LinkSophia-Rating.png"
                            alt="Rating"
                          />
                        </div>
                        <p className="text-[#0A72BA]">
                          {item.attributes.reviewCount}
                          {""}{" "}
                          <span>
                            {item.attributes.reviewCount === 1
                              ? "review"
                              : "reviews"}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 my-2">
                      <h3 className="text-[14px]">
                        <span>UbuntuRating</span>{" "}
                        <span className="font-bold">10.0</span>
                      </h3>
                      <div>
                        <img
                          src="/exports/info-circleInfo-Alert.png"
                          alt="info-circleInfo-Alert"
                        />
                      </div>
                    </div>
                    <h3 className="font-bold uppercase text-[#6AA84F]">
                      Location
                    </h3>
                    <div className="flex items-center gap-2">
                      <div>
                        <img
                          src="/exports/map-marker.png"
                          alt="location icon"
                        />
                      </div>
                      <p>{item.attributes.location}</p>
                    </div>
                  </div>
                </div>
                <hr className="w-[100%] mb-5" />
                <p className="mb-5">{item.attributes.aiderCaption}</p>
                <div className="flex justify-between mb-5">
                  <div>
                    <p className="font-bold text-[#6AA84F]">PRACTICE AREA</p>
                    <p>{item.attributes.practiceArea}</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#6AA84F]">LICENSE</p>
                    <p>{item.attributes.license}</p>
                  </div>
                </div>
                <button className="mb-5 text-[#0072BC] cursor-pointer">
                  Read More
                </button>
                <div className="flex justify-between gap-4">
                    <div className="flex gap-1">
                      <img src="/ic_sharp-phone.png" alt="" />
                    <span>{item.attributes.tel}</span>
                    </div>
                    <div className="flex gap-1">
                      <img src="/ooui_message.png" alt="" />
                    <a
                      target="_blank"
                      title="Watch The Hunt"
                      href={item.attributes.link}
                    >
                      Message
                    </a>
                    </div>
                    <div className="flex gap-1">
                      <img src="/mdi_web.png" alt="" />
                    <a
                      target="_blank"
                      title="Watch The Hunt"
                      href={item.attributes.website}
                    >
                      Website
                    </a>
                    </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading Data...</p>
      )}
    </div>
  );
}

export default Aiders;

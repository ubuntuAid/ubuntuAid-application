import { useState, useEffect } from "react";

function AiderHero() {
  const [aider, setAider] = useState(null);

  useEffect(() => {
    function fetchData() {
      let apiurl = "http://localhost:1337/api/ubuntu-aidercarouselcards/4";
      fetch(apiurl)
        .then((response) => response.json())
        .then((dataObject) => {
          let aiderData = dataObject.data;
          setAider(aiderData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    fetchData();
  }, []);

  return (
    <>
      <section id="aiderhero">
        <div className="md:max-w-[70%] h-[80dvh] m-auto flex justify-start items-center">
          {aider !== null ? (
            <div key={aider.id} className="bg-white rounded border-2 w-[500px] p-5">
              <h1 className="text-5xl font-bold text-[#0A72BA] mb-3">{aider.attributes.AiderName}</h1>
              <div className="flex items-center gap-2 mb-1">
                <div>
                  <img src="/src/assets/exports/LinkDaine-Rate.png" alt="" />
                </div>
                <p className="text-[#0A72BA]">{aider.attributes.reviewsCount}{''} <span>{aider.attributes.reviewsCount === 1 ? 'review' : 'reviews'}</span></p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span>UbuntuAid Rating</span>
                <span>{aider.attributes.ubuntuRating}</span>
                <div>
                  <img src="/src/assets/exports/info-circleInfo-Alert.png" alt="" />
                </div>
              </div>
              <div>
                <p className="font-bold">LOCATION</p>
                <div className="flex items-center gap-2">
                  <div>
                    <img src="/src/assets/exports/map-marker.png" alt="" />
                  </div>
                  <span>{aider.attributes.aiderLocation}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">Loading Data...</p>
          )}
        </div>
      </section>
    </>
  );
}

export default AiderHero;

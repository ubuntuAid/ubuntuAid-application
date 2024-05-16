
function AiderHero() {
  return (
    <>
      <section id="aiderhero">
        <div className="md:max-w-[1100px] h-[80dvh] m-auto flex justify-start items-center">
          <div className="bg-white rounded border-2 w-[500px] p-5">
            <h1 className="text-5xl font-bold text-[#0A72BA] mb-3">Sophia Nankunda</h1>
            <div className="flex items-center gap-2 mb-1">
              <div>
                <img src="/src/assets/exports/LinkDaine-Rate.png" alt="" />
                </div>
              <span>10 Reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span>UbuntuAid Rating</span>
              <span>10</span>
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
                <span>Kampala, UG</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AiderHero
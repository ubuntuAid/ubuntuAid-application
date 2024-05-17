// import React from 'react'
import { Link } from "react-router-dom";

function AidersComponent() {
  return (
    <div>
        <div className="border border-gray-300 rounded-xl my-5 p-5 max-w-1/3">
                        <div className="flex gap-5 mb-5">
                            <div>
                                <img src="/src/assets/lawyer_sophie_alcorn.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">Sophie Nankunda</h1>
                                <div>
                                    <div>
                                        <img src="/src/assets/exports/LinkSophia-Rating.png" alt="Rating" />
                                    </div>

                                </div>
                                <div className="flex items-center gap-3 my-2">
                                    <h3 className="text-[14px]"><span>UbuntuRating</span> <span className="font-bold">10.0</span></h3>
                                  <div>
                                      <img src="/src/assets/exports/info-circleInfo-Alert.png" alt="info-circleInfo-Alert" />
                                  </div>
                                </div>
                                <h3>Location</h3>
                              <div className="flex items-center gap-2">
                                  <div>
                                    <img src="/src/assets/exports/map-marker.png" alt="location icon"/>
                                  </div>
                                  <p>Mbarara, UG</p>
                              </div>
                            </div>
                        </div>
                        <hr className="w-[100%] mb-5"/>
                        <p className="mb-5">If you really need help, contact me. Committed, Responsive, Aggressive, Proven Results, No B.S</p>
                        <div className="flex justify-between mb-5">
                            <div>
                                <p className="font-bold text-[#6AA84F]">PRACTICE AREA</p>
                                <p>Immigration</p>
                            </div>
                            <div>
                                <p className="font-bold text-[#6AA84F]">LICENSE</p>
                                <p>GA, Active Since 1998</p>
                            </div>
                        </div>
                        <p className="mb-5 text-[#0072BC] cursor-pointer">Read More</p>
                        <div className="flex justify-between gap-4">
                            <Link
                                className="flex gap-1"
                            >
                                <div><img src="/src/assets/ic_sharp-phone.png" alt="" /></div>
                                <span>Message</span>
                            </Link>
                            <Link
                                className="flex gap-1"
                            >
                                <div><img src="/src/assets/ooui_message.png" alt="" /></div>
                                <span>Message</span>
                            </Link>
                            <Link
                                className="flex gap-1"
                            >
                                <div><img src="/src/assets/mdi_web.png" alt="" /></div>
                                <span>Website</span>
                            </Link>
                        </div>
                    </div>
    </div>
  )
}

export default AidersComponent
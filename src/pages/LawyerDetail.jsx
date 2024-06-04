import { useEffect, useState, useContext } from "react"; // Import useContext
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import { AuthContext } from "../contexts/AuthContext"; // Adjust the path as needed
import { AuthProvider  } from "../contexts/AuthContext"; // Adjust the path as needed

const LawyerDetail = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [showAll, setShowAll] = useState({
    experiences: false,
    associations: false,
    publications: false,
    educations: false,
    honors: false,
    engagements: false,
  });
  const [visibleReviews, setVisibleReviews] = useState(5);
  const { user } = useContext(AuthContext); // Use AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://ubuntuaid-backend.onrender.com/api/lawyers/${id}?populate=*`)
        .then((response) => setLawyer(response.data.data))
        .catch((error) => console.error(error));
    } else {
      console.error("No ID parameter found");
    }
  }, [id]);

  if (!lawyer) return <div className="text-black">Loading...</div>;

  const {
    name,
    location,
    phone,
    message,
    website,
    ubunturating,
    practice,
    profile,
    reviews,
    associations,
    educations,
    experiences,
    honors,
    engagements,
    publications,
  } = lawyer.attributes;

  const colors = {
    orange: "#6AA84F",
    grey: "#a9a9a9",
  };

  let mostRecentReview = null;
  let reviewCount = 0;

  if (reviews?.data?.length) {
    const sortedReviews = reviews.data.sort((a, b) => {
      return (
        new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
      );
    });

    mostRecentReview = sortedReviews[0];
    reviewCount = reviews.data.length;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        size={16}
        color={index < rating ? colors.orange : colors.grey}
      />
    ));
  };

  const renderPublishedAt = (publishedAt) => {
    const date = new Date(publishedAt);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const RenderReviewBody = ({ reviewBody }) => {
    const [expanded, setExpanded] = useState(false);
    const maxWords = 30;

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    const renderShortenedReviewBody = () => {
      const words = reviewBody.split(" ");
      const shortenedText = words.slice(0, maxWords).join(" ");
      const expandable = words.length > maxWords;

      return (
        <>
          {shortenedText}
          {expandable && (
            <div
              onClick={toggleExpanded}
              style={{ cursor: "pointer", color: "#0A72BA", marginTop:"5px" }}
            >
              ...Read More
            </div>
          )}
        </>
      );
    };

    return (
      <div>
        <p className="text-justify">{expanded ? reviewBody : renderShortenedReviewBody()}</p>
      </div>
    );
  };

  const handleViewAllClick = (section) => {
    setShowAll((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleViewMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5);
  };

  const renderSection = (data, sectionName) => {
    return (
      <>
        <ul className="pt-1 pb-2">
          {data.slice(0, showAll[sectionName] ? data.length : 3).map((item) => (
            <li key={item.id} className="py-1">
              <p className="text-l font-medium mb-2">
                {item.attributes.role ||
                  item.attributes.name ||
                  item.attributes.title ||
                  item.attributes.institute ||
                  item.attributes.honorName ||
                  item.attributes.engagement}
              </p>
              <p>{item.attributes.company || item.attributes.status || item.attributes.subtitle || item.attributes.course || item.attributes.honorTitle || item.attributes.topic}</p>
              <p>{item.attributes.timeframe || item.attributes.time || item.attributes.pubyear || item.attributes.year || item.attributes.honorYear || item.attributes.year}</p>
            </li>
          ))}
        </ul>
        {data.length > 3 && (
          <button onClick={() => handleViewAllClick(sectionName)} className="text-blue-500 pb-2">
            {showAll[sectionName] ? "View Less" : "View All"}
          </button>
        )}
      </>
    );
  };

  // Write Review button on Lawyer Page
  const handleWriteReviewClick = () => {
    if (user) {
      navigate('/review');
    } else {
      navigate('/login');
    }
  };

  return (
    <AuthProvider>
      <NavBar />
      <div className="md:max-w-[70%] md:mx-auto mx-8 my-20">
        <section className="border border-gray-200 p-5 md:flex justify-between">
          <div>
            <div className="flex gap-8">
              <div>
                {profile?.data?.attributes?.url && (
                  <img
                    src={`https://ubuntuaid-backend.onrender.com${profile.data.attributes.url}`}
                    alt={name}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="lawyer-details">
                <h1 className="text-4xl font-normal">{name}</h1>
                <p className="text-sm font-medium my-2">
                  {practice} lawyer based in {location}
                </p>
                <div className="md:flex gap-2 my-2 justify-start items-center">
                  <p className="flex md:m-0 my-1">
                    {mostRecentReview &&
                      renderStars(mostRecentReview.attributes.rating)}
                  </p>
                  <p className="text-[#0A72BA]">
                    {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex my-4 gap-6">
              <p className="text-white bg-[#0A72BA] px-4 py-2 rounded-md">
                <a
                  href={`tel:${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxs-phone"></i> <span>(256) {phone}</span>
                </a>
              </p>
              <p className="text-[#0A72BA] px-4 py-2 rounded-md border border-[#0A72BA] md:m-auto my-6">
                <a href={message} target="_blank" rel="noopener noreferrer">
                  <p className="flex items-center gap-2">
                    <i className="bx bxs-envelope text-base"></i>{" "}
                    <span>Send a mail</span>
                  </p>
                </a>
              </p>
              <p className="text-[#6AA84F] px-4 py-2 rounded-md border border-[#6AA84F] ">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <p className="flex items-center gap-2">
                    <i className="bx bx-link-external"></i> <span>Website</span>
                  </p>
                </a>
              </p>
            </div>
          </div>

          <div>{/* right side content */}</div>
        </section>

        <section className="w-full">
          <div className="max-w-[1100px]">
            <div className="my-5">
              <div className="flex justify-between mt-14">
                <h4 className="border-l-[4px] border-[#6AA84F] pl-2 text-3xl mb-6 ">
                  Reviews Summary
                </h4>
                <button
                  onClick={handleWriteReviewClick}
                  className="text-[#2e2e2e] py-2 px-4 rounded-md border border-[#2e2e2e]"
                >
                  Write a Review
                </button>
              </div>
              {reviews?.data?.slice(0, visibleReviews).map((review) => (
                <div key={review.id} className="mt-4">
                  <p className="flex mb-2">
                    {renderStars(review.attributes.rating)}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <span> Posted by {review.attributes?.firstName || ""}</span>{" "}
                    |
                    <span>
                      {renderPublishedAt(review.attributes.publishedAt)}
                    </span>{" "}
                    |
                    <span>
                      {review.attributes?.consultation
                        ? "Consulted Attorney"
                        : "Hired Attorney"}
                    </span>
                    <span>
                      <i className="bx bxs-info-circle text-base text-[#0A72BA]"></i>
                    </span>
                  </p>
                  <h5 className="mt-3 mb-2 font-medium leading-tight">
                    {review.attributes.title}
                  </h5>
                  <RenderReviewBody reviewBody={review.attributes.reviewbody} />
                </div>
              ))}
              {visibleReviews < reviewCount && (
                <button onClick={handleViewMoreReviews} className="text-blue-500">
                  View More Reviews
                </button>
              )}
            </div>

            <div>
              <h1 className="border-l-[4px] border-[#6AA84F] pl-2 text-3xl mb-6 mt-14">
                Resume
              </h1>
              <div className="flex justify-center bg-[#6aa84f20] rounded-xl py-3 mb-5">
                <p className="flex gap-4 items-center">
                  <span className="uppercase">ubuntu rating</span>
                  <span className="font-bold">{ubunturating}</span>
                  <span>
                    <i className="bx bxs-info-circle text-base text-[#0A72BA]"></i>
                  </span>
                </p>
              </div>
            </div>

            <div className="md:flex gap-20">
              <div className="md:w-1/2">
                <div className="border-b border-gray-300 mb-3">
                  <h4 className="text-2xl mb-2 font-medium">Work Experience</h4>
                  {renderSection(experiences?.data, "experiences")}
                </div>

                <div className="border-b border-gray-300 mb-3">
                  <h4 className="text-2xl mb-2 font-medium">Associations</h4>
                  {renderSection(associations?.data, "associations")}
                </div>

                <div className="border-b border-gray-300 mb-3">
                  <h4 className="text-2xl mb-2 font-medium">Publications</h4>
                  {renderSection(publications?.data, "publications")}
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="border-b border-gray-300 mb-3">
                  <h4 className="text-2xl mb-2 font-medium">Education</h4>
                  {renderSection(educations?.data, "educations")}
                </div>

                <div className="border-b border-gray-300 mb-3">
                  <h4 className="text-2xl mb-2 font-medium">Honors and Awards</h4>
                  {renderSection(honors?.data, "honors")}
                </div>

                <div className="border-b border-gray-300 mb-3 md:mb-0">
                  <h4 className="text-2xl mb-2 font-medium">
                    Speaking Engagements
                  </h4>
                  {renderSection(engagements?.data, "engagements")}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default LawyerDetail;

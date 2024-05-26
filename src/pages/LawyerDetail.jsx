/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import Header from "../components/navBar/Header";

const LawyerDetail = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    console.log("ID from params:", id); // Add this line for debugging
    if (id) {
      axios
        .get(`http://localhost:1337/api/lawyers/${id}?populate=*`)
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
    license,
    state,
    acqiured,
    status,
    ubunturating,
    practice,
    profile,
    reviews,
    associations,
    educations,
    endorsements,
    experiences,
    honors,
    engagements,
    publications,
  } = lawyer.attributes;

  const colors = {
    orange: "#6AA84F",
    grey: "#a9a9a9",
  };

  // Check if reviews.data exists before sorting
  let mostRecentReview = null;
  let reviewCount = 0;

  if (reviews?.data?.length) {
    // Sort reviews by publishedAt date in descending order
    const sortedReviews = reviews.data.sort((a, b) => {
      return (
        new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt)
      );
    });

    // Select the most recent review
    mostRecentReview = sortedReviews[0];

    // Count the number of reviews
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

  // Function to convert the publishedAt Date format and pick only Month and year
  const renderPublishedAt = (publishedAt) => {
    const date = new Date(publishedAt);
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Function to render a short review body
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
              style={{ cursor: "pointer", color: "#0A72BA" }}
            >
              ...Read More
            </div>
          )}
        </>
      );
    };

    return (
      <div>
        <p>{expanded ? reviewBody : renderShortenedReviewBody()}</p>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="max-w-[70%] m-auto my-20">
        <section className="border border-gray-200 p-5">
          <div>
            <div className="flex gap-8">
              <div>
                {profile?.data?.attributes?.url && (
                  <img
                    src={`http://localhost:1337${profile.data.attributes.url}`}
                    alt={name}
                    className="img-fluid"
                  />
                )}
              </div>
              <div className="lawyer-details">
                <h1 className="text-4xl font-normal">{name}</h1>
                {/* Lawyer Profile Image starts here */}
                <p className="text-sm font-medium my-2">
                  {practice} lawyer based in {location}
                </p>
                <div className="flex gap-2 my-2 justify-start items-center">
                  <p className="flex">
                    {mostRecentReview &&
                      renderStars(mostRecentReview.attributes.rating)}
                  </p>
                  <p className="text-[#0A72BA]">
                    {reviewCount} {reviewCount === 1 ? "review" : "reviews"}
                  </p>
                </div>

                {/* Lawyer Profile Image ends here */}
              </div>
            </div>

            {/* Telephone, Message, & Website starts here */}
            <div className="flex my-4 gap-6">
              <p className="text-white bg-[#0A72BA] px-4 py-2 rounded-md">
                <a
                  href={`tel:${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="flex items-center gap-2">
                    <i className="bx bxs-phone"></i> <span>(256) {phone}</span>
                  </p>
                </a>
              </p>
              <p className="text-[#0A72BA] px-4 py-2 rounded-md border border-[#0A72BA]">
                <a href={message} target="_blank" rel="noopener noreferrer">
                  <p className="flex items-center gap-2">
                    <i className="bx bxs-envelope text-base"></i>{" "}
                    <span>Send a mail</span>
                  </p>
                </a>
              </p>
              <p className="text-[#6AA84F] px-4 py-2 rounded-md border border-[#6AA84F]">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  <p className="flex items-center gap-2">
                    <i className="bx bx-link-external"></i> <span>Website</span>
                  </p>
                </a>
              </p>
            </div>
            {/* Telephone, Message, & Website ends here */}
          </div>

          <div>{/* right side content */}</div>
        </section>

        <section className="w-full">
          <div className="max-w-[1100px]">
            {/* Reviews starts here */}
            <div className="my-5">
              <div className="flex justify-between mt-14">
                <h4 className="border-l-[4px] border-[#6AA84F] pl-2 text-3xl mb-6 ">
                  Reviews
                </h4>
                <Link>
                  <p className="text-[#2e2e2e] py-2 px-4 rounded-md border border-[#2e2e2e]">
                    Write a Review
                  </p>
                </Link>
              </div>
              {reviews?.data?.map((review) => (
                <div key={review.id} className="mt-2">
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
            </div>
            {/* Reviews ends here */}

            <div>
              <h1 className="border-l-[4px] border-[#6AA84F] pl-2 text-3xl mb-6 mt-14">
                Resume
              </h1>
              <div className="flex justify-center bg-[#6aa84f20] rounded-xl py-3 mb-5">
                <p className="flex  gap-4 items-center">
                  <span className="uppercase">ubuntu rating</span>
                  <span className="font-bold">{ubunturating}</span>
                  <span>
                    <i className="bx bxs-info-circle text-base text-[#0A72BA]"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="flex gap-20">
              <div>
                <div>
                  <h4 className="text-2xl mb-2 font-medium">Work Experience</h4>
                  <ul className="pt-1 pb-2">
                    {experiences?.data?.map((exp) => (
                      <li key={exp.id} className="py-1">
                        <p className="text-l font-medium mb-2">{exp.attributes.role}</p>
                        <p>{exp.attributes.company}</p>
                        <p>{exp.attributes.timeframe}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl mb-2 font-medium">Associations</h4>
                  <ul className="pt-1 pb-2">
                    {associations?.data?.map((assoc) => (
                      <li key={assoc.id} className="py-1">
                        <p className="text-l font-medium">{assoc.attributes.name}</p>
                        <p>{assoc.attributes.status}</p>
                        <p>{assoc.attributes.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl mb-2 font-medium">Publications</h4>
                  <ul className="pt-1 pb-2">
                    {publications?.data?.map((pub) => (
                      <li key={pub.id} className="py-1">
                        <p className="text-l font-medium">{pub.attributes.title}</p>
                        <p>{pub.attributes.subtitle}</p>
                        <p>{pub.attributes.pubyear}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div>
                  <h4 className="text-2xl mb-2 font-medium">Education</h4>
                  <ul className="pt-1 pb-2">
                    {educations?.data?.map((edu) => (
                      <li key={edu.id} className="py-1">
                        <p className="text-l font-medium mb-2">{edu.attributes.institute}</p>
                        <p>{edu.attributes.course}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl mb-2 font-medium">Honors and Awards</h4>
                  <ul className="pt-1 pb-2">
                  {honors?.data?.map((hon) => (
                      <li key={hon.id} className="py-1">
                        <p className="text-l font-medium mb-2">{hon.attributes.honorName}</p>
                        <p>{hon.attributes.honorTitle}</p>
                        <p>{hon.attributes.honorYear}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl mb-2 font-medium">Engagements</h4>
                  <ul className="pt-1 pb-2">
                    {engagements?.data?.map((eng) => (
                      <li key={eng.id} className="py-1">
                        {eng.attributes.title} - {eng.attributes.topic} (
                        {eng.attributes.year})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LawyerDetail;

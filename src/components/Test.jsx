lawyers !== null ? (
    lawyers.map((item)=>{
    return(
      <div key={item.id} className="border border-gray-300 rounded-xl w-1/4 my-5 p-5">
        <div>
              <div className="flex gap-5 mb-5">
                  <div>
                      <img src={`http://localhost:1337${item.attributes.profile.data.attributes.url}`} alt="AiderImage" />
                  </div>
                  <div>
                  <h1 className="text-xl font-bold text-[#0A72BA] mb-1">{item.attributes.name}</h1>
                  <div className="flex gap-2">
                      <div>
                     {Array.from({ length: item.attributes.reviews.data.attributes.rating}).map((i) => (
                <FaStar key={i} size={18} color={colors.orange} />
              ))}
              
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
                    {item.attributes.reviews.data.attributes.firstName}
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

<>
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#6AA84D",
  grey: "#a9a9a9",
};

const ReviewForm = () => {
  const [title, setTitle] = useState("");
  const [reviewbody, setReviewbody] = useState("");
  const [consultation, setConsultation] = useState(true);
  const [hired, setHired] = useState(false);
  const [yes, setYes] = useState(true);
  const [no, setNo] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleReviewbodyChange = (e) => setReviewbody(e.target.value);
  const handleConsultationChange = (e) => setConsultation(e.target.value);
  const handleHireChange = (e) => setHired(e.target.value);
  const handleYesChange = (e) => setYes(e.target.value);
  const handleNoChange = (e) => setNo(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFirstnameChange = (e) => setFirstname(e.target.value);

  const handleSubmit = async (values, actions) => {
    try {
      // Submit form data to Strapi CMS
      const response = await axios.post(
        "http://localhost:1337/api/reviews",
        values
      );

      console.log("Review submitted successfully:", response.data);
      actions.resetForm();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <>
      <div className="md:flex justify-between gap-36 md:max-w-[70%] md:mx-auto py-10 mx-14">
        <div className="md:w-1/2 w-full">
          <h2>Leave a Review</h2>
           <Form>
                <div>
                  <p></p>
                  <label htmlFor="starRating">Star Rating</label>
                  <div className="flex my-2">
                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.orange
                              : colors.grey
                          }
                        />
                      );
                    })}
                  </div>
                  <ErrorMessage name="starRating" component="div" />
                </div>

                <div>
                  <label htmlFor="title">Review Title</label>
                  <br />
                  <Field
                    type="text"
                    name="title"
                    className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
                    value={title}
                    onChange={handleTitleChange}
                  />
                  <ErrorMessage name="reviewTitle" component="div" />
                </div>

                <div>
                  <label htmlFor="reviewBody">Review Body</label>
                  <br />
                  <Field
                    as="textarea"
                    name="reviewBody"
                    value={reviewbody}
                    onChange={handleReviewbodyChange}
                    className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                  />
                  <ErrorMessage name="reviewBody" component="div" />
                </div>

                <div className="my-2">
                  <label>
                    Was this a consultation or did you hire this lawyer?
                  </label>
                  <div>
                    <label className="mr-2">
                      <Field
                        type="radio"
                        name="consultation"
                        value={consultation}
                        onChange={handleConsultationChange}
                        className="mr-2"
                      />
                      Consulted
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="consultation"
                        value={hired}
                        onChange={handleHireChange}
                        className="mr-2"
                      />
                      Hired
                    </label>
                  </div>
                  <ErrorMessage name="consultationOrHired" component="div" />
                </div>

                <div className="my-2">
                  <label>Would you recommend this lawyer?</label>
                  <div>
                    <label className="mr-2">
                      <Field
                        type="radio"
                        name="recommend"
                        value={yes}
                        onChange={handleYesChange}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="recommend"
                        value={no}
                        onChange={handleNoChange}
                        className="mr-2"
                      />
                      No
                    </label>
                  </div>
                  <ErrorMessage name="recommendLawyer" component="div" />
                </div>

                <div className="my-2">
                  <label>Post your review anonymously?</label>
                  <div>
                    <label className="mr-2">
                      <Field
                        type="radio"
                        name="postAnonymously"
                        value="Yes"
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="postAnonymously"
                        value="No"
                        className="mr-2"
                      />
                      No, use my first name
                    </label>
                  </div>
                  <ErrorMessage name="postAnonymously" component="div" />
                </div>

                {values.postAnonymously === "No" && (
                  <>
                    <div className="my-1">
                      <label htmlFor="firstName">First Name</label>
                      <br />
                      <Field
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleFirstnameChange}
                        className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                      />
                      <ErrorMessage name="firstName" component="div" />
                    </div>

                    <div>
                      <label htmlFor="email">Email</label>
                      <br />
                      <Field
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                  </>
                )}

                {/* <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value) => {
                  console.log("Captcha value:", value);
                  // Set the captcha value in Formik form
                }}
                className="my-5"
              /> */}

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full max-h-56 bg-[#6AA84D] text-white uppercase rounded px-2 py-2 my-5"
                >
                  Submit
                </button>
              </Form>
        </div>
        <div className="w-1/2">
          <p>Review Guideline</p>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;

<>
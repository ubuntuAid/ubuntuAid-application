import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#6AA84D",
  grey: "#a9a9a9",
};

const ReviewForm = () => {
  const handleSubmit = async (values, actions) => {
    try {
      // Submit form data to Strapi CMS
      const response = await axios.post(
        "https://your-strapi-cms-url.com/reviews",
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
      <div className="max-w-[70%] m-auto ">
        <h2>Leave a Review</h2>
        <Formik
          initialValues={{
            starRating: "",
            reviewTitle: "",
            reviewBody: "",
            consultationOrHired: "",
            recommendLawyer: "",
            postAnonymously: "",
            firstName: "",
            email: "",
            recaptcha: "",
          }}
          // validate={(values) => {
          //   const errors = {};

          //   // Add validation rules here

          //   return errors;
          // }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
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
                <label htmlFor="reviewTitle">Review Title</label>
                <br />
                <Field
                  type="text"
                  name="reviewTitle"
                  className="w-1/2 border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <ErrorMessage name="reviewTitle" component="div" />
              </div>

              <div>
                <label htmlFor="reviewBody">Review Body</label>
                <br />
                <Field
                  as="textarea"
                  name="reviewBody"
                  className="w-1/2 max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                />
                <ErrorMessage name="reviewBody" component="div" />
              </div>

              <div>
                <label>
                  Was this a consultation or did you hire this lawyer?
                </label>
                <div>
                  <label className="mr-2">
                    <Field
                      type="radio"
                      name="consultationOrHired"
                      value="Consulted"
                      className="mr-2"
                    />
                    Consulted
                  </label>
                  <label>
                    <Field
                      type="radio"
                      name="consultationOrHired"
                      value="Hired"
                      className="mr-2"
                    />
                    Hired
                  </label>
                </div>
                <ErrorMessage name="consultationOrHired" component="div" />
              </div>

              <div>
                <label>Would you recommend this lawyer?</label>
                <div>
                  <label className="mr-2">
                    <Field type="radio" name="recommendLawyer" value="Yes" className="mr-2" />
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="recommendLawyer" value="No" className="mr-2"/>
                    No
                  </label>
                </div>
                <ErrorMessage name="recommendLawyer" component="div" />
              </div>

              <div>
                <label>Post your review anonymously?</label>
                <div>
                  <label className="mr-2">
                    <Field type="radio" name="postAnonymously" value="Yes" className="mr-2"/>
                    Yes
                  </label>
                  <label>
                    <Field type="radio" name="postAnonymously" value="No" className="mr-2"/>
                    No, use my first name
                  </label>
                </div>
                <ErrorMessage name="postAnonymously" component="div" />
              </div>

              {values.postAnonymously === "No" && (
                <>
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" name="firstName" />
                    <ErrorMessage name="firstName" component="div" />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                </>
              )}

              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={(value) => {
                  console.log("Captcha value:", value);
                  // Set the captcha value in Formik form
                }}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div></div>
    </>
  );
};

export default ReviewForm;

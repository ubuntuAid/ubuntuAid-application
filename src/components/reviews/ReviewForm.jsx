import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#6AA84D",
  grey: "#a9a9a9",
};

const ReviewForm = () => {
  const [lawyers, setLawyers] = useState([]);
  const [selectedLawyer, setSelectedLawyer] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [title, setTitle] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [consultation, setConsultation] = useState("consultation");
  const [recommend, setRecommend] = useState("yes");
  const [postAnonymously, setPostAnonymously] = useState("Yes");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchLawyers = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/lawyers");
        setLawyers(response.data.data);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
      }
    };

    fetchLawyers();
  }, []);

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

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!reviewBody) newErrors.reviewBody = "Review Body is required";
    if (!selectedLawyer) newErrors.selectedLawyer = "Lawyer selection is required";
    if (postAnonymously === "No" && !firstName) newErrors.firstName = "First Name is required";
    if (postAnonymously === "No" && !email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    const formData = {
      data: {
        title,
        rating: currentValue,
        consultation: consultation === "consultation",
        recommend: recommend === "yes",
        posting: postAnonymously === "Yes",
        firstName: postAnonymously === "No" ? firstName : undefined,
        email: postAnonymously === "No" ? email : undefined,
        reviewbody: reviewBody,
        lawyer: selectedLawyer,  // Ensure this is the lawyer ID
      }
    };
  
    try {
      const response = await axios.post("http://localhost:1337/api/reviews", formData);
      console.log("Review submitted successfully:", response.data);
      // Reset form
      setCurrentValue(0);
      setTitle("");
      setReviewBody("");
      setConsultation("consultation");
      setRecommend("yes");
      setPostAnonymously("Yes");
      setFirstName("");
      setEmail("");
      setSelectedLawyer("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      <div className="md:flex justify-between gap-36 md:max-w-[70%] md:mx-auto py-10 mx-14">
      <div className="md:w-1/2 w-full">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmit}>

        <div className="my-2">
            <label htmlFor="selectedLawyer">Select Lawyer</label>
            <br />
            <select
              name="selectedLawyer"
              className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
              value={selectedLawyer}
              onChange={(e) => setSelectedLawyer(e.target.value)}
            >
              <option value="">Select a lawyer</option>
              {lawyers.map((lawyer) => (
                <option key={lawyer.id} value={lawyer.id}>
                  {lawyer.attributes.name}
                </option>
              ))}
            </select>
            {errors.selectedLawyer && <div>{errors.selectedLawyer}</div>}
          </div>
          
          <div>
            <label htmlFor="starRating">Star Rating</label>
            <div className="flex my-2">
              {stars.map((_, index) => (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                />
              ))}
            </div>
            {errors.starRating && <div>{errors.starRating}</div>}
          </div>

          <div>
            <label htmlFor="title">Review Title</label>
            <br />
            <input
              type="text"
              name="title"
              className="w-full border-2 border-gray-500 rounded px-2 py-1 my-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <div>{errors.title}</div>}
          </div>

          <div>
            <label htmlFor="reviewBody">Review Body</label>
            <br />
            <textarea
              name="reviewBody"
              className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
            />
            {errors.reviewBody && <div>{errors.reviewBody}</div>}
          </div>

          <div className="my-2">
            <label>Was this a consultation or did you hire this lawyer?</label>
            <div>
              <label className="mr-2">
                <input
                  type="radio"
                  name="consultation"
                  value="consultation"
                  checked={consultation === "consultation"}
                  onChange={(e) => setConsultation(e.target.value)}
                  className="mr-2"
                />
                Consulted
              </label>
              <label>
                <input
                  type="radio"
                  name="consultation"
                  value="hired"
                  checked={consultation === "hired"}
                  onChange={(e) => setConsultation(e.target.value)}
                  className="mr-2"
                />
                Hired
              </label>
            </div>
            {errors.consultation && <div>{errors.consultation}</div>}
          </div>

          <div className="my-2">
            <label>Would you recommend this lawyer?</label>
            <div>
              <label className="mr-2">
                <input
                  type="radio"
                  name="recommend"
                  value="yes"
                  checked={recommend === "yes"}
                  onChange={(e) => setRecommend(e.target.value)}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="recommend"
                  value="no"
                  checked={recommend === "no"}
                  onChange={(e) => setRecommend(e.target.value)}
                  className="mr-2"
                />
                No
              </label>
            </div>
            {errors.recommend && <div>{errors.recommend}</div>}
          </div>

          <div className="my-2">
            <label>Post your review anonymously?</label>
            <div>
              <label className="mr-2">
                <input
                  type="radio"
                  name="postAnonymously"
                  value="Yes"
                  checked={postAnonymously === "Yes"}
                  onChange={(e) => setPostAnonymously(e.target.value)}
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="postAnonymously"
                  value="No"
                  checked={postAnonymously === "No"}
                  onChange={(e) => setPostAnonymously(e.target.value)}
                  className="mr-2"
                />
                No, use my first name
              </label>
            </div>
            {errors.postAnonymously && <div>{errors.postAnonymously}</div>}
          </div>

          {postAnonymously === "No" && (
            <>
              <div className="my-1">
                <label htmlFor="firstName">First Name</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstName && <div>{errors.firstName}</div>}
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="w-full max-h-56 border-2 border-gray-500 rounded px-2 py-1 my-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div>{errors.email}</div>}
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full max-h-56 bg-[#6AA84D] text-white uppercase rounded px-2 py-2 my-5"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <p>Review Guideline</p>
      </div>
    </div>
    </>
  );
};

export default ReviewForm;

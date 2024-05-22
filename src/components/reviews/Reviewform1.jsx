import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ReviewForm = () => {
  const { lawyerId } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [formData, setFormData] = useState({
    rating: 0,
    title: '',
    review: '',
    consultation: '',
    recommend: '',
    anonymous: '',
    firstName: '',
    email: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:1337/lawyers/${lawyerId}`)
      .then(response => setLawyer(response.data))
      .catch(error => console.error(error));
  }, [lawyerId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:1337/reviews`, { ...formData, lawyer: lawyerId })
      .then(response => {
        alert('Review submitted successfully!');
        setFormData({
          rating: 0,
          title: '',
          review: '',
          consultation: '',
          recommend: '',
          anonymous: '',
          firstName: '',
          email: ''
        });
      })
      .catch(error => console.error(error));
  };

  if (!lawyer) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Review your lawyer</h2>
      <div className="flex items-center mb-4">
        <img className="w-16 h-16 rounded-full mr-4" src={lawyer.image.url} alt={lawyer.name} />
        <div>
          <h3 className="text-xl font-semibold">{lawyer.name}</h3>
          <p>{lawyer.location}</p>
          <p>Licensed in {lawyer.licensed}</p>
          <Link to={`/lawyer/${lawyerId}`} className="text-blue-500">Back to profile</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select a rating for your lawyer</label>
          <input type="number" name="rating" value={formData.rating} onChange={handleChange} max="5" min="1" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Add a title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} maxLength="128" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Write your review</label>
          <textarea name="review" value={formData.review} onChange={handleChange} maxLength="4000" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Was this just a consultation or did you hire this attorney?</label>
          <div className="flex items-center">
            <input type="radio" name="consultation" value="Consulted" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>Consulted</span>
          </div>
          <div className="flex items-center">
            <input type="radio" name="consultation" value="Hired" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>Hired</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Would you recommend this lawyer?</label>
          <div className="flex items-center">
            <input type="radio" name="recommend" value="Yes" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>Yes</span>
          </div>
          <div className="flex items-center">
            <input type="radio" name="recommend" value="No" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>No</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Post your review anonymously?</label>
          <div className="flex items-center">
            <input type="radio" name="anonymous" value="Yes" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>Yes</span>
          </div>
          <div className="flex items-center">
            <input type="radio" name="anonymous" value="No" onChange={handleChange} required className="mr-2 leading-tight" />
            <span>No, use my first name</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Your first name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Your email address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">I'm not a robot</label>
          <input type="checkbox" required className="mr-2 leading-tight" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

// src/components/LawyerDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LawyerDetail = () => {
  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    axios.get(`https://ubuntuaid-backend.onrender.com/lawyers/${id}`)
      .then(response => setLawyer(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!lawyer) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{lawyer.name}</h1>
      <img src={lawyer.image.url} alt={lawyer.name} className="img-fluid" />
      <div className="lawyer-details">
        <p>{lawyer.description}</p>
        <div>
          <h4>Contact Information</h4>
          <p>{lawyer.contact}</p>
        </div>
        <div>
          <h4>Reviews</h4>
          {lawyer.reviews.map(review => (
            <div key={review.id}>
              <p>{review.comment}</p>
              <p>Rating: {review.rating}</p>
            </div>
          ))}
        </div>
        <div>
          <h4>Work Experience</h4>
          <ul>
            {lawyer.work_experience.map(exp => (
              <li key={exp.id}>{exp.position} at {exp.company}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Education</h4>
          <ul>
            {lawyer.education.map(edu => (
              <li key={edu.id}>{edu.degree} from {edu.institution}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Associations</h4>
          <ul>
            {lawyer.associations.map(assoc => (
              <li key={assoc.id}>{assoc.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Honors and Awards</h4>
          <ul>
            {lawyer.awards.map(award => (
              <li key={award.id}>{award.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetail;

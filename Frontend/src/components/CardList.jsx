import PropTypes from 'prop-types';
import './CardList.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


const Card = ({ id, image, name, rating, description ,review}) => (
  
  <div className="card">
    <input type="checkbox" id={id} className="more" aria-hidden="true" />
    <div className="content">
      <div className="front" style={{ backgroundImage: `url(${image})` }}>
        <div className="inner">
          <h2>{name}</h2>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fas fa-star${rating > index ? '' : '-half-alt'}`}
              />
            ))}
          </div>
          <label htmlFor={id} className="button" aria-hidden="true">
            {review}
          </label>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          
          <div className="description">
            <p>{description}</p>
          </div>
          
          <label htmlFor={id} className="button return" aria-hidden="true">
            <i className="fas fa-arrow-left" />
          </label>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  review : PropTypes.string.isRequired,
};

const CardList = () => {
  const cardData = [
    {
      id: 'card1',
      image: 'src/assets/userimage.png',
      name: 'Ankur',
      rating: 4,
     description: 'The blockchain system ensures secure, transparent patient records, reducing errors and improving the speed of care delivery',
     review : 'Good'
      
    },
    {
      id: 'card2',
      image: 'src/assets/userimage.png',
      name: 'Anmol',
      rating: 3.5,
     description: 'Efficient data management and enhanced security with blockchain technology have transformed our approach to handling public health records',
      review : 'Good'
    },
    {
      id: 'card3',
      image: 'src/assets/userimage.png',
      name: 'Kapil',
      rating: 5,
    description: 'Accessing accurate, up-to-date records instantly has significantly improved patient outcomes and streamlined our clinical workflows.',
      review : 'Excellent'
    }, {
      id: 'card4',
      image: 'src/assets/userimage.png',
      name: 'Manjeet',
      rating: 5,
    description: 'Blockchain integration has enhanced data integrity and security, simplifying record sharing across our healthcare network with ease.',
      review : 'Excellent'
    },
    {
      id: 'card5',
      image: 'src/assets/userimage.png',
      name: 'Leisha',
      rating: 3.5,
     description: 'Blockchain technology has revolutionized record-keeping, ensuring data accuracy and protecting patient information with top-notch security.',
      review : 'Good'
    },
    {
      id: 'card6',
      image: 'src/assets/userimage.png',
      name: 'Seema',
      rating: 2.5,
     description: 'The systems real-time updates and secure data handling have made patient care more efficient and reliable.',
      review : 'Very Good'
    }
  ];

  return (
    <div className="wrapper">
      {cardData.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;
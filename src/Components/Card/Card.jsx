import './Card.css'; // Import external CSS for styling
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Card = () => {
  const navigate = useNavigate();

  const card = () => {
    window.location.href = 'https://amarnathsooraj.github.io/guid/d1.html';
  };
  return (
    <div className="section">
      <h1>CHOOSE YOUR DAY</h1>
      
      {/* Section 1 */}
      <div className="section1">
        <div className="container1">
          {/* Card 1 */}
          <div className="card" onClick={card}>
            <img src={card1} alt="Card 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">1</h3>
              <ul className="card-description">
                <li>Mananchira Square</li>
                <li>S.M. Street (Sweet Meat Street)</li>
                <li>Mishkal Mosque</li>
                <li>Kozhikode Beach</li>
                <li>Kallayi River</li>
                <li>Beypore Beach</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" onClick={card}>
            <img src={card3} alt="Card 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">2</h3>
              <ul className="card-description">
                <li>SM Street</li>
                <li>Kuttichira</li>
                <li>Gujart Street</li>
                <li>Kozhikode beach</li>
                <li>Focus Mall</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card" onClick={card}>
            <img src={card2} alt="Card 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">3</h3>
              <ul className="card-description">
                <li>Lulu Mall</li>
                <li>Focus Mall</li>
                <li>RP Mall</li>
                <li>Gokulam Mall</li>
                <li>HiLite Mall</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

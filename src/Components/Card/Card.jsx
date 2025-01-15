import './Card.css'; // Import external CSS for styling
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const Card = () => {
  return (
    <div className="section">
      <h1>CHOOSE YOUR DAY</h1>
      
      {/* Section 1 */}
      <div className="section1">
        <div className="container1">
          {/* Card 1 */}
          <div className="card">
            <img src={card1} alt="Card 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">1</h3>
              <ul className="card-description">
                <li>Mananchira Square</li>
                <li>S.M. Street (Sweet Meat Street)</li>
                <li>Mishkal Mosque</li>
                <li>Kozhikode Beach</li>
                <li>Kappad Beach</li>
                <li>Beypore Beach</li>
                <li>Kallayi River</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src={card2} alt="Card 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">2</h3>
              <ul className="card-description">
                <li>Mananchira Square</li>
                <li>SM Street</li>
                <li>Kuttichira</li>
                <li>Mishkal Mosque</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src={card3} alt="Card 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">3</h3>
              <ul className="card-description">
                <li>Mananchira Square</li>
                <li>Kuttichira Mosque</li>
                <li>SM Street</li>
                <li>Kozhikode Beach</li>
                <li>Beypore Beach</li>
                <li>Kappad Beach</li>
                <li>Thusharagiri Waterfalls</li>
                <li>Tali Shiva Temple</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section2">
        <div className="container2">
          {/* Card 1 */}
          <div className="card">
            <img src="/card1.png" alt="Card 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">1</h3>
              <ul className="card-description">
                <li>Breakfast: Paragon Restaurant</li>
                <li>Lunch: Rahmath</li>
                <li>Dinner: Mezban Restaurant</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/card2.png" alt="Card 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">2</h3>
              <ul className="card-description">
                <li>Breakfast: Hotel Sagar</li>
                <li>Lunch: Paragon Restaurant</li>
                <li>Dinner: Rahmath</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/card3.png" alt="Card 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">3</h3>
              <ul className="card-description">
                <li>Breakfast: Subway</li>
                <li>Lunch: Salkara Restaurant</li>
                <li>Dinner: Kingsbay</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section3">
        <div className="container3">
          {/* Card 1 */}
          <div className="card">
            <img src="/card1.png" alt="Card 1" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">1</h3>
              <p className="card-description">Connect with a good destination and a decent food spot.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img src="/card2.png" alt="Card 2" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">2</h3>
              <p className="card-description">Connect with good food and a decent destination.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img src="/card3.png" alt="Card 3" className="card-image" />
            <div className="card-content">
              <h3 className="card-title">3</h3>
              <p className="card-description">Connect with good food and a good destination.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

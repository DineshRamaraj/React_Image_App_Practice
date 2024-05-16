import "./index.css";

const Header = () => (
  <div className="header-container">
    <div className="search-container">
      <input type="search" className="search" placeholder="Search" />
      <button type="button" className="search-button">
        Search
      </button>
    </div>
    <ul className="list-container">
      <li className="list-item">
        <button className="list-button">Mountain</button>
      </li>
      <li className="list-item">
        <button className="list-button">Flowers</button>
      </li>
      <li className="list-item">
        <button className="list-button">Beaches</button>
      </li>
      <li className="list-item">
        <button className="list-button">Cities</button>
      </li>
    </ul>
  </div>
);

export default Header;

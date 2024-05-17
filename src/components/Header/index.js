import "./index.css";

const Header = (props) => {
  const { clickQueryItem, searchItem, changeSearch } = props;

  const clickMountain = () => {
    clickQueryItem("Mountain");
  };

  const clickFlowers = () => {
    clickQueryItem("Flowers");
  };

  const clickBeaches = () => {
    clickQueryItem("Beaches");
  };

  const clickCities = () => {
    clickQueryItem("Cities");
  };

  const onChangeSearchItem = (event) => {
    changeSearch(event.target.value);
  };

  const clickSearchButton = () => {
    clickQueryItem(searchItem);
  }

  return (
    <div className="header-container">
      <div className="search-container">
        <input
          type="search"
          value={searchItem}
          onChange={onChangeSearchItem}
          className="search"
          placeholder="Search"
        />
        <button
          type="button"
          onClick={clickSearchButton}
          className="search-button"
        >
          Search
        </button>
      </div>
      <ul className="list-container">
        <li className="list-item">
          <button className="list-button" onClick={clickMountain}>
            Mountain
          </button>
        </li>
        <li className="list-item">
          <button className="list-button" onClick={clickFlowers}>
            Flowers
          </button>
        </li>
        <li className="list-item">
          <button className="list-button" onClick={clickBeaches}>
            Beaches
          </button>
        </li>
        <li className="list-item">
          <button className="list-button" onClick={clickCities}>
            Cities
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

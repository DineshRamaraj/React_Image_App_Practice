import { Component } from "react";
import "./index.css";

class Main extends Component {
  state = {
    totalList: [],
  };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const apiUrl = `https://api.unsplash.com/photos/?client_id=vb5Cc8c9SFPT1z6BQC87S_qiVYqH6ycayQw9VfhEIBg`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // console.log(data);
    this.setState({ totalList: data });
  };

  render() {
    const { totalList } = this.state;
    return (
      <div className="main-container">
        <ul className="image-container">
          {totalList.map((eachItem) => (
            <li className="image-list-item" key={eachItem.id}>
              <img className="image" src={eachItem.urls.small} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;

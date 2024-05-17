import { Component } from "react";
// import {Image, Shimmer} from 'react-shimmer';
import Header from "../Header";
import "./index.css";
import Loading from "../Loading";
import Failure from "../Failure";

const auth_security_code = "vb5Cc8c9SFPT1z6BQC87S_qiVYqH6ycayQw9VfhEIBg";
let resultValue;

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  IN_PROGRESS: "IN_PROGRESS",
};

class Main extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    totalList: [],
    searchItem: "office",
    currentPage: 2,
  };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    this.setState({ apiStatus: apiStatusConstants.IN_PROGRESS });
    const { searchItem, currentPage } = this.state;
    resultValue = searchItem;
    const apiUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=15&query=${searchItem}&client_id=${auth_security_code}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    if (response.ok === true) {
      this.setState({
        totalList: data.results,
        searchItem: "",
        totalResults: data.total,
        apiStatus: apiStatusConstants.success,
      });
    }
    else{
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  };

  clickQueryItem = (value) => {
    this.setState({ searchItem: value }, this.getApiData);
  };

  changeSearch = (value) => {
    this.setState({ searchItem: value });
  };

  prevButton = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState(
        (prevState) => ({ currentPage: prevState.currentPage - 1 }),
        this.getApiData
      );
    }
  };

  nextButton = () => {
    this.setState(
      (prevState) => ({ currentPage: prevState.currentPage + 1 }),
      this.getApiData
    );
  };

  renderSuccess = () => {
    const { totalList, searchItem, totalResults } = this.state;
    // console.log(totalList);
    return (
      <div className="main-container">
        <Header
          clickQueryItem={this.clickQueryItem}
          searchItem={searchItem}
          changeSearch={this.changeSearch}
        />
        <p className="result-value">
          {resultValue} Result: ({totalResults})
        </p>
        <ul className="image-container">
          {totalList.map((eachItem) => {
            // console.log(eachItem.user.username);
            return (
              <li className="image-list-item" key={eachItem.id}>
                <img
                  className="image"
                  src={eachItem.urls.small}
                  alt={eachItem.user.username}
                  // fallback={<Shimmer width={800} height={600}/>}
                />
              </li>
            );
          })}
        </ul>
        <div className="pagination">
          <button
            type="button"
            className="prev-button"
            onClick={this.prevButton}
          >
            Prev
          </button>
          <button
            type="button"
            className="next-button"
            onClick={this.nextButton}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  onRetry = () =>{
    this.setState({searchItem: "office", currentPage: 1}, this.getApiData);
  }

  renderFailure = () => <Failure onRetry={this.onRetry}/>;

  renderLoading = () => <Loading />;

  render(){
    const {apiStatus} = this.state;
    switch(apiStatus){
      case apiStatusConstants.IN_PROGRESS:
        return this.renderLoading();
      case apiStatusConstants.success:
        return this.renderSuccess();
      case apiStatusConstants.failure:
        return this.renderFailure();
      default:
        return null;
    }
  }

}

export default Main;

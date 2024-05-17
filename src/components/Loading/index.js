// eslint-disable-next-line import/no-extraneous-dependencies
import {ThreeDots} from 'react-loader-spinner'
import './index.css'

const Loading = () => (
  <div className="loading-container" data-testid="loader">
    <ThreeDots color="#0b69ff" height="50" width="50" />
  </div>
)

export default Loading
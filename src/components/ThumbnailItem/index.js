// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const thumbnailOnClick = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={thumbnailOnClick}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem

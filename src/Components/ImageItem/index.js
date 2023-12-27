import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails
  const onImage = () => {
    onClickImage(id)
  }
  return (
    <li className="thumbnail-image-items">
      <button onClick={onImage} className="button2" type="button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItem

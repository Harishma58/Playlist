import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const Songs = props => {
  const {songDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = songDetails
  const onDelete = () => {
    deleteTrack(id)
  }
  return (
    <li className="list-item">
      <div className="img-title-cont">
        <img src={imageUrl} alt="track" className="img" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-icon-container">
        <p className="duration">{duration}</p>
        <button onClick={onDelete} data-testid="delete" className="delete">
          <AiOutlineDelete className="icon" />
        </button>
      </div>
    </li>
  )
}
export default Songs

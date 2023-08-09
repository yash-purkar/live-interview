import { UseData } from '../../Contexts/DataContext'
import './Profile.css'
export const Profile = (props) => {

  const { state, dispatch } = UseData();

  const followUser = () => {
    dispatch({ type: "FOLLOW_USER", payload: props.user })
  }

  const { name, title, articles, followers, ratings } = props.user;

  const isFollowed = state?.followers?.some((el) => el?.name === name);

  return (
    <div className='profile-container'>
      <div className='inner-container'>
        <div>
          <img src="" alt="" className='profile-picture' />
        </div>
        <div className='details'>
          <div>
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
          <div className='user-activity'>
            <div>
              <p>Articles</p>
              <p>{articles}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>{followers}</p>
            </div>
            <div>
              <p>Rating</p>
              <p>{ratings}</p>
            </div>
          </div>
          <div className='buttons-box'>
            <button onClick={followUser}>{isFollowed ? "Unfollow" : "Follow"}</button>
            <button>Chat</button>
          </div>
        </div>
      </div>
    </div>
  )
}

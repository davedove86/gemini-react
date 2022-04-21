import './profile.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar/ >
      <div className="profileContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
          <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Jack Jones</h1>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">jjones@gemini.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Job Title:</span>
                  <span className="itemValue">Licensing Officer</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department</span>
                  <span className="itemValue">Licensing Unit</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Command</span>
                  <span className="itemValue">Neighborhoods</span>
                </div>
              </div>
            </div>
            </div>
          <div className="right">
            <h1 className="title">Login Information</h1>
          </div>
        </div>
        <div className="bottom">
          <h3 className="title">Active Tasks</h3>
        </div>
      </div>

    </div>
  )
}

export default Profile
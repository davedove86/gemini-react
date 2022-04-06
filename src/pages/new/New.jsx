import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from 'react';

const New = ({inputs, title}) => {

  const [file, setFile] = useState('');
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='file' className='icon'>Image<DriveFolderUploadOutlinedIcon className='icon'/></label>
                <input type="file"  id='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}


              {/* <div className="formInput">
                <label>Gender</label>
                <select id="gender" name="gender">
                  <option value="choose" selected disabled hidden>Please select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">non-binary</option>
                  <option value="transgender">Transgender</option>
                  <option value="intersex">Intersex</option>
                  <option value="prefer">Prefer not to say</option>
                </select>
              </div> */}

              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
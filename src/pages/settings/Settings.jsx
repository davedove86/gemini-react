import './settings.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Settings = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <h1>Settings</h1>
        <br />
        <h2>System Color Modes</h2>
        <div className="colorOptionWrap">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
      </div>
    </div>
  )
}

export default Settings
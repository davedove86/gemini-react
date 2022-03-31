import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"><span className="logo">Gemini</span></div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardOutlinedIcon className="icon"/><span>Dashboard</span>
          </li>

          <Link to="/premise" style={{ textDecoration: "none" }}>
          <li>
            <HomeWorkOutlinedIcon className="icon"/><span>Premise</span>

          </li>
          </Link>

          <Link to="/person" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/><span>Person</span>
          </li>
          </Link>
          <p className="title">Shortcuts</p>
          <li>
            <ArticleOutlinedIcon className="icon"/><span>Tasks</span>
          </li>

          <li>
            <InsertChartOutlinedIcon className="icon"/><span>Reports</span>
          </li>
          <p className="title">System</p>
          <li>
            <HelpOutlineIcon className="icon"/><span>Help</span>
          </li>

          <li>
            <SettingsOutlinedIcon className="icon"/><span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/><span>Profile</span>
          </li>

          <li>
            <LogoutOutlinedIcon className="icon"/><span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="colorOptionWrap">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
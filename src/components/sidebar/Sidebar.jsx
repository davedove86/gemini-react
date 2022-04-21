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
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Gemini</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardOutlinedIcon className="icon"/><span>Dashboard</span>
          </li>
        </Link>

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

          <Link to="/tasks" style={{ textDecoration: "none" }}>
          <li>
            <ArticleOutlinedIcon className="icon"/><span>Tasks</span>
          </li>
          </Link>

          <Link to="/reports" style={{ textDecoration: "none" }}>
          <li>
            <InsertChartOutlinedIcon className="icon"/><span>Reports</span>
          </li>
          </Link>

          <p className="title">System</p>

          <Link to="/help" style={{ textDecoration: "none" }}>
          <li>
            <HelpOutlineIcon className="icon"/><span>Help</span>
          </li>
          </Link>

          <Link to="/settings" style={{ textDecoration: "none" }}>
          <li>
            <SettingsOutlinedIcon className="icon"/><span>Settings</span>
          </li>
          </Link>

          <p className="title">User</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon"/><span>Profile</span>
          </li>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
          <li>
            <LogoutOutlinedIcon className="icon"/><span>Logout</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
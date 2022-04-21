import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from "react-router-dom";

const percentage = 73;

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Team Tasks</h1>
        {/* <MoreVertIcon fontSize="small"/> */}
      </div>
      <div className="bottom">
        <div className="featuredChart">
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // Text size
          textSize: '1rem',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(88, 85, 214, ${percentage / 100})`,
          textColor: '#1b2d45',
          trailColor: '#d6d6d6',
          backgroundColor: '#6439ff',
        })}
        />
        </div>
        <p className="title">Tasks completed this week</p>
        <p className="amount">26</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Yesterday</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">9</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last 7 days</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">21</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon fontSize="small"/>
              <div className="resultAmount">67</div>
            </div>
          </div>
        </div>
        <Link to="/tasks" style={{ textDecoration: "none" }}>
          <span className="link">See all tasks</span>
        </Link>
      </div>
    </div>
  )
}

export default Featured
import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Link } from "react-router-dom";

const Widget = ({ type }) => {

  let data;

  // tempoary data
  const amount = 100;
  const percentage = 20;

    switch (type) {
      case "premise":
        data={
          title: "Premises",
          link: "/premise",
          linkTitle: "See all premises",
          icon:(
            <HomeWorkOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
          )
        };
        break;
        case "person":
          data={
            title: "Persons",
            link: "/person",
            linkTitle: "See all persons",
            icon:(
              <PersonOutlineOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
            )
          };
          break;
        case "orders":
        data={
          title: "Orders",
          link: "/orders",
          linkTitle: "See all orders",
          icon:(
            <FolderOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
          )
        };
        break;
        case "tasks":
        data={
          title: "Tasks",
          link: "/tasks",
          linkTitle: "See all tasks",
          icon:(
            <ArticleOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
          )
        };
        break;
        default:
        break;
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{amount}</span>
        <Link to={data.link} style={{ textDecoration: "none" }}>
        <span className="link">{data.linkTitle}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {percentage}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
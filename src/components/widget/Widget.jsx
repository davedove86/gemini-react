import "./widget.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import  {collection, query, where, getDocs} from "firebase/firestore";
import {db} from "../../firebase";

const Widget = ({ type }) => {
  const [amount, setAmount] = useState(null)
  const [diff, setDiff] = useState(null)

  let data;

    switch (type) {
      case "premise":
        data={
          title: "Premises",
          link: "/premise",
          linkTitle: "See all premises",
          query: "premises",
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
            query: "persons",
            icon:(
              <PersonOutlineOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
            )
          };
          break;
        case "tasks":
        data={
          title: "Tasks",
          link: "/tasks",
          linkTitle: "See all tasks",
          query: "tasks",
          icon:(
            <FolderOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
          )
        };
        break;
        case "reports":
        data={
          title: "Active Reports",
          link: "/reports",
          linkTitle: "See all reports",
          query: "reports",
          icon:(
            <ArticleOutlinedIcon className="icon" style={{backgroundColor:"rgba(100, 57, 255, 0.10)", color:"#6439ff"}}/>
          )
        };
        break;
        default:
        break;
    }

    // dynamic data from firebase for widget components
    useEffect(() => {
      const fetchData = async () => {
        const today = new Date();
        const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
        const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));

        // Fetch all data from firebase
        const allDatesQuery = query(
          collection(db, data.query),
          where("timeStamp", "<=", today)
        );

        // Fetch data from last month
        const lastMonthQuery = query(
          collection(db, data.query),
          where("timeStamp", "<=", today),
          where("timeStamp", ">", lastMonth)
        );

        // Fetches data from previous month
        const prevMonthQuery = query(
          collection(db, data.query),
          where("timeStamp", "<=", lastMonth),
          where("timeStamp", ">", prevMonth)
        );

        const lastMonthData = await getDocs(lastMonthQuery);
        const prevMonthData = await getDocs(prevMonthQuery);
        const allDatesData = await getDocs(allDatesQuery);

        setAmount(allDatesData.docs.length);
        setDiff(
          ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
            100
        );
      };
      fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="subTitle">Total number of {data.title}</span>
        <span className="counter">{amount}</span>
        <Link to={data.link} style={{ textDecoration: "none" }}>
          <span className="link">{data.linkTitle}</span>
        </Link>
      </div>
      <div className="right">
      {/* <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Featured from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="premise"/>
          <Widget type="person"/>
          <Widget type="tasks"/>
          <Widget type="reports"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title={"Temporary Event Notices"} aspect={2 / 1}/>
        </div>
          <div className="listContainer">
            <div className="listTitle">Live Temporary Event Notices</div>
            <Table/>
          </div>
      </div>
    </div>
  )
}

export default Home
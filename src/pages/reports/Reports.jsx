import './reports.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Reports = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <h1>Reports</h1>
          </section>
      </div>
    </div>
  )
}

export default Reports
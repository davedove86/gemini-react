import './reports.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Reportsdatatable from '../../components/reportsdatatable/Reportsdatatable'

const Reports = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <Reportsdatatable/>
        </section>
      </div>
    </div>
  )
}

export default Reports
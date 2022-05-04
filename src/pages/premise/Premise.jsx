import './premise.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Premisedatatable from '../../components/premisedatatable/Premisedatatable'


const Premise = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <Premisedatatable/>
        </section>
      </div>
    </div>
  )
}

export default Premise
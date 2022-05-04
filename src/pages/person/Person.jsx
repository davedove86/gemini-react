import './person.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Persondatatable from '../../components/persondatatable/Persondatatable'

const Person = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <Persondatatable/>
        </section>
      </div>
    </div>
  )
}

export default Person
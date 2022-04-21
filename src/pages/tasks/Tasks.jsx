import './tasks.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Tasks = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <h1>Tasks</h1>
        </section>
      </div>
    </div>
  )
}

export default Tasks
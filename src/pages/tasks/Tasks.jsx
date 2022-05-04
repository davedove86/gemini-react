import './tasks.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Taskdatatable from '../../components/taskdatatable/Taskdatatable'

const Tasks = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <section>
          <Taskdatatable />
        </section>
      </div>
    </div>
  )
}

export default Tasks
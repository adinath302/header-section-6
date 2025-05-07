import './App.css'
import Equipments from './component/Equipment/Equipments';
import Herosection from './component/Hero/Hero';
import Navbar2 from './component/Navbar/Navbar2';

function App() {

  // const bgStyle = {
  //   backgroundImage: `url(${BgImage})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundAttachment: "fixed",
  // }

  return (
    < div className='overflow-x-hidden '>
      <div >
        <Navbar2 />
        <Herosection />
      </div>
      <Equipments />
    </div>
  )
}

export default App
import './Sidebar.css'
import Category from './SidebarComponents/Category'
import Colors from './SidebarComponents/Colors'
import Price from './SidebarComponents/Price'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='centered_text'>
        <Category />
        <Price />
        <Colors />
      </div>
    </div>
  )
}

export default Sidebar
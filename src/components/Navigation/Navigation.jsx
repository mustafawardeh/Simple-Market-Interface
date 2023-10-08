import { Setquery } from '../../redux/Reducers/ShopReducer/ShopReducer';
import './Navigation.css'
import { useDispatch } from 'react-redux'

function Navigation() {
  const dispatch = useDispatch()
  const onchangehandle = (e) => dispatch(Setquery(e.target.value))
  return (
    <div className='navigation'>
      <div className='search_container'>
        <i className="icon fa-solid fa-magnifying-glass"></i>
        <input type='text' onChange={onchangehandle} className='search_box' />
      </div>
      <div className='navigation_icons'>
        <a><span><i className="fa-solid fa-heart"></i></span></a>
        <a><span><i className="fa-solid fa-cart-shopping"></i></span></a>
        <a><span><i className="fa-solid fa-user"></i></span></a>
      </div>
    </div>
  )
}

export default Navigation
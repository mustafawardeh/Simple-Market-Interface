import { useDispatch } from 'react-redux'
import { Setselectedcolor } from '../../../../redux/Reducers/ShopReducer/ShopReducer'

// eslint-disable-next-line react/prop-types
function ColInput({ value, title, name }) {
  const dispatch = useDispatch()
  return (
    <div className="input_container">
      <div className='color_input'>
        <input className='input_color' type="radio" value={value} name={name} onClick={(e) => dispatch(Setselectedcolor(e.target.value))} id="tt" style={{ accentColor: { value } }} />
        <span></span>
      </div>
      <label htmlFor="tt">{title}</label>
    </div>
  )
}

export default ColInput
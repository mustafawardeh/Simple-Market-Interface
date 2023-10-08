import {useDispatch} from 'react-redux'
import { Setselectedcategory } from '../../../../redux/Reducers/ShopReducer/ShopReducer'
// eslint-disable-next-line react/prop-types
function CatInput({value,title,name}) {
  const dispatch = useDispatch()
  return (
    <div className="input_container">
        <input type="radio" onChange={(e)=>dispatch(Setselectedcategory(e.target.value))} value={value} name={name}  id="tt" style={{accentColor:{value}}}/>
        <label htmlFor="tt">{title}</label>
    </div>
  )
}

export default CatInput
import {useDispatch} from 'react-redux'
import { Setselectedprice } from '../../../../redux/Reducers/ShopReducer/ShopReducer';
// eslint-disable-next-line react/prop-types
function PriInput({value,title,name}) {
    const dispatch=useDispatch();
    return (
      <div className="input_container">
          <input type="radio" value={value} name={name} onChange={(e)=>{dispatch(Setselectedprice(e.target.value))}} id="tt" style={{accentColor:{value}}}/>
          <label htmlFor="tt">{title}</label>
      </div>
      
    )
  }
  
  export default PriInput


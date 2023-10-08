import {useDispatch , useSelector} from 'react-redux'
import { Setbuttonstate, Setselectedrecommended } from '../../../redux/Reducers/ShopReducer/ShopReducer'
import { useState } from 'react'


// eslint-disable-next-line react/prop-types
function Button({value,title}) {

  const [ClassActive,SetClassActive]=useState('')

  // eslint-disable-next-line no-unused-vars
  const buttonstate = useSelector(state=>state.shopRedux.buttonstate)
  const dispatch=useDispatch()


  const clickhandler=(e)=>{
    dispatch(Setbuttonstate(false))
    dispatch(Setselectedrecommended(e.target.value))
    // if(buttonstate===false)
    // {
      SetClassActive('active')
    //   dispatch(Setbuttonstate(true))
    // }
    // else{
    //   SetClassActive('')
    // }
  }


  return (
    <button className={ClassActive} type="button" onClick={clickhandler} value={value} > {title} </button>
  )
}

export default Button
import "./Recommended.css"
import Button from "./RecommendedComponents/Button"
function Recommended() {
  
  return (
    <div className="recommended flex_dolumn align_center ">
      <h1>Recommended</h1><br/>
      <div className="buttons flex " >
        <Button value='' title='All Products'/>
        <Button value='Nike' title='Nike'/>
        <Button value='Adidas' title='Adidas'/>
        <Button value='Puma' title='Puma'/>
        <Button value='Vans' title='Vans'/>

      </div>
    </div>
  )
}

export default Recommended
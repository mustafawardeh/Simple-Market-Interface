import PriInput from "./Input/PriInput"

function Price() {
  return (
    <div className="price radio_selected">
        <h1 className="price_title">Price</h1><br/>
        <div className="radio_container">
                <PriInput value='' title='All'  name='price'/>
                <PriInput value='50' title='$0-50$' name='price'/>
                <PriInput value='100' title='$50-$100' name='price'/>
                <PriInput value='150' title='$100-150$' name='price'/>
                <PriInput value='200' title='Over 200$' name='price'/>
            </div>
    </div>
  )
}

export default Price
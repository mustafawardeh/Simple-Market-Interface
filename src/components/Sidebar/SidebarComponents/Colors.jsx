import ColInput from "./Input/ColInput"

function Colors() {
  return (
    <div className="colors radio_selected">
      <h1 className="colors_title">Colors</h1><br />
      <div className="radio_container">
        <ColInput value='' title='All' name='color' />
        <ColInput value='black' title='Black'  name='color' />
        <ColInput value='blue' title='Blue' name='color'  />
        <ColInput value='red' title='Red' name='color'  />
        <ColInput value='white' title='White'  name='color' />
      </div>
    </div>
  )
}

export default Colors
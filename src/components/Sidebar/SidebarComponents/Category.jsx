import CatInput from "./Input/CarInput"

function Category() {
    return (
        <div className="category radio_selected">
            <h1 className="category_title">Categories</h1><br />
            <div className="radio_container">
                <CatInput value='' title='All'  name='cat'/>
                <CatInput value='sneakers' title='Sneakers' name='cat'/>
                <CatInput value='flats' title='Flats' name='cat'/>
                <CatInput value='sandals' title='Sandals' name='cat'/>
                <CatInput value='heels' title='Heels' name='cat'/>
            </div>
        </div>
    )
}

export default Category
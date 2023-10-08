import Card from './Card/Card'
import './Products.css'
import {useSelector} from 'react-redux'
function Products() {
const dataresult = useSelector(state=>state.shopRedux.dataresult)
  return (


    <div className='products flex_column'>
      <h1>Our products</h1><br></br>
      <div className='card_items flex flex_wrap'>
      {dataresult.map((products)=>(
        <Card key={Math.random()}
              img={products.img}
              title={products.title}
              star={products.star}
              reviews={products.reviews}
              prevPrice={products.prevPrice}
              newPrice={products.newPrice}
        />
      ))}
      </div>
    </div>
  )
}

export default Products


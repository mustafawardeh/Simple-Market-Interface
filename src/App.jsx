/* eslint-disable no-unused-vars */
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Products from './components/Products/Products'
import Recommended from './components/Recommended/Recommended'
import Sidebar from './components/Sidebar/Sidebar'
import {  useSelector,useDispatch } from 'react-redux'
import data from './db/data'
import { Setdataresult } from './redux/Reducers/ShopReducer/ShopReducer'
import { useEffect } from 'react'

function App() {

  const query = useSelector(state=>state.shopRedux.query);

  const selectedrecommended = useSelector(state => state.shopRedux.selectedrecommended);
  const selectedcategory = useSelector(state => state.shopRedux.selectedcategory);
  const selectedprice = useSelector(state => state.shopRedux.selectedprice);
  const selectedcolor = useSelector(state => state.shopRedux.selectedcolor);
  // const dataresult = useSelector(state => state.shopRedux.dataresult);

  const dispatch= useDispatch();

  const filterData = (query, selectedrecommended, selectedcategory, selectedprice, selectedcolor) => {
    let filteredProducts = data; // Assuming 'data' is your initial product data
  
    if (query) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.title.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    if (selectedrecommended) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.company === selectedrecommended
      );
    }
  
    if (selectedcategory) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.category === selectedcategory
      );
    }
  
    if (selectedprice) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.newPrice === selectedprice
      );
    }
  
    if (selectedcolor) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.color === selectedcolor
      );
    }
  
    dispatch(Setdataresult(filteredProducts));
  };
  

  // filterData(query,selectedrecommended, selectedcategory, selectedprice, selectedcolor)
  useEffect(() => {
    console.log('compane : '+selectedrecommended)
    filterData(query, selectedrecommended, selectedcategory, selectedprice, selectedcolor);
  }, [query, selectedrecommended, selectedcategory, selectedprice, selectedcolor]);

  return (
    <>
      <div className='shop_container flex_column'>
        <div className="header">
          <Navigation />
        </div>
        <div className='body flex'>
          <div className='side'>
            <Sidebar />
          </div>
          <div className='main flex_column'>
            <Recommended />
            <Products/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

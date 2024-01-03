import React, { useRef, useState } from 'react'
import watchdata from '../../dummdata.js/data';

const Productcard=()=>{
    const [productlist, setproductlist] = useState(watchdata);
    const searchRef=useRef(null);
    const priceRef=useRef(null);

    const brand=['noise','boat','fire-bolt','oneplus'];

    const [selBrand, setselbrand] = useState([]);


    const searchProduct=()  =>{
        const filterData =watchdata.filter((watch) =>{return watch.brand.toLowerCase().includes(searchRef.current.value.toLowerCase() )

        });
        setproductlist(filterData);
    }

    const filterPrice= (e)  =>{
        console,log(e.target.value);
        const filterData=watchdata.filter((watch ) =>{return watch.price <= parseInt(e.target.value)});
        setproductlist(filterData);
    }



  return (
    
    <div>
    <header className='bg-dark text-white'>
        <div className='container py-5'>
            <h1 className='text-center'>Search Laptop</h1>
            <div className='input-group'>
                <input type="text" className='form-control' ref={searchRef} />
                <button onClick={searchProduct} className='btn btn-primary mx-2 '>Search</button>
            </div>
            
        </div>
    </header>

        <div className='container-fluid'>;
            <div className='row'>;
                <div className='col-md-3'>;
                    <div className='card'>;
                        <div className='card-body'>;
                            <label >Max price</label>
                            <input type="range" step={500} min={500} max={5000} onchange={filterPrice} className='form-range' />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    
    
        <div className='container'>
            
         <div className='row gy-4   '>
        {productlist.map((watch) => {
            return( <div className='col-md-4'>{watch.brand}
            <div className='card'>
                <img src={watch.image} alt="" />
                <div>
                    <h5>{watch.brand}</h5>
                    <h4>{watch.modle}</h4>
                   <p>{watch.rating} Stars From {watch.review}</p>
                   <button className='btn btn-primary  btn-sm float-end mx-3 '>Buy Now</button>
                    <h4 className='fw-bold'>Rs.{watch.price}</h4>
                   
                </div>

            </div>
            </div>
            )
        })}
       
    </div>
    </div>
    </div>
  )
}

export default Productcard

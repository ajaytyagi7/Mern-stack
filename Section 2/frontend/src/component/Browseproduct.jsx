import React, { useRef, useState } from 'react'
import laptopdata from '../../dummdata.js/dummydata'

const Browseproduct = () => {
    const [productlist, setproductlist] = useState(laptopdata);
    const searchRef = useRef(null);
    const priceref = useRef(null);

    const bradns=['HP','Lenovo','Asus','Dell','MSI','Samsung'];

    const [selbrands, setSelbrand] = useState([]);





    const searchProduct = () => {
        const filterData = laptopdata.filter((laptop) => {
            return laptop.brand.toLowerCase().includes(searchRef.current.value.toLowerCase())
        });
        setproductlist(filterData)

    }

    const filterprice = (e) => {
        console.log(e.target.value);
        const filterData = laptopdata.filter((laptop) => { return laptop.price <= parseInt(e.target.value) });
        setproductlist(filterData);

    }

    const selectBrand= (e,brand)  =>{
        console.log(e.target.checked);
        if(selbrands.includes(brand)){
            const filteredBrands= selbrands.filter((b)  => {return b!==brand});
            if(filteredBrands.length===0){
                setproductlist(laptopdata);
            }else{
            const filterData = laptopdata.filter((laptop) => { return filteredBrands.includes(laptop.brand) });
        setproductlist(filterData);
            }

            setSelbrand (filteredBrands);
            console.log(filteredBrands);
        }else{
            const filteredBrands=[...selbrands,brand];
            const filterData = laptopdata.filter((laptop) => { return filteredBrands.includes(laptop.brand) });
        setproductlist(filterData);

            setSelbrand([...selbrands,brand])
            console.log([...selbrands,brand])
        }
    }



    return (
        <div>
            <header className='bg-dark text-white'>
                <div className='container py-5'>
                    <h1 className='text-center'>Search Laptop</h1>
                    <div className='input-group'>
                        <input type="text" className='form-control' ref={searchRef} />
                        <button onClick={searchProduct} className='btn btn-primary'>Search</button>
                    </div>
                    
                </div>
            </header>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <label >Max Price</label>
                                <input type="range" step={5000} min={10000} max={100000} className='form-range' onChange={filterprice} />

                                <hr className='my-3' />
                                <label >Select Brand</label>
                                {
                                    bradns.map((b)  =>{
                                    return <div>
                                        <input type="checkbox"  checked={ selbrands.includes(b)} onChange={(e)  => {selectBrand(e,b)}}/>
                                        <label >{b}</label>

                
                                    </div>
                                    })
                                 }

                            </div>

                        </div>

                    </div>

                    <div className='col-md-9'>

                        <div className='row gy-4'>
                            {productlist.map((laptop) => {
                                return (<div className='col-md-4'>{laptop.brand}
                                    <div className='card'>
                                        <img src={laptop.image} alt="" />
                                        <div>
                                            <h5>{laptop.brand}</h5>
                                            <h4>{laptop.modle}</h4>
                                            <p>{laptop.rating} Stars From {laptop.review}</p>
                                            <button className='btn btn-primary  btn-sm float-end mx-3 '>Buy Now</button>
                                            <h4 className='fw-bold'>Rs.{laptop.price}</h4>

                                        </div>

                                    </div>
                                </div>)
                            })}

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Browseproduct
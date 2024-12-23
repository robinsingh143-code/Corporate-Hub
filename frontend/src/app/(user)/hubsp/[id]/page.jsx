'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

const Hubsp = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        const res = await fetch("http://localhost:5000/hubp/getbyid/" + id);
        console.log(res.status);

        const data = await res.json();
        setProduct(data);
        console.log(data)
    };
    useEffect(() => {
        fetchProduct();
      }, [])


     
    

    return (



        <div>
         <div>
            <div className='pt-14'>
                    <p>{product.title}</p>
               </div>
        
            <div className='pt-14'>
                    <p>{product.description}</p>
               </div>

               <div>
                <img className='w-[350px] h-[350px]' src={product.imgurl} alt="" />
               </div>

               <div className='pt-14'>
                    <p>{product.category}</p>
               </div>

               </div>


                  {/* practical  */}







            
        </div>
    );
};

export default Hubsp;

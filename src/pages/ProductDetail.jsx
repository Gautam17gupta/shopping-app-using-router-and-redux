import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchProductById } from "../assets/redux/productsSlice";
export default function ProductDetail(){
    const {id}=useParams();
    const dispatch=useDispatch();
    const product=useSelector((state)=> state.products.product);
    const status=useSelector((state)=> state.products.status);

    console.log('this is product detail')

    useEffect(() => {
        dispatch(fetchProductById(id));
      }, [dispatch, id]);
      
      if (status === 'loading') return <p>Loading...</p>;
      if (status === 'failed') return <p>Failed to load product.</p>; 
      
        return (
            <div className="will-change-auto " >
              {product && (
                <div>
          
                  <div className="flex gap-7">

                  <div><img src={product.image} alt={product.title} className="w-[70%] h-[90%] shadow-2xl"/></div>
                  
                  <div className="w-[40%] flex flex-col gap-7">
                    <div className="text-2xl">{product.title}</div>
                    <div>{product.description}</div>
                    <div className="text-xl">Ratings {product.rating.rate} by {product.rating.count} People</div>
                    <div className="text-4xl text-yellow-600">${product.price}</div>
                    </div>

                  </div>
      
                </div>
              )}
            </div>
          )

        };
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
export default function Home(){
    const products= useSelector((state)=>state.products.products);
    console.log('we are in home')

    return(
        <div>
            
            <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
                {products.map((product)=>{ 
                    console.log(product)
                    return(

                    <div key={product.id}>

                      <Link to={`/product/${product.id}`}>
                        <div className='w-[250px] h-[330px] flex flex-col items-center flex-wrap shadow-xl gap-4 pt-4' >
                            <div>
                            <img src={product.image} className='w-[180px] h-[150px]'/>
                            </div>

                            <div>
                                <p>{product.title}</p>
                                <p className='text-blue-800 text-lg'>${product.price}</p>
                            </div>
                          
                        </div>
                      </Link>

                    </div>
                )})}
            </div>
        </div>
    )
}
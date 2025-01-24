import React from "react"
import { FaShoppingCart } from "react-icons/fa";


const ProductCardGrid = () => {
   const ProductImages = [
    "/images/tint.jpeg",
    "/images/liquid highlighter.jpeg",
    "/images/eyeliner.jpeg",
    "/images/mascara.jpeg",
    "/images/lip pencilss.jpeg",
    "/images/setting spray.jpeg",

   ];
   return(
    <div 
    className="relative text-center p-10">
        <div className="absolute insert-0"
        style={{
            backgroundImage:`url('/images/background makeup.jpeg' )` ,
            backgroundSize: `cover`,
            backgroundPosition:`center`,
            zIndex: 0,
            opacity: 0.1,
        }}/>
            <h1 className='font-bold text-4xl mb-4 text-slate-400 z-10 relative'>Most Popular Products</h1>
            <h2 className="text-3xl text-slate-400 z-10 relative"> Order Now..! </h2>


            <section
      id="Projects"
      className="w-full mx-auto grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
    >
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="w-72 bg-white shadow-md rounded-lg duration-500 hover:scale-110 hover:shadow-xl z-10 relative"
        >
          <a href="#">
            <img
              src={ProductImages[index]}
              alt={`Product ${index + 1}`}
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-slate-500 mr-3 uppercase text-xs">
                Category
              </span>
              <p className="text-lg font-bold text-red-700 truncate block capitalize">
                Product Name {index + 1}
                
              </p>
            </div>
          </a>


          

          <div className="flex items-center px-4">
            <p className="text-lg font-semibold text-black my-3">$300</p>
            <del className="ml-3 text-sm text-gray-500">$350</del>
            

            <div className="ml-auto">
              <FaShoppingCart className="w-5 h-5 text-emerald-600 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </section>
    

        </div>
    
   )
}

export default ProductCardGrid;
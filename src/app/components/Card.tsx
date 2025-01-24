import React from "react";

const floatingImagesConstentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-amber-500">
          {" "}
          Flawless Water Proof Make-up
        </h2>
        <p className="text-white mb:4 ">
          Discover premium makeup products designed to enhance your beauty and
          confidence. From luxurious lipsticks to radiant foundations, our
          collection delivers flawless, long-lasting results for every occasion.
          Redefine beauty with elegance and style today!
        </p>
        <br />
        <button className=" bg-amber-500 text-white px-4 py-2  rounded hover:bg-white transition duration-300">
          {" "}
          Order Now
        </button>
        <h3 className="4-xl font-semibold mt-6 mb-2 text-center text-amber-500">
            {" "}
          Coming Soon Our Newly Productive Saints Brand Launches{" "}
        </h3>
        <ul className="1-xl font-semibold mt-6 mb-2 text-center text-white"> 
             
             <li> <strong> Skin Friendly  : </strong>
                Our makeup is dermatologically tested and skin-friendly.</li>
             <br />
             <li> <strong> Long Lasting : </strong>
             Long-lasting wear with rich pigments and smooth application.</li>
             <br />
             <li>   <strong> Quality : </strong>
             Made with non-toxic, high-quality ingredients for all skin types.</li>
             <br />
             <li> <strong> Priorities  : </strong>
                Prioritizing your beauty, safety, and confidence.</li>
             <br />
             <li> <strong> Guarantee  : </strong>
             Flawless results, every time you apply.</li>
             <br />
        </ul> 
        
      </div>
        
<div className="md:w-1/2 mt-6 md:mt-0">
<img src="/images/makeup girl.jpg"
alt="Cosmetic"
className="w-full  h-auto  rounded-lg shadow-lg translate-transform duration-500 ease-in-out transform hover:scale-105 mr-7"

 />
 </div>



    </section>
  );
};
export default floatingImagesConstentBlock;

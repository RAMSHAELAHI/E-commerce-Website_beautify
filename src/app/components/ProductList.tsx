import React from "react";

const Products = [
  {
    id: 1,
    title: "Face Powder",
    category: "Fixing",
    price: "500.00",
    imgUrl: "/images/face powder.png",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Eye Shadows",
    category: "Fixing",
    price: "600.00",
    imgUrl: "/images/eyeshadow.png.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 3,
    title: "Flawless Foundation",
    category: "Fixing",
    price: "900.00",
    imgUrl: "/images/flawless foundation.jpeg",
    bgColor: "bg-amber-500",
  },
  {
    id: 4,
    title: "Matt Blushes",
    category: "Fixing",
    price: "750.00",
    imgUrl: "/images/blush.png.jpeg",
    bgColor: "bg-amber-500",
  },
  {
    id: 5,
    title: "Nude Lip Sticks",
    category: "Fixing",
    price: "350.00",
    imgUrl: "/images/lipsticks.jpeg",
    bgColor: "bg-amber-500",
  },
  {
    id: 6,
    title: "Permanent Nail Paints",
    category: "Fixing",
    price: "200.00",
    imgUrl: "/images/nailpaints.jpeg",
    bgColor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="p-1 flex flex-wrap items-center justify-center mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`flex shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg shadow-lg group max-w-sm`}
        >
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="152"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              height="152"
              width="152"
              rx="8"
              transform="rotate(-45 0 107.45)"
              fill="white"
            />
          </svg>

          <div className="relative w-40 h-40 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
  className="relative w-32 h-32 object-cover
  .relative.pt-20.px-20 {
  display: flex;
  align-items: center;
  justify-content: center;
}

  "
  src={product.imgUrl}
  alt={product.title}
  
/>



          </div>

          <div className="relative text-white px-6 pt-6 mt-6">
            <span className="block opacity-75 mb-1">{product.category}</span>
            <div className="flex justify-between items-center">
              <span className="block font-semibold text-xl">
                {product.title}
              </span>
              <span className="block bg-white rounded-full text-amber-500 text-xs font-bold px-3 py-2 leading-none">
                PKR {product.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

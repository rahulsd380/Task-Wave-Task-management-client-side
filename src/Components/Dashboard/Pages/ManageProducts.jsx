import Header from "./Header";
import { FaStar, FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import useAllProducts from "../../../Hooks/useAllProducts";
import { IoIosArrowDown } from "react-icons/io";

const ManageProducts = () => {
    const [allProducts] = useAllProducts();
  return (
    <div>
      <Header></Header>
      <div>
        <div className="flex gap-10 mb-7">
            <button className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 text-[#535455] font-semibold flex items-center gap-2">Newest <IoIosArrowDown></IoIosArrowDown></button>
            <button className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 text-[#535455] font-semibold flex items-center gap-2">Oldest <IoIosArrowDown></IoIosArrowDown></button>

            <details className="dropdown">
  <summary className="m-1 p-2 cursor-pointer bg-[#F6F7F7] rounded-md border border-[#E6E7E8] flex items-center gap-2 text-[#535455] font-semibold">Price <IoIosArrowDown></IoIosArrowDown></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 0 - 25</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 25 - 50</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 50 - 100</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 100 - 125</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 125 - 150</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 150 - 200</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 200 - 250</a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>$ 250 - 300</a></li>
  </ul>
</details>

            <details className="dropdown">
  <summary className="m-1 p-2 cursor-pointer bg-[#F6F7F7] rounded-md border border-[#E6E7E8] flex items-center gap-2 text-[#535455] font-semibold">Category <IoIosArrowDown></IoIosArrowDown></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>

            <details className="dropdown">
  <summary className="m-1 p-2 cursor-pointer bg-[#F6F7F7] rounded-md border border-[#E6E7E8] flex items-center gap-2 text-[#535455] font-semibold">Status <IoIosArrowDown></IoIosArrowDown></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a className="text-green-600">In Stock</a></li>
    <li><a className="text-rose-600">Stock out</a></li>
  </ul>
</details>

            <details className="dropdown">
  <summary className="m-1 p-2 cursor-pointer bg-[#F6F7F7] rounded-md border border-[#E6E7E8] flex items-center gap-2 text-[#535455] font-semibold">Rating <IoIosArrowDown></IoIosArrowDown></summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(5)</span>
                </p></a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(4)</span>
                </p></a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(3)</span>
                </p></a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(2)</span>
                </p></a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(1)</span>
                </p></a></li>
    <li className="bg-gray-100 mb-2 rounded-md"><a>
        <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <FaStar></FaStar> <span>(0)</span>
                </p></a></li>
  </ul>
</details>
        </div>
        <div className="grid grid-cols-2 gap-10">
            {
                allProducts.map(product => <div key={product._id}>
<div className="bg-[#F1F1F2] p-3 rounded-md flex items-center gap-5">
            <div className="bg-[#F6F7F7] rounded-md border border-[#E6E7E8] p-2 flex justify-center items-center mb-4 transform hover:scale-105 duration-500 ease-in-out relative">
              <img className="w-80 h-40" src={product.image} alt="" />

              <div className="bg-[#e4e4e6] p-1 absolute top-0 left-0 rounded-br-md">
                <p>{product.price}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-1 text-[#535455]">
                {product.title}
                </h1>
                <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className=""><RxHamburgerMenu className="text-xl"></RxHamburgerMenu></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
    <li className="bg-gray-100 text-rose-600 mb-2 rounded-md"><a>Remove</a></li>
    <li className="bg-gray-100 rounded-md"><a>Send Notice</a></li>
  </ul>
</div>

                
              </div>

              <div className="flex justify-between items-center mb-1">
                <p className="flex items-center gap-2 text-sm text-[#6D6E70]">
                  <FaUser></FaUser> {product.sellerName}
                </p>
                <p className="flex items-center gap-2 text-sm text-[#6D6E70]">
                  <MdOutlineDateRange></MdOutlineDateRange> {product.date}
                </p>
              </div>

              <div className="flex justify-between items-center">
                <p className="flex gap-3 text-base items-center text-yellow-500">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar> <span>({product.reviews})</span>
                </p>
                <div className="flex items-center gap-3">
                  {/* <p className="text-xs font-semibold text-rose-600 px-2 py-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">$299</p> */}
                  <p className="text-xs text-green-600 p-1 rounded-md bg-[#F6F7F7] border border-[#E6E7E8]">
                  {product.status}
                  </p>
                </div>
              </div>

              <p className="mb-2 text-[#6D6E70]">
              {product.description}
              </p>
              <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center">
                View Details
              </button>
            </div>
          </div>
                </div>)
            }
          
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;

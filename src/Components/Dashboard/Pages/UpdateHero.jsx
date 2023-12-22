import toast from "react-hot-toast";


const UpdateHero = () => {

  const handleAddBanner = (e) => {
    e.preventDefault();
    const subtitle = e.target.subtitle.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const currentPrice = e.target.currentPrice.value;
    const image = e.target.image.value;

    const allData = {subtitle, title, description,image, currentPrice};
    console.log(allData);

    const toastId = toast.loading("Adding...")
    fetch('https://task-management-server-navy.vercel.app/heroSection', {
        method: "POST",
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
        if(data.insertedId){
            toast.success('Added Successfully.', { id: toastId})
            }
    })
}


    return (
        <div>
            <div>
            <div className="px-3 pb-7 flex justify-center">
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center" onClick={() => document.getElementById('my_modal_1').showModal()}>Add New Banner</button>
<dialog id='my_modal_1' className="modal">
  <div className="modal-box bg-gray-200">
    <h3 className="font-bold text-lg text-gray-600 mb-6">Update Hero Section Details</h3>
   <form onSubmit={handleAddBanner}>
    <div className='grid grid-cols-1 gap-5'>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className=" border border-gray-500 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='subtitle'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Subtitle
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='title'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Title
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='currentPrice'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Price
          </label>
        </div>
    <div className="relative h-11 w-full">
          <input required
            type="text"
            className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
            placeholder=" "
            name='image'
          />
          <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Image URL
          </label>
        </div>
    </div>

      <div className="relative h-32 w-full mt-7">
        <input required
          type="text"
          className="bg-gray-300 peer h-full w-full rounded-md bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 focus:border-2 focus:border-rose-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 text-gray-600"
          placeholder=" "
          name='description'
        />
        <label className="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-rose-600 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-rose-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-rose-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-rose-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Description
        </label>
      </div>
       <div className='flex flex-row-reverse items-center gap-9'>
       <button className="text-gray-200 font-semibold px-4 py-2 bg-gradient-to-r from-red-500 to-red-800 rounded-md w-full text-center mt-5">Save Changes</button>

<div className="modal-action">
<form method="dialog" className='flex gap-10 w-full'>
{/* if there is a button in form, it will close the modal */}
<button className="text-gray-500 border border-gray-600 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
</form>
</div>
       </div>
   </form>

    <div className="modal-action hidden">
      <form method="dialog" className='flex gap-10 w-full'>
        {/* if there is a button in form, it will close the modal */}
        <button className="text-gray-500 font-semibold px-4 py-2 rounded-md w-full text-center">Cancel</button>
      </form>
    </div>

  </div>
</dialog>
                         </div>
            </div>
        </div>
    );
};

export default UpdateHero;


const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto py-10">
                {/* Banner */}
      <div className="w-full rounded-3xl">
        <div className="relative w-full rounded-3xl">
          <img
            src="https://i.ibb.co/K5KQ61x/glenn-carstens-peters-RLw-UC03-Gwc-unsplash.jpg"
            className="rounded-3xl h-72 w-full"
          />

          <div className="rounded-3xl absolute top-0 bottom-0 flex items-center px-10 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold textwhite text-white">
              Elevate Your Efficiency: Revolutionize Task Management with Our Intuitive Platform!
              </h1>
              <p className="text-white">
              Elevate your efficiency with our intuitive platform. Streamline tasks effortlessly, boosting productivity. Join us in revolutionizing your workflow for a seamless and empowered work experience.
              </p>
              <button className="bg-teal-600 hover:bg-teal-700 transition duration-300 p-2 rounded-md text-white">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;
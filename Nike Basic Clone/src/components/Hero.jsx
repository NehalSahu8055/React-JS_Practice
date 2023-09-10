export default function Hero() {
  return (
    <main className="flex justify-center items-center min-h-screen pb-10 pt-[4.5rem] max-lg:pt-[3rem]">
      <div className="hero flex max-w-[70.4rem] max-lg:flex-col-reverse">
        <div className="description flex flex-col max-lg:text-center">
          <h1 className="about text-[5rem] max-lg:text-[3.5rem] max-lg:leading-none leading-[5rem] font-bold ">
            YOUR FEET DESERVE THE BEST
          </h1>
          <div className="detail text-[#5A5959] max-lg:mr-0 mr-[10rem] py-7">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </div>
          <div className="btns flex gap-10 font-[500] max-lg:justify-center">
            <a
              className="shop-now-btn px-4 w-fit py-1.5 bg-red-600 rounded-sm shadow-sm hover:opacity-90 text-white"
              href="#"
            >
              Shop Now
            </a>
            <a
              className="category-btn px-4 w-fit py-1.5 border-2 border-[#272727] text-[#5A5959] rounded-sm shadow-sm hover:opacity-90"
              href="#"
            >
              Category
            </a>
          </div>
          <div className="avail-on text-[#5A5959] pt-9 flex items-center max-lg:justify-center">
            <p>Also Available On</p>
            <div className="partner-logo flex items-center gap-4 pl-4">
              <a href="#">
                {" "}
                <img
                  src="images/flipkart.png"
                  width="32"
                  height="32"
                  alt="Flipkart Logo"
                />
              </a>
              <a href="#">
                <img
                  src="images/amazon.png"
                  width="32"
                  height="32"
                  alt="Amazon Logo"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          className="mx-auto"
          src="images/hero-image.png"
          width="530"
          height="487"
          alt="Nike Red Shoe Illustration"
        />
      </div>
    </main>
  );
}

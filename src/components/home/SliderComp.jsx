import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex! items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              quam voluptatibus. Eligendi sapiente porro facilis aliquam
              repellendus nihil reiciendis quisquam!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img src="../../../public/shoes.webp" alt="nike" />
        </div>
        <div className="flex! items-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">
              En Kaliteli Ayakkabılar Burada
            </div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              quam voluptatibus. Eligendi sapiente porro facilis aliquam
              repellendus nihil reiciendis quisquam!
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img src="../../../public/shoes1.webp" alt="nike" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

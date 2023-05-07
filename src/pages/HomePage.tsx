import { Button } from "components/button";
import { Link } from "react-router-dom";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const listOffers = [
    {
      url: "/images/watch-offer.png",
      name: "Smart watches",
    },
    {
      url: "/images/laptop-offer.png",
      name: "Laptops",
    },
    {
      url: "/images/tablet-big.png",
      name: "Tablets",
    },
    {
      url: "/images/headphone-offer.png",
      name: "Headphones",
    },
    {
      url: "/images/phone-offer.png",
      name: "Smartphones",
    },
  ];
  const listGadgets = [
    {
      url: "/images/watch-offer.png",
      name: "Smart watches",
      price: "USD 19",
    },
    {
      url: "/images/camera-offer.png",
      name: "Cameras",
      price: "USD 89",
    },
    {
      url: "/images/headphone-white.png",
      name: "Headphones",
      price: "USD 10",
    },
    {
      url: "/images/phone-offer.png",
      name: "Smartphones",
      price: "USD 90",
    },
    {
      url: "/images/headphone-offer.png",
      name: "Gaming set",
      price: "USD 35",
    },
    {
      url: "/images/laptop-offer.png",
      name: "Laptops & PC",
      price: "USD 340",
    },
    {
      url: "/images/tablet-black.png",
      name: "Tablets",
      price: "USD 19",
    },
    {
      url: "/images/phone-offer.png",
      name: "Smartphones",
      price: "USD 90",
    },
  ];

  const listService = [
    {
      image: "/images/service1-bg.png",
      icon: "/images/search-icon.svg",
      description: "Source from Industry Hubs",
    },
    {
      image: "/images/service2-bg.png",
      icon: "/images/archive-icon.svg",
      description: "Customize Your Products",
    },
    {
      image: "/images/service3-bg.png",
      icon: "/images/send-icon.svg",
      description: "Fast, reliable shipping by ocean or air",
    },
    {
      image: "/images/service4-bg.png",
      icon: "/images/security-icon.svg",
      description: "Product monitoring and inspection",
    },
  ];

  const listRegion = [
    {
      image: "/images/uae-flag.png",
      name: "Arabic Emirates",
      link: "shopname.ae",
    },
    {
      image: "/images/australia-flag.png",
      name: "Australia",
      link: "shopname.ae",
    },
    {
      image: "/images/america-flag.png",
      name: "United States",
      link: "shopname.ae",
    },
    {
      image: "/images/russia-flag.png",
      name: "Russia",
      link: "shopname.ru",
    },
    {
      image: "/images/italy-flag.png",
      name: "Italy",
      link: "shopname.it",
    },
    {
      image: "/images/denmark-flag.png",
      name: "Denmark",
      link: "denmark.com.dk",
    },
    {
      image: "/images/france-flag.png",
      name: "France",
      link: "shopname.com.fr",
    },
    {
      image: "/images/uae-flag.png",
      name: "Arabic Emirates",
      link: "shopname.ae",
    },
    {
      image: "/images/china-flag.png",
      name: "China",
      link: "shopname.ae",
    },
    {
      image: "/images/england-flag.png",
      name: "Great Britain",
      link: "shopname.co.uk",
    },
  ];

  return (
    <div className="bg-gray1 ">
      <div className="max-w-[1180px] mx-auto pt-5 max-lg:px-5">
        <section className="bg-white border border-gray3 rounded-md xl:block hidden">
          <div className="flex p-4 justify-between gap-5">
            <div className="min-w-[250px] h-[360px]">
              <p className="p-2 bg-[#E5F1FF] rounded-md">Automobiles</p>
              <p className="p-2 text-gray6">Clothes and wear</p>
              <p className="p-2 text-gray6">Home interiors</p>
              <p className="p-2 text-gray6">Computer and tech</p>
              <p className="p-2 text-gray6">Tools, equipments</p>
              <p className="p-2 text-gray6">Sports and outdoor</p>
              <p className="p-2 text-gray6">Animal and pets</p>
              <p className="p-2 text-gray6">Machinery tools</p>
              <p className="p-2 text-gray6">More category</p>
            </div>
            <div className="relative h-[360px]">
              <img className="object-cover" src="/images/hero-bg.png" alt="" />
              <div className="absolute top-14 left-[45px]">
                <div className="flex flex-col text-[28px] leading-[34px] text-dark">
                  <p>Latest trending</p>
                  <strong className="text-[32px] text-dark leading-10">
                    Electronic items
                  </strong>
                  <Button
                    className="max-w-[120px] mt-[18px] !text-dark shadow-sm leading-5 !font-normal"
                    kind="secondary"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[10px] max-w-[200px] ">
              <div className="p-3 bg-[#E3F0FF] rounded-md">
                <div className="flex gap-2 items-center max-h-[150px]">
                  <img src="/images/avatar.png" alt="" />
                  <p>
                    Hi, user <br /> let’s get stated
                  </p>
                </div>
                <a
                  href="/products"
                  className="flex justify-center items-center bg-primaryGradient text-white min-h-[30px] text-sm mt-[10px] rounded-md font-medium"
                >
                  Join now
                </a>
                <a
                  href="/login"
                  className="flex justify-center items-center bg-white text-primary min-h-[30px] text-sm mt-2 rounded-md font-medium"
                >
                  Login
                </a>
              </div>
              <div className="h-[95px] p-3 bg-[#F38332] text-white rounded-md">
                <p className="">Get US $10 off with a new supplier</p>
              </div>
              <div className="h-[95px] p-3 pr-10 bg-[#55BDC3] text-white rounded-md">
                <p className="">Send quotes with supplier preferences</p>
              </div>
            </div>
          </div>
        </section>
        <div className="xl:hidden relative h-[360px]">
          <img
            className="object-cover w-full h-full"
            src="/images/hero-bg.png"
            alt=""
          />
          <div className="absolute top-14 left-[45px]">
            <div className="flex flex-col text-[28px] leading-[34px] text-dark">
              <p>Latest trending</p>
              <strong className="text-[32px] text-dark leading-10">
                Electronic items
              </strong>
              <Button
                className="max-w-[120px] mt-[18px] !text-dark shadow-sm leading-5 !font-normal"
                kind="secondary"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <section className="xl:flex hidden mt-[30px] bg-white border border-gray3 rounded-md">
          <div className="flex flex-col gap-4 p-5 mr-11">
            <div>
              <p className="text-dark font-semibold text-xl leading-7">
                Deals and offers
              </p>
              <p className="text-gray5">Hygiene equipments</p>
            </div>
            <div className="flex gap-1">
              <div className="flex flex-col justify-center items-center h-[50px] w-[45px]  text-white bg-[#606060] rounded-[4px]">
                <span className="font-bold leading-[19px]">04</span>
                <span className="text-xs leading-[15px]">Days</span>
              </div>
              <div className="flex flex-col justify-center items-center h-[50px] w-[45px]  text-white bg-[#606060] rounded-[4px]">
                <span className="font-bold leading-[19px]">13</span>
                <span className="text-xs leading-[15px]">Hour</span>
              </div>
              <div className="flex flex-col justify-center items-center h-[50px] w-[45px]  text-white bg-[#606060] rounded-[4px]">
                <span className="font-bold leading-[19px]">34</span>
                <span className="text-xs leading-[15px]">Min</span>
              </div>
              <div className="flex flex-col justify-center items-center h-[50px] w-[45px]  text-white bg-[#606060] rounded-[4px]">
                <span className="font-bold leading-[19px]">56</span>
                <span className="text-xs leading-[15px]">Sec</span>
              </div>
            </div>
          </div>
          {listOffers.map((item, index) => (
            <Link
              to={"/products"}
              key={index}
              className="flex items-center justify-center min-w-[180px] min-h-[235px] border-l border-l-[#E0E0E0]"
            >
              <div className="flex flex-col items-center">
                <img src={item.url} height={140} width={140} alt="" />
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </section>
        <section className="xl:flex hidden border border-gray3 border-r-0 border-b-0 rounded-md bg-white mt-5">
          <div className="relative border-b border-gray3 rounded-l-md">
            <img src="/images/electronics-bg.png" alt="" />
            <div className="absolute top-5 left-5">
              <p className="mb-4 max-w-[150px] text-xl font-semibold text-dark">
                Consumer electronics and gadgets
              </p>
              <Button to="/products" kind="secondary">
                Source now
              </Button>
            </div>
          </div>
          <div className="grid w-full grid-cols-4">
            {listGadgets.map((item, index) => (
              <div
                key={index}
                className="flex py-[10px] pl-3 border-b border-b-[#E0E0E0] border-r border-r-[#E0E0E0]"
              >
                <Link to={"/products"} className="w-full">
                  <div className="flex justify-between flex-1">
                    <div>
                      <p className="text-dark leading-5 mb-2">{item.name}</p>
                      <p className="text-gray5 text-[13px] leading-4">
                        From <br /> {item.price}
                      </p>
                    </div>
                    <img
                      className="max-w-[82px] max-h-[82px]"
                      src={item.url}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="xl:block hidden mt-5 relative bg-[#DFDFDF] rounded-md">
          <div className="bg-[linear-gradient(94.99deg,_#2C7CF1_7.19%,_rgba(0,_209,_255,_0.5)_89.49%)] rounded-md">
            <img className="opacity-20" src="/images/suppliers-bg.png" alt="" />
          </div>
          <div className="flex justify-between absolute top-0 right-0 left-0 bottom-0">
            <div className="flex flex-col gap-3 mt-10 ml-10">
              <h1 className="text-[32px] text-white leading-10 max-w-[440px] font-semibold">
                An easy way to send requests to all suppliers
              </h1>
              <p className="text-white max-w-[390px] ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="flex flex-col gap-5 p-5 bg-white mt-8 mr-8 mb-10 rounded-md">
              <h1 className="text-xl text-dark font-semibold">
                Send quote to suppliers
              </h1>
              <div className="px-3 py-2 border border-gray3 rounded-md w-[440px]">
                <span>What item you need?</span>
              </div>
              <textarea
                name=""
                id=""
                rows={3}
                className="outline-none px-3 py-2 border border-gray3 rounded-md w-[440px] resize-none"
                placeholder="Type more details"
              ></textarea>
              <div className="flex gap-2">
                <div className="px-3 py-2 border border-gray3 rounded-md w-[206px]">
                  <span>Quantity</span>
                </div>
                <div className="px-3 py-2 border border-gray3 rounded-md flex gap-10">
                  <span>Pcs</span>
                  <img src="/images/arrow-down.svg" alt="" />
                </div>
              </div>
              <Button kind="primary" className="max-w-[128px]">
                Send inquiry
              </Button>
            </div>
          </div>
        </section>
        <section className="mt-8 xl:block hidden ">
          <h1 className="xl:text-2xl text-lg font-semibold text-dark leading-6 mb-6">
            Our extra services
          </h1>
          <div className="flex gap-5">
            {listService.map((item, index) => (
              <div
                key={index}
                className="flex-1 rounded-md border border-[#E0E0E0]"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt=""
                    className="opacity-100 bg-dark rounded-t-md"
                  />
                  <div className="absolute right-5 bottom-0 translate-y-2/4 flex justify-center items-center bg-[#D1E7FF] border-2 border-white w-[55px] h-[55px] rounded-full">
                    <img src={item.icon} alt="" />
                  </div>
                </div>
                <p className="text-dark font-semibold px-5 py-4 leading-[22px] max-w-[220px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-[30px] mb-10 xl:block hidden">
          <h1 className="text-dark text-2xl leading-8 mb-6">
            Suppliers by region
          </h1>
          <div className="grid grid-cols-5 gap-[10px]">
            {listRegion.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <img src={item.image} alt="" className="mt-1" />
                <div>
                  <h2 className="text-dark leading-5">{item.name}</h2>
                  <p className="text-gray5 text-sm">{item.link}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

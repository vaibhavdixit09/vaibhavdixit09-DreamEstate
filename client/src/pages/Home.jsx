import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import { MdSell, MdBedroomParent, MdTrendingUp } from "react-icons/md";
import Footer from "../components/Footer";
export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div>
      <div className="relative">
        {/* top */}
        <div className="  left-20  absolute z-10 flex flex-col gap-6 pt-24  lg:px-3 max-w-[50vw]  text-white">
          <h1 className="text-gray-300 font-bold text-2xl lg:text-6xl">
            Discover Your <span className="text-red-500">Dream</span>
            <br />
            place with ease
          </h1>
          <div className="text-gray-400 text-xs sm:text-sm">
            Dream Estate is your premier destination for finding the perfect
            home. Whether you're looking for a cozy apartment, a family-friendly
            house, or a luxurious villa, we have a diverse range of properties
            to cater to your unique preferences.
          </div>
          <Link
            to={"/search"}
            className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
          >
            <button className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Let's get started...
            </button>
          </Link>
        </div>

        {/* swiper with black overlay */}
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div className="relative h-[500px]">
                  <div
                    style={{
                      background: `url(${listing.imageUrls[0]}) center no-repeat`,
                      backgroundSize: "cover",
                    }}
                    className="absolute inset-0 w-full h-full"
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* listing results for offer, sale and rent */}

      <div className="max-w-[90vw] mx-auto p-3 flex  flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <div className="flex text-2xl font-bold text-slate-600 justify-start items-center">
                <h2 className="">Trending places with offers &nbsp;</h2>{" "}
                <MdTrendingUp />
              </div>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <div className="flex text-2xl font-bold text-slate-600 justify-start items-center">
                <h2 className="">Recent places for rent &nbsp;</h2>{" "}
                <MdBedroomParent />
              </div>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3 ">
              <div className="flex text-2xl font-bold text-slate-600 justify-start items-center">
                <h2 className="">Recent places for sale &nbsp;</h2> <MdSell />
              </div>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

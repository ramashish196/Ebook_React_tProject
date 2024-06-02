import { Books } from "../bookData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopSellingbook = () => {
	return (
		<>
			<div className="mx-20 my-10">
				<h1 className="text-4xl text-center font-bold my-8 mb-5 font-serif">
					Top Selling Books
				</h1>
				<Swiper
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 2,
							spaceBetween: 1,
						},
						// when window width is >= 480px

						// when window width is >= 640px
						640: {
							slidesPerView: 4,
							spaceBetween: 1,
						},
						// when window width is >= 1024px
						1024: {
							slidesPerView: 6,
							spaceBetween: 1,
						},
					}}
					navigation={true}
				>
					{Books.map((books, i) => (
						<SwiperSlide key={i}>
							<div className="flex-col items-center px-10">
								<a href="">
									<img src={books.bookcover} alt="" className="w-20" />
								</a>
								<p className="font-semibold">
									₹ {books.price}{" "}
									<span className="line-through text-xs">{books.mrp}</span>{" "}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default TopSellingbook;

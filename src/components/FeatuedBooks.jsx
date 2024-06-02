import { Books } from "../bookData";
const FeatuedBooks = () => {
	return (
		<>
			<div className="mx-20 my-10">
				<h1 className="text-4xl text-center font-bold my-8 mb-5 font-serif">
					Featured Books
				</h1>
				<swiper-container slides-per-view="6" autoplay="true" enabled="true">
					{Books.map((books, i) => (
						<swiper-slide key={i}>
							<div className="flex-col items-center">
								<a href="">
									{" "}
									<img src={books.bookcover} alt={books.title} width="80px" />
								</a>
								<p className="font-semibold px-3"> ₹ {books.mrp} </p>
							</div>
						</swiper-slide>
					))}
				</swiper-container>
			</div>
		</>
	);
};

export default FeatuedBooks;

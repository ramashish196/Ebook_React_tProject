import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
	const [menu, setMenu] = useState(false);
	return (
		<nav className="p-4 mx-8 relative">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="md:text-3xl font-semibold cursor-pointer text-cyan-500">
						<span className="text-2xl md:text-xl ">E-book store</span>{" "}
					</h1>
				</div>
				<button onClick={() => setMenu(!menu)}>
					{menu ? (
						<AiOutlineClose className="md:hidden text-2xl text-cyan-400" />
					) : (
						<GiHamburgerMenu className="md:hidden text-2xl text-cyan-400" />
					)}
				</button>
				<div className="hidden md:block items-center space-x-4">
					<a href="" className="px-2 py-1 rounded border-2 text-lime-50">
						Login
					</a>
					<a href="" className="px-3 py-1 rounded border-2 text-lime-50">
						Create an account
					</a>
				</div>
			</div>
			{menu ? (
				<div className=" border-2 border-white rounded-md bg-gray-600 md:hidden absolute  z-20 h-[200px] w-[92%]">
					<div className="flex flex-col gap-5 justify-center mt-10 items-center space-x-4">
						<a href="" className="px-2 py-1 rounded border-2 text-lime-50">
							Login
						</a>
						<a href="" className="px-3 py-1 rounded border-2 text-lime-50">
							Create an account
						</a>
					</div>
				</div>
			) : null}
		</nav>
	);
};

export default Navbar;

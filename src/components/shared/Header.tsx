import { Link } from "react-router";

export const Header = () => {
	const appTitle = "ShadeMatch Pro";
	return (
		<nav className="flex items-center justify-between bg-gray-400 py-3 px-3">
			<div>
				<Link className="text-lg font-medium hover:text-gray-600" to={"/"}>
					{appTitle}
				</Link>
			</div>
			<ul className="flex items-center justify-between space-x-5 mr-3 ">
				<li>
					<Link className="text-lg font-medium hover:text-gray-600" to={"/"}>
						Shade Library
					</Link>
				</li>
				<li>
					<Link className="text-lg font-medium hover:text-gray-600" to={"/cases"}>
						My Cases
					</Link>
				</li>
			</ul>
		</nav>
	);
};

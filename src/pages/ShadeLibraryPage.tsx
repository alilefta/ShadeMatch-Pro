import { ShadeBlock } from "@/components/app/ShadeBlock";

export const ShadeLibraryPage = () => {
	return (
		<div>
			<h1>VITA Classical Shade Guide</h1>

			<div className="grid grid-cols-4 grid-rows-4 gap-2 bg-gray-400 rounded-lg p-4">
				<ShadeBlock color="green" />
				<ShadeBlock color="green" />
				<ShadeBlock color="green" />
				<ShadeBlock color="red" />
				<ShadeBlock color="#D2A982" />
				<ShadeBlock color="red" />
				<ShadeBlock color="#E2D2B8" />
				<ShadeBlock color="red" />
				<ShadeBlock color="#D4BA94" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
				<ShadeBlock color="red" />
			</div>
		</div>
	);
};

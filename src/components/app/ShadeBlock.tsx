interface ShadeBlockProps {
	color: string;
}

export const ShadeBlock = ({ color }: ShadeBlockProps) => {
	return (
		<div
			style={{
				backgroundColor: color,
			}}
			className={`w-6 h-6 md:w-20 md:h-20 xl:w-40 xl:h-40 mx-auto rounded-xl flex items-center justify-center`}
		>
			color: {color}
		</div>
	);
};

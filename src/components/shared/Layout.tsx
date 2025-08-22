import type { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-col w-full bg-gray-100 items-stretch justify-center">
			<Header />
			<main className="mt-10 px-3">{children}</main>
		</div>
	);
};

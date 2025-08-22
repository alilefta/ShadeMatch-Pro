import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/shared/Layout";
import { ShadeLibraryPage } from "./pages/ShadeLibraryPage";
import { CaseListPage } from "./pages/CaseListPage";
import { CaseDetailPage } from "./pages/CaseDetailPage";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Layout>
								<ShadeLibraryPage />
							</Layout>
						}
					/>
					<Route
						path="/cases"
						element={
							<Layout>
								<CaseListPage />
							</Layout>
						}
					/>

					<Route
						path="/cases:id"
						element={
							<Layout>
								<CaseDetailPage />
							</Layout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

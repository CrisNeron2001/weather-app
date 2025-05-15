import { BrowserRouter as Router } from "react-router-dom";
import { SideBar } from "./domain/components/layout/SideBar/SideBar";
import { ThemeProvider } from "./states/UseTheme";
import './App.css';
import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "./core/classes/class/ErrorBoundary/ErrorBoundary";
import { ContentWrapper } from "./components/ContentWrapper/ContentWrapper";
import { NavBar } from "./domain/components/layout/NavBar/NavBar";
import { Footer } from "./domain/components/layout/Footer/Footer";

const App: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 913) {
				setIsSidebarOpen(true);
			} else {
				setIsSidebarOpen(false);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
	
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

    return (
        <ThemeProvider>
            <ErrorBoundary>
				<Router>
					<div className="flex flex-col h-screen w-screen">
						<header>
							<div className="lg:hidden">
								<NavBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
							</div>
							<SideBar isOpen={isSidebarOpen} />
						</header>
						<main
							className={`flex flex-col flex-1 w-full justify-center transition-all duration-300 ${
								isSidebarOpen ? "ml-64" : "ml-0 lg:ml-64"
							} mt-14 lg:mt-0`}>
							<ContentWrapper />
						</main>
						<Footer />
					</div>
				</Router>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import { CoreCharts } from "../domain/components/charts/CoreCharts/CoreCharts";
import { CoreMap } from "../domain/components/charts/CoreMap/CoreMap";
import { ErrorCard } from "../domain/components/errors/CoreError/Card/ErrorCard";
import { Home } from "../domain/components/charts/Home/Home";

export const AppRoutes: React.FC = () => {
    return (
		<Routes>
			<Route path="/charts" element={<CoreCharts />} />
			<Route path="/map" element={<CoreMap />} />
			<Route path="/" element={<Home />} />
			<Route path="*" element={<ErrorCard errorStatus={404} />} />
		</Routes>
    );
}
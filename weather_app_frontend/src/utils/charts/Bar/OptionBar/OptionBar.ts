export const OptionBar = ({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		title: {
			display: true,
			text: "Distribución de humedad por ciudad",
			font: {
				size: 20,
				family: "Arial",
				weight: "bold" as const,
			},
		},
		legend: {
			display: false,
		},
	},
	options: {
		indexAxis: "y",
		elements: {
			bar: {
				borderWidth: 2,
			},
		},
	},
	scales: {
		y: {
			type: "linear" as "linear",
			display: true,
			position: 'left' as const,
		},
	},
});
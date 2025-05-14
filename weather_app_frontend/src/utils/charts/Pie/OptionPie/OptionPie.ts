export const OptionPie = {
	type: "pie" as const,
	maintainAspectRatio: false,
	responsive: true,
	plugins:{
		title: {
			display: true,
			text: "Porcentaje de condiciones climáticas por ciudad",
			font: {
				size: 20,
				family: "Arial" as const,
				weight: "bold" as const,
			},
		},
		legend: {
			display: true as const,
			position: "right" as const,
		},
	}
};
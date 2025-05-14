export const OptionLine = {
    responsive: true,
	maintainAspectRatio: false,
    interactions: {
        mode: 'index' as const,
        intersect: false
    },
    stacked: false,
    plugins: {
        title: {
            display: true,
            text: 'Distribución de temperatura y nivel humedad por ciudad',
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
    scales: {
        y: {
            type: "linear" as "linear",
            position: 'left' as const,
            display: true,
			title: {
				display: true,
				text: 'Temperatura (°C)',
				font: {
					size: 16,
					family: "Arial",
					weight: "bold" as const,
				},
			},
        },
        y1: {
            type: "linear" as "linear",
            display: true,
            position: 'right' as const,
			title: {
				display: true,
				text: 'Nivel de humedad (%)',
				font: {
					size: 16,
					family: "Arial",
					weight: "bold" as const,
				},
			},
        },
    }
}
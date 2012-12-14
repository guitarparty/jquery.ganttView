var ganttData = [
	{
		id: 1, name: "Feature 1", series: [
			{ name: "Planned", 
			  data: [
				{start: new Date(2010,00,01), end: new Date(2010,00,01), label: "Test label" }, 
				{start: new Date(2010,00,04), end: new Date(2010,00,04) }],
			  color: "#f0f0f0"
			},
			{ name: "Blaaaah", 
			  data: [
				{start: new Date(2010,00,01), end: new Date(2010,00,01), label: "Test label" }, 
				{start: new Date(2010,00,04), end: new Date(2010,00,04) }]			}			
		]
	}, 
	{
		id: 2, name: "Feature 2", series: [
			{ name: "Planned", data: [{start: new Date(2010,00,05), end: new Date(2010,00,5), label: "Morgunblaðið heilsíða, kostaði 30 milljónir"}] }
		]
	}
];
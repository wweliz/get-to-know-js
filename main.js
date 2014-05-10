var citydata = [
	
	{	
			name: "Berlin",		// city name
			rank: 1,			// rank based on city population
			popu: 3460725,		// population within city administrative boundaries
			dens: 3899,			// population density per sq km
			blnd: "Berlin",		// Bundesland ("state")
			id: "BER"
		},
	
	{
		name: "Hamburg",
		rank: 2,
		popu: 1786448,
		dens: 2366,
		blnd: "Hamburg",
		id: "HAM"
	},

	{
		name: "Munich",
		rank: 3,
		popu: 1353186,
		dens: 4355,
		blnd: "Baa",
		id: "MUC"
  },

	{
		name: "Cologne",
		rank: 4,
		popu: 1007119,
		dens: 2486,
		blnd: "North Rhine-Westphalia",
		id: "KLN"
	},
	
	{
			name: "Frankfurt",
			rank: 5,
			popu: 679664,
			dens: 2737,
			blnd: "Hesse",
			id: "FRA"
	}
]


console.log(citydata.map(function(city){ return city.name }))
	/* returns ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"] */

console.log(["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"].map(function(thecityof) {return "The city of " + thecityof;}))
	/* returns ["The city of Berlin", "The city of Hamburg", "The city of Munich", "The city of Cologne", "The city of Frankfurt"] */


console.log(["The city of Berlin", "The city of Hamburg", "The city of Munich", "The city of Cologne", "The city of Frankfurt"].map
	(function(popof) {return popof + " has a population of ";}))
	/* returns ["The city of Berlin has a population of ", "The city of Hamburg has a population of ", "The city of Munich has a population of ", 
	"The city of Cologne has a population of ", "The city of Frankfurt has a population of "] */

console.log(citydata.map(function(crank){ return crank.rank }))
	/* returns [1, 2, 3, 4, 5] */

console.log([1, 2, 3, 4, 5].map(function(ranknum){return rnum = "is ranked number " + ranknum; }))
	/* returns ["is ranked number 1", "is ranked number 2", "is ranked number 3", "is ranked number 4", "is ranked number 5"] */

console.log(citydata.map(function(popul){ return popul.popu }))
	/* returns [3460725, 1786448, 1353186, 1007119, 679664] */

var totalpop =[3460725, 1786448, 1353186, 1007119, 679664];

console.log(totalpop.reduce(function(a, b){return a+b;}))
	/* returns 8287142 */

var sumP = 8287142

function getavg (t, lgth) {
	return t / lgth
}

console.log(getavg (sumP, totalpop.length))
	/* returns 1657428.4 */

console.log(citydata.map(function(density){return density.dens}))
	/* returns [3899, 2366, 4355, 2486, 2737] */

var totaldens = [3899, 2366, 4355, 2486, 2737]

console.log(totaldens.reduce(function(a, b){return a+b;}))
/* returns */


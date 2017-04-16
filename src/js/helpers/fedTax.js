
import roundToDollarValues from '../helpers/roundToDollarValues';

const standardDeductions = {
	"single" : 6300,
	"mfj": 12600,
	"mfs": 6300,
	"hoh": 9300,
};

const brackets = {
	"single" : [
		{
			range: [0,10999],
			tax: function() { return 1183; },
		},
		{
			range: [11000,19999],
			tax: function() { return 2533; },
		},
		{
			range: [20000,34999],
			tax: function() { return 4783; },
		},
		{
			range: [35000,49999],
			tax: function() { return 8265; },
		},
		{
			range: [50000,64999],
			tax: function() { return 12015; },
		},
		{
			range: [6500,74999],
			tax: function() { return 14515; },
		},
		{
			range: [75000,89999],
			tax: function() { return 18265; },
		},
		{
			range: [90000,100000],
			tax: function() { return 21030; },
		},
		{
			range: [100000, 190150],
			tax: function(v) {
				return (v * 0.28) - 6963.25;
			},
		},
		{
			range: [190150, 413350],
			tax: function(v) {
				return roundToDollarValues((v * 0.33) - 16470.75);
			},
		},
		{
			range: [413350, 415050],
			tax: function(v) {
				return roundToDollarValues((v * 0.35) - 24737.75);
			},
		},
		{
			range: [415050],
			tax: function(v) {
				return roundToDollarValues((v * 0.396) - 43830.05);
			},
		},
	],
	// married filing jointly
	"mfj" : [
		{
			range: [0,10999],
			tax: function() { return 1098; },
		},
		{
			range: [11000,19999],
			tax: function() { return 2069; },
		},
		{
			range: [20000,34999],
			tax: function() { return 4319; },
		},
		{
			range: [35000,49999],
			tax: function() { return 6569; },
		},
		{
			range: [50000,64999],
			tax: function() { return 8819; },
		},
		{
			range: [6500,74999],
			tax: function() { return 10319; },
		},
		{
			range: [75000,89999],
			tax: function() { return 14036; },
		},
		{
			range: [90000,100000],
			tax: function() { return 16536; },
		},
		{
			range: [100000, 151900],
			tax: function(v) {
				return (v * 0.25) - 8457.50;
			},
		},
		{
			range: [151900, 231450.00],
			tax: function(v) {
				return roundToDollarValues((v * 0.28) - 13014.50);
			},
		},
		{
			range: [231450, 413350],
			tax: function(v) {
				return roundToDollarValues((v * 0.33) - 24587.00);
			},
		},
		{
			range: [413350, 466950.00],
			tax: function(v) {
				return roundToDollarValues((v * 0.35) - 32854.00);
			},
		},
		{
			range: [466950],
			tax: function(v) {
				return roundToDollarValues((v * 0.396) - 54,333.70);
			},
		},
	],
	// married filing sep.
	"mfs" : [
		{
			range: [0,10999],
			tax: function() { return 1183; },
		},
		{
			range: [11000,19999],
			tax: function() { return 2533; },
		},
		{
			range: [20000,34999],
			tax: function() { return 4783; },
		},
		{
			range: [35000,49999],
			tax: function() { return 8265; },
		},
		{
			range: [50000,64999],
			tax: function() { return 12015; },
		},
		{
			range: [6500,74999],
			tax: function() { return 14515; },
		},
		{
			range: [75000,89999],
			tax: function() { return 18686; },
		},
		{
			range: [90000,100000],
			tax: function() { return 21486; },
		},
		{
			range: [100000, 115725],
			tax: function(v) {
				return (v * 0.28) - 6507.25;
			},
		},
		{
			range: [115725, 206675],
			tax: function(v) {
				return roundToDollarValues((v * 0.33) - 12293.50);
			},
		},
		{
			range: [206675, 233475],
			tax: function(v) {
				return roundToDollarValues((v * 0.35) - 16427.00);
			},
		},
		{
			range: [233475],
			tax: function(v) {
				return roundToDollarValues((v * 0.396) - 27166.85);
			},
		},
	],
	// head of household
	"hoh" : [
		{
			range: [0,10999],
			tax: function() { return 1098; },
		},
		{
			range: [11000,19999],
			tax: function() { return 2334; },
		},
		{
			range: [20000,34999],
			tax: function() { return 4584; },
		},
		{
			range: [35000,49999],
			tax: function() { return 6834; },
		},
		{
			range: [50000,64999],
			tax: function() { return 10541; },
		},
		{
			range: [6500,74999],
			tax: function() { return 13041; },
		},
		{
			range: [75000,89999],
			tax: function() { return 16791; },
		},
		{
			range: [90000,100000],
			tax: function() { return 19291; },
		},
		{
			range: [100000, 130150],
			tax: function(v) {
				return roundToDollarValues((v * 0.25) - 5702.50);
			},
		},
		{
			range: [130150, 210800],
			tax: function(v) {
				return roundToDollarValues((v * 0.28) - 9607.00);
			},
		},
		{
			range: [210800, 413350],
			tax: function(v) {
				return roundToDollarValues((v * 0.33) - 20147.00);
			},
		},
		{
			range: [413350, 441000],
			tax: function(v) {
				return roundToDollarValues((v * 0.35) - 28414.00);
			},
		},
		{
			range: [441000],
			tax: function(v) {
				return roundToDollarValues((v * 0.396) - 48700.00);
			},
		},
	]
}


const calcTaxes = function (amount, s){
	// default to single if not defined
	const status = (s)? s : "single";
	const standardDeduction = calcStandardDeduction(amount, status);

	let estTaxes = 0;

	for( var v = 0; v < brackets[status].length; v++) {
		// check to see if there is an end range to this bracket.
		if (brackets[status][v].range.length > 1) {
			if (brackets[status][v].range[0] <= amount &&
					amount < brackets[status][v].range[1] ) {

				// console.log(brackets[status][v].range[0], 'in range a', amount, brackets[status][v].range[1], status, v);
				// console.log(standardDeduction);
				estTaxes = brackets[status][v].tax(amount - standardDeduction);
				break;
			}

		} else if (brackets[status][v].range[0] < amount ){
			estTaxes = brackets[status][v].tax(amount - standardDeduction);
			break;
		}
	};

	estTaxes = roundToDollarValues(estTaxes);
	if (estTaxes < 0 ){
		estTaxes = 0.00;
	}

	return estTaxes;
}

// if more than 700 add 350 to amount and compare to the standardDeduction (return the lesser)
// if less than 700 use 1050 as a standardDeduction
const calcStandardDeduction = function(amount, s) {
	const incomePlus = 350 + amount;
	if (amount < 700 ) {
		return 1050;
	}
	if ( incomePlus < standardDeductions[s] ) {
		return incomePlus;
	} else {
		return standardDeductions[s];
	}
}


export default calcTaxes

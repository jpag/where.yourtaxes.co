// export const CONFIG = require('../../../config.json');
module.exports = {
	"head" : {
		"title": "Where your taxes go.",
		"meta" : {
			"description": "Input your taxes for the year, and see an estimate of how much you paid for some highlighted items in Federal spending.",
			"keywords": "Taxes, Donald Trump, What You Pay, where your taxes go, Border Wall, EPA, Trump Tower, Trump Security, Too many vacations",
			"url": "http://where.yourtaxes.co/"
		},
		"tw" : {
			"creator": ""
		},
		"image": {
			"fb" : {
				"src": "http://where.yourtaxes.co/imgs/share.jpg",
				"width": "1200",
				"height": "919"
			},
			"tw": {
				"src": "http://where.yourtaxes.co/imgs/share.jpg",
				"width": "1200",
				"height": "919"
			}
		}
	},
	"root" : {
		"title" : "What are you paying for?",
		"blurb" : "This site will highlight some estimates of where your tax dollars go towards in the Federal budget. It will also show what has been cut from the proposed Budget of 2018.",
		"directions" : {
			"income" : "Enter your Income for the Year and select your filing status. We will generate a rough estimate of Federal Taxes paid. Or if you ",
			"taxes" : "Enter your how much you paid in Federal Taxes for the Year. Or if you don't know how much you paid in Federal Taxes "
		},
		"cta" : {
			"taxes" : "know how much you paid in Federal Taxes",
			"income" : "enter your income and filing status"
		}
	},
	"about" : {
		"copy": [
			"This project aims to highlight where an individual's money might go from income tax looking at the 2018 budget. The estimate is based off of the IRS's Projection of Federal Tax Return Filings. It is estimated there will be $1.63 Trillion collected from Individual Income Taxes for 2018, out of $3.37 Trillion in Revenue for the Federal Government. The Federal Government is expected to spend an additional $465 Billion which makes the tally for total spending at $3.76 Trillion.",
			"The Tax calculation process is on this site is not accurate, it does not take into account itemized deductions, or exemptions. For a more accurate picture of where you tax dollars go we recommend toggling to the Taxes paid input instead of income input.",
			"The equation run is: <span class='calculation'>(Total individual income tax / total federal spending) * (an individual's income tax / total individual income tax) * (cost of item)</span> "
		],
	},
	"footer" : {
		"copy" : [
			"The tax computation done on this site is strictly an estimate. And should not be used for your own taxes. Everyone's taxes are unique. No data is stored or recorded on this site.",
			"This site was not made by tax experts, and we will not do your taxes for you (sorry).",
			"Questions or Corrections please contact at <a href='mailto:where.yourtaxes.co@gmail.com'>here</a>"
		],
	}
}



export default {
	datapoints: {
		iitce: {
			title: 'Individual Income Taxes Collected Estimated',
			// 1,630,000,000,000
			value: 1630000000000,
			links: [
				"http://federal-budget.insidegov.com/l/121/2018-Estimate#Spending&s=47xnQz",
				"https://www.irs.gov/pub/irs-soi/12rswinbulreturnfilings.pdf",
			],
		},
	},
	spending: [
		{
			type: "add",
			title: "Security for Trips to Mar-a-lago",
			links: [
				"http://edition.cnn.com/2017/04/10/politics/donald-trump-obama-travel-costs/index.html?sr=twCNN041117donald-trump-obama-travel-costs/index.html1204AMStoryLink",
				"http://time.com/money/4703151/donald-trump-mar-a-lago-costs-taxpayers-palm-beach/",
				"http://www.npr.org/2017/03/28/521823473/gao-agrees-to-review-costs-of-trumps-trips-to-mar-a-lago",
			],
			cpy: 136875000.00,
		},
		{
			type: "add",
			title: "Border Wall",
			department: "Homeland Security",
			links: [
				"http://www.reuters.com/article/us-usa-trump-immigration-wall-exclusive-idUSKBN15O2ZN",
			],
			// 21,600,000,000
			totalCost: 21600000000,
			// $5,400,000,000.00
			cpy: 5400000000.00,
		},
		{
			type: "add",
			title: "Melania Trump/Trump Tower Security",
			links: [
				"http://www.snopes.com/melania-trump-nyc-costs/",
			],
			// $365,000,000.00 (1mil a day)
			cpy: 365000000.00,
		},
		{
			type: "add",
			title: "Yucca Mountain nuclear waste dump",
			department: "Energy Department",
			pullQuote: "Yucca is dead and this reckless proposal will not revive it",
			links: [
				"http://www.sciencemag.org/news/2017/03/trumps-first-budget-analysis-and-reaction",
			],
			// $120,000,000
			cpy: 120000000,
		},
		{
			type: "add",
			title: "Defense Spending",
			department: "Department of Defense",
			links: [
				"https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
			],
			cpy: 54000000000.00,
		},
		{
			type: "add",
			title: "Additional Apaches and Black Hawks",
			department: "Department of Defense",
			pullQuote: "Part of the 6 month end of 2017 budget request",
			links: [
				"https://ctmirror.org/2017/03/16/trump-doubles-down-on-defense-with-33-billion-for-more-black-hawks-f-35s/",
			],
			cpy: 1600000000.00,
		},
		{
			type: "add",
			title: "Additional Navy Ships",
			department: "Department of Defense",
			pullQuote: "Part of the 6 month end of 2017 budget request",
			links: [
				"https://ctmirror.org/2017/03/16/trump-doubles-down-on-defense-with-33-billion-for-more-black-hawks-f-35s/",
			],
			cpy: 691000000.00,
		},
		{
			type: "add",
			title: "Security for Betsy DeVos",
			department: "Department of Education",
			pullQuote: "Betsy DeVos is getting so many threats, she’s costing taxpayers $1 million a month in protection",
			links: [
				"https://qz.com/955400/betsy-devos-is-getting-so-many-threats-shes-costing-taxpayers-1-million-a-month-in-protection-from-us-marshals/",
			],
			// 1 mil a month
			cpy: 12000000.00,
		},
		{
			type: "cut",
			title: "Planned Parenthood",
			links: [
					"http://www.npr.org/sections/itsallpolitics/2015/08/05/429641062/fact-check-how-does-planned-parenthood-spend-that-government-money"
			],
			cpy: 528400000.00,
		},
		{
			type: "cut",
			title: "National Endowment for the Humanities (NEH)",
			links: [
					"http://www.snopes.com/2017/03/16/trump-plan-nea-neh/"
			],
			cpy: 148000000.00,
		},
		{
			type: "cut",
			title: "National Endowment of the Arts (NEA)",
			links: [
					"http://www.snopes.com/2017/03/16/trump-plan-nea-neh/"
			],
			cpy: 148000000.00,
		},
		{
			type: "cut",
			title: "Corporation for Public Broadcasting",
			links: [
					"http://current.org/2017/03/trump-budget-seeks-to-zero-out-cpb-funding-by-2018/",
					"http://www.snopes.com/2017/03/16/trump-plan-nea-neh/"
			],
			cpy: 445000000.00,
		},
		{
			type: "cut",
			title: "Meals on Wheels: Administration for Community Living",
			pullQuote: "Cut on home-delivered nutrition services",
			links: [
				"https://www.usatoday.com/story/news/politics/2017/03/18/meal-on-wheels-trump-budget-proposal-cuts/99308928/",
			],
			cpy: 227000000.00,
		},
		{
			type: "cut",
			title: "EPA",
			pullQuote: "Deducted 31% from the 2017 budget (8.267 Billion)",
			links: [
				"https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
			],
			cpy: 10900000000,
		},
		{
			type: "cut",
			title: "Energy Department Cut from Office of Science",
			links: [
				"https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
			],
			cpy: 900000000,
		},
		{
			type: "cut",
			title: "Eliminate the USDA Water and Wastewater loan",
			links: [
				"https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
			],
			cpy: 500000000.00,
		},
		{
			type: "cut",
			title: "Cut UNFPA funding",
			pullQuote: "Trump’s cuts to global reproductive health could lead to more coerced abortions in China",
			links: [
				"https://qz.com/949673/trumps-cut-to-funding-for-the-un-population-fund-unfpa-could-lead-to-more-coerced-abortions-in-china/",
			],
			cpy: 32500000,
		},
	]
}

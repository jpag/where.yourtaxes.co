module.exports = {
	datapoints: {
		iitce: {
			title: 'Individual Income Taxes Collected Estimated',
			// 1,630,000,000,000
			value: 1630000000000,
			links: [
				{
					url: "http://federal-budget.insidegov.com/l/121/2018-Estimate#Spending&s=47xnQz",
					title: "Federal Budget insidegov.com",
				},
				{
					url: "https://www.irs.gov/pub/irs-soi/12rswinbulreturnfilings.pdf",
					title: "IRS return filing estimates (PDF)",
				},
			],
		},
		ttr: {
			title: 'Projected Federal Revenue Total 2018',
			value: 3370000000000,
			links: [
				{
					url: "http://federal-budget.insidegov.com/l/121/2018-Estimate#Spending&s=47xnQz",
					title: "Federal Budget insidegov.com",
				},
				{
					url: "https://www.irs.gov/pub/irs-soi/12rswinbulreturnfilings.pdf",
					title: "IRS return filing estimates (PDF)",
				},
			],
		},
		tfs: {
			title: 'Projected Federal Spending Total 2018',
			value: 3760000000000,
			links: [
				{
					url: "http://federal-budget.insidegov.com/l/121/2018-Estimate#Spending&s=47xnQz",
					title: "Federal Budget insidegov.com",
				},
				{
					url: "https://www.irs.gov/pub/irs-soi/12rswinbulreturnfilings.pdf",
					title: "IRS return filing estimates (PDF)",
				},
			],
		},
	},
	spending: [
		{
			type: "add",
			title: "Security for Trips to Mar-a-lago",
			links: [
				{
					url: "http://edition.cnn.com/2017/04/10/politics/donald-trump-obama-travel-costs/index.html?sr=twCNN041117donald-trump-obama-travel-costs/index.html1204AMStoryLink",
					title: "Donal Trump Travel costs compared to Obama",
				},
				{
					url: "http://time.com/money/4703151/donald-trump-mar-a-lago-costs-taxpayers-palm-beach/",
					title: "Donald Trump Mar-a-lago Costs Taxpayers Palm Beach",
				},
				{
					url: "http://www.npr.org/2017/03/28/521823473/gao-agrees-to-review-costs-of-trumps-trips-to-mar-a-lago",
					title: "Gao Agress to Review Costs of Trumps Trips to Mar-a-lago",
				},
			],
			cpy: 136875000.00,
		},
		{
			type: "add",
			title: "Border Wall",
			department: "Homeland Security",
			links: [
				{
					url: "http://www.reuters.com/article/us-usa-trump-immigration-wall-exclusive-idUSKBN15O2ZN",
					title: "Exclusive - Trump border 'wall' to cost $21.6 billion, take 3.5 years to build: internal report",
				},
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
				{
					url: "http://www.snopes.com/melania-trump-nyc-costs/",
					title: "Melania Trump NYC Costs.",
				},
			],
			// $365,000,000.00 (1mil a day)
			cpy: 365000000.00,
		},
		{
			type: "add",
			title: "Yucca Mountain Nuclear waste dump",
			department: "Energy Department",
			pullQuote: "Yucca is dead and this reckless proposal will not revive it",
			links: [
				{
					url: "http://www.sciencemag.org/news/2017/03/trumps-first-budget-analysis-and-reaction",
					title: "Trumps First Budget Analysis (sciencemag.org)",
				},
			],
			// $120,000,000
			cpy: 120000000,
		},
		{
			type: "add",
			title: "Added Defense Spending",
			department: "Department of Defense",
			links: [
				{
					url: "https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
					title: "Trump Presidential Budget 2018 Proposal (WashingtonPost)",
				},
			],
			cpy: 54000000000.00,
		},
		{
			type: "add",
			title: "Additional Apaches and Black Hawks",
			department: "Department of Defense",
			pullQuote: "Part of the 6 month end of 2017 budget request",
			links: [
				{
					url: "https://ctmirror.org/2017/03/16/trump-doubles-down-on-defense-with-33-billion-for-more-black-hawks-f-35s/",
					title: "Trump’s double down on defense would buy more Black Hawks, F-35s",
				},
			],
			cpy: 1600000000.00,
		},
		{
			type: "add",
			title: "Additional Navy Ships",
			department: "Department of Defense",
			pullQuote: "Part of the 6 month end of 2017 budget request",
			links: [
				{
					url: "https://ctmirror.org/2017/03/16/trump-doubles-down-on-defense-with-33-billion-for-more-black-hawks-f-35s/",
					title: "Trump’s double down on defense would buy more Black Hawks, F-35s",
				},
			],
			cpy: 691000000.00,
		},
		{
			type: "add",
			title: "Security for Betsy DeVos",
			department: "Department of Education",
			pullQuote: "Betsy DeVos is getting so many threats, she’s costing taxpayers $1 million a month in protection",
			links: [
				{
					url: "https://qz.com/955400/betsy-devos-is-getting-so-many-threats-shes-costing-taxpayers-1-million-a-month-in-protection-from-us-marshals/",
					title: "Betsy DeVos is getting so many threats, she’s costing taxpayers $1 million a month in protection",
				},
			],
			// 1 mil a month
			cpy: 12000000.00,
		},
		{
			type: "cut",
			title: "Planned Parenthood",
			links: [
					{
						url: "http://www.npr.org/sections/itsallpolitics/2015/08/05/429641062/fact-check-how-does-planned-parenthood-spend-that-government-money",
						title: "Fact Check: How Does Planned Parenthood Spend That Government Money?",
					},
			],
			cpy: 528400000.00,
		},
		{
			type: "cut",
			title: "National Endowment for the Humanities (NEH)",
			links: [
					{
						url: "http://www.snopes.com/2017/03/16/trump-plan-nea-neh/",
						title: "Is President Trump Planning to Eliminate National Endowments for the Arts and Humanities?",
					},
			],
			cpy: 148000000.00,
		},
		{
			type: "cut",
			title: "National Endowment of the Arts (NEA)",
			links: [
					{
						url: "http://www.snopes.com/2017/03/16/trump-plan-nea-neh/",
						title: "Is President Trump Planning to Eliminate National Endowments for the Arts and Humanities?",
					},
			],
			cpy: 148000000.00,
		},
		{
			type: "cut",
			title: "Corporation for Public Broadcasting",
			links: [
					{
						url: "http://current.org/2017/03/trump-budget-seeks-to-zero-out-cpb-funding-by-2018/",
						title: "Trump budget seeks to zero out CPB funding by 2018",
					},
					{
						url: "http://www.snopes.com/2017/03/16/trump-plan-nea-neh/",
						title: "Is President Trump Planning to Eliminate National Endowments for the Arts and Humanities?",
					},
			],
			cpy: 445000000.00,
		},
		{
			type: "cut",
			title: "Meals on Wheels: Administration for Community Living",
			pullQuote: "Cut on home-delivered nutrition services",
			links: [
				{
					url: "https://www.usatoday.com/story/news/politics/2017/03/18/meal-on-wheels-trump-budget-proposal-cuts/99308928/",
					title: "Here's the truth about Meals on Wheels in Trump's budget",
				},
			],
			cpy: 227000000.00,
		},
		{
			type: "cut",
			title: "EPA",
			pullQuote: "Deducted 31% from the 2017 budget (8.267 Billion)",
			links: [
				{
					url: "https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
					title: "What Trump cut in his budget",
				},
			],
			cpy: 10900000000,
		},
		{
			type: "cut",
			title: "Energy Department Cut from Office of Science",
			links: [
				{
					url: "https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
					title: "What Trump cut in his budget",
				},
			],
			cpy: 900000000,
		},
		{
			type: "cut",
			title: "Eliminate the USDA Water and Wastewater loan",
			links: [
				{
					url: "https://www.washingtonpost.com/graphics/politics/trump-presidential-budget-2018-proposal/",
					title: "What Trump cut in his budget",
				},
			],
			cpy: 500000000.00,
		},
		{
			type: "cut",
			title: "Cut UNFPA funding",
			pullQuote: "Trump’s cuts to global reproductive health could lead to more coerced abortions in China",
			links: [
				{
					url: "https://qz.com/949673/trumps-cut-to-funding-for-the-un-population-fund-unfpa-could-lead-to-more-coerced-abortions-in-china/",
					title: "Trump’s cuts to global reproductive health could lead to more coerced abortions in China",
				},
			],
			cpy: 32500000,
		},
		{
			type: "cut",
			title: "Strip all funding from Office of Global Women’s Issues",
			pullQuote: "This administration is proposing devastating cuts that will have dire consequences for millions of people",
			links: [
				{
					url: "http://www.independent.co.uk/news/world/americas/us-politics/donald-trump-budget-2018-state-department-cut-office-global-womens-issues-oxfam-ivanka-a7701631.html",
					title: "Donald Trump to strip all funding from State Department team promoting women's rights around the world",
				},
			],
			cpy: 8250000,
		},
		{
			type: "cut",
			title: "Trans healthcare in the Military",
			links: [
					{
						url: "http://www.nbcnews.com/news/us-news/trump-claims-transgender-service-members-cost-too-much-true-n786891",
						title: "Trump Claims Transgender Service Members Cost Too Much: But Is That True?",
					},
					{
						url: "https://twitter.com/queerdsa/status/890301710702456833",
						title: "Budget of Trans healthcare.",
					}
			],
			cpy: 8400000.00,
		},
	]
}

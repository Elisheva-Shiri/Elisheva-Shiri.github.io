---
title: Round A Startup Business Plan
summary: >
  A business plan for a post-seed startup, written in a course at Tel Aviv University: market
  research and validation, a go-to-market and growth strategy, a month-by-month cash-flow model
  in three scenarios, and a recommendation for the next funding round. The startup builds an AI system that fits an online grocery basket to each
  shopper's nutrition.
categories:
  - Design Research
date: '2021'
tags:
  - Entrepreneurship
  - Business plan
  - Market research
  - Cash flow
  - Validation
  - Fundraising
  - Go-to-market
  - SaaS
  - Food tech
collaborators:
  - Adam Keren
  - Dor Wittner
  - Shachar Marom

cover: /projects/round-a-business-plan/market-size.webp
coverAlt: 'Three nested circles for the total, serviceable and obtainable market: 38,307 grocery retailers in the United States, 3,507 that aim for a distinct shopping experience, and 105 to 175 within realistic reach'

# Cards, archive chapter, the two lenses and the body map (see README).
short: 'A business plan for a post-seed food-tech startup: market size, go-to-market strategy and a cash-flow model in three scenarios.'
chapter: research
order: 10
tools: ['Market sizing', 'Cash-flow model', 'Go-to-market']
mechanics: 'A month-by-month cash-flow model in three scenarios — original, conservative and worst-case — built on a $1M raise, with burn rate, break-even point and cash runway.'
human: 'Two customers at once: the grocery chain that pays, and the shopper who has to trust a machine’s advice about food. The plan starts with shoppers who already eat by a special diet.'
body:
  - at: rhand
    dir: in
    label: 'A shopper fills an online grocery basket'
  - at: belly
    dir: out
    label: 'Food that fits this person’s nutrition'
  - at: brain
    dir: in
    label: 'Trusting a machine’s advice about what to eat'
---

## The task

Take a real early-stage startup and write the plan it would need for its next funding round. Our
team of four worked on a food-tech company whose product is an **AI system for online grocery
shops**: it learns a shopper's nutritional needs and suggests products that fit, so the basket
is healthier for the shopper and larger for the retailer.

## Where the company stands

The first question was which stage the company is really in. It has a working proof of concept,
so it is past the idea stage. But it has no proven go-to-market strategy, no mature unit
economics and no working sales mechanism. We placed it at an **early stage**, and planned from
there.

## Validation: which assumptions could sink it?

We listed **14 assumptions** the business depends on, from how far shoppers trust the platform to
how far retailers do. Each got a score for uncertainty and a score for impact; multiplied, they
give a risk level, and anything at 6 or above is a critical assumption. **Three came out
critical**, and those are the ones to test first.

## The competition

We compared the company with others that personalise grocery shopping, by platform, years in the
field, last funding, number of employees, business model and what the shopper has to do: whether
prior knowledge of nutrition is needed, how many diets are offered, how easy it is to use. We
also mapped four neighbouring groups: online personalisation, data providers, in-store
personalisation, and shopping content such as recipes and meal plans.

## Part 1: how big is the market?

We sized the market for the United States in three ways:

- **TAM / SAM / SOM.** About **38,300** grocery retailers in total; about **3,500** of them set
  out to give their shoppers a distinct shopping experience; and a realistic **3–5%** of those,
  some **105 to 175 retailers**, within reach.
- **Bottom-up, from one shopper.** An hour with a certified dietitian costs about $125. To be an
  attractive alternative, the system was priced at **$4 per shopping transaction**, roughly a
  10% fee on an average basket of $38.41, for a shopper who buys groceries 1.6 times a week.
- **Unit economics.** The value of a customer over time against the cost of winning one came out
  close to the recommended **3 : 1**.

## Part 2: how does it reach people?

The company sells to a business that serves a consumer (**B2B2C**), so it has to convince twice:
first the retailer, that the system is worth money, and then the shopper, that its suggestions
are worth following.

- **Who goes first.** Early adopters are small, health-minded boutique chains, where every
  customer counts and shoppers already follow a special diet: diabetic, low-fat, lactose-free.
  The early majority are the mid-size and large chains.
- **Crossing from one to the other.** Large chains have many one-time shoppers, so the algorithm
  has to work without knowing the person in advance. We recommended shifting the emphasis from
  "healthy" to the shopping experience, adding more diets (vegan, gluten-free, local produce,
  sport-specific), and offering retailers a trial version with a report on what it did to sales.
- **Where to meet retailers.** Trade conferences and the trade press of the grocery industry.
- **How to sell.** Direct sales, led by a senior person in the company rather than a sales force.
- **How to charge.** A basic and a premium version. Early adopters get a long-term bundle;
  smaller retailers start from the basic version. Shoppers are drawn in with a launch discount,
  then a discount that builds up with use.

A survey we ran in the first assignment gave one finding that shaped the plan: people who eat
less healthily said they would use a shop's suggestions and a smart system *more*, not less.

## Part 3: does the money last?

Together with Shachar Marom, I built the **financial plan**: a cash-flow model of the first two
years, month by month, assuming the company starts now with **$1M** raised.

- **Costs**, in the four standard groups. *Cost of goods sold*: rented cloud computing and
  storage rather than owned servers. *Research and development*: salaries, the largest cost by
  far; the founders, then web, AI and Python developers, with a product manager and a sales and
  marketing hire after six months. *Sales and marketing*, benchmarked against other
  software-as-a-service companies. *General and administrative*: a co-working office, a
  computer per employee, legal and accounting services, and travel between Israel and the US.
- **Income.** Retailers pay per shopping transaction, $4 on the basic plan and $8 on the pro
  plan. The model assumes three months of setup, a pilot with ten retail chains and about
  12,000 baskets a month, and two more chains joining every month.
- **Three scenarios.** The original, a conservative one and a worst case, with higher salaries
  and costs and fewer customers each time.
- **What we read from it.** Burn rate, break-even point and cash runway. The company loses money
  first, then balances, then earns. Under the spending limits we set, $1M is enough to build the
  venture, and the money goes mostly to people, so the first hires matter most.
- **Risks.** Running short of cash early, financing that costs more than planned, regulation
  (nutrition advice, data protection, new markets), and operations: travel, salaries above plan,
  fewer customers than plan.

## Part 4: where should the next money come from?

- **Not debt, and not the company's own income.** At this stage it has to raise a lot to pay for
  development, and neither fits.
- **Equity, from the right kind of investor.** The company is not ready for investors who want
  mature ventures, so we recommended venture capital or corporate venture capital: a fund that
  knows AI, or one that knows retail chains and the food market. One option we raised is a
  **retailer as investor**, who funds the launch, is the first to offer the service, and shares
  in the result.
- **Grants, because the product is about health.** A system that helps people buy food that suits
  their health fits public programmes for digital health and personalised care. A grant-funded
  pilot would pay for the first test and position the company as a health brand that shoppers
  can trust.

## The team

Written with Adam Keren, Dor Wittner and Shachar Marom in an entrepreneurship course at Tel Aviv
University.

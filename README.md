# Playwright with TypeScript – Test Automation Assignment

## Project Overview

This repository contains my Playwright with TypeScript test automation assignment completed using the TestMu AI Selenium Playground application.

The project demonstrates practical UI automation using Playwright, including element identification, user interactions, form handling, slider manipulation, and result validation.

## Application Under Test

Application: TestMu AI Selenium Playground

URL: https://www.testmuai.com/selenium-playground/

## Test Scenarios

### 1. Simple Form Demo

* Validate the expected URL
* Enter a message
* Submit the message
* Validate the displayed message

Test File: `tests/1.Scenario.spec.ts`

### 2. Drag & Drop Sliders

* Validate the default slider value
* Move the slider to `95`
* Validate the final slider value

Test File: `tests/2.Scenario.spec.ts`

### 3. Input Form Submit

* Validate required-field behavior
* Fill in the form
* Select the country
* Submit the form
* Validate successful submission

Test File: `tests/3.Scenario.spec.ts`

## Tools & Technologies

* Playwright
* TypeScript
* Node.js
* Visual Studio Code
* Git
* GitHub

## Project Structure

```text
Playwright-Course-Assignment/
│
├── tests/
│   ├── 1.Scenario.spec.ts
│   ├── 2.Scenario.spec.ts
│   └── 3.Scenario.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## How to Run

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run the HTML report:

```bash
npx playwright show-report
```

## Skills Demonstrated

* Playwright Test Runner
* TypeScript
* Locator strategies
* Assertions
* URL validation
* Form handling
* Dropdown selection
* Slider interaction
* Mouse actions
* Test execution
* HTML test reporting

## Certification

TestMu AI Playwright Certification: Pending

The certification assessment has been completed and the certification result is currently awaited.

## Author

Sheik Mohamed Waseem SA

QA / Software Testing

This repository is part of my QA Automation portfolio and demonstrates hands-on practice with Playwright and TypeScript.

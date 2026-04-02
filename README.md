# 🧪 OrangeHRM Automation Testing Project

![Playwright Tests](https://img.shields.io/badge/Playwright-Automation-blue?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![GitHub](https://img.shields.io/badge/GitHub-Repo-black?logo=github)

This repository contains **automated functional and regression tests** for **OrangeHRM**, using **Playwright** with the **Page Object Model (POM)** design pattern.  
It covers **employee management, leave requests, maintenance access, Buzz posts, and timesheet management**, including both **employee and manager workflows**.

---

## 📋 Project Overview

- **Application Under Test:** [OrangeHRM Demo](http://localhost/orangehrm/web/index.php/auth/login)  
- **Automation Scope:**  
  - 👤 **Employee Management:** account creation, login, status updates  
  - 🏥 **Leave Management:** employee leave requests, manager approval/rejection/cancellation  
  - 🛠️ **Maintenance:** manager access and employee records download  
  - 💬 **Buzz Page:** employee posts, likes, edits; manager deletes posts  
  - ⏱️ **Timesheet Management:** employee submit/edit, manager approve/reject/reset  
- **Test Approach:** Page Object Model (POM) for reusable and maintainable test scripts  
- **Test Management:** Jira for requirement tracking and defect management  

---

## 🧰 Tools & Technologies

| Category             | Tool/Library          |
|---------------------|---------------------|
| Automation Framework | Playwright           |
| Language             | JavaScript          |
| Test Runner          | Playwright Test     |
| Reporting            | Playwright HTML Reports |
| Test Design Pattern  | Page Object Model (POM) |
| Test Management      | Jira                 |

---

## 🗂️ Project Structure

```
orangehrm/
├── tests/
│   ├── login.spec.js         # Employee/Admin login & account management
│   ├── leave.spec.js         # Employee/Manager leave workflows
│   ├── maintenance.spec.js   # Manager maintenance module
│   ├── buzz.spec.js          # Employee/Manager Buzz posts
│   └── timesheet.spec.js     # Employee/Manager timesheet management
├── pages/
│   ├── loginPage.js
│   ├── leavePage.js
│   ├── maintenancePage.js
│   ├── buzzPage.js
│   └── timesheetPage.js
├── playwright.config.js
├── package.json
├── .gitignore
└── .github/
    └── workflows/
        └── playwright.yml
```

## 📌 Jira Overview

This section shows how the project is structured in Jira, including Epics, User Stories, and Test Case traceability.

Here’s a screenshot from Jira showing the Epics and User Stories:

![Alt Text](jira_screenshot)

yaml
Copy code

- `pages/*.js` → reusable Page Object Model classes  
- `tests/*.spec.js` → automated test suites grouped by User Stories  

---

## 🚀 How to Run the Tests Locally

1. Clone the repository:
```bash
git clone https://github.com/efrosalex/orangehrm.git
cd orangehrm
```

2. Install dependencies:
```bash
Copy code
npm install
```

3. Install Playwright browsers:
```bash
Copy code
npx playwright install
```

4. Run all tests:
```bash
Copy code
npx playwright test
```

5. View HTML report:
```bash
Copy code
npx playwright show-report
```

Example report screenshot:

## 🧩 Test Coverage & Traceability

👤 Employee Management
```
📖 REG-US01 – Create Employee Accounts (3 Test Cases)

TC01: Employee account creation with valid data
TC02: Employee account creation with duplicate username
TC03: Employee account creation with missing required fields

📖 REG-US02 – Edit Employee Details (2 Test Cases)

TC01: Edit employee details successfully
TC02: Edit employee details with invalid input

📖 REG-US03 – Employee Login (3 Test Cases)

TC01: Login with valid credentials
TC02: Login with invalid password
TC03: Login with missing required fields
```
🏥 Leave Management
```
📖 LEAVE-US01 – Employee Leave Requests (2 Test Cases)

TC01: Employee applies for sick leave successfully
TC02: Employee attempts leave with insufficient balance

📖 LEAVE-US02 – Manager Leave Requests (2 Test Cases)

TC01: Manager approves leave request
TC02: Manager rejects leave request

```
🛠️ Maintenance
```
📖 MAIN-US01 – Manager Access Records (2 Test Cases)

TC01: Manager signs in to Maintenance module
TC02: Manager downloads employee records
```
💬 Buzz
```
📖 BUZZ-US01 – Employee Posts (3 Test Cases)

TC01: Employee creates a new post
TC02: Employee likes a post
TC03: Employee edits a post

📖 BUZZ-US02 – Manager Post Deletion (1 Test Case)

TC01: Manager can delete employee post
```
⏱️ Timesheet
```
📖 TME-US01 – Employee Timesheet (3 Test Cases)

TC01: Employee submits timesheet
TC02: Employee edits timesheet before approval
TC03: Employee cannot edit timesheet after manager approval

📖 TME-US02 – Manager Timesheet (2 Test Cases)

TC01: Manager resets employee timesheet
TC02: Manager rejects employee timesheet
```

## 🤖 GitHub Actions CI

* Workflow file: .github/workflows/playwright.yml

* Runs tests automatically on push or pull request to main/master

* Uploads HTML test reports as artifact

* Badges for workflow success/failure, Playwright version, Node.js version


## ✨ Key Highlights

* Reusable Page Object Model (POM) for all workflows

* Dynamic test data ensures uniqueness and reliability

* Covers employee and manager roles across modules

* Automated validation of mandatory fields, invalid inputs, approvals, and workflow rules


## 🧑‍💻 Author  
Alexandru Efros  
QA Automation | Playwright | Jira  
* [LinkedIn](https://www.linkedin.com/in/alexandruefros/) | [GitHub](https://github.com/Efrosalex)

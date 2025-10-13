import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TimeSheetPage } from '../pages/timesheetPage';


let Login
let TimeSheet

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page)
    await Login.GoToHomePage()
    TimeSheet = new TimeSheetPage(page)
})


test.describe("TME-US01 - Employee Timesheet Management", () => {

    test('TME-US01-TC01 - Verify employee can log hours', async ({ page }) => {

        await Login.EmployeeSignIn()
        await TimeSheet.EmployeeTimesheetSubmit()

    })

    test('TME-US01-TC02 - Edit timesheet before approval', async ({ page }) => {

        await Login.EmployeeSignIn()
        await TimeSheet.EmployeeTimesheetEdit()

    })

    test('TME-US01-TC03 - Attempt to edit after manager approval', async ({ page }) => {

        //Manager Approve Timesheet
        await Login.AdminSignIn()
        await TimeSheet.ManagerApprovedTimesheet()
        await Login.SignOut()

        //Employee Check Edit Option
        await Login.GoToHomePage()
        await Login.EmployeeSignIn()
        await TimeSheet.time_page_button.click()
        await expect(TimeSheet.edit_timesheet_table_button).toHaveCount(0)
        await Login.SignOut()

    })

})

test.describe("TME-US02 - Manager Timesheet Management", () => {

    test('TME-US02-TC01 - Manager Can Reset Employee Timesheet', async ({ page }) => {

        await Login.AdminSignIn()
        await TimeSheet.ManagerResetTimesheet()
    })

    test('TME-US02-TC02 - Reject Timesheet', async ({ page }) => {

        await Login.AdminSignIn()
        await TimeSheet.ManagerRejectTimesheet()
        
    })

})
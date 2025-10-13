import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LeavePage } from '../pages/leavePage';


let Login
let Leave

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page)
    await Login.GoToHomePage()
    Leave = new LeavePage(page)
})


test.describe("LEAVE-US01 – Employee Leave Requests", () => {

    test('LEAVE-US01-TC01 - Employee Applies for Sick Leave', async ({ page }) => {

        await Login.EmployeeSignIn()
        await Leave.EmployeeApplySickLeave("14","15")

    })

    test('LEAVE-US01-TC02 - Attempt leave request without Balance', async ({ page }) => {

        await Login.EmployeeSignIn()
        await Leave.EmployeeApplyInvalidLeave("20","23")
        await expect(page.getByText('Balance not sufficient')).toBeVisible()
    })

})

test.describe("LEAVE-US02 - Manager Leave Requests", () => {

    test('LEAVE-US02-TC01 - Manager Approves Leave request', async ({ page }) => {

        await Login.AdminSignIn()
        await Leave.ManagerApproveLeave()
        await page.pause()
        await Leave.ManagerCancelLeave()
        

    })

    test('LEAVE-US02-TC02 - Manager Rejects Leave request', async ({ page }) => {

        // Employee Creates Sick Leave Request
        await Login.EmployeeSignIn()
        await Leave.EmployeeApplySickLeave("14","15")
        await Login.SignOut()

        // Manager Rejects Leave
         await Login.AdminSignIn()
         await Leave.ManagerRejectLeave()

    })

})

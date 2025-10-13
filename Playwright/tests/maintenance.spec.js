import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { MaintenancePage } from '../pages/maintenancePage';


let Login
let Maintenance

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page)
    await Login.GoToHomePage()
    Maintenance = new MaintenancePage(page)
})


test.describe("MAIN-US01 - Manager Access Records", () => {

    test('MAIN-US01-TC01 -> Manager is required to sign in with password', async ({ page }) => {

        await Login.AdminSignIn()
        await Maintenance.ManagerMaintenanceSignIn()

    })

     test('MAIN-US01-TC02 → Manager Verify records can be downloaded', async ({ page }) => {

        await Login.AdminSignIn()
        await Maintenance.ManagerMaintenanceSignIn()
        await Maintenance.ManagerDownloadEmployeeRecords()

    })

})

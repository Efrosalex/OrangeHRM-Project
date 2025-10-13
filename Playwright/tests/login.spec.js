import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';



let Login

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page)
    await Login.GoToHomePage()
})


test.describe("REG-US01 - Create Employee Accounts", () => {


    test('REG-US01-TC01 - Successful account creation', async ({ page }) => {

        await Login.AdminSignIn()

        const timestamp = Date.now()            
        const username = `efrosalex${timestamp}`  // Creaza un username unic in functie de milisecunda exacta

        await Login.CreateEmployeeAccount("Alex", "Efros", username, "Parola100!!")
        const successfullySavedMessage = page.getByText('Successfully Saved')
        await expect(successfullySavedMessage).toBeVisible()
    })

    test('REG-US01-TC02 - Duplicate Employee username', async ({ page }) => {

        await Login.AdminSignIn()
        await Login.CreateEmployeeAccount("Alex", "Efros", "efrosalex", "Parola100!!")
        await page.pause()
        const usernameAlreadyExistsMessage = page.getByText('Username already exists')
        await expect(usernameAlreadyExistsMessage).toBeVisible()
    })

    test('REG-US01-TC03 - Mandatory field missing (blank username field)', async ({ page }) => {

        await Login.AdminSignIn()
        await Login.CreateEmployeeAccount("Alex", "Efros", " ", "Parola100!!")
        const requiredMessage = page.getByText('Required', { exact: true })
        await expect(requiredMessage).toBeVisible()

    })

})

test.describe("REG-US2 - Edit Employee Account Details", () => {


    test('REG-US02-TC01 - Update employee details (Change Status to disable)', async ({ page }) => {

        await Login.AdminSignIn()
        await Login.ChangeEmployeeStatus()
        const statusDisabledMessage = page.getByText('Disabled')
        await expect(statusDisabledMessage).toBeVisible()
    })

    test('REG-US02-TC02 - Invalid email format', async ({ page }) => {
        await Login.AdminSignIn()
        await Login.ChangeEmail("example@123")
        const emailFormatErrorMessage = page.getByText('Expected format: admin@')
        await expect(emailFormatErrorMessage).toBeVisible()

    })



})

test.describe("REG-US3 - Employee Login", () => {


    test('REG-US03-TC01 - Successfull Login', async ({ page }) => {

        await Login.EmployeeSignIn()
        const valid_login_message = page.getByText('Alex Efros')
        await expect(valid_login_message).toBeVisible()
        
    })

    test('REG-US03-TC02 - Invalid password', async ({ page }) => {
        
        await Login.SignIn("efrosalex01","Parola10")
        const invalid_credentials_message = page.getByText('Invalid credentials')
        await expect(invalid_credentials_message).toBeVisible()
        
    })

    test('REG-US03-TC03 - Empty Credentials', async ({ page }) => {
       await Login.SignIn("","")
        const requiredMessage = page.getByText('Required').first()
        await expect(requiredMessage).toBeVisible()
    })



})
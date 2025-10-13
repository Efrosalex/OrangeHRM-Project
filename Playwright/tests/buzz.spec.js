import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { LeavePage } from '../pages/leavePage';
import { BuzzPage } from '../pages/buzzPage';


let Login
let Buzz

test.beforeEach(async ({ page }) => {
    Login = new LoginPage(page)
    await Login.GoToHomePage()
    Buzz = new BuzzPage(page)
})


test.describe("BUZZ-US01 - Employee Buzz Page", () => {

    test('BUZZ-US01-TC01 - Employee can create a post in Buzz', async ({ page }) => {

        await Login.EmployeeSignIn()
        await Buzz.EmployeeCreateNewPost("Hello!")
        await expect(page.getByText('Successfully Saved')).toBeVisible()
    })

    test('BUZZ-US01-TC02 - Employee can like/comment on a post', async ({ page }) => {

        await Login.EmployeeSignIn()
        await Buzz.EmployeeLikePost()
        await expect (Buzz.buzz_liked_post_locator).toBeVisible()
        
    })

    test('BUZZ-US01-TC03 - Employee can edit a post', async ({ page }) => {

        await Login.EmployeeSignIn()
        await Buzz.EmployeeEditPost("Hello World!")
        await expect (page.getByText('Successfully Updated')).toBeVisible()
    })

    

})

test.describe("BUZZ-US02 - Manager Buzz Page", () => {

    test('BUZZ-US02-TC01 Manager can delete employee post', async ({ page }) => {

        await Login.AdminSignIn()
        await Buzz.ManagerDeletePost()
        await expect(Buzz.post_deleted_succesfully_message_locator).toBeVisible()
    })

})

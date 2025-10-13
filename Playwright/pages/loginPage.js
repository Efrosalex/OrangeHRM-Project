exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.homepage_url = "http://localhost/orangehrm/web/index.php/auth/login"
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })

        this.login_button = page.getByRole('button', { name: 'Login' })
        this.valid_login_message = page.getByRole('link', { name: 'Dashboard' })
        this.invalid_login_message = page.getByText('Invalid credentials')
        this.PIM_button = page.getByRole('link', { name: 'PIM' })
        this.add_employee_button = page.getByRole('link', { name: 'Add Employee' })
        this.first_name_textbox = page.getByRole('textbox', { name: 'First Name' })
        this.last_name_textbox = page.getByRole('textbox', { name: 'Last Name' })
        this.create_login_details_button = page.locator('form span')
        this.username_create_textbox = page.locator('div:nth-child(4) > .oxd-grid-2 > div > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.password_create_textbox = page.locator('input[type="password"]').first()
        this.password_create_confirm_textbox = page.locator('input[type="password"]').nth(1)
        this.save_button = page.getByRole('button', { name: 'Save' })
        
        //My Info Page
        this.my_info_page_button = page.getByRole('link', { name: 'My Info' })
        this.contact_details_page_button = page.getByRole('link', { name: 'Contact Details' })
        this.email_textbox = page.locator('div:nth-child(9) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first()

        //Sign out
        this.profile_button = page.getByRole('banner').getByRole('img', { name: 'profile picture' })
        this.logout_button = page.getByRole('menuitem', { name: 'Logout' })

        //Admin Page
        this.admin_page_button = page.getByRole('link', { name: 'Admin' })
        this.edit_user_button = page.locator('button:has(i.oxd-icon.bi-pencil-fill)').nth(1)
        this.status_dropdown = page.locator('form i').nth(1)
        this.status_dropdown_option_disabled_select = page.getByRole('option', { name: 'Disabled' })

        //Employee

        this.employee_username = "efrosalex01"
        this.employee_password = "Parola100!!"
    }

    async GoToHomePage() {
        await this.page.goto(this.homepage_url)
    }

    async SignOut()
    {
        await this.profile_button.click()
        await this.logout_button.click()
    }

    async AdminSignIn() {
        await this.username_textbox.click()
        await this.username_textbox.fill("Admin")
        await this.password_textbox.click()
        await this.password_textbox.fill("Bassohd10!")
        await this.login_button.click()
    }

    async SignIn(username, password) {
        await this.username_textbox.click()
        await this.username_textbox.fill(username)
        await this.password_textbox.click()
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    async CreateEmployeeAccount(firstname,lastname,username,password)
    {
        await this.PIM_button.click()
        await this.add_employee_button.click()
        await this.first_name_textbox.click()
        await this.first_name_textbox.fill(firstname)
        await this.last_name_textbox.click()
        await this.last_name_textbox.fill(lastname)
        await this.create_login_details_button.click()
        await this.username_create_textbox.click()
        await this.username_create_textbox.fill(username)
        await this.password_create_textbox.click()
        await this.password_create_textbox.fill(password)
        await this.password_create_confirm_textbox.click()
        await this.password_create_confirm_textbox.fill(password)
        await this.save_button.click()
    }
    
    async ChangeEmail(email)
    {
        await this.my_info_page_button.click()
        await this.contact_details_page_button.click()
        await this.email_textbox.click()
        await this.email_textbox.fill(email)
        await this.save_button.click()
    }

    async ChangeEmployeeStatus()
    {
        await this.admin_page_button.click()
        await this.edit_user_button.click()
        await this.status_dropdown.click()
        await this.status_dropdown_option_disabled_select.click()
        await this.save_button.click()
    }

    async EmployeeSignIn()
    {
        await this.username_textbox.fill(this.employee_username)
        await this.password_textbox.fill(this.employee_password)
        await this.login_button.click()
    }

    


}


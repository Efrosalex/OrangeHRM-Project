exports.MaintenancePage = class MaintenancePage {


    constructor(page) {

        this.page = page
        this.maintenance_button = page.getByRole('link', { name: 'Maintenance' })
        this.maintenance_login_password_field = page.locator('input[name="password"]')
        this.maintenance_login_confirm_button = page.getByRole('button', { name: 'Confirm' })
        this.maintenance_access_records_button = page.getByRole('link', { name: 'Access Records' })
        this.maintenance_records_employee_search_name_field = page.getByRole('textbox', { name: 'Type for hints...' })
        this.maintenance_records_employee_search_name_field_option = page.getByText('Alex Efross')
        this.maintenance_records_search_button = page.getByRole('button', { name: 'Search' })
        this.maintenance_records_download_button = page.getByRole('button', { name: 'Download' })

    }

    async ManagerMaintenanceSignIn()
    {
        await this.maintenance_button.click()
        await this.maintenance_login_password_field.click()
        await this.maintenance_login_password_field.fill("Bassohd10!")
        await this.maintenance_login_confirm_button.click()
    }

    async ManagerDownloadEmployeeRecords()
    {
        await this.maintenance_access_records_button.click()
        await this.maintenance_records_employee_search_name_field.click()
        await this.maintenance_records_employee_search_name_field.fill("efros")
        await this.maintenance_records_employee_search_name_field_option.click()
        await this.maintenance_records_search_button.click()
        await this.page.waitForTimeout(500)
        await this.maintenance_records_download_button.click()
        await this.page.waitForTimeout(500)
    }



}
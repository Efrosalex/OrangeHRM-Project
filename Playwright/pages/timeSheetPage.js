exports.TimeSheetPage = class TimeSheetPage

{
    constructor (page)
    {
        this.page = page
        this.time_page_button = page.getByRole('link', { name: 'Time' })
        this.edit_timesheet_table_button = page.getByRole('button', { name: 'Edit' })
        this.project_dropdown = page.getByRole('textbox', { name: 'Type for hints...' })
        this.project_dropdown_option_1 = page.getByText('Abraham Samuel - Project X')
        this.activity_dropdown = page.getByText('-- Select --')
        this.activity_dropdown_option_1 = page.getByRole('option', { name: 'Work type 1' })
        this.hour_day_textbox = page.locator('td:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-input')
        this.save_button = page.getByRole('button', { name: 'Save' })
        this.submit_timesheet_button = page.getByRole('button', { name: 'Submit' })

        // Manager (admin)

        this.view_timesheet_button = page.getByRole('cell', { name: 'View' }).getByRole('button')
        this.manager_approve_timesheet_button = page.getByRole('button', { name: 'Approve' })
        this.manager_reject_timesheet_button = page.getByRole('button', { name: 'Reject' })
        this.employee_search_textbox = page.getByRole('textbox', { name: 'Type for hints...' })
        this.employee_search_option = page.getByRole('option', { name: 'Alex Efross' })
        this.employee_search_view_button = page.getByRole('button', { name: 'View' })
        this.reset_timesheet_button = page.getByRole('button', { name: 'Reset' })

        this.view_button = page.locator("button.oxd-button.oxd-button--medium.oxd-button--text.oxd-table-cell-action-space");


    }

    async EmployeeTimesheetSubmit()
        {
            await this.time_page_button.click()
            await this.submit_timesheet_button.click()
        }
    

    async EmployeeTimesheetEdit()
    {
        await this.time_page_button.click()
        await this.edit_timesheet_table_button.click()
        await this.hour_day_textbox.click()
        await this.hour_day_textbox.fill("10")
        await this.save_button.click()
    }

    async ManagerApprovedTimesheet()
    {
        await this.time_page_button.click()
        await this.view_timesheet_button.click()
        await this.manager_approve_timesheet_button.click()
    }

    async ManagerRejectTimesheet()
    {
        await this.time_page_button.click()
        await this.view_timesheet_button.click()
        await this.manager_reject_timesheet_button.click()
    }

    async ManagerResetTimesheet()
    {
        await this.time_page_button.click()
        await this.employee_search_textbox.click()
        await this.employee_search_textbox.fill("efross")
        await this.employee_search_option.click()
        await this.employee_search_view_button.click()
        await this.reset_timesheet_button.click()
    }

    

}
exports.LeavePage = class LeavePage


{
    constructor (page)
    {
        //Employee
        this.page = page
        this.leave_page_button = page.getByRole('link', { name: 'Leave', exact: true })
        this.leave_apply_button = page.getByRole('link', { name: 'Apply' })
        this.leave_type_dropdown = page.locator('form i').first()
        this.leave_type_dropdown_sick_option = page.getByRole('option', { name: 'Sick Leave' })
        this.leave_type_dropdown_casual_option = page.getByRole('option', { name: 'Casual Leave' })
        this.leave_from_date_select = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first()
        this.leave_to_date_select = page.locator('form i').nth(3)
        this.leave_form_apply_button = page.getByRole('button', { name: 'Apply' })
        this.employee_profile_button = page.getByText('Alex Efross')
        this.employee_logout_button = page.getByRole('menuitem', { name: 'Logout' })

        //Manager
        this.manager_leave_approve_button = page.getByRole('button', { name: 'Approve' })
        this.manager_leave_reject_button = page.getByRole('button', { name: 'Reject' })
        this.manager_search_employee_name_dropdown = page.getByRole('textbox', { name: 'Type for hints...' })
        this.manager_search_employee_name_dropdown_option = page.getByText('Alex Efross')
        this.manager_search_show_leave_status_dropdown = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first()
        this.manager_search_show_leave_status_dropdown_scheduled = page.getByText('Scheduled')
        this.manager_search_search_button = page.getByRole('button', { name: 'Search' })
        this.manager_three_dots_menu_button = page.getByRole('button', { name: '' })
        this.manager_three_dots_menu_button_cancel_option = page.getByText('Cancel Leave')

    }


    async selectDay(dateField, day) {
    // Click the input/calendar icon
    await dateField.click();

    // Wait for calendar to appear
    const calendar = this.page.locator('.oxd-calendar-wrapper').first();
    await calendar.waitFor({ state: 'visible' });

    // Click the correct day inside this calendar
    await calendar.locator(`.oxd-calendar-date >> text=${day}`).first().click();
}

    async EmployeeApplySickLeave (from,to)
    {
        //Navigate to Leave Page and apply for leave form
        await this.leave_page_button.click()
        await this.leave_apply_button.click()

        //Select Sick Leave
        await this.leave_type_dropdown.click()
        await this.leave_type_dropdown_sick_option.click()

        //Select Leave Dates
        await this.selectDay(this.leave_from_date_select, from);
        await this.selectDay(this.leave_to_date_select, to);
     
        //Click Apply Button
        await this.page.waitForTimeout(1000)
        await this.leave_form_apply_button.click()
        await this.page.waitForTimeout(300)
        await this.leave_form_apply_button.click()
    }

    async EmployeeApplyInvalidLeave (from,to)
    {
        //Navigate to Leave Page and apply for leave form
        await this.leave_page_button.click()
        await this.leave_apply_button.click()

        //Select Sick Leave
        await this.leave_type_dropdown.click()
        await this.leave_type_dropdown_casual_option.click()

        //Select Leave Dates
        await this.leave_from_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${from}`).first().click();
        await this.leave_to_date_select.click()
        await this.page.locator(`.oxd-calendar-date >> text=${to}`).first().click();
     
        //Click Apply Button
        await this.leave_form_apply_button.click()
    }

    async ManagerApproveLeave ()
    {
        await this.leave_page_button.click()
        await this.manager_leave_approve_button.click()
    }

    async ManagerRejectLeave ()
    {
        await this.leave_page_button.click()
        await this.manager_leave_reject_button.click()
    }
    
    async ManagerCancelLeave()
    {
        await this.leave_page_button.click()
        await this.manager_search_employee_name_dropdown.click()
        await this.manager_search_employee_name_dropdown.fill("Alex")
        await this.manager_search_employee_name_dropdown_option.click()
        await this.manager_search_show_leave_status_dropdown.click()
        await this.manager_search_show_leave_status_dropdown_scheduled.click()
        await this.manager_search_search_button.click()
        await this.manager_three_dots_menu_button.click()
        await this.manager_three_dots_menu_button_cancel_option.click()
    }


}


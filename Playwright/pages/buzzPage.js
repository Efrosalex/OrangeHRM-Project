exports.BuzzPage = class BuzzPage


{
    constructor (page)
    {
        //Employee Post 

        this.page = page
        this.buzz_page_button = page.getByRole('link', { name: 'Buzz' })
        this.buzz_post_text_field = page.getByRole('textbox', { name: 'What\'s on your mind?' })
        this.buzz_post_button = page.getByRole('button', { name: 'Post', exact: true })
        this.buzz_like_post_button = page.locator('#heart')
        this.buzz_liked_post_locator = page.getByText('1 Like')
        this.buzz_three_dots_dropdown = page.getByRole('button', { name: '' })
        this.buzz_three_dots_dropdown_edit_option = page.getByText('Edit Post')
        this.buzz_edit_post_text_field = page.getByRole('dialog').getByRole('textbox')
        this.buzz_edit_post_post_button = page.getByRole('dialog').getByRole('button', { name: 'Post' })

        //Manager 
        this.manager_three_dots_post_dropdown_button = page.getByRole('button', { name: '' })
        this.manager_three_dots_post_dropdown_delete_post_button = page.getByText('Delete Post')
        this.manager_confirm_delete_button = page.getByRole('button', { name: ' Yes, Delete' })
        this.post_deleted_succesfully_message_locator = page.getByText('Successfully Deleted')
    }

    async EmployeeCreateNewPost(text)
    {
        await this.buzz_page_button.click()
        await this.buzz_post_text_field.click()
        await this.buzz_post_text_field.fill(text)
        await this.buzz_post_button.click()
    }
    async EmployeeLikePost()
    {
        await this.buzz_page_button.click()
        await this.buzz_like_post_button.click()
    }

    async EmployeeEditPost(text)
    {
        await this.buzz_page_button.click()
        await this.buzz_three_dots_dropdown.click()
        await this.buzz_three_dots_dropdown_edit_option.click()
        await this.buzz_edit_post_text_field.click()
        await this.buzz_edit_post_text_field.fill(text)
        await this.buzz_edit_post_post_button.click()
    }
    async ManagerDeletePost()
    {   
        await this.buzz_page_button.click()
        await this.manager_three_dots_post_dropdown_button.click()
        await this.manager_three_dots_post_dropdown_delete_post_button.click()
        await this.manager_confirm_delete_button.click()
    }

}
require 'rails_helper'

RSpec.feature "user can see the option to add a new idea" do
  scenario "the text box and buttons exist" do
    visit '/'

    expect(page).to have_css('#idea-title')
    expect(page).to have_css('#idea-body')
    expect(page).to have_css('#create-idea')
    expect(page).to have_button('Save')
  end
end

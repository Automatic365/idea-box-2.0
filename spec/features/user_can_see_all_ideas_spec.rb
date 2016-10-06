require 'rails_helper'

RSpec.feature "user can see all the ideas" do
  scenario "user can see all ideas on the home page" do
    idea = Idea.create(title: "Kristaps",
                        body: "Porzingis")

    idea_1 = Idea.create(title: "Carmelo",
                        body: "Anthony")

    visit '/'

    expect(current_path).to eq(root_path)

    within('h1') do
      expect(page).to have_content("Welcome to IdeaBox...again!")
    end

    within("#all-ideas") do
      expect(page).to have_content(idea.title)
      expect(page).to have_content(idea.body)
      expect(page).to have_content(idea.quality)
      expect(page).to have_content(idea_1.title)
      expect(page).to have_content(idea_1.body)
      expect(page).to have_content(idea_1.quality)
      expect(page).to have_button("Delete")
      expect(page).to have_button("Upvote")
      expect(page).to have_button("Downvote")
    end

    within('h2') do
      expect(page).to have_content("Have Another Idea?")
    end

    within('.form') do
      expect(page).to have_content("Title:")
      expect(page).to have_content("Body:")
    end
  end
end

class Idea < ApplicationRecord
   enum quality: [ :swill, :plausible, :genius ]

   validates_presence_of :title, :body, :quality
end

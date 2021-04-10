class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :curriculum_id
end

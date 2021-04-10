module Api
  module V1
    class ReviewsController < ApplicationController
      protect_from_forgery with: :null_session

      def create
        review = curriculum.reviews.new(review_params)

        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errros.messages }, status: 422
        end
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: { error: review.errros.messages }, status: 422
        end
      end

      private

      def curriculum
        @curriculum ||= Curriculum.find(params[:curriculum_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :curriculum_id)
      end
    end
  end
end

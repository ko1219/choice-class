module Api
  module V1
    class CurriculumsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        curriculums = Curriculum.all
        render json: CurriculumSerializer.new(curriculums, options).serialized_json
      end

      def show
        curriculum = Curriculum.find_by(slug: params[:slug])

        render json: CurriculumSerializer.new(curriculum, options).serialized_json
      end

      def create
        curriculum = Curriculum.new(curriculum_params)

        if curriculum.save
          render json: CurriculumSerializer.new(curriculum).serialized_json
        else
          render json: { error: curriculum.errors.messages }, status: 422
        end
      end

      def update
        curriculum = Curriculum.find_by(slug: params[:slug])

        if curriculum.update(curriculum_params)
          render json: CurriculumSerializer.new(curriculum, options).serialized_json
        else
          render json: { error: curriculum.errors.messages }, status: 422
        end
      end

      def destroy
        curriculum = Curriculum.find_by(slug: params[:slug])

        if curriculum.destroy
          head :no_content
        else
          render json: { error: curriculum.errors.messages }, status: 422
        end
      end

        private

        def curriculum_params
          params.require(:curriculum).permit(:name)
        end

        def options
          @options ||= { include: %i[reviews] }
        end
    end
  end
end

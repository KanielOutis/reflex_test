class TodosController < ApplicationController
  def index
    # @value = 'hello'
    @todos ||= Todo.all.load
  end

  def show; end

  def create; end

  def new; end

  def update; end
end

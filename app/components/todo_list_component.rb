# frozen_string_literal: true

class TodoListComponent < ViewComponent::Base
  def initialize(value)
    super
    @value = value
  end
end

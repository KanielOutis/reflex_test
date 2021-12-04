class TodoReflex < ApplicationReflex
  def filter(query)
    @value = Todo.where('title ILIKE ?', "%#{query}%")
    morph '#todo-list', render(TodoListComponent.new(@value))
  end

  def add_todo(value)
    Todo.create title: value

    morph '#todo-list', render(TodoListComponent.new(Todo.all))
  end

  def remove
    todo = Todo.find_by(id: element.dataset[:id])

    todo.destroy if todo.present?

    morph '#todo-list', render(TodoListComponent.new(Todo.all))
  end
end

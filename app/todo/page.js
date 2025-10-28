import Link from 'next/link';
import { dbConnection } from '@/lib/dbConnection';
import { Todo } from '@/lib/models/todos';
import { deleteTodo } from '@/lib/actions/todoActions';

async function getTodos() {
  await dbConnection();
  const todos = await Todo.find({}).lean();
  return todos.map(t => ({ ...t, _id: t._id.toString() }));
}
export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <Link href="/todo/add" className="bg-green-600 text-white px-4 py-2 rounded">
          + Add Task
        </Link>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-amber-50">No tasks yet.</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className="border p-5 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{todo.title}</h3>
                <p className="text-sm">by: {todo.author}</p>
              </div>

              <div className="flex gap-2">
                <Link
                  href={`/todo/edit/${todo._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>

                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo._id} />
                  <button
                    type="submit"
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
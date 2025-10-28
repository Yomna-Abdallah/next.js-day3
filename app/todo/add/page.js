import { saveNewTodo } from '@/lib/actions/todoActions';
import Link from 'next/link';

export default function AddTodoPage() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Task</h1>

      <form action={saveNewTodo} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            name="title"
            type="text"
            required
            className="w-full p-2 border rounded"
            placeholder="Write a title..."
          />
        </div>

        <div>
          <label className="block mb-1">Author</label>
          <input
            name="author"
            type="text"
            required
            className="w-full p-2 border rounded"
            placeholder="Author name..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/todo" className="text-blue-600 hover:underline">
          Back to List
        </Link>
      </div>
    </div>
  );
}
// app/todo/edit/[id]/page.js
import { updateTodo } from '@/lib/actions/todoActions';
import { dbConnection } from '@/lib/dbConnection';
import { Todo } from '@/lib/models/todos';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getTodo(id) {
    await dbConnection();
    const todo = await Todo.findById(id).lean();
    if (!todo) notFound();
    return { ...todo, _id: todo._id.toString() };
}

export default async function EditTodoPage({ params }) {
    const { id } = await params;
    const todo = await getTodo(id);

    return (
        <div className="p-6 max-w-md mx-auto border rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-6 text-center">Edit Task</h1>

            <form action={updateTodo} className="space-y-4">
                <input type="hidden" name="id" value={id} />

                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        name="title"
                        type="text"
                        defaultValue={todo.title}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Author</label>
                    <input
                        name="author"
                        type="text"
                        defaultValue={todo.author}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="flex gap-2">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                    <Link href="/todo" className="flex-1 text-center bg-gray-500 text-white py-2 rounded">
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
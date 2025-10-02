import { useForm } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy'
import { Link } from '@inertiajs/react';

export default function Show({ post }) {
    const { delete: destroy } = useForm();

    function submit(e) {
        e.preventDefault();
        // destroy(`/posts/${post.id}`);
        destroy(route('posts.destroy', post));
    }
    return (
        <>
            <div className="mt-7 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                <div className="border-b pb-4">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">posted on : {new Date(post.created_at).toLocaleTimeString()}</p>
                    <p className="text-gray-600">{post.body}</p>
                </div>
            </div>
            <div className="m-5 mt-4 bg-white p-6 rounded shadow-md max-w-sm mx-auto">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded  text-center">
                    <Link href={route('posts.edit', post)} >Edit Post</Link>
                </div>
                <form onSubmit={submit}>
                    <button type="submit" className="bg-red-500 text-white mt-2 px-4 py-2 rounded w-full text-center">Delete Post</button>
                </form>
            </div>
        </>
    )
}
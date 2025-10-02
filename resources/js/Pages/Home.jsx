import Layout from '../Layouts/Layout';
import { Link, usePage, Head } from '@inertiajs/react';
import {useRoute} from '../../../vendor/tightenco/ziggy'
import { useState } from 'react';

export default function Home({ posts }) {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const[flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 3000);
    const name = "Albin";
    return (
        <>
            <Head>
                <title>{component}</title>
                <meta head-key="description" name="description" content="This is the default description" />
            </Head>

            {/* <Head title={component} /> */}

            <div className="mt-7 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h1 className="text-xl font-semibold">Welcome to Inertia.js, {name}!</h1>
                <p className="text-gray-600">This is your home page.</p>
            </div>
            {flashMsg && <div className="max-w-sm mx-auto mt-4 p-4 bg-green-100 text-green-800 rounded">{flashMsg}</div>}
            {flash.success && <div className="max-w-sm mx-auto mt-4 p-4 bg-green-100 text-amber-300 rounded">{flash.success}</div>}
            <div className="mt-4 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
                {posts.data.map(post => (
                    <div key={post.id} className="border-b pb-4">
                        <h2 className="text-lg font-semibold">{post.title}</h2>
                        <p className="text-gray-600 text-sm mb-2">posted on : {new Date(post.created_at).toLocaleTimeString()}</p>
                        <p className="text-gray-600">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-blue-500">Read More</Link> */}
                        <Link href={route('posts.show', post)} className="text-blue-500">Read More</Link>
                    </div>
                ))}
                {/* <div className="mt-4">
                    {posts.prev_page_url && <Link href={posts.prev_page_url} className="mr-2 text-blue-500">Previous</Link >}
                    
                    {posts.next_page_url && <Link href={posts.next_page_url} className="text-blue-500">Next</Link>}
                </div> */}

                <div className="py-12 px-4">
                    {posts.links.map((link) => (
                        link.url 
                        ?
                        <Link
                            key={link.label}
                            href={link.url || "#"}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : "text-gray-500"
                                } ${!link.url && "cursor-not-allowed opacity-50"}`}
                        />
                        :
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-gray-100"
                        />
                    ))}
                </div>

            </div>
        </>
    );
}

Home.layout = page => <Layout children={page} />

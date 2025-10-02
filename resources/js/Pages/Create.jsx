import { useForm, Head } from "@inertiajs/react";
import {useRoute} from '../../../vendor/tightenco/ziggy'

export default function Create() {
    const route = useRoute();
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        body: ''
    });

    function submit(e) {
        e.preventDefault();
        post(route('posts.store'));
    }
    console.log(errors);
    return (
        <>
            <Head>
                <title>Create Post</title>
                <meta head-key="description" name="description" content="This is the default description" />
            </Head>
            <div className="m-4 text-2xl font-bold text-center">Create Page</div>
            {/* <div className="m-4 text-xl text-center">{data.title}</div> */}

            <form onSubmit={submit} className="m-5 mt-4 bg-white p-6 rounded shadow-md">
                <input
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    type="text" placeholder="Title"
                    className="border p-2 w-full mb-4 rounded" />

                {errors.title && <div className="text-red-600 mb-4">{errors.title}</div>}

                <textarea
                    value={data.body}
                    onChange={e => setData('body', e.target.value)}
                    placeholder="Body"
                    className="border p-2 w-full mb-4 rounded">
                </textarea>
                {errors.body && <div className="text-red-600 mb-4">{errors.body}</div>}
                <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded w-full text-center">Create Post</button>
            </form>
        </>
    )
};
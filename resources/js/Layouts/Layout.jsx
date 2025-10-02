import { Link, Head } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            {/* <Head>
                <meta head-key="description" name="description" content="This is the default description" />
            </Head> */}
            <div className="min-h-screen bg-gray-100">
                <header className="bg-white shadow">
                    <nav className="bg-gray-800 p-4">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className="text-white hover:text-gray-900">Home</Link>
                            </li>
                            <li>
                                <Link href="/posts" className="text-white hover:text-gray-900">Posts</Link>
                            </li>
                            <li>
                                <Link href="/posts/create" className="text-white hover:text-gray-900">Create-Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>{children}</main>
            </div>
        </>
    );
}

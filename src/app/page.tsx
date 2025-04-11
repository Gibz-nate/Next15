import Link from 'next/link';
// import TodoItems from './todoitems/page';
import { Logout } from './logout/action';


export default function Page() {

    return (
        <>
        <h1>Welcome! </h1>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
        <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link>
        {/* <TodoItems/> */}
        <button formAction={Logout} className="btn btn-primary">
            Logout
        </button>
        </>
    
)
    
}
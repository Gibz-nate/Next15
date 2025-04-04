import Link from 'next/link';
export default async function NewsArticle({params, searchParams}: {
    params: Promise<{articleid: string}>;
    searchParams: Promise<{lang?: "en" | "fr" }>;
}){
    const {articleid} = await params;
    const {lang = 'en'} = await searchParams;
    return(
        <div>
            <h1>News {articleid}</h1>
            <p>reading in {lang}</p>

            <div>
                <Link href={`/articles/${articleid}?lang=en`}>english</Link>
                <Link href={`/articles/${articleid}?lang=fr`}>french</Link>
            </div>
            
        </div>
    )
}
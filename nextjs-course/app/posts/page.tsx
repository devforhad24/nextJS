export default async function Posts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache: "no-store" // to disable caching
    })

    const posts = await res.json()

    // throw new Error('Faild to fetch posts')

    return(
        <div style={{padding: 20}}>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
    
}
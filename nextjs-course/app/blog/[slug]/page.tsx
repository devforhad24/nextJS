interface BlogPageProps {
    params: {
        slug: string;
    }
}

const blogData: Record<string, {title: string, content: string}> = {
    "nextjs": {
        title: "NextJS Basic",
        content: "NextJS - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos aliquid aliquam velit vel pariatur minima quas dicta eligendi? Delectus."
    },
    "mongodb": {
        title: "Mongodb Basic",
        content: "Mongodb - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos aliquid aliquam velit vel pariatur minima quas dicta eligendi? Delectus."
    },
    "react": {
        title: "reactJS Basic",
        content: "React - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos aliquid aliquam velit vel pariatur minima quas dicta eligendi? Delectus."
    },
    "node": {
        title: "nodeJS Basic",
        content: "NodeJS - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos aliquid aliquam velit vel pariatur minima quas dicta eligendi? Delectus."
    },
}


export default async function BlogDetailPage({params} : BlogPageProps){
    const {slug} = await params;

    const blog = blogData[slug];

    if(!blog){
        return <h1>Blog Not Found!</h1>
    }

    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Slug URL: {slug}</p>
        </div>
    )

}
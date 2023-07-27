import { useEffect, useState } from "react"

type Post = {
    datetime: string,
    title: string,
    content: string
}

export function Home() {
    const postURL = 'https://sunnylui823.github.io/posts.json'

    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState({})

    useEffect(() => {
        fetch(postURL)
            .then(response => response.json())
            .then(responseData => setPosts(responseData))
            .catch(err => setError(err))
    }, [])

    return <>
        {error != null && posts.map((post, id) => 
            <div key={id}>
                <h3>{post.title}</h3>
                <h6>{new Date(post.datetime).toLocaleString()}</h6>
                <p>{post.content}</p>
            </div>
        )}
    </>
}
let PostsElement = document.querySelector('#posts')
let fechPosts = async () => {
    let reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await reponse.json()
    return posts
}

let renderPosts = async ()=> {
    let posts = await fechPosts()
    posts.map(post => {
        PostsElement.innerHTML += `<h3>${post.id}. ${post.title} </h3> <p>${post.title}</p>`
    })
}
console.log('bonjoour je suis haba')
renderPosts()
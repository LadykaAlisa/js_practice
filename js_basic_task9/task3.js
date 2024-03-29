async function getPostBody(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const post = await response.json();
        console.log("Текст body поста:", post.body);
    } catch (error) {
        console.error("Помилка при отриманні body поста:", error);
    }
}


async function getPostComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const comments = await response.json();
        console.log("Коментарі до поста з ID", postId + ":");
        comments.forEach(comment => {
            console.log(" -", comment.body);
        });
    } catch (error) {
        console.error("Помилка при отриманні коментарів поста:", error);
    }
}


getPostBody(1);


getPostComments(1);

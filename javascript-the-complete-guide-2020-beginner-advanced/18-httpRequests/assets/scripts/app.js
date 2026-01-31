const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// xhr.onload = function() {
//     listofPosts = JSON.parse(xhr.response);
//     console.log(listofPosts);
// }

xhr.responseType = 'json';

xhr.onload = function() {
    listofPosts = xhr.response;
    console.log(listofPosts);
    for (const post of listofPosts) {
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }
}

xhr.send();

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

// blogpost comment creation

const createBlogpostComment = (author, message, time) => {
    const comment = document.createElement("div");
    comment.classList.add("blogpost-comment", "col-12", "d-flex");

    const author_avatar = document.createElement("img");
    author_avatar.src = "https://i.pravatar.cc/350";
    author_avatar.classList.add("avatar", "rounded-circle", "p-2");
    comment.appendChild(author_avatar);

    const comment_body = document.createElement("div");
    comment.appendChild(comment_body);

    const comment_author = document.createElement("strong");
    comment_author.classList.add("h4", "mb-2");
    comment_author.innerText = author;
    comment_body.appendChild(comment_author);

    const comment_message = document.createElement("div");
    comment_message.innerText = message;
    comment_body.appendChild(comment_message);

    const comment_created = document.createElement("small");
    const icon = document.createElement("i");
    comment_created.classList.add("text-muted");
    comment_created.innerText = time;
    icon.classList.add("bi", "bi-calendar");
    comment_created.insertBefore(icon, comment_created.firstChild);
    comment_body.appendChild(comment_created);

    return comment;
}

const addBlogpostComment = comment => {
    const container = document.getElementById("commentsContainer");
    if (container) container.insertBefore(comment, container.firstChild);
}

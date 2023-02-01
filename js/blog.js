// blogpost comment creation

const createBlogpostComment = ({author, message, created_at}) => {
    const comment = document.createElement("div");
    comment.classList.add("blogpost-comment", "col-12", "d-flex");

    const author_avatar = document.createElement("img");
    author_avatar.src = author.img;
    author_avatar.classList.add("avatar", "rounded-circle", "p-2");
    comment.appendChild(author_avatar);

    const comment_body = document.createElement("div");
    comment.appendChild(comment_body);

    const comment_author = document.createElement("strong");
    comment_author.classList.add("h4", "mb-2");
    comment_author.innerText = author.name;
    comment_body.appendChild(comment_author);

    const comment_message = document.createElement("div");
    comment_message.innerText = message;
    comment_body.appendChild(comment_message);

    const comment_created = document.createElement("small");
    const icon = document.createElement("i");
    comment_created.classList.add("text-muted");
    comment_created.innerText = created_at;
    icon.classList.add("bi", "bi-calendar");
    comment_created.insertBefore(icon, comment_created.firstChild);
    comment_body.appendChild(comment_created);

    return comment;
}


const addBlogpostComment = comment => {
    const container = document.getElementById("BlogpostCommentsContainer");
    if (container) container.insertBefore(comment, container.firstChild);
}


const handleNewCommentSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const message = event.target.querySelector("textarea").value.trim();
    event.target.reset();

    if (!message) return;

    // TODO: get payload from backend
    const payload = {
        author: {
            img: "https://i.pravatar.cc/350?u=da594f2b",
            name: "Bosco Longhole",
        },
        message,
        created_at: "Feb 2, 2023",
    }

    const comment = createBlogpostComment(payload);
    addBlogpostComment(comment);
}


const BlogpostCommentsForm = document.getElementById("BlogpostCommentForm");
if (BlogpostCommentsForm) BlogpostCommentsForm.addEventListener("submit", handleNewCommentSubmit);

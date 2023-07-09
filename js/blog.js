// article comment creation


/**
 * Create author block for new comment
 *
 * @param name author's name
 * @param image author's avatar link
 * @returns {HTMLDivElement}
 */
const createCommentAuthorBlock = ({name, image}) => {
    const container = document.createElement("div")
    container.classList.add("text-center", "me-3")

    const authorImage = document.createElement("img")
    authorImage.classList.add("avatar", "rounded-circle", "p-2")
    authorImage.src = image
    container.appendChild(authorImage)

    const authorName = document.createElement("div")
    authorName.classList.add("fw-bolder", "fst-italic")
    authorName.innerText = name
    container.appendChild(authorName)

    return container
}


/**
 * Create message block for new comment
 *
 * @param created message creation date
 * @param message message text
 * @returns {HTMLDivElement}
 */
const createCommentMessageBlock = ({created, message}) => {
    const container = document.createElement("div")
    container.classList.add("text-start")

    const messageCreated = document.createElement("small")
    messageCreated.classList.add("fw-light")
    messageCreated.innerText = created
    container.appendChild(messageCreated)

    const messageText = document.createElement("p")
    messageText.innerText = message
    container.appendChild(messageText)

    return container
}


/**
 * Create article comment
 *
 * @param author comment's author information
 * @param comment comment date (creation date and message text)
 * @returns {HTMLDivElement}
 */
const createArticleComment = ({author, comment}) => {
    const container = document.createElement("div")
    container.classList.add("d-flex", "flex-row")
    container.appendChild(createCommentAuthorBlock(author))
    container.appendChild(createCommentMessageBlock(comment))

    return container
}


/**
 * Add article comment to page
 *
 * @param comment comment data to append
 */
const addArticleComment = comment => {
    const container = document.getElementById("ArticleCommentsContainer");
    if (container) container.appendChild(comment);
}


/**
 * Handle comment form submit event
 *
 * @param event
 */
const handleNewCommentSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const message = event.target.querySelector("textarea").value.trim();
    event.target.reset();

    if (!message) return;

    // TODO: get payload from backend
    const payload = {
        author: {
            image: "https://i.pravatar.cc/350?u=2054e2c9",
            name: "Berilac Gardner",
        },
        comment: {
            message,
            created: "Feb 2, 2023",
        }
    }

    const comment = createArticleComment(payload);
    addArticleComment(comment);
}


const CommentForm = document.getElementById("ArticleCommentForm");
if (CommentForm) CommentForm.addEventListener("submit", handleNewCommentSubmit);

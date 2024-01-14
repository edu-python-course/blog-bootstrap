const createArticleBtn = document.getElementById("createArticleBtn")
const articleForm = document.getElementById("articleForm")

if (createArticleBtn && articleForm) {
    createArticleBtn.addEventListener("click", event => {
        event.preventDefault()
        event.stopPropagation()
        articleForm.submit()
    })
}

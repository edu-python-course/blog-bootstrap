const createArticleBtn = document.getElementById("createArticleBtn")
const articleForm = document.getElementById("articleForm")

if (createArticleBtn && articleForm) {
    createArticleBtn.addEventListener("click", () => articleForm.submit())
}
if (createArticleBtn && !articleForm) {
    createArticleBtn.addEventListener("click", () => window.location.href = "/form.html")
}

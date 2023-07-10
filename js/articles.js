// articles actions

const submitButton = document.getElementById("publishSubmit")
if (submitButton) submitButton.addEventListener("click", () => {
    document.getElementById("articleForm").submit()
})

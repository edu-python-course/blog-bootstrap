/**
 * Global source configurations
 */

const globalTemplateParameters = {
    favicon_svg: "./img/favicon.svg",
    favicon_png: "./img/favicon.png",
    anonymous_img: "./img/anonymous.svg",
    logo: "./img/logo.svg",

    BlogSiteTitle: "Blog Templates",

    user: {
        username: "wheed1997",
        email: "PippinSackville-Baggins@jourrapide.com",
        image: "https://i.pravatar.cc/?u=PippinSackville-Baggins@jourrapide.com",
        first_name: "Pippin",
        last_name: "Sackville-Baggins",
    },
}

const article = {
    title: "Ship-wide, carnivorous crews impressively deserve an extraterrestrial, devastated ferengi",
    topics: ["Fake latin", "Science Fiction", "Culinary Inspirations"],
    published: "July 7, 2024",
    author:`${globalTemplateParameters.user.first_name} ${globalTemplateParameters.user.last_name}`
}

const refs = {
    AboutView: "./about.html",
    ListView: "./index.html",
    DetailView: "./detail.html",
    FormView: "./form.html",
    SignInView: "./sign-in.html",
    SignUpView: "./sign-up.html",
    ProfileView: "./profile.html",

    navs: [
        {link: "?query=fake-latin", title: "Fake Latin"},
        {link: "?query=esoteric-wisdom", title: "Esoteric Wisdom"},
        {link: "?query=culinary-inspirations", title: "Culinary Inspirations"},
        {link: "?query=pirate-lingo", title: "Pirate Lingo"},
        {link: "?query=science-fiction", title: "Science Fiction"},
    ],
}

module.exports = {
    globalTemplateParameters,
    article,
    refs,
}

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
    author: `${globalTemplateParameters.user.first_name} ${globalTemplateParameters.user.last_name}`,
    comments: [
        {
            author: {
                first_name: "Wilcome",
                last_name: "Brownlock",
                image: "https://i.pravatar.cc/?u=WilcomeBrownlock@teleworm.us",
            },
            published: "January 31, 2023",
        },
        {
            author: {
                first_name: "Berilac",
                last_name: "Gardner",
                image: "https://i.pravatar.cc/?u=BerilacGardner@armyspy.com",
            },
            published: "February 12, 2023",
        },
        {
            author: {
                first_name: "Chica",
                last_name: "Brockhouse",
                image: "https://i.pravatar.cc/?u=ChicaBrockhouse@teleworm.us",
            },
            published: "February 13, 2023",
        },
        {
            author: {
                first_name: "Amaranth",
                last_name: "Burrowes",
                image: "https://i.pravatar.cc/?u=AmaranthBurrowes@dayrep.com",
            },
            published: "March 5, 2023",
        },
        {
            author: {
                first_name: "Toby",
                last_name: "Mugwort",
                image: "https://i.pravatar.cc/?u=TobyMugwort@armyspy.com",
            },
            published: "April 15, 2023",
        },
    ]
}

const
    refs = {
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

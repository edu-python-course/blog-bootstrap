/**
 * Global source configurations
 */

const BlogSiteTitle = "Blog Templates"

const statics = {
    favicon_svg: "./img/favicon.svg",
    favicon_png: "./img/favicon.png",
    anonymous_img: "./img/anonymous.svg",
    logo: "./img/logo.svg",
    BlogSiteTitle,
}

const statics_dev = {
    ...statics,
    favicon_svg: "./static/img/favicon.svg",
    favicon_png: "./static/img/favicon.png",
    anonymous_img: "./static/img/anonymous.svg",
    logo: "./static/img/logo.svg",
}

const user = {
    username: "wheed1997",
    email: "PippinSackville-Baggins@jourrapide.com",
    image: "https://i.pravatar.cc/?u=PippinSackville-Baggins@jourrapide.com",
    first_name: "Pippin",
    last_name: "Sackville-Baggins",
}

// noinspection SpellCheckingInspection
const topics = [
    {
        subscribed: false,
        title: "Fake Latin",
        description: "A falsis, idoleum teres turpis. " +
            "Emeritis, audax historias sapienter reperire de barbatus, talis palus. " +
            "Cum era observare, omnes nutrixes promissio velox, superbus rectores.",
        link: "?query=fake-latin",
    },
    {
        subscribed: true,
        title: "Esoteric Wisdom",
        description: "Never acquire the karma, for you cannot discover it. " +
            "The hypnosis of your mans will die purely when you illuminate that extend is the seeker.",
        link: "?query=esoteric-wisdom",
    },
    {
        subscribed: false,
        title: "Culinary Inspiration",
        description: "Oysters taste best with olive oil and lots of wasabi. " +
            "Marshmellow can be marinateed with sichuan-style walnut, also try whisking the soup with condensed milk.",
        link: "?query=culinary-inspirations",
    },
    {
        subscribed: false,
        title: "Pirate Lingo",
        description: "All captains view dark, golden golds. Lord, lively gold. go to tubbataha reef. " +
            "The mainland endures with grace, haul the galley before it sings.",
        link: "?query=pirate-lingo",
    },
    {
        subscribed: true,
        title: "Science Fiction",
        description: "Tremble without attitude, and we won’t beam a particle. " +
            "Alignment at the solar system was the stigma of nuclear flux, beamed to a brave vogon.",
        link: "?query=science-fiction",
    },
]

const article = {
    title: "Ship-wide, carnivorous crews impressively deserve an extraterrestrial, devastated ferengi",
    topics: ["Fake latin", "Science Fiction", "Culinary Inspirations"],
    published: "July 7, 2024",
    author: `${user.first_name} ${user.last_name}`,
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

const refs = {
    AboutView: "./about.html",
    ListView: "./index.html",
    DetailView: "./detail.html",
    FormView: "./form.html",
    SignInView: "./sign-in.html",
    SignUpView: "./sign-up.html",
    ProfileView: "./profile.html",
    TopicsView: "./topics.html",
}

module.exports = {
    statics_dev,
    statics,
    article,
    user,
    refs,
    topics,
}

import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

const dummyCastsData = [
    { name: "Milla Jovovich", profile_path: "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { name: "Dave Bautista", profile_path: "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { name: "Tom Holland", profile_path: "https://image.tmdb.org/t/p/original/bP1luB336zA82I9936j89i.jpg" },
    { name: "Zendaya", profile_path: "https://image.tmdb.org/t/p/original/rM6Y4x0aZ4h4I4b2x2i.jpg" }
]

export const dummyShowsData = [
    {
        _id: "324544",
        title: "In the Lost Lands",
        overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide Boyce must outwit man and demon.",
        poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        genres: [{ id: 28, name: "Action" }, { id: 14, name: "Fantasy" }, { id: 12, name: "Adventure" }],
        casts: dummyCastsData,
        release_date: "2025-02-27",
        original_language: "en",
        vote_average: 6.4,
        runtime: 102
    },
    {
        _id: "1232546",
        title: "Until Dawn",
        overview: "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers.",
        poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        genres: [{ id: 27, name: "Horror" }, { id: 9648, name: "Mystery" }],
        casts: dummyCastsData,
        release_date: "2025-04-23",
        original_language: "en",
        vote_average: 6.8,
        runtime: 103
    },
    {
        _id: "552524",
        title: "Lilo & Stitch",
        overview: "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }, { id: 878, name: "Sci-Fi" }],
        casts: dummyCastsData,
        release_date: "2025-05-17",
        original_language: "en",
        vote_average: 7.1,
        runtime: 108
    },
    {
        _id: "668489",
        title: "Havoc",
        overview: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        genres: [{ id: 28, name: "Action" }, { id: 80, name: "Crime" }, { id: 53, name: "Thriller" }],
        casts: dummyCastsData,
        release_date: "2025-04-25",
        original_language: "en",
        vote_average: 6.5,
        runtime: 107
    },
    {
        _id: "950387",
        title: "A Minecraft Movie",
        overview: "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld.",
        poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        genres: [{ id: 10751, name: "Family" }, { id: 35, name: "Comedy" }, { id: 12, name: "Adventure" }],
        casts: dummyCastsData,
        release_date: "2025-03-31",
        original_language: "en",
        vote_average: 6.5,
        runtime: 101
    },
    {
        _id: "575265",
        title: "Mission: Impossible - The Final Reckoning",
        overview: "Ethan Hunt and team continue their search for the terrifying AI known as the Entity which has infiltrated intelligence networks all over the globe.",
        poster_path: "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        genres: [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 53, name: "Thriller" }],
        casts: dummyCastsData,
        release_date: "2025-05-17",
        original_language: "en",
        vote_average: 7.4,
        runtime: 170
    },
    {
        _id: "986056",
        title: "Thunderbolts*",
        overview: "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that forces them to confront their pasts.",
        poster_path: "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        genres: [{ id: 28, name: "Action" }, { id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }],
        casts: dummyCastsData,
        release_date: "2025-04-30",
        original_language: "en",
        vote_average: 7.4,
        runtime: 127
    },
    {
        _id: "108419",
        title: "Avatar: Fire and Ash",
        overview: "Jake Sully and Neytiri encounter the Ash People, a aggressive Na'vi clan dwelling near volcanic ecosystems.",
        poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        genres: [{ id: 878, name: "Sci-Fi" }, { id: 12, name: "Adventure" }],
        casts: dummyCastsData,
        release_date: "2025-12-19",
        original_language: "en",
        vote_average: 8.2,
        runtime: 190
    },
    {
        _id: "838209",
        title: "Exhumed",
        overview: "An excavation crew unlocks a crypt buried beneath an ancient cathedral, releasing a dark entity onto a small mountain town.",
        poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        genres: [{ id: 27, name: "Horror" }],
        casts: dummyCastsData,
        release_date: "2025-08-11",
        original_language: "en",
        vote_average: 6.9,
        runtime: 98
    },
    {
        _id: "991002",
        title: "Neon Horizon",
        overview: "In a dystopian cyberpunk megacity, a rogue hacker uncover a subterranean network of sentient artificial intelligences.",
        poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        genres: [{ id: 878, name: "Sci-Fi" }, { id: 28, name: "Action" }],
        casts: dummyCastsData,
        release_date: "2025-09-05",
        original_language: "en",
        vote_average: 7.8,
        runtime: 115
    },
    {
        _id: "772101",
        title: "Velocity",
        overview: "An underground street racer gets entangled in an international heist across three European capitals.",
        poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        genres: [{ id: 28, name: "Action" }, { id: 53, name: "Thriller" }],
        casts: dummyCastsData,
        release_date: "2025-10-10",
        original_language: "en",
        vote_average: 6.3,
        runtime: 110
    },
    {
        _id: "643110",
        title: "Shadow Realm",
        overview: "A scholar accidentally translates a forbidden manuscript, opening doors to an ancient dimension.",
        poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        genres: [{ id: 14, name: "Fantasy" }, { id: 9648, name: "Mystery" }],
        casts: dummyCastsData,
        release_date: "2025-11-01",
        original_language: "en",
        vote_average: 7.0,
        runtime: 124
    }
];

export const dummyBookingData = [
    {
        _id: "68396334fb83252d82e17295",
        user: { name: "QuickUser" },
        show: {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 49
        },
        amount: 98,
        bookedSeats: ["D1", "D2"],
        isPaid: false
    },
    {
        _id: "68396334fb83252d82e17296",
        user: { name: "QuickUser" },
        show: {
            _id: "68352363e96d99513e4221a5",
            movie: dummyShowsData[1],
            showDateTime: "2025-07-15T04:00:00.000Z",
            showPrice: 49
        },
        amount: 49,
        bookedSeats: ["A1"],
        isPaid: true
    }
];
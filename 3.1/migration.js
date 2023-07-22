db = connect('mongodb://localhost/spotipu');

db.songs.insertMany(
    [
        {
            "title": "Gimme Chocolate!!",
            "artist": ["Babymetal"],
            "album": "Babymetal"
        },
        {
            "title": "Karate",
            "artist": ["Babymetal"],
            "album": "Metal Resistance"
        },
        {
            "title": "Starlight",
            "artist": ["Babymetal"],
            "album": "Metal Galaxy"
        },
        {
            "title": "Heavy Rotation",
            "artist": ["JKT48", "AKB48"],
            "album": "Heavy Rotation"
        },
        {
            "title": "River",
            "artist": ["JKT48", "AKB48"],
            "album": "Mahagita - Kamikyokutachi"
        },
        {
            "title": "Kimi no Koto ga Suki Dakara",
            "artist": ["JKT48"],
            "album": "Boku no Taiyou"
        },
        {
            "title": "Shape of You",
            "artist": ["Ed Sheeran"],
            "album": "÷ (Divide)"
        },
        {
            "title": "Believer",
            "artist": ["Imagine Dragons"],
            "album": "Evolve"
        },
        {
            "title": "Uptown Funk",
            "artist": ["Mark Ronson ft. Bruno Mars"],
            "album": "Uptown Special"
        },
        {
            "title": "Havana",
            "artist": ["Camila Cabello ft. Young Thug"],
            "album": "Camila"
        }
    ]
)

db.artists.insertMany(
    [
        {
            "name": "Babymetal",
            "dateOfBirth": null,
            "genres": ["Heavy Metal", "J-Pop", "Alternative Metal"]
        },
        {
            "name": "JKT48",
            "dateOfBirth": null,
            "genres": ["Pop", "J-Pop", "Idol"]
        },
        {
            "name": "AKB48",
            "dateOfBirth": null,
            "genres": ["Pop", "J-Pop", "Idol"]
        },
        {
            "name": "Ed Sheeran",
            "dateOfBirth": "1991-02-17",
            "genres": ["Pop", "R&B", "Folk"]
        },
        {
            "name": "Imagine Dragons",
            "dateOfBirth": null,
            "genres": ["Pop Rock", "Alternative Rock"]
        },
        {
            "name": "Mark Ronson",
            "dateOfBirth": "1975-09-04",
            "genres": ["Pop", "Funk", "R&B"]
        },
        {
            "name": "Camila Cabello",
            "dateOfBirth": "1997-03-03",
            "genres": ["Pop", "Latin"]
        },
        {
            "name": "Young Thug",
            "dateOfBirth": "1991-08-16",
            "genres": ["Hip Hop", "Trap"]
        },
        {
            "name": "Luis Fonsi",
            "dateOfBirth": "1978-04-15",
            "genres": ["Latin Pop"]
        },
        {
            "name": "Billie Eilish",
            "dateOfBirth": "2001-12-18",
            "genres": ["Pop", "Electropop"]
        }
    ]
)

db.popularSongs.insertMany(
    [
        {
            "title": "Gimme Chocolate!!",
            "plays": 1000000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Karate",
            "plays": 750000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Starlight",
            "plays": 500000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Heavy Rotation",
            "plays": 1200000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "River",
            "plays": 900000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Kimi no Koto ga Suki Dakara",
            "plays": 600000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "PA PA YA!!",
            "plays": 850000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Love Trip",
            "plays": 700000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Halloween Night",
            "plays": 1100000,
            "period": "2022-01-01 - 2022-12-31"
        },
        {
            "title": "Koisuru Fortune Cookie",
            "plays": 950000,
            "period": "2022-01-01 - 2022-12-31"
        }
    ]
)
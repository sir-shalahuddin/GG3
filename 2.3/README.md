# Simple Spotify Playlist Server
## How to clone 
1. Clone this [repo](https://github.com/sir-shalahuddin/GG3.git)
2. Change directory
```
cd 2.3
```
4. Download the package 
```
yarn
```
&ensp; or 
```
npm instal .
```
6. Run
```
node index.js
```

## API docs
1. `GET` `/playlist`
Succes response body :
```
{
    "status": "success",
    "data": [
        {
            "songId": "song-6hHUKGJb",
            "title": "Song 1",
            "artists": [
                "Artist 1",
                "Artist 2"
            ],
            "url": "https://open.spotify.com/track/XXXXXXXXXXX",
            "playCount": 2
        },
        {
            "songId": "song-1hDG-pQO",
            "title": "Song 2",
            "artists": [
                "Artist 3"
            ],
            "url": "https://open.spotify.com/track/YYYYYYYYYYY",
            "playCount": 1
        },
        {
            "songId": "song-vmIVz7aR",
            "title": "Song 3",
            "artists": [
                "Artist 4",
                "Artist 5"
            ],
            "url": "https://open.spotify.com/track/ZZZZZZZZZZZ",
            "playCount": 3
        }
    ]
}
```
&ensp; Success response if use query params `order` = `desc`
```
{
    "status": "success",
    "data": [
        {
            "songId": "song-vmIVz7aR",
            "title": "Song 3",
            "artists": [
                "Artist 4",
                "Artist 5"
            ],
            "url": "https://open.spotify.com/track/ZZZZZZZZZZZ",
            "playCount": 3
        },
        {
            "songId": "song-6hHUKGJb",
            "title": "Song 1",
            "artists": [
                "Artist 1",
                "Artist 2"
            ],
            "url": "https://open.spotify.com/track/XXXXXXXXXXX",
            "playCount": 2
        },
        {
            "songId": "song-1hDG-pQO",
            "title": "Song 2",
            "artists": [
                "Artist 3"
            ],
            "url": "https://open.spotify.com/track/YYYYYYYYYYY",
            "playCount": 1
        }
    ]
}
```
3. `POST` /playlist/songs
   Success Response body : 
```
{
    "status": "success",
    "message": "Song 1 added to playlist",
    "data": {
        "songId": "song-QXSXh9p5",
        "title": "Song 1",
        "artists": [
            "Artist 1",
            "Artist 2"
        ],
        "url": "https://open.spotify.com/track/XXXXXXXXXXX",
        "playCount": 0
    }
}
```
5. `GET` /playlist/songs/:id
   Success response body :
```
{
    "status": "success",
    "data": {
        "songId": "song-QXSXh9p5",
        "title": "Song 1",
        "artists": [
            "Artist 1",
            "Artist 2"
        ],
        "url": "https://open.spotify.com/track/XXXXXXXXXXX",
        "playCount": 1
    }
}
```

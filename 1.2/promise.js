function getTrackPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Failed to fetch track."));
            } else {
                const track = {
                    title: "song title",
                    artists: [{ name: "artist name 1" }],
                    duration: 200
                };
                resolve(track);
            }
        }, 2000);
    });
}

const result = { fail: 0, success: 0 }

for (let i = 0; i < 10; i++) {
    getTrackPromise()
        .then(track => {
            console.log("result:", track);
            result.success++
        })
        .catch(error => {
            console.error("error:", error.message);
            result.fail++
        })
        .finally(() => {
            if (i === 9)
                console.log("summary:", result)
        });
}
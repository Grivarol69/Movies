
const API = "https://api.themoviedb.org/3";

export function get(path) {

    return fetch(API + path, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjI4YWUzNGVmOWZiNTk3OTQ2NTg4ZWZhM2E1NjQ4YyIsInN1YiI6IjYxZTE5MjhiYjlhMGJkMDA4ZTFlMDIyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9kEECye-8NCebOnEC2IxtQlHmiUCVIuHkxLozXFWJrE",
                    "Content-Type": "application/json;charset=utf-8"
                },
            }).then((result) => result.json());
}
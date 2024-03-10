import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTAyNjZiYmY3YzIzMGQ5ZTk3YWQ4N2U3MjU2YWFjNiIsInN1YiI6IjY1MTdhZTQ1YTE5OWE2MDBmZTc1ZDU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uAkoewx6YDg6gj7rlzuFIW514BmG992wT4uHhpT6QYg",
  },
});

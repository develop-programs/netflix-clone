import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RmODk5OGZjNTZjMWU3ZDIyZDgyMGYyNjM1NGVhNyIsInN1YiI6IjY1MTdhZTQ1YTE5OWE2MDBmZTc1ZDU5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mw1jAxxl3RN3TSme2Ym1BHj49P1RhUKYOorjBqTeREk`,
  },
});

import { useState }, React from "react";
import ErrorAlert from "../layout/ErrorAlert";
import { listAlbums, listSongs, listMovies } from "../utils/api";
//formatting for listing the different media being searched for. tables and rows? bootstrap cards?

export default function search() {

    const [search, setSearch] = useState("");
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const initialMessage = "Awaiting orders from the human..."
    const [resultsMessage, setResultsMessage] = useState(initialMessage);

    function changeHandler(event) {
        setSearch(event.target.value);
    }

    async function searchHandler(event) {
        event.preventDefault();
        const abortController = new AbortController();
        try {
          const data = await list(
            { search },
            abortController.signal
          );
          setReservations(reservations);
          setDisplay(true);
        } catch (error) {
          setError(error);
        }
        return () => abortController.abort();
      }
}
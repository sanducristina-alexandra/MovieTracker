import { deleteMovie, getMovies } from "@/utils/moviesFunctions";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/router";

const MainPage = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const fetchMovies = async () => {
        try {
            const response = await getMovies();

            setData(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            const response = await deleteMovie(id);

            if (response?.acknowledged) {
                const newData = data.filter((el) => el._id !== id);

                setData(newData);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditMovie = (id) => {
        router.push(`/edit?id=${id}`);
    }

    const handleCreateMovie = () => {
        router.push("/create");
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    if (isLoading) return <Spinner />;

    return (
        <div>
        <div className="p-5 flex flex-wrap gap-5">
            {data?.map((movie) => (
                <div key={movie._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={movie.imageUrl} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.description}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {movie.director}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Genre: {movie.genre}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {movie.year}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {movie.rating}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration: {movie.duration}</p>
                        <button type="button"
                            onClick={() => handleEditMovie(movie._id)}
                            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
                        <button type="button"
                            onClick={() => handleDeleteMovie(movie._id)}
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="p-5 flex flex-wrap gap-5">
            <button 
            onClick={handleCreateMovie}
            type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create</button>
            </div>
        </div>
    );
};

export default MainPage;
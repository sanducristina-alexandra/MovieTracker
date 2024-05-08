import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { defaultMovieValues } from "@/utils/constants";
import { getMovie, updateMovie } from "@/utils/moviesFunctions";
import Spinner from "@/components/Spinner";
import MovieForm from "@/components/MovieForm";

const Edit = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [entry, setEntry] = useState(defaultMovieValues);

  const handleGetMovie = async (id) => {
    try {
        const response = await getMovie(id);

        if (response) {
            setEntry(response);
            setIsLoading(false);
        }
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }

  const onSubmit = async (data) => {
    try {
        const response = await updateMovie(data);

        if (response) {
            router.push("/");
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);
    const id = searchParams.get("id");

    if (!id) {
        router.push("/");
    }

    handleGetMovie(id);
  }, []);

  if (isLoading) return <Spinner />;

  return <MovieForm entry={entry} onSubmit={onSubmit} />;
};

export default Edit;
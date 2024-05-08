import React from "react";
import { defaultMovieValues } from "@/utils/constants";
import { createMovie } from "@/utils/moviesFunctions";
import { useRouter } from "next/router";
import MovieForm from "@/components/MovieForm";
const Create = () => {
    const router = useRouter();
    const entry = defaultMovieValues;
  
    const onSubmit = async (data) => {
      try {
        const response = await createMovie(data);
  
        if (response) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
    return <MovieForm entry={entry} onSubmit={onSubmit} />;
};

export default Create;
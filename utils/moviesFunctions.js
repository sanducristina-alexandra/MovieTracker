export const getMovies = async () => {
    try {
      const response = await fetch("/api/movies", {
        method: "GET",
      });
  
      const data = await response.json();
  
      if (!data) {
        return [];
      }
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteMovie = async (id) => {
    try {
      const response = await fetch(`/api/movies?id=${id}`, {
        method: "DELETE",
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const createMovie = async (entry) => {
    try {
      const response = await fetch("/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getMovie = async (id) => {
    try {
      const response = await fetch(`/api/movies?id=${id}`, {
        method: "GET",
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  export const updateMovie = async (entry) => {
    try {
        const response = await fetch('/api/movies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(entry)
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error)
    }
};
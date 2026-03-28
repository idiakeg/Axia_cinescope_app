const getGenre = (movie, genreList) => {
    return movie?.genre_ids.map((id) => {
        const genre = genreList.find((a) => a.id === id);
        return genre ? genre.name : null;
    });
};

export default getGenre;

const GenreList = ({ genreListName }) => {
    return (
        <span className="px-4 py-[5px] flex items-center rounded-[30px] bg-red-400 font-semibold upper">
            {genreListName}
        </span>
    );
};

export default GenreList;

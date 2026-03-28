const GenrePill = ({ genre_name }) => {
    return (
        <span className="btn_hover bg-green-400 px-3 md:px-4 py-1 rounded-[30px] cursor-pointer">
            {genre_name}
        </span>
    );
};

export default GenrePill;

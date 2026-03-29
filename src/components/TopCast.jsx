import default_avatar from "../assets/default_avatar.png";

const TopCast = ({ image, cast_name, character }) => {
    return (
        <div className="top_cast_card">
            <div className="cast_card w-[150px] flex flex-col items-center leading-tight">
                <div className="w-[75px] md:w-[100px] h-[75px] md:h-[100px] rounded-[50%] overflow-hidden mb-2">
                    <img
                        src={
                            `https://image.tmdb.org/t/p/w300${image}` ||
                            default_avatar
                        }
                        alt="cast member"
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="actor_name capitalize text-[13px] md:text-[16px] font-[600]">
                    {cast_name}
                </span>
                <span className="actor_character text-[11px] md:text-[15px] text-center">
                    as {character}
                </span>
            </div>
        </div>
    );
};

export default TopCast;

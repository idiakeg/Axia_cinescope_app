import { Link } from "react-router-dom";
import test_bg from "../assets/blog921b2d4013-4f56-409c-9c73-e9c2fdd36d5a.jpg";

const Homepage = () => {
    return (
        <div className="mt-[80px] min-h-[calc(100dvh-80px)] py-5 pb-10">
            <div className="container space-y-8 mx-auto w-[95%] md:w-[90%] max-w-[1240px]">
                <div
                    className="hero_section h-[300px] md:h-[350px] rounded-tl-[30px] rounded-bl-[30px] bg-no-repeat bg-center bg-cover flex flex-col gap-5 justify-center px-5 md:px-10 font-Comic text-white"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 60%),
      url(${test_bg})`,
                    }}
                >
                    <h1 className="upper md:text-[45px] font-bold font-Comic leading-tight">
                        DUNE: PART TWO
                    </h1>
                    <div className="genre_and_rating text-[15px] md:text-[20px] flex flex-wrap gap-y-2 gap-x-3">
                        <span className="px-4 py-[5px] rounded-[30px] bg-red-400 font-semibold upper">
                            SCI-FI
                        </span>
                        <span className="px-4 py-[5px] rounded-[30px] bg-red-400 font-semibold upper btn_hover cursor-pointer">
                            ADVENTURE
                        </span>
                        <span className="inline-flex rating rounded-[50%] w-[35px] h-[35px] md:w-[50px] md:h-[50px] bg-red-400 font-semibold upper items-center justify-center text-[17px] md:text-[25px]">
                            8.9
                        </span>
                    </div>
                    <Link
                        to={"/movie_detail"}
                        className="w-fit capitalize py-1 px-5 text-[15px] md:text-[20px] font-medium bg-green-400 rounded-[30px] btn_hover"
                    >
                        View Details
                    </Link>
                </div>
                <div className="genre_pill flex flex-wrap gap-y-2 gap-4 text-white">
                    <span className="btn_hover bg-green-400 px-3 md:px-4 py-1 rounded-[30px] cursor-pointer">
                        Action
                    </span>
                    <span className="bg-green-400 px-3 md:px-4 py-1 rounded-[30px] cursor-pointer">
                        Comedy
                    </span>
                    <span className="bg-green-400 px-3 md:px-4 py-1 rounded-[30px] cursor-pointer">
                        Drama
                    </span>
                </div>
                <div className="trending_movies">
                    {Array.from({ length: 8 }).map((item, index) => (
                        <>
                            {" "}
                            <Link
                                key={index}
                                to={"/movie_detail"}
                                className="block movie_card  border rounded-[20px] overflow-hidden pb-3 hover:-translate-y-1 transition-transform duration-200 hover:shadow-lg hover:scale-105"
                            >
                                <div className="movie_image h-[200px] md:h-[220px] bg-gray-400 relative">
                                    <img
                                        src={test_bg}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <i className="ri-heart-line cursor-pointer absolute bottom-0 right-[10px] text-[25px] font-thin text-white"></i>
                                </div>
                                <div className="px-3 py-1">
                                    <span className="block font-semibold text-center my-[3px] break-words leading-tight">
                                        Inception
                                    </span>
                                    <span className="block text-[14px] text-center">
                                        2010
                                    </span>
                                    <span className="block text-[14px] font-semibold text-right mt-[-22px] ">
                                        <i className="ri-star-fill text-cream"></i>{" "}
                                        8.8
                                    </span>
                                </div>
                            </Link>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Homepage;

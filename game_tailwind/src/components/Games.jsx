import { arrow_left, arrow_right_primary } from "../assets";
import styles from "../style";
import { topGames } from "../constants";

const Games = () => {
    return (
        <section
            className={`${styles.paddingY} mt-32 flex flex-col justify-between items-center
     gap-20  `}
        >
            <div className="flex justify-between items-center gap-28 w-full">
                <h2 className="font-satoshi font-bold xs:text-[48px] text-[40px] text-white xs:leading-[60.8px] leading-[66.8px]">
                    Top Games
                </h2>
                <p className="w-[350px]">
                    If you buy video 2 games, you will receive 1 video game for
                    free, along with a{" "}
                    <span className="text-primary font-semibold">50%</span>{" "}
                    discount.
                </p>
                <div className="flex h-[56px] gap-4">
                    <button>
                        <img
                            src={arrow_left}
                            alt="arrow left"
                            className="p-3 bg-primary/10 w-18 h-full cursor-pointer border border-transparent
                             hover:border-primary/90 transition-all"
                        />
                    </button>
                    <button>
                        <img
                            src={arrow_right_primary}
                            alt="arrow right"
                            className="p-3 bg-primary/10 w-18 h-full cursor-pointer border border-transparent
                            hover:border-primary/90 transition-all"
                        />
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-7">
                {topGames.map((game) => (
                    <div key={game.title}>
                        <img
                            src={game.img}
                            alt={game.title}
                            className="shadow-lg hover:shadow-secondary/50 cursor-pointer transition-all"
                        />
                        <h3 className="hover:text-secondary mt-7 cursor-pointer transition-all">
                            {game.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Games;

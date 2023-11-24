import { creator, creator_twitter, arrow_right_primary } from "../assets";
import { creators } from "../constants";
import styles from "../style";

const Creator = () => {
    return (
        <section
            id="creator"
            className={`${styles.paddingY} flex justify-between
items-stretch gap-20  `}
        >
            <div className="flex flex-1 flex-col justify-center gap-10">
                <h2 className={`${styles.heading2}`}>
                    Jane Wilson, Gaming Creator
                </h2>
                <p>
                    A virtual headset creator is an individual or company that
                    specializes in designing and manufacturing virtual reality
                    headsets, also known as VR headsets.
                </p>
                <a
                    href="#"
                    className="inline-flex flex-row justify-between items-center rounded px-[24px] py-[16px] bg-transparent text-primary border border-primary cursor-pointer w-[184px]"
                >
                    Read my blog
                    <img src={arrow_right_primary} alt="arrow right icon" />
                </a>
                <div className="flex items-center gap-10">
                    <div className="flex">
                        {creators.map((creator, idx) => (
                            <img
                                key={creator.id}
                                src={creator.image}
                                alt={creator.id}
                                className={`${
                                    idx === 0 ? "ml-0" : "ml-[-30px]"
                                }`}
                            />
                        ))}
                    </div>
                    <p>+258K Views</p>
                </div>
            </div>
            <div className="flex -1 relative">
                <img src={creator} alt="creator" />
                <img
                    src={creator_twitter}
                    alt="creator twitter"
                    className="w-[400px] h-[290px] absolute top-[65%] left-[-9%] "
                />
            </div>
        </section>
    );
};
export default Creator;

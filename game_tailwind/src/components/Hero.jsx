import styles from "../style";
import {
    star,
    compass,
    arrow_right,
    twitter,
    instagram,
    discord,
    facebook,
    hero,
    education,
    training,
} from "../assets";
const Hero = () => {
    return (
        <section
            id="hero"
            className={`${styles.paddingY} flex justify-between
             items-stretch`}
        >
            <div className="flex flex-col gap-10 flex-1 ">
                <p className="font-medium text-[16px] uppercase tracking-widest">
                    virtual headsets
                </p>
                <h1 className="font-bold text-[80px] text-white m-0 leading-[96px]">
                    Experience a <br /> new dimention <br /> of reality
                </h1>
                <div className="flex w-[490px] h-[48px] items-start ">
                    <img src={star} alt="star icon" />
                    <p className="ml-4">
                        Step into the future with our virtual headset, come to
                        life right before your eyes
                    </p>
                </div>
                <div className="flex gap-6">
                    <a
                        href="#"
                        className="inline-flex flex-row justify-between items-center rounded px-[24px] py-[16px] bg-primary text-black cursor-pointer w-[184px]"
                    >
                        Visit Store{" "}
                        <img src={arrow_right} alt="arrow right icon" />
                    </a>
                    <a
                        href="#"
                        className="inline-flex flex-row justify-between items-center rounded px-[24px] py-[16px] bg-transparent text-white cursor-pointer w-[145px] border-2 border-white/20 "
                    >
                        <span>
                            <img src={compass} alt="compass icon" />
                        </span>
                        Explore
                    </a>
                </div>
                <div>
                    <h2 className="uppercase font-bold text-[14px] tracking-wider mb-4">
                        follow us
                    </h2>
                    <div className="flex gap-7 ml-2">
                        <a href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={discord} alt="discord" />
                        </a>
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-between items-center ">
                <div>
                    <img
                        src={hero}
                        alt="VR headset"
                        className="h-5/6 w-auto mt-16"
                    />
                    <hr className=" gradient-border"></hr>
                </div>
                <div className="flex justify-around items-center gap-10 mt-auto">
                    <div className="flex gap-3">
                        <img src={education} alt="education" />
                        <p>Enhanced Education</p>
                    </div>
                    <div className="flex gap-3">
                        <img src={training} alt="training" />
                        <p>Training and Simulation</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;

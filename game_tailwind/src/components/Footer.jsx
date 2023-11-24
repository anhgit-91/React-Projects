import { logo, twitter, instagram, facebook, discord } from "../assets";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
    return (
        <section
            className={`${styles.paddingY} ${styles.paddingX} flex flex-col items-center gap-10`}
        >
            <div className="flex justify-between w-full">
                {/* SOCIAL MEDIA */}
                <div className="flex flex-col gap-5">
                    <img src={logo} alt="logo" />
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
                    <p>(+994) 199-28-786</p>
                </div>

                {/* LINKS */}
                <div className="flex flex-1 justify-evenly">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title}>
                            <h3 className="text-white text-[22px] font-satoshi font-bold mb-8 ">
                                {footerlink.title}
                            </h3>
                            <ul>
                                {footerlink.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className="mb-5 cursor-pointer"
                                    >
                                        <a href="#">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* SUBSCRIBE */}
                <div className="flex flex-col flex-wrap gap-8">
                    <h3 className="text-white text-[22px] font-bold">
                        Subscribe Our News Letter
                    </h3>
                    <p>
                        Sure, please provide your email address to subscribe to
                        newsletter
                    </p>
                    <div className="flex items-center mt-12">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="px-6 py-3 w-[300px] h-[50px] bg-transparent outline-none border"
                        />
                        <button className="p-4 w-[130px] h-[50px] bg-primary text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <hr className=" gradient-border w-[1080px]"></hr>
                <p className="mt-5 mb-14">
                    Copyright Ⓒ 2023 VR Game. All Rights Reserved.
                </p>
            </div>
        </section>
    );
};
export default Footer;

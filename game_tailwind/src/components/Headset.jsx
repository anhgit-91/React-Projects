import styles from "../style";
import { features } from "../constants";
import { star, vr } from "../assets";
const Headset = () => {
    return (
        <section
            id="hero"
            className={`${styles.paddingY} flex justify-between
     items-stretch gap-20  `}
        >
            <img src={vr} alt="vr headset" className="object-cover flex-1" />
            <div className="flex felx-1 flex-col">
                <h2 className={`${styles.heading2} mt-10`}>
                    Our Virtual Headsets{" "}
                    <span className="block">Shine with Unique</span>
                    Features!
                </h2>
                <ul className="grid grid-cols-2 gap-6 mt-auto">
                    {features.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-start gap-4 text-[16px]"
                        >
                            <img src={star} alt="star" />
                            <p>{item.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Headset;

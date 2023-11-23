import styles from "./style";

import {
    Header,
    Hero,
    Games,
    Faq,
    Footer,
    Headset,
    Creator,
} from "./components";

const App = () => {
    return (
        <div className="bg-dimPurple w-full  h-screen">
            <div className={`${styles.flexCenter} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header />
                </div>
            </div>
            <div
                className={`bg-dimPurple ${styles.flexCenter} ${styles.paddingX}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div
                className={`bg-dimPurple ${styles.flexCenter} ${styles.paddingX}`}
            >
                <div className={`${styles.boxWidth}`}>
                    <Headset />
                    <Creator />
                    <Games />
                    <Faq />
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default App;

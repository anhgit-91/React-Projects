import styles from "./style";

import { Header, Hero, Games, Faq, Footer } from "./components";

const App = () => {
    return (
        <div className="bg-dimPurple w-full overflow-hidden h-screen">
            <div className={`${styles.flexCenter} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header />
                </div>
            </div>
            <div className={` ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={` ${styles.paddingX} `}>
                <div className={`${styles.boxWidth}`}>
                    <Games />
                    <Faq />
                    <Footer />
                </div>
            </div>
        </div>
    );
};
export default App;

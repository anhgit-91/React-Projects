import { useState } from "react";
import styles from "../style";
import { faq } from "../constants/";

import Questions from "./Questions";
const Faq = () => {
    const [questions, setQuestions] = useState(faq);

    return (
        <section
            className={`${styles.paddingY} flex flex-col justify-center items-center gap-10 mb-20`}
        >
            <div>
                <h2>F.A.Q</h2>
            </div>
            {questions.map((question, idx) => {
                return <Questions key={idx} {...question} />;
            })}
        </section>
    );
};
export default Faq;

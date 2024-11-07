import React, { createContext, useContext, useState } from "react";

/*
    Create a LanguageContext with a state to store the current language (e.g., "English", "Spanish", "French").
    Add a LanguageSwitcher component that lets users switch between different languages.
    Add a Greeting component that changes its displayed text based on the selected language.
Goal: Learn to use context to share language settings and update child components.
*/

const LanguageContext = createContext();

const Language = () => {

    // logic here
    const [currentLang, setCurrentLang] = useState("en")


    return (
        <LanguageContext.Provider value={{currentLang, setCurrentLang}}>
            <LanguageSwitcher />
            <Greeting />
        </LanguageContext.Provider>
    );
}

const LanguageSwitcher = () => {
    const {setCurrentLang} = useContext(LanguageContext);
    return (
        <div>
            <label htmlFor="languages">Choose a language</label>
            <select name="languages" id="language" onChange={e => setCurrentLang(e.target.value)}>
                <option value="en">English</option>
                <option value="fr">France</option>
                <option value="it">Italian</option>
            </select>
        </div>
    );

}

const Greeting = () => {
    const {currentLang} = useContext(LanguageContext)

    // Logic for different greetings based on the selected language
    const greetings = {
        en: "Hello! Welcome to our platform.",
        fr: "Bonjour! Bienvenue sur notre plateforme.",
        it: "Ciao! Benvenuto sulla nostra piattaforma."
    };
    return (
        <div>
                <p>{greetings[currentLang]}</p>
        </div>
    );
}

export default Language;
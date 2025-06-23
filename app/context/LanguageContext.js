"use client";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const pathLang = pathname.split("/")[1];
        if (["ar", "ru"].includes(pathLang)) {
            setLanguage(pathLang);
        } else {
            setLanguage("en");
        }
    }, [pathname]);

    const changeLanguage = (lang) => {
        if (lang === "en") {
            router.push("/");
        } else {
            router.push(`/${lang}`);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);

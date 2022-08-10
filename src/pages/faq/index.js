import React, {Fragment, useEffect, useState} from "react";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loader/Loading";
import TwoSection from "../../components/TwoSection/TwoSection";


const index = () => {
    const [loading, SetLoading] = useState(true);
    const [theme, SetTheme] = useState(true);


    useEffect(() => {
        setInterval(() => {
            SetLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="h-full w-full dark:bg-[#040C18] bg-white pt-1">
            {loading === true ? (
                <Loading/>

            ) : (
                <> 
                <Header SelectedTheme={(e) => SetTheme(e)}/>
                    <div className="container mx-auto">
                        <div className="xl:px-20">
                           
                        </div>
                        <FAQ theme={theme}/>
                    </div>
                    
                    <Footer />
                </>
            )}
       </div>
    );
};

export default index;

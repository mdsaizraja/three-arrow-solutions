import React, {Fragment, useEffect, useState} from "react";
import PortFolio from "../../components/PortfolioText.js/PortFolio";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "./../../components/Loader/Loading";

const index = () => {
    const [loading, SetLoading] = useState(true);
    const [theme, SetTheme] = useState(true);

    useEffect(() => {
        setInterval(() => {
            SetLoading(false);
        }, 2000);
    }, []);

    return (
        <Fragment>
            {loading === true ? (
                <Loading/>
            ) : (
                <div>
                    <div className="xl:px-20">
                        <Header SelectedTheme={(e) => SetTheme(e)}/>
                    </div>
                    <div>
                        <PortFolio
                            theme={theme}
                            marqueeTexts={["Smile Kitchens Smile Kitchens Smile Kitchens"]}
                            direction={"-"}
                        />
                        <PortFolio
                            theme={theme}
                            marqueeTexts={["Brown Opticians Brown Opticians Brown Opticians"]}
                            direction={"+"}
                        />
                        <PortFolio theme={theme} marqueeTexts={["Novo Novo Novo"]} direction={"-"}/>
                        <PortFolio
                            theme={theme}
                            marqueeTexts={[
                                "Yellow Telescope Yellow Telescope Yellow Telescope",
                            ]}
                            direction={"+"}
                        />
                        <PortFolio
                            theme={theme}
                            marqueeTexts={["Acowtancy Acowtancy Acowtancy"]}
                            direction={"-"}
                        />
                        <PortFolio
                            theme={theme}
                            marqueeTexts={["Walker Lovell Walker Lovell Walker Lovell"]}
                            direction={"+"}
                        />
                    </div>
                    <Footer/>
                </div>
            )}
        </Fragment>
    );
};

export default index;

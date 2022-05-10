import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import Lottie from "react-lottie-player";
import lottieJson from "../animation/404.json";

const index = () => {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
    },[])

    return (
        <div>
            <Header />
            <div className='flex justify-center items-center min-h-[90vh]'>
                <Lottie
                    animationData={lottieJson}
                    play
                    className="max-w-[650px] max-h-[650px] xl:mt-0 mt-10"
                />
            </div>
        </div>
    );
}

export default index;
import React from 'react';
import {Wrap} from "./style"

import {data} from "../../data";
import {HeadingTitle} from "../../styles/GlobalComponents";

function Client() {
    return (
        <div className='container mx-auto xl:px-0 px-7'>
            <div className='flex justify-center items-center xl:flex-row flex-col xl: mt-20'>
                <div className='xl:w-1/2'>
                    <HeadingTitle className="Title_div">
                        Clients
                    </HeadingTitle>
                    <p className='dark:text-[#fff] text-black'>
                    Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                    viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
                    Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                    viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
                    Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                    viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
                  </p>
                </div>
              
                <Wrap className='xl:w-1/2 xl:mt-0 mt-10'>
             
                    <div className='orbit'>
                        <div className="center-image">
                            <img src="/images/assets/woman.png" alt=""/>
                            <img src="/images/assets/man.png" alt=""/>
                        </div>
                        <ul>
                            {data.client.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <a href={item.link} target='_blank'>
                                                <img src={item.image} alt={item.image}/>
                                            </a>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Wrap>
            </div>
        </div>
    );
}

export default Client;
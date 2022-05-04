import React from 'react';
import {Wrap} from "./style"

import {data} from "../../data";
import {HeadingTitle} from "../../styles/GlobalComponents";

function Client(props) {
    return (
        <div className='flex justify-center items-center'>
            <p className='w-1/2'>
                <HeadingTitle className="Title_div">
                    Clients
                </HeadingTitle>
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
                Aenean rutrum erat quis eleifend dignissim. Duis in sollicitudin nisi, ac dignissim libero. Phasellus
                viverra sagittis sapien sedinterdum. Fusce ex diam, fringilla commodo ante id, aliquet porta libero.
            </p>
            <Wrap className='w-1/2'>
                <div className='orbit'>
                    <div className="center-image">
                        <img src="/images/assets/woman.png" alt=""/>
                        <img src="/images/assets/man.png" alt=""/>
                    </div>
                    <ul>
                        {data.client.map((item, index) => {
                            return (
                                <li>
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
    );
}

export default Client;
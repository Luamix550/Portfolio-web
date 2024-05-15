"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <h1 className="text-white mb-4 text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                    Hello, I'm {" "}
                </span>
                <TypeAnimation
                    sequence={[
                        'Luis Diaz',
                        2000,
                        'Web development',
                        2000,
                        'Luis Diaz',
                        10000
                    ]}
                    wrapper="span"
                    speed={30}
                    repeat={0}
                />
            </h1>
            <p className="text-white"> Enthusiastic developer focused on web development </p>
        </section>
    );
};

export default HeroSection;

import React from 'react';

const BackgroundColor = () => {
    return (
        <section className="h-screen w-screen absolute top-0 z-[-2]">
            <div className="h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </section>
);
};

export default BackgroundColor;

import Marquee from 'react-fast-marquee';

const Breaking = () => {
    return (
            <div className="p-4 flex bg-[rgb(243,243,243)] gap-4 mt-7 mx-20">
                <button className="bg-[rgb(215,32,80)] px-6 py-2 text-white">Latest</button>
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
    );
};

export default Breaking;
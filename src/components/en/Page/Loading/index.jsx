import React from 'react';

const Index = () => {

    return (
        <><style dangerouslySetInnerHTML={{ __html: "\n  .absolute {\n  position: absolute;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.loader {\n  display: flex;\n  margin: 0.25em 0;\n      height: 100vh;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.dash {\n  animation: dashArray 2s ease-in-out infinite,\n    dashOffset 2s linear infinite;\n}\n\n\n@keyframes dashArray {\n  0% {\n    stroke-dasharray: 0 1 359 0;\n  }\n\n  50% {\n    stroke-dasharray: 0 359 1 0;\n  }\n\n  100% {\n    stroke-dasharray: 359 1 0 0;\n  }\n}\n\n\n@keyframes dashOffset {\n  0% {\n    stroke-dashoffset: 365;\n  }\n\n  100% {\n    stroke-dashoffset: 5;\n  }\n}\n" }} />
            <div className="loader">
                <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
                    <defs className="s-xJBuHA073rTt" xmlns="http://www.w3.org/2000/svg">
                        <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="b">
                            <stop className="s-xJBuHA073rTt" stopColor="#8482be" />
                            <stop className="s-xJBuHA073rTt" stopColor="#8482be" offset={1} />
                        </linearGradient>
                        <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={0} x2={0} y1={64} x1={0} id="c">
                            <stop className="s-xJBuHA073rTt" stopColor="#8482be" />
                            <stop className="s-xJBuHA073rTt" stopColor="#bde8ff" offset={1} />
                            <animateTransform repeatCount="indefinite" keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1" keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1" dur="8s" values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32" type="rotate" attributeName="gradientTransform" />
                        </linearGradient>
                        <linearGradient className="s-xJBuHA073rTt" gradientUnits="userSpaceOnUse" y2={2} x2={0} y1={62} x1={0} id="d">
                            <stop className="s-xJBuHA073rTt" stopColor="#bde8ff" />
                            <stop className="s-xJBuHA073rTt" stopColor="#bde8ff" offset={1} />
                        </linearGradient>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 20,60 L 20,4 M 20,32 L 50,60 M 20,32 L 50,4" className="dash" id="u" pathLength={360} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 28 4 L 11 60 M 20 33 L 36 33 M 45 60 L 28 4" className="dash" id="u" pathLength={360} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 34 20 C 34 0 7 0 7 20 Q 7 35 20 35 Q 34 35 34 44 C 34 64 7 64 7 44" className="dash" id="u" pathLength={360} />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height={64} width={64} className="inline-block">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={8} stroke="url(#c)" d="M 34 20 C 34 0 7 0 7 20 Q 7 35 20 35 Q 34 35 34 44 C 34 64 7 64 7 44" className="dash" id="u" pathLength={360} />
                </svg>
                <div className="loader">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" height={108} width={108} className="inline-block" viewBox="0 0 385.000000 397.000000" preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,397.000000) scale(0.100000,-0.100000)" fill="#8482be" >
                            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={19} stroke="url(#c)" className="dash" id="u" pathLength={360} d="M1624 3481 c-57 -35 -82 -147 -65 -290 7 -53 16 -134 22 -181 5 -47 18 -121 29 -165 10 -44 30 -142 45 -219 14 -76 46 -209 71 -295 25 -86 47 -163 49 -171 2 -8 13 -58 25 -110 11 -52 23 -102 26 -111 3 -11 -21 -33 -83 -75 -93 -62 -93 -62 -175 -110 -69 -42 -122 -81 -325 -246 -225 -182 -314 -285 -316 -364 -1 -44 38 -84 82 -84 16 0 95 23 177 51 161 54 475 208 650 319 53 33 99 60 103 60 3 0 12 -26 20 -57 17 -79 90 -354 98 -373 3 -8 7 -22 8 -30 2 -14 100 -414 127 -518 13 -51 46 -74 74 -51 19 16 18 43 -20 290 -37 243 -50 435 -40 629 12 251 13 275 13 281 1 6 141 101 256 174 70 44 270 174 540 352 105 68 223 145 263 170 58 36 72 50 70 67 -6 38 -37 28 -130 -42 -51 -38 -223 -157 -383 -264 -275 -185 -356 -238 -539 -350 l-78 -48 7 59 c8 71 -15 131 -70 180 -31 27 -43 31 -93 31 -33 0 -86 -10 -125 -24 -46 -15 -70 -19 -72 -12 -3 12 -44 177 -51 211 -3 11 -12 58 -20 105 -9 47 -35 184 -59 305 -54 271 -50 246 -76 445 -30 234 -20 400 25 400 26 0 98 -74 128 -133 65 -130 77 -195 79 -435 1 -154 4 -174 19 -182 27 -14 34 3 55 129 29 182 7 373 -56 491 -55 104 -171 210 -228 210 -14 0 -40 -9 -57 -19z m495 -1567 c39 -28 53 -76 45 -159 l-7 -74 -95 -56 c-52 -31 -98 -53 -103 -48 -4 4 -10 19 -12 33 -3 14 -17 74 -31 134 -15 60 -26 116 -24 125 3 17 125 60 173 60 17 1 41 -6 54 -15z m-249 -146 c11 -46 28 -104 36 -129 29 -92 38 -80 -126 -169 -217 -118 -437 -222 -585 -275 -186 -67 -224 -70 -193 -11 23 43 120 146 188 199 36 28 67 54 70 57 26 28 257 202 340 255 58 37 134 87 170 111 36 23 68 43 71 43 4 1 17 -36 29 -81z m276 -175 c-23 -116 -28 -217 -24 -427 5 -205 1 -249 -16 -163 -2 12 -20 83 -40 157 -19 74 -48 186 -65 248 l-29 114 36 21 c78 47 127 75 135 76 5 1 6 -11 3 -26z" />
                        </g>
                    </svg>
                </div>
            </div>

        </>
    );
}

export default Index;

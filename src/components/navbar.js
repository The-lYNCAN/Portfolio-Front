import s from '../../styles/index/nav.module.css'
import github from '../../public/gitsvg.svg'

const NavBar = () => {
    return(
        <div className={s.con}>
            <h1 className={s.name}>Kushagar Choudhary</h1>
            <ul className={s.list}>
                <li className={s.item}><a target="_blank" href="https://github.com/The-lYNCAN"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="cat" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></li>
                <li className={s.item}><a target="_blank" href="https://www.instagram.com/thisiskushagarchoudhary/">
                    <svg width="25px" height="25px" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid">
                        <g>
                            <path id="insta" d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" fill="#0A0A08"></path>
                        </g>
                    </svg>
                </a>
                </li>
                <li className={s.item}><a href="https://twitter.com/777KChoudhary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="twitter" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a></li>
                <li className={s.item}><a href="https://spadework.tech" target="_blank"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="25px" height="25px" viewBox="0 0 1563.000000 1563.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,1563.000000) scale(0.100000,-0.100000)"
                    fill="#000000" stroke="none">
                    <path id="spadeWork" d="M10 7810 l0 -7810 7810 0 7810 0 0 7810 0 7810 -7810 0 -7810 0 0
                    -7810z m8093 7409 c121 -34 202 -83 302 -184 100 -99 147 -177 187 -305 l22
                    -75 6 -1690 5 -1690 33 -85 c73 -191 218 -342 401 -420 384 -164 814 46 952
                    465 23 70 23 74 29 750 7 762 4 726 83 880 61 118 192 248 307 303 47 23 117
                    49 155 57 78 19 228 21 298 5 217 -48 393 -190 488 -394 64 -136 59 226 57
                    -4608 l-3 -4403 -27 -76 c-40 -114 -92 -195 -182 -284 -90 -89 -172 -138 -296
                    -177 -62 -19 -96 -23 -195 -22 -104 0 -131 4 -200 28 -110 38 -209 102 -293
                    190 -84 88 -122 152 -159 261 l-27 80 -7 570 c-4 314 -9 593 -13 620 -3 28
                    -10 102 -16 165 -82 874 -368 1709 -841 2452 -155 243 -292 426 -524 703 -418
                    498 -654 850 -874 1307 -283 586 -442 1152 -515 1825 -31 280 -37 674 -34
                    1948 4 1392 -1 1289 73 1442 68 138 185 253 330 323 44 21 107 43 140 49 33 6
                    71 13 85 15 47 8 180 -5 253 -25z m-2832 -1994 c191 -49 361 -188 453 -372 69
                    -138 68 -128 77 -748 8 -612 17 -767 69 -1110 137 -909 512 -1785 1084 -2535
                    104 -136 221 -277 261 -315 40 -37 155 -176 261 -315 564 -737 920 -1560 1065
                    -2460 71 -444 81 -740 77 -2285 -4 -1360 1 -1268 -75 -1420 -88 -178 -244
                    -312 -433 -370 -85 -26 -251 -31 -344 -11 -197 44 -384 191 -471 371 -75 156
                    -69 -4 -75 1885 -5 1610 -6 1698 -24 1750 -46 140 -149 286 -259 367 -131 96
                    -238 132 -412 140 -106 4 -129 2 -201 -19 -118 -35 -224 -99 -319 -193 -89
                    -87 -139 -167 -176 -280 -23 -70 -23 -73 -29 -775 l-6 -705 -27 -80 c-36 -108
                    -75 -172 -155 -257 -87 -92 -187 -157 -298 -194 -77 -25 -104 -29 -204 -29
                    -92 0 -130 5 -190 23 -124 39 -206 88 -296 177 -90 89 -142 170 -182 284 l-27
                    76 0 4435 0 4435 28 82 c79 234 295 419 541 463 69 12 208 5 287 -15z m-2845
                    -1990 c259 -49 484 -271 539 -530 22 -106 23 -4773 0 -4892 -46 -245 -255
                    -464 -505 -530 -86 -23 -253 -22 -339 1 -237 64 -423 241 -503 481 l-23 70 -3
                    2385 c-3 2661 -7 2475 67 2625 148 297 450 451 767 390z m11270 0 c259 -49
                    484 -271 539 -530 22 -105 22 -4794 0 -4900 -50 -241 -260 -457 -505 -522 -87
                    -23 -253 -22 -340 1 -234 63 -422 243 -502 481 l-23 70 -3 2385 c-3 2663 -8
                    2471 68 2625 145 296 450 451 766 390z"/>
                    </g>
                    </svg>
                </a></li>
            </ul>
        </div>
    )
}

export default NavBar
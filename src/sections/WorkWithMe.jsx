import React from "react";
import WorkWithMeImg from '../assets/images/workwithme.webp';

const WorkWithMeItems = ({ ImageSrc, TitleH1, TitleH2, SpanH1, Link }) => {
    return (
        <section id="work-with-me" className="work-with-me container py-[200px] max-w-full flex items-center flex-col
                            xxs:items-center xxs:pt-[50px] xxs:pb-[150px] xxs:p-[30px] xxs:flex-col
                            xl:pt-[13em] xl:pb-[15.1em] ">
            <div className="work-with-me-img flex-basis-[45%] ml-[50px] 
                            xxs:ml-[-5px] xxs:mb-[-60px] xxs:order-1
                            m:ml-0
                            xl:mr-[60%] xl:mt-[-20em] ">
                <img
                    src={ImageSrc}
                    alt="Imagen que representa trabajar conmigo"
                    className="w-[550px] h-[280px] rounded-[20px] shadow-[0_0_30px_rgba(190,190,190,0.8),0_0_40px_rgba(131,131,131,0.6),0_0_50px_rgba(102,102,102,0.4),0_0_60px_rgba(94,94,94,0.4)] animate-[border-img_1.5s_infinite_alternate]
                                xxs:w-[50em] xxs:h-[10em] xxs:mt-5 xxs:ml-1
                                xx:h-[14em]
                                xs:h-[15em] xs:w-[23.5em] xs:ml-1   
                                s:h-[17em] s:w-[85%] s:ml-10
                                md:w-[30em] md:h-[18em] md:mr-10
                                xl:w-[40em] xl:h-[20em] xl:ml-0 "
                />
            </div>
            <div className="flex w-full">
                <div className="work-with-me-txt flex-basis-[50%] text-[18px]
                                xxs:items-center xxs:content-center xxs:text-center xxs:mb-[30px] xxs:mt-[-20] xxs:ml-[-2em] xxs:mr-[-2em] xxs:text-[0.9em]
                                s:ml-1
                                md:ml-[7.5em]
                                lg:ml-[13em]
                                m:ml-[25%]
                                xl:ml-[50%] xl:text-left">
                    <h1>
                        <span>{TitleH1}</span>
                    </h1>
                    <h2 className="text-[40px] text-[#fdfeff] leading-[1.4]">
                        {TitleH2} <span>{SpanH1}</span>
                    </h2>
                    <ul className="xxs:mt-2 xxs:mb-2 " >
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)]
                                        xxs:mt-2 xxs:mb-2">
                            - Estar pendiente de los <span>Directos</span> en mis{" "}
                            <a href="#redes">
                                <span>Redes Sociales.</span>
                            </a>
                        </li>
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)] 
                                        xxs:mt-2 xxs:mb-2">
                            - Reglas para el <span>Trabajo</span> en el{" "}
                            <a href={Link} target="_blank" rel="noopener noreferrer">
                                <span>Grupo de Editores.</span>
                            </a>
                        </li>
                        <li className="text-[#fdfeff] text-shadow-[0_0_8px_rgba(190,190,190,0.8),0_0_12px_rgba(131,131,131,0.6),0_0_17px_rgba(255,255,255,0.4),0_0_22px_rgba(94,94,94,0.4)]
                                        xxs:mt-2 xxs:mb-2">
                            - Tener conocimientos en <span>Programas de Edición</span> como{" "}
                            <span>CapCut</span> u otros <span>Editores.</span>
                        </li>
                    </ul>
                </div>
            </div>
            <a
                href={Link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-1 ml-[15em] mt-[-4em] bg-[#12121cd2] text-[#fdfeff] font-extrabold rounded-[5px] inline-block transition-transform duration-300 
                            xxs:text-center xxs:whitespace-nowrap xxs:w-auto xxs:mr-[15em] xxs:mt-0 xxs:mb-5 xxs:pl-[3em] xxs:pr-[3em] xxs:pt-[1em] xxs:pb-[1em] xxs:text-xs
                            xs:pl-[3em] xs:pr-[3em] xs:pt-[1em] xs:pb-[1em]
                            xl:ml-[35%] xl:mt-[-2em]  xl:mb-[4em]  "
            >
                Grupo de Editores
            </a>
        </section>
    );
};

const WorkWithMeContent = () => {
    const TitleH1 = '¿Sabes Sobre Edición?';
    const TitleH2 = 'Trabaja';
    const SpanH1 = 'Conmigo.';
    const Link = 'https://chat.whatsapp.com/IfV2sveneqLAuYNjl9iGvu';

    return (
        <WorkWithMeItems
            TitleH1={TitleH1}
            TitleH2={TitleH2}
            SpanH1={SpanH1}
            Link={Link}
            ImageSrc={WorkWithMeImg}
        />
    );
};

export default WorkWithMeContent;
"use client"
import { useState } from "react";

const Accordion: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Define o estado como número ou null

    const toggleAccordion = (index: number): void => {
        // Define o tipo do parâmetro como number
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className="flex flex-col items-start gap-8 py-20">
            <div className="w-full flex flex-col items-start gap-8 border-[#FF6600] border-2">
                <button className="py-4" onClick={() => toggleAccordion(0)}>
                    <h2 className="text-xl font-bold border-[#FF6600] border-2">Qual o Prazo de Entrega?</h2>
                </button>
                <div className={`overflow-hidden transition-all duration-500 border-[#FF6600] border-2 ${openIndex === 0 ? 'max-h-[200px]' : 'max-h-0'}`}>
                    {openIndex === 0 && (
                        <p className="text-base mx-auto md:w-[540px] w-[320px] text-left text-[#1e1e1e]">Prazo de Entrega de até 5 dias Úteis.</p>
                    )}
                </div>

                <button className="py-4" onClick={() => toggleAccordion(2)}>
                    <h2 className="text-xl font-bold">Qual a Quantidade Mínima de Pedidos?</h2>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openIndex === 2 ? 'max-h-[260px]' : 'max-h-0'}`}>
                    {openIndex === 2 && (
                        <p className="text-base mx-auto md:w-[720px] w-[320px] text-left text-[#1e1e1e]">A Quantidade Miníma de Pedidos é de 1000 Tijolos.</p>
                    )}
                </div>
            </div>
        </section>

    );
};

export default Accordion;
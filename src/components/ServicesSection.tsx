
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const serviceItems = [
  {
    title: 'Ativações Promocionais',
    description: 'Nossas ativações promocionais são planejadas para destacar sua marca e gerar experiências únicas para seus clientes e colaboradores. Conte com nossa expertise para impulsionar seu negócio!',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Eventos Corporativos Memoráveis',
    description: 'Planejamos e executamos eventos corporativos memoráveis, garantindo que cada detalhe seja pensado para proporcionar uma experiência única e impactante!',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Produções Artísticas Personalizadas',
    description: 'Criamos produções artísticas personalizadas que agregam valor à sua marca e encantam seu público-alvo. Deixe-nos transformar sua ideia em realidade!',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  }
];

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="oque-fazemos" ref={ref} className="bg-white text-invoga-blue py-20 px-4">
      <div className="container mx-auto">
        <h2 className={`section-title text-invoga-blue ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          O que fazemos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className={`service-card text-center ${inView ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-invoga-blue p-4 rounded-full inline-flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-invoga-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-invoga-blue">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

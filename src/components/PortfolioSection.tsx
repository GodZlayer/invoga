
import React from 'react';
import { useInView } from 'react-intersection-observer';

const portfolioItems = [
  {
    id: 1,
    image: '/images/portfolio-1.jpeg',
    alt: 'Portfolio Image 1',
    text: 'A GENTE LEVA'
  },
  {
    id: 2,
    image: '/images/portfolio-2.jpeg',
    alt: 'Portfolio Image 2',
    text: 'SE NÃO ENCANTAR'
  },
  {
    id: 3,
    image: '/images/portfolio-3.jpeg',
    alt: 'Portfolio Image 3',
    text: 'AQUI SUA MARCA TEM'
  },
  {
    id: 4,
    image: '/images/portfolio-4.jpeg',
    alt: 'Portfolio Image 4',
    text: 'seu marketing promocional!'
  },
  {
    id: 5,
    image: '/images/portfolio-5.jpeg',
    alt: 'Portfolio Image 5',
    text: 'ASSOCIE SUA MARCA'
  },
  {
    id: 6,
    image: '/images/portfolio-6.jpg',
    alt: 'Portfolio Image 6',
    text: 'ENDOMARKETING'
  }
];

const PortfolioSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" ref={ref} className="bg-invoga-yellow py-20 px-4">
      <div className="container mx-auto">
        <h2 className={`section-title text-invoga-blue ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          O que já realizamos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Changed to lg:grid-cols-2 */}
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item shadow-lg ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full object-cover rounded-lg" // Removed fixed height
              />
              <div className="portfolio-overlay">
                <span className="text-white text-lg font-bold text-center">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contato" className="bg-invoga-blue text-white py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Primeira coluna: Título, texto, subtítulo, Instagram */}
        <div className="flex flex-col justify-center">
          <h2 className="text-white text-3xl md:text-4xl font-gadies font-normal text-center mb-2">Vamos ficar inVoga?</h2>
          <p className="text-white text-center max-w-2xl mx-auto text-lg font-normal mb-4">
            A Invoga nasceu com o propósito de transformar a comunicação entre empresa e cliente através do marketing promocional, criando experiências nos pequenos detalhes e com um toque de arte. Acreditamos em experiências para conectar, engajar e agregar mais valor para o seu negócio.
          </p>
          <h3 className="text-white font-gadies text-2xl md:text-3xl font-normal mb-4 text-center">Venha saber como e ser inVoga!</h3>
          <div className="w-full max-w-md mx-auto">
            {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
            <div className="elfsight-app-733cb70a-af4f-4919-9311-4360a3fc7261" data-elfsight-app-lazy></div>
          </div>
        </div>
        {/* Segunda coluna: Formulário + contatos + ícones */}
        <div className="flex flex-col gap-6 md:pl-8">
          {/* Contatos e ícones */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="flex flex-col gap-1 text-right md:order-2 md:ml-auto">
              <a href="https://www.instagram.com/invogamkt" target="_blank" rel="nofollow" className="text-white text-lg hover:text-invoga-yellow transition-colors">@invogamkt</a>
              <a href="https://wa.me/553196336773" target="_blank" rel="nofollow" className="text-white text-lg hover:text-invoga-yellow transition-colors">31 99633-6773</a>
              <a href="mailto:contato@invogamarketing.com.br" target="_blank" rel="nofollow" className="text-white text-lg hover:text-invoga-yellow transition-colors">contato@invogamarketing.com.br</a>
            </div>
            <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:order-1">
              <a href="https://www.instagram.com/invogamkt/" target="_blank" rel="noopener" title="Instagram" className="text-white hover:text-invoga-yellow transition-colors">
                {/* Instagram SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z" fill="currentColor"></path></svg>
              </a>
              <a href="https://wa.me/553196336773" target="_blank" rel="noopener" title="Whatsapp" className="text-white hover:text-invoga-yellow transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z" fill="currentColor"></path></svg>
              </a>
              <a href="mailto:contato@invogamarketing.com.br" target="_blank" rel="noopener" title="E-mail" className="text-white hover:text-invoga-yellow transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21.75 3H2.25C1.00734 3 0 4.00734 0 5.25V18.75C0 19.9927 1.00734 21 2.25 21H21.75C22.9927 21 24 19.9927 24 18.75V5.25C24 4.00734 22.9927 3 21.75 3ZM21.75 5.25V7.16273C20.699 8.01862 19.0234 9.3495 15.4412 12.1545C14.6518 12.7754 13.0881 14.2672 12 14.2498C10.9121 14.2674 9.34786 12.7752 8.55877 12.1545C4.97719 9.34992 3.30117 8.01877 2.25 7.16273V5.25H21.75ZM2.25 18.75V10.0499C3.32409 10.9054 4.8473 12.1059 7.16897 13.9239C8.19352 14.7304 9.98775 16.5108 12 16.5C14.0024 16.5108 15.7739 14.7563 16.8306 13.9243C19.1522 12.1064 20.6759 10.9055 21.75 10.05V18.75H2.25Z" fill="currentColor"></path></svg>
              </a>
            </div>
          </div>
          {/* Formulário */}
          <form className="space-y-4 bg-white p-8 rounded-lg shadow-xl text-invoga-blue w-full max-w-lg mx-auto">
            <div>
              <label htmlFor="nome" className="block text-sm mb-1 font-medium">Nome*</label>
              <input type="text" id="nome" className="form-input text-invoga-blue w-full" required placeholder="Nome e Sobrenome" />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm mb-1 font-medium">Número de Telefone*</label>
              <input type="tel" id="telefone" className="form-input text-invoga-blue w-full" required placeholder="31 99999-9999" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-1 font-medium">E-mail*</label>
              <input type="email" id="email" className="form-input text-invoga-blue w-full" required placeholder="E-mail" />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm mb-1 font-medium">Mensagem*</label>
              <textarea id="mensagem" rows={5} className="form-input text-invoga-blue w-full" required placeholder="Entre sua mensagem"></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="yellow-button w-full md:w-auto">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

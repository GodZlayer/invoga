
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-invoga-blue py-8 px-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        {/* Footer Logo */}
        <img
          src="/images/footer-logo.png"
          alt="InVoga Marketing Promocional Logo"
          className="h-16 mb-6"
        />
        
        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6">
          <a
            href="#"
            className="text-white hover:text-invoga-yellow transition-colors"
            aria-label="Go to Instagram page"
          >
            {/* Instagram Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-invoga-yellow transition-colors"
            aria-label="Go to Whatsapp page"
          >
            {/* Whatsapp Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-whatsapp"><path d="M23 11.857C23 6.293 18.707 2 13.143 2S3.286 6.293 3.286 11.857c0 2.89 1.16 5.517 3.043 7.457L3 22l4.686-1.23c1.883 1.883 4.567 3.086 7.457 3.086C18.707 23.857 23 19.564 23 14z"></path><path d="M17.429 15.429s-.714-.357-1.071-.536c-.357-.179-.714-.357-1.071.357s-.714.893-1.071.893-1.071-.179-2.143-.714c-1.428-.714-2.38-2.143-2.678-2.5c-.3-.357-.036-.536.25-.821.321-.321.714-.893 1.071-1.25s.464-.714.643-1.071c.179-.357.089-.678-.036-.893s-1.071-2.5-1.428-3.214c-.357-.714-.714-.536-1.071-.536-.357 0-.714-.036-1.071-.036s-.714.036-1.071.357c-.357.357-1.428 1.786-1.428 4.286s1.428 4.999 1.786 5.357c.357.357 2.857 4.643 5.357 5.714s5.714 1.428 6.428 1.071c.714-.357 1.071-1.786 1.071-2.143s-.357-.714-.678-1.071c-.321-.357-1.071-1.428-1.428-1.786z"></path></svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-invoga-yellow transition-colors"
            aria-label="Go to Mail page"
          >
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-white text-center text-sm">
          <p>© {currentYear} InVoga Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

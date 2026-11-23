import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';

export function FloatingWhatsAppButton() {
  const {t} = useLanguage();

  const chatUrl = `https://wa.me/${BUSINESS_LINKS.whatsappNumber}?text=${encodeURIComponent(
    t.floating.whatsappGreeting,
  )}`;

  return (
    <div className="fixed bottom-4 left-4 z-30 sm:bottom-7 sm:left-7">
      <a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsappAria}
        title={t.floating.whatsappTitle}
        className="group relative inline-flex h-12 w-12 items-center justify-center border border-[#D4AF5F]/65 bg-gradient-to-br from-[#146B43] to-[#0E4F31] text-[#FBF7EE] shadow-[0_14px_30px_rgba(7,14,26,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:from-[#167A4D] hover:to-[#105736] hover:shadow-[0_16px_34px_rgba(20,107,67,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F] sm:h-13 sm:w-13"
      >
        {/* Subtle pulse ring (respects prefers-reduced-motion) */}
        <span
          aria-hidden="true"
          className="wa-pulse-ring pointer-events-none absolute inset-0 border border-[#D4AF5F]/55 bg-[#25D366]/18"
        />

        {/* Recognizable WhatsApp Emblem SVG */}
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="relative z-10 h-6 w-6 fill-current sm:h-[26px] sm:w-[26px]"
        >
          <path d="M16.004 3.2c-7.058 0-12.8 5.742-12.8 12.8 0 2.256.592 4.46 1.716 6.404L3.09 29.07l6.824-1.788A12.746 12.746 0 0 0 16.004 28.8c7.058 0 12.8-5.742 12.8-12.8s-5.742-12.8-12.8-12.8Zm0 23.36a10.52 10.52 0 0 1-5.366-1.468l-.384-.228-4.05 1.062 1.082-3.946-.25-.398a10.525 10.525 0 0 1-1.612-5.582c0-5.826 4.748-10.56 10.58-10.56 5.828 0 10.56 4.734 10.56 10.56 0 5.828-4.732 10.56-10.56 10.56Zm5.792-7.916c-.316-.16-1.874-.926-2.164-1.03-.292-.106-.502-.16-.714.158-.212.318-.82 1.032-1.004 1.242-.186.212-.37.238-.688.08-.316-.16-1.338-.494-2.55-1.574-.942-.84-1.578-1.878-1.764-2.196-.184-.318-.02-.49.14-.648.142-.142.316-.37.476-.556.158-.186.21-.318.316-.53.106-.212.054-.396-.026-.556-.08-.158-.714-1.72-.978-2.356-.258-.62-.52-.536-.714-.546-.186-.01-.396-.01-.608-.01s-.556.08-.846.396c-.292.318-1.11 1.084-1.11 2.646s1.136 3.07 1.294 3.282c.16.212 2.238 3.418 5.42 4.792.758.328 1.348.522 1.808.668.76.242 1.452.208 1.998.126.61-.09 1.874-.766 2.138-1.506.264-.74.264-1.376.186-1.508-.08-.132-.29-.212-.608-.37Z" />
        </svg>
      </a>
    </div>
  );
}

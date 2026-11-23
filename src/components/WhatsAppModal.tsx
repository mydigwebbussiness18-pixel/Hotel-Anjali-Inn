import {ArrowUpRight, MessageCircle, X} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {FormEvent, useEffect, useState} from 'react';
import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';

interface WhatsAppModalProps {
  open: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'hotel_anjali_whatsapp_number';

export function WhatsAppModal({open, onClose}: WhatsAppModalProps) {
  const {t} = useLanguage();
  const [phoneInput, setPhoneInput] = useState<string>(BUSINESS_LINKS.whatsappNumber);
  const [selectedTplId, setSelectedTplId] = useState('stay');
  const [customMessage, setCustomMessage] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  const activeTemplate =
    t.whatsappModal.templates.find((tpl) => tpl.id === selectedTplId) ??
    t.whatsappModal.templates[0];
  const messageValue = customMessage ?? activeTemplate.text;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setPhoneInput(saved);
    } catch {
      // Ignore storage access errors
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleLaunchWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    const digits = phoneInput.replace(/[^\d]/g, '');
    if (digits.length < 10) {
      setHasError(true);
      return;
    }
    setHasError(false);
    try {
      localStorage.setItem(STORAGE_KEY, digits);
    } catch {
      // Ignore storage access errors
    }
    const normalized = digits.length === 10 ? `91${digits}` : digits;
    const url = `https://wa.me/${normalized}?text=${encodeURIComponent(messageValue.trim())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={onClose}
            className="fixed inset-0 bg-[#060C18]/78 backdrop-blur-sm"
          />

          <motion.div
            initial={{opacity: 0, y: 16, scale: 0.98}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 12, scale: 0.98}}
            transition={{duration: 0.24, ease: [0.16, 1, 0.3, 1]}}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
            className="relative z-10 w-full max-w-lg border border-[#D4AF5F]/40 bg-[#FBF7EE] dark:bg-[#0D192E] p-6 text-[#0B1528] dark:text-[#FBF7EE] shadow-[0_28px_64px_rgba(3,7,15,0.65)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#D4AF5F]/28 pb-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF5F]/45 bg-gradient-to-br from-[#146B43] to-[#105736] text-[#FBF7EE]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                    {t.whatsappModal.eyebrow}
                  </p>
                  <h3 id="whatsapp-modal-title" className="font-serif text-2xl font-medium text-[#0B1528] dark:text-[#FBF7EE]">
                    {t.whatsappModal.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.whatsappModal.closeAria}
                className="inline-flex h-9 w-9 items-center justify-center border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] text-[#0B1528] dark:text-[#FBF7EE] transition-all duration-200 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#091326] hover:to-[#132544] dark:hover:from-[#D4AF5F] dark:hover:to-[#B68B3C] hover:text-[#F4DFB0] dark:hover:text-[#070E1A] hover:shadow-[0_6px_16px_rgba(9,19,38,0.24)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleLaunchWhatsApp} noValidate className="mt-6 space-y-5">
              <div>
                <span className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85">
                  {t.whatsappModal.selectTopicLabel}
                </span>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {t.whatsappModal.templates.map((tpl) => (
                    <button
                      key={tpl.id}
                      type="button"
                      onClick={() => {
                        setSelectedTplId(tpl.id);
                        setCustomMessage(null);
                      }}
                      className={`px-3.5 py-2 text-xs font-medium transition-all duration-200 ${
                        selectedTplId === tpl.id && customMessage === null
                          ? 'bg-gradient-to-r from-[#091326] to-[#132544] dark:from-[#D4AF5F] dark:to-[#B68B3C] text-[#FBF7EE] dark:text-[#070E1A] dark:font-semibold shadow-[0_6px_16px_rgba(9,19,38,0.28)] hover:from-[#B68B3C] hover:to-[#D4AF5F] hover:text-[#070E1A]'
                          : 'border border-[#D4AF5F]/30 bg-[#F3EBDC]/80 dark:bg-[#070E1A] text-[#0B1528]/80 dark:text-[#FBF7EE]/82 hover:border-[#D4AF5F] hover:bg-[#F3EBDC] dark:hover:bg-[#132544]'
                      }`}
                    >
                      {tpl.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label
                  htmlFor="wa-phone"
                  className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85"
                >
                  {t.whatsappModal.phoneLabel}
                </label>
                <input
                  id="wa-phone"
                  type="tel"
                  inputMode="numeric"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder={t.whatsappModal.phonePlaceholder}
                  className="mt-2 w-full border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-4 py-3 text-sm text-[#0B1528] dark:text-[#FBF7EE] placeholder:text-[#0B1528]/38 dark:placeholder:text-[#FBF7EE]/40 focus:border-[#146B43] dark:focus:border-[#25D366] focus:outline-none"
                />
                <p className="mt-1.5 text-[11px] text-[#0B1528]/58 dark:text-[#FBF7EE]/60">
                  {t.whatsappModal.phoneHint}
                </p>
              </div>

              <div>
                <label
                  htmlFor="wa-message"
                  className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85"
                >
                  {t.whatsappModal.messageLabel}
                </label>
                <textarea
                  id="wa-message"
                  rows={3}
                  value={messageValue}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="mt-2 w-full border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-4 py-3 text-sm text-[#0B1528] dark:text-[#FBF7EE] focus:border-[#146B43] dark:focus:border-[#25D366] focus:outline-none"
                />
              </div>

              {hasError && (
                <p role="alert" className="text-xs font-medium text-[#9A3412] dark:text-[#F4A28C]">
                  {t.whatsappModal.errorInvalidPhone}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B1528] dark:text-[#F4DFB0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0B1528] hover:bg-[#0B1528] hover:text-[#F4DFB0] hover:shadow-[0_8px_20px_rgba(11,21,40,0.22)]"
                >
                  {t.whatsappModal.cancel}
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-[#D4AF5F]/45 bg-gradient-to-r from-[#146B43] to-[#105736] px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:from-[#167A4D] hover:to-[#115F3A] hover:shadow-[0_12px_26px_rgba(20,107,67,0.36)]"
                >
                  <span>{t.whatsappModal.submit}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

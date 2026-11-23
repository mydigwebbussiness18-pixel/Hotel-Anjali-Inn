import {ArrowUpRight, CheckCircle2, Instagram, MapPin, MessageCircle, Navigation} from 'lucide-react';
import {motion} from 'motion/react';
import {FormEvent, useState} from 'react';
import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {SectionDivider} from './SectionDivider';
import {TiltCard} from './TiltCard';

type TopicKey = 'stay' | 'dining' | 'event';

interface LocationContactSectionProps {
  onOpenWhatsApp: () => void;
}

export function LocationContactSection({onOpenWhatsApp}: LocationContactSectionProps) {
  const {t} = useLanguage();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topicKey, setTopicKey] = useState<TopicKey>('stay');
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setHasError(true);
      return;
    }
    setHasError(false);
    setSubmitted(true);
  };

  const selectedTopicLabel = t.locationContact.topics[topicKey];

  return (
    <>
      {/* Location & Directions Section */}
      <section
        id="location"
        className="surface-champagne-cream py-20 sm:py-28 transition-colors duration-300"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              className="flex min-w-0 flex-col justify-between lg:col-span-5"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                  {t.locationContact.locationEyebrow}
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
                  {t.locationContact.locationHeadline}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#0B1528]/75 dark:text-[#FBF7EE]/78">
                  {t.locationContact.locationDescription}
                </p>
              </div>

              <div className="mt-10 space-y-4 border-t border-[#D4AF5F]/30 pt-8">
                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border border-[#0B1528] dark:border-[#D4AF5F]/45 bg-gradient-to-r from-[#091326] to-[#132544] px-6 py-4 text-[#FBF7EE] shadow-[0_12px_28px_-10px_rgba(9,19,38,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:from-[#B68B3C] hover:to-[#D4AF5F] hover:text-[#070E1A] hover:shadow-[0_14px_30px_rgba(212,175,95,0.34)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Navigation className="h-4 w-4 shrink-0 text-[#D4AF5F] transition-colors group-hover:text-[#070E1A]" />
                    <span className="min-w-0 break-words text-xs font-semibold tracking-wider uppercase">
                      {t.locationContact.openGoogleMaps}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#0E1B33] px-6 py-4 text-[#0B1528] dark:text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_12px_28px_rgba(212,175,95,0.32)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Instagram className="h-4 w-4 shrink-0 text-[#9A712C] dark:text-[#F4DFB0] transition-colors group-hover:text-[#070E1A]" />
                    <span className="min-w-0 break-words text-xs font-semibold tracking-wider uppercase">
                      Instagram · {BUSINESS_LINKS.instagramHandle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Clean Architectural Map & Profile Preview Card */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
              className="min-w-0 lg:col-span-7"
            >
              <TiltCard className="h-full" maxTilt={3.5} liftPx={7}>
                <div className="card-luxury-lift-dark relative flex h-full min-h-[360px] flex-col justify-between overflow-hidden border border-[#D4AF5F]/32 bg-[#091326] dark:bg-[#060C18] p-8 text-[#FBF7EE] sm:p-10">
                  {/* Subtle topographic architectural grid pattern */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-22"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(212,175,95,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(212,175,95,0.22) 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                  />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#D4AF5F]/22 pb-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#D4AF5F]/55 bg-[#0D192E] text-[#F4DFB0]">
                        <MapPin className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-serif text-2xl text-[#FBF7EE]">Hotel Anjali Inn</p>
                        <p className="text-xs tracking-wider uppercase text-[#F4DFB0]/70">
                          {t.locationContact.profileCardSub}
                        </p>
                      </div>
                    </div>
                    <a
                      href={BUSINESS_LINKS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold tracking-wider uppercase text-[#F4DFB0] underline underline-offset-4 hover:text-[#FBF7EE]"
                    >
                      {t.locationContact.viewProfile}
                    </a>
                  </div>

                  <div className="relative z-10 my-auto py-8">
                    <p className="font-serif text-3xl font-normal leading-snug text-[#FBF7EE] sm:text-4xl">
                      {t.locationContact.mapCardHeadline}
                    </p>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#FBF7EE]/75">
                      {t.locationContact.mapCardDescription}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#D4AF5F]/22 pt-6 text-xs text-[#F4DFB0]/80">
                    <span>{t.locationContact.mapCardTag1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.locationContact.mapCardTag2}</span>
                    <span aria-hidden="true">·</span>
                    <span>{BUSINESS_LINKS.instagramHandle}</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider
        variant="crest"
        from="#F3EBDC"
        to="#FBF7EE"
        darkFrom="#0D182C"
        darkTo="#091224"
      />

      {/* Contact & Inquiry Section */}
      <section id="contact" className="surface-ivory-silk py-20 sm:py-28 lg:py-32 transition-colors duration-300">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
                {t.locationContact.contactEyebrow}
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
                {t.locationContact.contactHeadline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#0B1528]/75 dark:text-[#FBF7EE]/78">
                {t.locationContact.contactDescription}
              </p>

              <div className="mt-10 space-y-3 border-t border-[#D4AF5F]/28 pt-8">
                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="group flex w-full items-center justify-between gap-4 border border-[#D4AF5F]/45 bg-gradient-to-r from-[#146B43] to-[#105736] px-6 py-4 text-[#FBF7EE] shadow-[0_12px_28px_-10px_rgba(16,87,54,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:from-[#167A4D] hover:to-[#115F3A] hover:shadow-[0_14px_30px_rgba(20,107,67,0.42)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#F4DFB0]" />
                    <span className="min-w-0 break-words text-left text-xs font-semibold tracking-wider uppercase">
                      {t.locationContact.inquireWhatsApp}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#0E1B33] px-6 py-4 text-[#0B1528] dark:text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_12px_28px_rgba(212,175,95,0.3)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Instagram className="h-4 w-4 shrink-0 text-[#9A712C] dark:text-[#F4DFB0] transition-colors group-hover:text-[#070E1A]" />
                    <span className="min-w-0 break-words text-xs font-semibold tracking-wider uppercase">
                      {t.locationContact.followInstagram} · {BUSINESS_LINKS.instagramHandle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-4 border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#0E1B33] px-6 py-4 text-[#0B1528] dark:text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_12px_28px_rgba(212,175,95,0.3)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-[#9A712C] dark:text-[#F4DFB0] transition-colors group-hover:text-[#070E1A]" />
                    <span className="min-w-0 break-words text-xs font-semibold tracking-wider uppercase">
                      {t.locationContact.googleMapsReviews}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7">
              <div className="border border-[#D4AF5F]/32 bg-[#F3EBDC]/60 dark:bg-[#0E1B33]/85 p-6 shadow-[0_18px_45px_-20px_rgba(11,21,40,0.16)] sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-[#9A712C] dark:text-[#F4DFB0]" />
                    <h3 className="mt-4 font-serif text-3xl text-[#0B1528] dark:text-[#FBF7EE]">
                      {t.locationContact.submittedTitle}
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#0B1528]/72 dark:text-[#FBF7EE]/78">
                      {t.locationContact.submittedBodyBefore}
                      {name}
                      {t.locationContact.submittedBodyMiddle}
                      {selectedTopicLabel.toLowerCase()}
                      {t.locationContact.submittedBodyAfter}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setContact('');
                        setMessage('');
                      }}
                      className="mt-8 border border-[#0B1528] dark:border-[#D4AF5F] bg-[#FFFDF8] dark:bg-[#070E1A] px-6 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B1528] dark:text-[#F4DFB0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#091326] hover:to-[#132544] dark:hover:from-[#D4AF5F] dark:hover:to-[#B68B3C] hover:text-[#F4DFB0] dark:hover:text-[#070E1A] hover:shadow-[0_10px_24px_rgba(9,19,38,0.26)]"
                    >
                      {t.locationContact.sendAnother}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <span className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85">
                        {t.locationContact.inquiryTypeLabel}
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {(['stay', 'dining', 'event'] as const).map((key) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setTopicKey(key)}
                            className={`max-w-full px-4 py-2 text-xs font-medium sm:whitespace-nowrap transition-all duration-200 ${
                              topicKey === key
                                ? 'bg-gradient-to-r from-[#091326] to-[#132544] dark:from-[#D4AF5F] dark:to-[#B68B3C] text-[#FBF7EE] dark:text-[#070E1A] dark:font-semibold shadow-[0_6px_16px_rgba(9,19,38,0.28)] hover:from-[#B68B3C] hover:to-[#D4AF5F] hover:text-[#070E1A]'
                                : 'border border-[#D4AF5F]/30 bg-[#FFFDF8] dark:bg-[#070E1A] text-[#0B1528]/78 dark:text-[#FBF7EE]/82 hover:border-[#D4AF5F] hover:bg-[#F3EBDC] dark:hover:bg-[#132544]'
                            }`}
                          >
                            {t.locationContact.topics[key]}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="min-w-0">
                        <label
                          htmlFor="guest-name"
                          className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85"
                        >
                          {t.locationContact.fullNameLabel}
                        </label>
                        <input
                          id="guest-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.locationContact.fullNamePlaceholder}
                          className="mt-2 w-full border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-4 py-3 text-sm text-[#0B1528] dark:text-[#FBF7EE] placeholder:text-[#0B1528]/38 dark:placeholder:text-[#FBF7EE]/40 focus:border-[#9A712C] dark:focus:border-[#D4AF5F] focus:outline-none"
                        />
                      </div>

                      <div className="min-w-0">
                        <label
                          htmlFor="guest-contact"
                          className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85"
                        >
                          {t.locationContact.contactLabel}
                        </label>
                        <input
                          id="guest-contact"
                          type="text"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder={t.locationContact.contactPlaceholder}
                          className="mt-2 w-full border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-4 py-3 text-sm text-[#0B1528] dark:text-[#FBF7EE] placeholder:text-[#0B1528]/38 dark:placeholder:text-[#FBF7EE]/40 focus:border-[#9A712C] dark:focus:border-[#D4AF5F] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="guest-message"
                        className="block text-xs font-semibold tracking-widest uppercase text-[#0B1528]/70 dark:text-[#F4DFB0]/85"
                      >
                        {t.locationContact.messageLabel}
                      </label>
                      <textarea
                        id="guest-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.locationContact.messagePlaceholder}
                        className="mt-2 w-full border border-[#D4AF5F]/35 bg-[#FFFDF8] dark:bg-[#070E1A] px-4 py-3 text-sm text-[#0B1528] dark:text-[#FBF7EE] placeholder:text-[#0B1528]/38 dark:placeholder:text-[#FBF7EE]/40 focus:border-[#9A712C] dark:focus:border-[#D4AF5F] focus:outline-none"
                      />
                    </div>

                    {hasError && (
                      <p role="alert" className="text-xs font-medium text-[#9A3412] dark:text-[#F4A28C]">
                        {t.locationContact.formError}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-[#0B1528]/60 dark:text-[#FBF7EE]/62">
                        {t.locationContact.demoNote}
                      </p>
                      <button
                        type="submit"
                        className="max-w-full bg-gradient-to-r from-[#091326] to-[#132544] dark:from-[#D4AF5F] dark:to-[#B68B3C] px-7 py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-[#FBF7EE] dark:text-[#070E1A] sm:whitespace-nowrap shadow-[0_12px_26px_rgba(9,19,38,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#B68B3C] hover:to-[#D4AF5F] dark:hover:from-[#F4DFB0] dark:hover:to-[#D4AF5F] hover:text-[#070E1A] hover:shadow-[0_14px_30px_rgba(212,175,95,0.38)]"
                      >
                        {t.locationContact.previewInquiry}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import {ArrowUpRight, CheckCircle2, Instagram, MapPin, Navigation} from 'lucide-react';
import {motion} from 'motion/react';
import {FormEvent, useState} from 'react';
import {BUSINESS_LINKS} from '../types/media';

type InquiryTopic = 'Stay Inquiry' | 'Restaurant & Dining' | 'Group or Event';

export function LocationContactSection() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState<InquiryTopic>('Stay Inquiry');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError('Please enter your name, contact detail, and inquiry message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      {/* Location & Directions Section */}
      <section
        id="location"
        className="border-t border-[#171310]/10 bg-[#F0EBE2]/55 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-between lg:col-span-5"
            >
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C6239]">
                  05 · Location &amp; Directions
                </p>
                <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#171310]">
                  Find Hotel Anjali.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#171310]/75">
                  Access verified directions, guest reviews, and live route guidance directly
                  through the official Hotel Anjali Google Business Profile, or explore
                  recent updates on Instagram.
                </p>
              </div>

              <div className="mt-10 space-y-4 border-t border-[#171310]/12 pt-8">
                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-[#171310] bg-[#171310] px-6 py-4 text-[#FAF7F2] transition-colors hover:bg-[#2C241E]"
                >
                  <span className="flex items-center gap-3">
                    <Navigation className="h-4 w-4 text-[#B88B58]" />
                    <span className="text-xs font-medium tracking-wider uppercase">
                      Open Google Maps Directions
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={BUSINESS_LINKS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-[#171310]/20 bg-[#FAF7F2] px-6 py-4 text-[#171310] transition-colors hover:border-[#171310]"
                >
                  <span className="flex items-center gap-3">
                    <Instagram className="h-4 w-4 text-[#8C6239]" />
                    <span className="text-xs font-medium tracking-wider uppercase">
                      Instagram · {BUSINESS_LINKS.instagramHandle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>

            {/* Clean Architectural Map & Profile Preview Card */}
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              transition={{duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
              className="relative flex min-h-[360px] flex-col justify-between overflow-hidden border border-[#171310]/15 bg-[#171310] p-8 text-[#FAF7F2] sm:p-10 lg:col-span-7"
            >
              {/* Subtle topographic architectural grid pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(250,247,242,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,247,242,0.12) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />

              <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[#FAF7F2]/15 pb-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center border border-[#B88B58]/50 text-[#B88B58]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-2xl text-[#FAF7F2]">Hotel Anjali</p>
                    <p className="text-xs tracking-wider uppercase text-[#FAF7F2]/60">
                      Google Business Profile
                    </p>
                  </div>
                </div>
                <a
                  href={BUSINESS_LINKS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-wider uppercase text-[#B88B58] underline underline-offset-4 hover:text-[#FAF7F2]"
                >
                  View Profile
                </a>
              </div>

              <div className="relative z-10 my-auto py-8">
                <p className="font-serif text-3xl font-normal leading-snug text-[#FAF7F2] sm:text-4xl">
                  Verified location &amp; route navigation linked directly to Google Maps.
                </p>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#FAF7F2]/70">
                  To preserve strict accuracy, live coordinates, opening hours, and turn-by-turn
                  directions open directly in Hotel Anjali’s official Google Business Profile.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#FAF7F2]/15 pt-6 text-xs text-[#FAF7F2]/65">
                <span>Hotel &amp; Restaurant</span>
                <span aria-hidden="true">·</span>
                <span>Verified Google Profile</span>
                <span aria-hidden="true">·</span>
                <span>{BUSINESS_LINKS.instagramHandle}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      <section id="contact" className="bg-[#FAF7F2] py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#8C6239]">
                06 · Contact &amp; Inquiries
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.1] tracking-tight text-[#171310]">
                Plan a stay or reserve a table.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#171310]/75">
                Have a question about upcoming stays, family dining, or hospitality at
                Hotel Anjali? Send an inquiry preview below or reach out via our official
                channels.
              </p>

              <div className="mt-10 border-t border-[#171310]/12 pt-8 text-sm text-[#171310]/75 space-y-4">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#171310]/50">
                    Instagram
                  </p>
                  <a
                    href={BUSINESS_LINKS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 font-medium text-[#171310] underline decoration-[#171310]/25 underline-offset-4 hover:text-[#8C6239]"
                  >
                    <span>{BUSINESS_LINKS.instagramHandle}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-[#171310]/50">
                    Google Maps &amp; Reviews
                  </p>
                  <a
                    href={BUSINESS_LINKS.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 font-medium text-[#171310] underline decoration-[#171310]/25 underline-offset-4 hover:text-[#8C6239]"
                  >
                    <span>Hotel Anjali on Google</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[#171310]/12 bg-[#F0EBE2]/40 p-6 sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-[#8C6239]" />
                    <h3 className="mt-4 font-serif text-3xl text-[#171310]">
                      Inquiry Preview Ready
                    </h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#171310]/70">
                      Thank you, {name}. In a live deployment, this {topic.toLowerCase()} would
                      be routed directly to Hotel Anjali’s front desk or WhatsApp concierge.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setContact('');
                        setMessage('');
                      }}
                      className="mt-8 border border-[#171310] px-6 py-3 text-xs font-medium tracking-wider uppercase text-[#171310] transition-colors hover:bg-[#171310] hover:text-[#FAF7F2]"
                    >
                      Send Another Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <span className="block text-xs font-medium tracking-widest uppercase text-[#171310]/60">
                        Inquiry Type
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {(
                          [
                            'Stay Inquiry',
                            'Restaurant & Dining',
                            'Group or Event',
                          ] as const
                        ).map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setTopic(option)}
                            className={`px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                              topic === option
                                ? 'bg-[#171310] text-[#FAF7F2]'
                                : 'border border-[#171310]/15 bg-[#FAF7F2] text-[#171310]/75 hover:border-[#171310]/40'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="guest-name"
                          className="block text-xs font-medium tracking-widest uppercase text-[#171310]/60"
                        >
                          Full Name
                        </label>
                        <input
                          id="guest-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="mt-2 w-full border border-[#171310]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#171310] placeholder:text-[#171310]/35 focus:border-[#8C6239] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="guest-contact"
                          className="block text-xs font-medium tracking-widest uppercase text-[#171310]/60"
                        >
                          Phone or Email
                        </label>
                        <input
                          id="guest-contact"
                          type="text"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="How should we reply?"
                          className="mt-2 w-full border border-[#171310]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#171310] placeholder:text-[#171310]/35 focus:border-[#8C6239] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="guest-message"
                        className="block text-xs font-medium tracking-widest uppercase text-[#171310]/60"
                      >
                        Message &amp; Preferred Dates
                      </label>
                      <textarea
                        id="guest-message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your preferred stay dates, dining party size, or questions..."
                        className="mt-2 w-full border border-[#171310]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#171310] placeholder:text-[#171310]/35 focus:border-[#8C6239] focus:outline-none"
                      />
                    </div>

                    {error && (
                      <p role="alert" className="text-xs font-medium text-[#9A3412]">
                        {error}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <p className="text-xs text-[#171310]/55">
                        Presentation demo · No automated payment or reservation is charged.
                      </p>
                      <button
                        type="submit"
                        className="bg-[#171310] px-7 py-3.5 text-xs font-medium tracking-wider uppercase text-[#FAF7F2] whitespace-nowrap shrink-0 transition-colors hover:bg-[#2C241E]"
                      >
                        Preview Inquiry
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

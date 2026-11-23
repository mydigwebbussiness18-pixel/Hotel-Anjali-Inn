import {AnimatePresence, motion} from 'motion/react';
import {KeyboardEvent, useRef, useState} from 'react';
import {useLanguage} from '../i18n/LanguageContext';

export function FaqSection() {
  const {t} = useLanguage();
  const items = t.faq.items;

  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id ?? 'faq-offerings']);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const allExpanded = openIds.length === items.length;

  const handleToggleAll = () => {
    setOpenIds(allExpanded ? [] : items.map((item) => item.id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = items.length;
    let nextIndex: number | null = null;

    if (e.key === 'ArrowDown') {
      nextIndex = (index + 1) % total;
    } else if (e.key === 'ArrowUp') {
      nextIndex = (index - 1 + total) % total;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = total - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      triggerRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section id="faq" className="surface-ivory-silk py-20 sm:py-28 lg:py-32 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Editorial Intro Column */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            className="min-w-0 lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
          >
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#9A712C] dark:text-[#F4DFB0]">
              {t.faq.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,3rem)] font-normal leading-[1.08] tracking-tight text-[#0B1528] dark:text-[#FBF7EE]">
              {t.faq.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#0B1528]/72 dark:text-[#FBF7EE]/78">
              {t.faq.description}
            </p>

            <button
              type="button"
              onClick={handleToggleAll}
              className="mt-8 inline-flex items-center justify-center border border-[#D4AF5F]/40 bg-[#F3EBDC] dark:bg-[#0D192E] px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-[#0B1528] dark:text-[#F4DFB0] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D4AF5F] hover:bg-gradient-to-r hover:from-[#091326] hover:to-[#132544] dark:hover:from-[#D4AF5F] dark:hover:to-[#B68B3C] hover:text-[#F4DFB0] dark:hover:text-[#070E1A] hover:shadow-[0_10px_24px_rgba(9,19,38,0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
            >
              {allExpanded ? t.faq.collapseAll : t.faq.expandAll}
            </button>
          </motion.div>

          {/* Accessible Multi-Open Accordion List */}
          <div className="min-w-0 lg:col-span-8">
            <div className="divide-y divide-[#D4AF5F]/25 border-y border-[#D4AF5F]/30">
              {items.map((item, idx) => {
                const isOpen = openIds.includes(item.id);
                const buttonId = `${item.id}-trigger`;
                const panelId = `${item.id}-panel`;

                return (
                  <div key={item.id} className="py-1">
                    <h3>
                      <button
                        ref={(el) => {
                          triggerRefs.current[idx] = el;
                        }}
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className="group flex w-full min-w-0 items-center justify-between gap-4 px-2 py-6 text-left transition-all duration-200 hover:bg-[#F3EBDC]/65 dark:hover:bg-[#11203B]/75 hover:shadow-[0_10px_24px_rgba(11,21,40,0.06)] sm:gap-6 sm:px-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A712C]"
                      >
                        <div className="flex min-w-0 flex-1 items-baseline gap-3 sm:gap-6">
                          <span className="text-xs font-semibold tracking-widest text-[#9A712C] dark:text-[#F4DFB0] tabular-nums shrink-0">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="min-w-0 font-serif text-xl font-medium leading-snug text-[#0B1528] dark:text-[#FBF7EE] transition-colors group-hover:text-[#9A712C] dark:group-hover:text-[#F4DFB0] sm:text-2xl">
                            {item.question}
                          </span>
                        </div>

                        {/* Animated Plus / Minus Indicator */}
                        <span
                          aria-hidden="true"
                          className={`relative inline-flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-200 group-hover:shadow-md ${
                            isOpen
                              ? 'border-[#0B1528] dark:border-[#D4AF5F] bg-[#0B1528] dark:bg-[#D4AF5F] text-[#F4DFB0] dark:text-[#070E1A] group-hover:border-[#B68B3C] group-hover:bg-[#B68B3C] group-hover:text-[#070E1A]'
                              : 'border-[#D4AF5F]/35 bg-[#F3EBDC]/80 dark:bg-[#0D192E] text-[#0B1528] dark:text-[#F4DFB0] group-hover:border-[#B68B3C] group-hover:bg-[#B68B3C] group-hover:text-[#070E1A]'
                          }`}
                        >
                          <span className="absolute h-[1.5px] w-3.5 bg-current" />
                          <span
                            className={`absolute h-3.5 w-[1.5px] bg-current transition-transform duration-200 ease-out ${
                              isOpen ? 'rotate-90 scale-y-0 opacity-0' : 'rotate-0 scale-y-100 opacity-100'
                            }`}
                          />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{height: 0, opacity: 0}}
                          animate={{height: 'auto', opacity: 1}}
                          exit={{height: 0, opacity: 0}}
                          transition={{duration: 0.28, ease: [0.16, 1, 0.3, 1]}}
                          className="overflow-hidden"
                        >
                          <p className="pb-7 pl-8 pr-4 text-sm leading-relaxed text-[#0B1528]/75 dark:text-[#FBF7EE]/78 sm:pl-11 sm:pr-14 sm:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

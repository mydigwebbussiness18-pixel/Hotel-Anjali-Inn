import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Quote,
  Send,
  Star,
} from 'lucide-react';
import {AnimatePresence, motion} from 'motion/react';
import {FormEvent, KeyboardEvent, useRef, useState} from 'react';
import {BUSINESS_LINKS} from '../data/hotelAnjaliPhotos';
import {useLanguage} from '../i18n/LanguageContext';
import {TiltCard} from './TiltCard';

interface SubmittedReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

interface ReviewFormErrors {
  name?: string;
  rating?: string;
  comment?: string;
}

export function GuestExperiencesSection() {
  const {t} = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  // Interactive Review Submission Form state
  const [guestName, setGuestName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<ReviewFormErrors>({});
  const [submittedNotice, setSubmittedNotice] = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState<SubmittedReview[]>([]);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const starRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const slots = t.reviews.slots;
  const formCopy = t.reviews.reviewForm;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slots.length) % slots.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slots.length);
  };

  const currentSlide = slots[activeIndex];
  const displayRating = hoverRating || rating;

  const handleStarKeyDown = (e: KeyboardEvent<HTMLButtonElement>, starValue: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = starValue >= 5 ? 1 : starValue + 1;
      setRating(next);
      setErrors((prev) => ({...prev, rating: undefined}));
      starRefs.current[next - 1]?.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      const prevStar = starValue <= 1 ? 5 : starValue - 1;
      setRating(prevStar);
      setErrors((prev) => ({...prev, rating: undefined}));
      starRefs.current[prevStar - 1]?.focus();
    }
  };

  const handleReviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = guestName.trim();
    const trimmedComment = comment.trim();
    const nextErrors: ReviewFormErrors = {};

    if (trimmedName.length < 2) {
      nextErrors.name = formCopy.errorName;
    }
    if (rating < 1 || rating > 5) {
      nextErrors.rating = formCopy.errorRating;
    }
    if (trimmedComment.length < 10) {
      nextErrors.comment = formCopy.errorComment;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmittedNotice(false);
      if (nextErrors.name) {
        nameInputRef.current?.focus();
      } else if (nextErrors.rating) {
        starRefs.current[0]?.focus();
      } else if (nextErrors.comment) {
        commentInputRef.current?.focus();
      }
      return;
    }

    const newReview: SubmittedReview = {
      id: `guest-review-${Date.now()}`,
      name: trimmedName,
      rating,
      comment: trimmedComment,
    };

    setSubmittedReviews((prev) => [newReview, ...prev]);
    setSubmittedNotice(true);

    // Reset all fields after valid submission
    setGuestName('');
    setRating(0);
    setHoverRating(0);
    setComment('');
    setErrors({});
  };

  return (
    <section
      id="reviews"
      className="surface-royal-navy py-20 text-[#FBF7EE] sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 border-b border-[#D4AF5F]/22 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]">
              {t.reviews.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-normal leading-[1.08] tracking-tight text-[#FBF7EE]">
              {t.reviews.headline}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#FBF7EE]/75">
            {t.reviews.description}
          </p>
        </div>

        {/* Interactive Featured Review Carousel */}
        <div className="mt-12 border border-[#D4AF5F]/28 bg-[#0D192E] p-7 shadow-[0_24px_60px_-20px_rgba(2,6,14,0.85)] sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D4AF5F]/18 pb-6">
            <div className="flex items-center gap-3">
              <Quote className="h-5 w-5 text-[#D4AF5F]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#F4DFB0]">
                {currentSlide.slotTag}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs tracking-wider uppercase text-[#FBF7EE]/55">
                {t.reviews.sampleRatingLabel}
              </span>
              <div
                aria-label={t.reviews.sampleRatingAria}
                className="flex items-center gap-1 text-[#D4AF5F]"
              >
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-[180px] py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{opacity: 0, y: 12}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -12}}
                transition={{duration: 0.28, ease: [0.16, 1, 0.3, 1]}}
              >
                <blockquote className="max-w-4xl font-serif text-2xl italic leading-relaxed text-[#FBF7EE]/94 sm:text-3xl">
                  “{currentSlide.templateQuote}”
                </blockquote>

                <div className="mt-8">
                  <p className="text-sm font-medium text-[#F4DFB0]">
                    {currentSlide.reviewerPlaceholder}
                  </p>
                  <p className="mt-1 text-xs text-[#FBF7EE]/60">
                    {currentSlide.contextPlaceholder}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D4AF5F]/18 pt-6">
            <div className="flex items-center gap-2">
              {slots.map((slot, idx) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`${t.reviews.showReviewAriaPrefix} ${idx + 1}`}
                  className={`px-3 py-1.5 text-xs font-medium tabular-nums transition-all duration-200 ${
                    activeIndex === idx
                      ? 'bg-gradient-to-r from-[#D4AF5F] to-[#B68B3C] font-semibold text-[#070E1A] shadow-[0_6px_16px_rgba(212,175,95,0.34)]'
                      : 'border border-[#D4AF5F]/25 text-[#FBF7EE]/72 hover:border-[#F4DFB0] hover:bg-[#132544] hover:text-[#F4DFB0]'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label={t.reviews.prevAria}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#D4AF5F]/30 bg-[#091326] text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_8px_20px_rgba(212,175,95,0.34)]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={t.reviews.nextAria}
                className="inline-flex h-11 w-11 items-center justify-center border border-[#D4AF5F]/30 bg-[#091326] text-[#FBF7EE] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_8px_20px_rgba(212,175,95,0.34)]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3-Card Placeholder Preview Row */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {slots.map((slot, idx) => (
            <TiltCard key={slot.id} className="h-full" maxTilt={3.5} liftPx={6}>
              <button
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`card-luxury-lift-dark flex h-full w-full flex-col justify-between border p-6 text-left ${
                  activeIndex === idx
                    ? 'border-[#D4AF5F]/65 bg-[#12223E] hover:bg-[#16294B]'
                    : 'border-[#D4AF5F]/20 bg-[#0B1528] hover:bg-[#101E36]'
                }`}
              >
                <div>
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-[#F4DFB0]">
                    {slot.slotTag}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#FBF7EE]/74">
                    {slot.templateQuote}
                  </p>
                </div>
                <div className="mt-6 border-t border-[#D4AF5F]/18 pt-4">
                  <p className="text-xs font-medium text-[#FBF7EE]">
                    {slot.reviewerPlaceholder}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#FBF7EE]/55">
                    {slot.contextPlaceholder}
                  </p>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>

        {/* User-Submitted Guest Reviews (Session Preview when submitted) */}
        <AnimatePresence>
          {submittedReviews.length > 0 && (
            <motion.div
              initial={{opacity: 0, y: 14}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
              className="mt-12"
            >
              <p className="mb-5 text-xs font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]">
                {formCopy.submittedSectionTitle}
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {submittedReviews.map((item) => (
                  <motion.article
                    key={item.id}
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.35, ease: [0.16, 1, 0.3, 1]}}
                    className="min-w-0"
                  >
                    <TiltCard className="h-full" maxTilt={3.5} liftPx={6}>
                      <div className="card-luxury-lift-dark flex h-full min-w-0 flex-col justify-between border border-[#D4AF5F]/40 bg-[#101E36] p-6">
                        <div>
                          <div className="flex items-center justify-between gap-3">
                            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#F4DFB0]">
                              {formCopy.submittedTag}
                            </span>
                            <div
                              aria-label={`${item.rating} / 5`}
                              className="flex items-center gap-0.5 text-[#D4AF5F]"
                            >
                              {Array.from({length: 5}).map((_, idx) => (
                                <Star
                                  key={idx}
                                  className={`h-3.5 w-3.5 ${
                                    idx < item.rating
                                      ? 'fill-[#D4AF5F] text-[#D4AF5F]'
                                      : 'text-[#FBF7EE]/20'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>

                          <p className="mt-4 break-words font-serif text-lg italic leading-relaxed text-[#FBF7EE]/92">
                            “{item.comment}”
                          </p>
                        </div>

                        <div className="mt-6 border-t border-[#D4AF5F]/18 pt-4">
                          <p className="break-words text-sm font-medium text-[#FBF7EE]">{item.name}</p>
                          <p className="mt-0.5 text-[11px] text-[#F4DFB0]/70">
                            {item.rating} / 5 · {formCopy.ratingLabels[item.rating - 1]}
                          </p>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Luxury Guest Review Submission Form */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-60px'}}
          transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
          className="mt-12 border border-[#D4AF5F]/28 bg-[#0D192E] p-7 shadow-[0_24px_60px_-20px_rgba(2,6,14,0.85)] sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Editorial Form Intro */}
            <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#F4DFB0]">
                  {formCopy.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-normal leading-tight text-[#FBF7EE] sm:text-4xl">
                  {formCopy.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#FBF7EE]/74 sm:text-base">
                  {formCopy.subtitle}
                </p>
              </div>

              <AnimatePresence>
                {submittedNotice && (
                  <motion.div
                    role="status"
                    initial={{opacity: 0, y: 8}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -6}}
                    transition={{duration: 0.25}}
                    className="mt-8 border border-[#D4AF5F]/45 bg-[#12223E] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D4AF5F]" />
                      <div>
                        <p className="font-serif text-lg text-[#FBF7EE]">
                          {formCopy.successTitle}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#FBF7EE]/74">
                          {formCopy.successMessage}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clean Luxury Form */}
            <form
              onSubmit={handleReviewSubmit}
              noValidate
              className="min-w-0 space-y-6 lg:col-span-7"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Guest Name */}
                <div className="min-w-0">
                  <label
                    htmlFor="review-guest-name"
                    className="block text-xs font-medium tracking-widest uppercase text-[#F4DFB0]/85"
                  >
                    {formCopy.nameLabel}
                  </label>
                  <input
                    ref={nameInputRef}
                    id="review-guest-name"
                    type="text"
                    value={guestName}
                    onChange={(e) => {
                      setGuestName(e.target.value);
                      if (errors.name) {
                        setErrors((prev) => ({...prev, name: undefined}));
                      }
                      if (submittedNotice) setSubmittedNotice(false);
                    }}
                    placeholder={formCopy.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'review-name-error' : undefined}
                    className={`mt-2 w-full border bg-[#070E1A] px-4 py-3 text-sm text-[#FBF7EE] placeholder:text-[#FBF7EE]/38 transition-colors focus:outline-none ${
                      errors.name
                        ? 'border-[#E07A5F] focus:border-[#E07A5F]'
                        : 'border-[#D4AF5F]/28 focus:border-[#D4AF5F]'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="review-name-error"
                      role="alert"
                      className="mt-1.5 text-xs text-[#F4A28C]"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Interactive Star Rating */}
                <div className="min-w-0">
                  <span
                    id="review-star-label"
                    className="block text-xs font-medium tracking-widest uppercase text-[#F4DFB0]/85"
                  >
                    {formCopy.ratingLabel}
                  </span>
                  <div className="mt-2 flex min-h-[46px] flex-wrap items-center justify-between gap-x-2.5 gap-y-2 border border-[#D4AF5F]/28 bg-[#070E1A] px-3 py-2 sm:px-3.5">
                    <div
                      role="radiogroup"
                      aria-labelledby="review-star-label"
                      aria-invalid={Boolean(errors.rating)}
                      className="flex shrink-0 items-center gap-1"
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      {[1, 2, 3, 4, 5].map((starValue) => {
                        const isActive = starValue <= displayRating;
                        return (
                          <button
                            key={starValue}
                            ref={(el) => {
                              starRefs.current[starValue - 1] = el;
                            }}
                            type="button"
                            role="radio"
                            aria-checked={rating === starValue}
                            aria-label={`${formCopy.starAriaPrefix} ${starValue} / 5 (${formCopy.ratingLabels[starValue - 1]})`}
                            onMouseEnter={() => setHoverRating(starValue)}
                            onClick={() => {
                              setRating(starValue);
                              if (errors.rating) {
                                setErrors((prev) => ({...prev, rating: undefined}));
                              }
                              if (submittedNotice) setSubmittedNotice(false);
                            }}
                            onKeyDown={(e) => handleStarKeyDown(e, starValue)}
                            className="inline-flex h-7 w-7 items-center justify-center transition-transform duration-150 hover:scale-110 sm:h-8 sm:w-8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                          >
                            <Star
                              className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-150 ${
                                isActive
                                  ? 'fill-[#D4AF5F] text-[#D4AF5F]'
                                  : 'text-[#FBF7EE]/25 hover:text-[#F4DFB0]/80'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <span className="text-xs font-medium leading-tight text-[#F4DFB0]">
                      {displayRating > 0
                        ? `${displayRating} / 5 · ${formCopy.ratingLabels[displayRating - 1]}`
                        : formCopy.ratingPrompt}
                    </span>
                  </div>
                  {errors.rating && (
                    <p role="alert" className="mt-1.5 text-xs text-[#F4A28C]">
                      {errors.rating}
                    </p>
                  )}
                </div>
              </div>

              {/* Guest Comment */}
              <div>
                <div className="flex items-center justify-between gap-4">
                  <label
                    htmlFor="review-guest-comment"
                    className="block text-xs font-medium tracking-widest uppercase text-[#F4DFB0]/85"
                  >
                    {formCopy.commentLabel}
                  </label>
                  <span className="text-[11px] text-[#FBF7EE]/50 tabular-nums">
                    {comment.trim().length} · {formCopy.charHint}
                  </span>
                </div>
                <textarea
                  ref={commentInputRef}
                  id="review-guest-comment"
                  rows={4}
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                    if (errors.comment) {
                      setErrors((prev) => ({...prev, comment: undefined}));
                    }
                    if (submittedNotice) setSubmittedNotice(false);
                  }}
                  placeholder={formCopy.commentPlaceholder}
                  aria-invalid={Boolean(errors.comment)}
                  aria-describedby={errors.comment ? 'review-comment-error' : undefined}
                  className={`mt-2 w-full border bg-[#070E1A] px-4 py-3 text-sm leading-relaxed text-[#FBF7EE] placeholder:text-[#FBF7EE]/38 transition-colors focus:outline-none ${
                    errors.comment
                      ? 'border-[#E07A5F] focus:border-[#E07A5F]'
                      : 'border-[#D4AF5F]/28 focus:border-[#D4AF5F]'
                  }`}
                />
                {errors.comment && (
                  <p
                    id="review-comment-error"
                    role="alert"
                    className="mt-1.5 text-xs text-[#F4A28C]"
                  >
                    {errors.comment}
                  </p>
                )}
              </div>

              {/* Form Footer & Submit */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="text-xs text-[#FBF7EE]/55">{formCopy.resetHint}</p>
                <button
                  type="submit"
                  className="inline-flex max-w-full items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF5F] to-[#B68B3C] px-7 py-3.5 text-center text-xs font-semibold tracking-wider uppercase text-[#070E1A] sm:whitespace-nowrap shadow-[0_12px_28px_rgba(212,175,95,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#F4DFB0] hover:to-[#D4AF5F] hover:shadow-[0_14px_32px_rgba(244,223,176,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF5F]"
                >
                  <Send className="h-3.5 w-3.5 shrink-0" />
                  <span>{formCopy.submitButton}</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Verified Google Reviews CTA */}
        <div className="mt-10 flex flex-col gap-4 border-t border-[#D4AF5F]/18 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#FBF7EE]/68">
            {t.reviews.verifiedCtaText}
          </p>
          <a
            href={BUSINESS_LINKS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center justify-center gap-2 border border-[#D4AF5F]/40 bg-[#0D192E] px-5 py-3 text-center text-xs font-medium tracking-wider uppercase text-[#F4DFB0] sm:whitespace-nowrap sm:shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F4DFB0] hover:bg-gradient-to-r hover:from-[#D4AF5F] hover:to-[#B68B3C] hover:text-[#070E1A] hover:shadow-[0_10px_24px_rgba(212,175,95,0.34)]"
          >
            <span>{t.reviews.verifiedCtaButton}</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}

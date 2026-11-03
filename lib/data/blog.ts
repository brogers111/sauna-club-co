// Content is a typed block list rather than markdown/MDX, matching this
// project's hardcoded-content convention (see AGENTS.md) and letting
// components like BlogCTA and the FAQ accordion render inline with the copy.

// Inline links: hrefs starting with "/" are internal (same tab); anything
// else is external and opens in a new tab.
export type InlineLink = { text: string; href: string };
export type RichText = string | (string | InlineLink)[];

export type BlogContentBlock =
  | { type: "paragraph"; text: RichText }
  | { type: "heading"; level?: 2 | 3; text: string }
  | { type: "list"; items: RichText[] }
  // Bordered, color-rotated cards (same style as the location page's
  // "Designed Different" cards) for short side-by-side facts.
  | { type: "cards"; items: { title: string; text: string }[] }
  // Rendered as the site's accordion and emitted as FAQPage schema.
  | { type: "faq"; items: { question: string; answer: string }[] }
  // Full-width CTA banner; colors rotate automatically per post.
  | { type: "cta"; target: "book" | "wheat-ridge"; text: string };

export type BlogPost = {
  slug: string;
  // Short title: the <title> tag (the site template appends "| Sauna Club Co"),
  // the /blog card heading, and the last breadcrumb.
  title: string;
  // The on-page H1 and Article schema headline.
  headline: string;
  // Short version for <meta> tags and the blog index card — not the full post.
  metaDescription: string;
  readTimeMinutes: number;
  // ISO date (YYYY-MM-DD) — string-sortable, so no Date parsing needed to sort by newest first.
  publishedAt: string;
  featuredImage: {
    src: string;
    alt: string;
  };
  // JPG copy of the featured image for Open Graph/Twitter cards — WebP
  // isn't reliably supported by every platform's link preview.
  socialImage: {
    src: string;
    width: number;
    height: number;
  };
  content: BlogContentBlock[];
};

const coldPlungeBenefits: BlogPost = {
  slug: "cold-plunge-benefits",
  title: "The Benefits of Cold Plunge",
  headline: "Cold Plunge Benefits: What Does Cold Water Immersion Do for Your Body?",
  metaDescription:
    "Curious about cold plunge benefits? Explore the science behind cold water, mood, alertness, and sauna rituals at Sauna Club Co.",
  readTimeMinutes: 8,
  publishedAt: "2026-11-03",
  featuredImage: {
    src: "/images/cold-plunge-benefits-blog.webp",
    alt: "Person immersed in a cold plunge tub at Sauna Club Co",
  },
  socialImage: {
    src: "/images/cold-plunge-benefits-blog.jpg",
    width: 1200,
    height: 669,
  },
  content: [
    {
      type: "paragraph",
      text: "Ever step out of a cold shower feeling suddenly wide awake, like someone just flipped a switch? Now imagine making that feeling part of a wellness routine that also includes a sauna, a mineral bath, and good conversation with people you might not otherwise meet.",
    },
    {
      type: "paragraph",
      text: "That's the appeal of cold plunging. What began as a practice embraced by athletes and wellness enthusiasts has grown into a popular way to explore the connection between physical health, mental well-being, and community. Fascinating science backs the experience.",
    },
    {
      type: "paragraph",
      text: [
        "Researchers are studying how cold-water immersion affects the nervous system, metabolism, and exercise recovery. Dr. Rhonda Patrick of ",
        { text: "FoundMyFitness", href: "https://www.foundmyfitness.com/about-dr-rhonda-patrick" },
        " has explored many of these mechanisms, making the science accessible to people who want to take a more active role in their wellness.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "So, what are the benefits of cold plunges, and what happens when you take the plunge yourself? At ",
        { text: "Sauna Club Co", href: "/about" },
        " in Wheat Ridge, Colorado, the experience is about more than temperatures. It's about making time for yourself, enjoying the hot-and-cold contrast, and connecting with people who appreciate a good wellness ritual. Curious? Let's dive in.",
      ],
    },

    { type: "heading", text: "What Is a Cold Plunge?" },
    {
      type: "paragraph",
      text: "A cold plunge is a short immersion in cold water, usually in a dedicated tub with a controlled temperature. Our tubs range in temperature from the upper 30s°F to the low 50s°F.",
    },
    {
      type: "paragraph",
      text: "Cold plunging is one form of cold-water immersion, alongside cold showers, ice baths, and winter swimming. A dedicated plunge offers a controlled setting for a focused, full-body experience. The first sensation can be wonderfully exhilarating: breathing changes, your heart rate responds, and your body kicks into cold-response mode.",
    },
    { type: "heading", level: 3, text: "What Is the Difference Between a Cold Plunge and an Ice Bath?" },
    {
      type: "paragraph",
      text: "The terms cold plunge and ice bath are often (and mistakenly) used interchangeably. But in reality, an ice bath uses added ice to cool the water, while a cold plunge may use a chiller to maintain a consistent temperature. Both offer a way to experience cold-water immersion, but the temperature and setup shape the experience.",
    },

    { type: "heading", text: "What Are the Main Cold Plunge Benefits?" },
    {
      type: "paragraph",
      text: "Why are people voluntarily hopping into chilly water? The appeal includes immediate alertness, a potentially refreshed mood, and a ritual that gives the day a memorable change of pace. Researchers are also exploring cold-water immersion for exercise recovery, metabolism, and other well-being benefits.",
    },
    { type: "heading", level: 3, text: "Increase Alertness and Energy" },
    {
      type: "paragraph",
      text: "There's no denying that cold water instantly grabs your attention. Exposure activates the sympathetic nervous system and stimulates the release of norepinephrine, a chemical messenger involved in alertness and attention.",
    },
    {
      type: "paragraph",
      text: [
        "Dr. Rhonda Patrick explores this response in her FoundMyFitness feature, “",
        {
          text: "Cold-Water Immersion and Cryotherapy: Neuroendocrine and Fat Browning Effects",
          href: "https://www.foundmyfitness.com/episodes/cold-shock-norepinephrine",
        },
        ".” She discusses research into how cold exposure affects norepinephrine, brain function, and metabolism.",
      ],
    },
    {
      type: "paragraph",
      text: "That helps explain why many enthusiasts describe a plunge as an invigorating reset. It can become a refreshing morning ritual or a way to bring fresh energy to an otherwise ordinary day.",
    },
    { type: "heading", level: 3, text: "Support Mood and a Sense of Well-Being" },
    {
      type: "paragraph",
      text: "Cold plunging is a full-sensory experience. The moment the cold hits, you focus on your breathing, and the outside world feels a little farther away for a moment. Many people report feeling refreshed, energized, or more positive afterward.",
    },
    {
      type: "paragraph",
      text: [
        {
          text: "Stanford Lifestyle Medicine's overview of cold-water immersion and mental health",
          href: "https://lifestylemedicine.stanford.edu/jumping-into-the-ice-bath-trend-mental-health-benefits-of-cold-water-immersion/",
        },
        " explores research into mood and cold exposure. Dr. Patrick's ",
        { text: "discussion of cold exposure", href: "https://www.foundmyfitness.com/episodes/cold-shock-norepinephrine" },
        " also examines norepinephrine's role in vigilance, focus, attention, and mood. Researchers continue to investigate how these short-term responses relate to longer-term well-being, and the refreshing feeling people describe is a big part of what makes the ritual appealing.",
      ],
    },
    { type: "heading", level: 3, text: "Help You Practice Responding to Stress" },
    {
      type: "paragraph",
      text: "Stepping into cold water gives your attention a very specific assignment: notice your breathing, feel the temperature, and take the experience one moment at a time. Approaching the plunge calmly and gradually can turn it into a little practice in mindfulness and awareness of the mind-body connection.",
    },
    {
      type: "paragraph",
      text: "For some people, that focused pause is part of the charm. It offers a chance to step away from a busy schedule and spend a few moments fully engaged in what's happening right now. Researchers continue to explore how cold exposure relates to broader measures of stress response and resilience.",
    },
    { type: "heading", level: 3, text: "Positive Effects on Inflammation and Pain Perception" },
    {
      type: "paragraph",
      text: [
        "Cold-water immersion has long attracted interest from athletes and fitness enthusiasts. A ",
        { text: "2023 systematic review and meta-analysis", href: "https://pubmed.ncbi.nlm.nih.gov/36527593/" },
        " examined research on cold-water immersion as a recovery method, including its effects on muscle soreness after strenuous exercise. Cold plunging is an option to explore as part of your recovery routine.",
      ],
    },
    { type: "heading", level: 3, text: "Support a Healthy Immune System" },
    {
      type: "paragraph",
      text: [
        {
          text: "A randomized controlled trial published in PLOS ONE",
          href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0161749",
        },
        " studied 3,018 adults who finished their daily showers with 30, 60, or 90 seconds of cold water, or continued showering normally. Participants in the cold-shower groups reported 29% less work absence due to illness.",
      ],
    },
    {
      type: "paragraph",
      text: "Although the findings focus on cold showers, this study offers an interesting look at regular cold exposure. Researchers continue to investigate how different forms of cold exposure relate to health and immune function. It's an exciting area of wellness science, with plenty left to explore.",
    },
    { type: "heading", level: 3, text: "Make It Part of Your Relaxing Wellness Routine" },
    {
      type: "paragraph",
      text: "A wellness ritual is a lot more fun when it feels like something you actually want to do. Pairing a sauna with a cold plunge creates a clear break from work, errands, and endless scrolling and notifications. Add a welcoming space and good company, and it can become a favorite part of your week.",
    },
    {
      type: "paragraph",
      text: "For many people we've met, the social side is a big part of the appeal: sharing the experience with a friend, chatting between rounds, or meeting people who are equally enthusiastic about a little heat-and-cold adventure.",
    },

    { type: "cta", target: "book", text: "Feel the cold plunge benefits for yourself" },

    { type: "heading", text: "What Is the Point of Combining a Sauna With a Cold Plunge?" },
    {
      type: "paragraph",
      text: "Alternating between heat exposure and cold-water immersion is often called contrast therapy. The idea is delightfully simple: enjoy the warmth of a sauna, step into the refreshing cold, and take time to notice and feel the difference.",
    },
    {
      type: "paragraph",
      text: "The hot-to-cold transition creates a memorable sensory contrast. Some people enjoy the feeling of renewed energy, while others love the ritual itself. At Sauna Club Co, it's also an opportunity to enjoy a shared experience in a welcoming space.",
    },
    {
      type: "paragraph",
      text: "Do you have to use a sauna before a cold plunge? Nope! Cold plunging can be enjoyed, and the cold plunge benefits experienced all on its own. Some people love alternating between heat and cold, while others prefer one practice at a time. If you combine them, follow facility guidance and give yourself time to adjust between temperatures.",
    },

    { type: "heading", text: "How Do You Get Started With Cold Plunging?" },
    {
      type: "paragraph",
      text: "New to the plunge? Think curiosity over competition. We're here to help you get started with controlled temperatures and clear guidance so you know what to expect.",
    },
    { type: "heading", level: 3, text: "How Cold Should a Cold Plunge Be?" },
    {
      type: "paragraph",
      text: "We offer three (3) cold plunge tubs at different temperatures because each temperature range offers unique benefits.",
    },
    {
      type: "cards",
      items: [
        { title: "Low 50s°F", text: "Ideal for increasing circulation and safely reducing muscle soreness." },
        { title: "Mid-40s°F", text: "Can support focus, mood, and metabolism." },
        {
          title: "Upper 30s°F",
          text: "Some people find a quick soak helps address acute pain and joint swelling while boosting overall resilience.",
        },
      ],
    },
    { type: "paragraph", text: "Choose a temperature where you can remain calm and breathe normally." },
    { type: "heading", level: 3, text: "How Long Should You Stay in a Cold Plunge?" },
    {
      type: "paragraph",
      text: "There's no one-size-fits-all duration. Start with a brief exposure, follow the facility's guidance, and gradually build familiarity. Focus on a controlled experience rather than a time goal, and step out if you feel dizzy, numb, or unable to control your breathing.",
    },
    { type: "heading", level: 3, text: "How Often Should You Cold Plunge?" },
    {
      type: "paragraph",
      text: [
        "For many people, a cold plunge ",
        {
          text: "two to four times per week",
          href: "https://www.whoop.com/us/en/thelocker/podcast-207-dr-susanna-soberg-on-the-benefits-of-cold-therapy/",
        },
        " (at 30 seconds to three (3) minutes per plunge, for a total of 11 minutes per week) is a good frequency to get the physical and mental benefits of a cold plunge. If you enjoy the initial experience as a beginner, consider adding an extra weekly session or an extra minute per plunge over time.",
      ],
    },
    {
      type: "cards",
      items: [
        { title: "2–4x", text: "Cold plunge sessions per week" },
        { title: "30 sec–3 min", text: "Time per plunge" },
        { title: "11 min", text: "Total cold exposure per week" },
      ],
    },

    { type: "heading", text: "Cold Plunge Safety: Tips for a Comfortable Experience" },
    {
      type: "paragraph",
      text: "Cold immersion produces an immediate physical response, including changes in breathing, heart rate, and blood pressure. Follow facility instructions, use a supervised setting, and avoid plunging while intoxicated or alone in an unsupervised environment.",
    },
    { type: "paragraph", text: "Consult a healthcare professional before plunging if you have:" },
    {
      type: "list",
      items: [
        "Cardiovascular disease",
        "Uncontrolled high blood pressure",
        "Circulation disorders",
        "Conditions affecting temperature regulation",
      ],
    },
    {
      type: "paragraph",
      text: "Individual guidance is also recommended during pregnancy or when medications may affect cardiovascular responses or temperature regulation. Exit immediately if you experience:",
    },
    {
      type: "list",
      items: ["Chest pain", "Severe shortness of breath", "Dizziness", "Confusion", "Loss of coordination"],
    },

    { type: "cta", target: "book", text: "Ready to take your first plunge?" },

    { type: "heading", text: "Cold Plunge Facts: Quick Answers to Common Questions" },
    {
      type: "faq",
      items: [
        {
          question: "Is Colder Water Always Better?",
          answer:
            "Temperature shapes the intensity of the experience, but no, the coldest water available isn't inherently “better.” Even a brief dip in our warmest cold plunge tub, in the 50s°F, gives your body a noticeable cold-water stimulus and a heightened sense of alertness you can carry with you for the rest of your day.",
        },
        {
          question: "Do You Have to Stay in the Water for Several Minutes to Benefit?",
          answer:
            "Nope! A cold plunge doesn't need to turn into a staring contest with the clock. Many of the mental and physical benefits of a cold plunge happen the second you submerge. The scientifically backed sweet spot is one (1) to three (3) minutes per session for most people.",
        },
        {
          question: "How Long Should a Beginner Stay in a Cold Plunge?",
          answer:
            "Think seconds before minutes. There's no prize for staying in as long as you can tolerate. For your first session, try around 30 seconds, or even less if that feels right, in a supervised setting with guidance from the facility. Keep your head above water, focus on steady breathing, and gradually increase your time as you get more comfortable in cold water.",
        },
        {
          question: "Is It Better to Sauna Before or After a Cold Plunge?",
          answer:
            "There's no single perfect order—it depends on the experience you want and your seasonal surroundings. Many people like to start in the sauna, letting the warmth settle in before stepping into the cold for a refreshing change of pace. Others prefer to plunge first or enjoy heat and cold as totally separate parts of their wellness routine. We're happy to provide you with guidance when you book a session.",
        },
      ],
    },

    { type: "heading", text: "Experience Sauna and Cold Plunge Culture at Sauna Club Co" },
    {
      type: "paragraph",
      text: "Cold plunging is an opportunity to try something new, make time for yourself, and meet people who share your enthusiasm for wellness. Our experience brings together multiple saunas, cold plunges, a mineral bath, showers, and changing rooms, all amid the Zen vibes and peaceful mountain views that make Colorado feel like home.",
    },
    {
      type: "paragraph",
      text: "Whether you're curious about your very first plunge or already love the hot-and-cold routine, come with an open mind and find a rhythm you look forward to.",
    },
    {
      type: "paragraph",
      text: [
        "Ready to dip your toes in? Visit ",
        { text: "Sauna Club Co", href: "/" },
        " to learn more, ",
        { text: "book a session", href: "/book-session" },
        ", or explore ",
        { text: "membership options", href: "/buy-membership" },
        ".",
      ],
    },
  ],
};

export const blogPosts: BlogPost[] = [coldPlungeBenefits];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getFaqItems(post: BlogPost) {
  return post.content.flatMap((block) => (block.type === "faq" ? block.items : []));
}

// "2026-11-03" → "Nov 3, 2026". Parsed and formatted in UTC so the
// date never shifts a day depending on the server's timezone.
export function formatPublishedDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

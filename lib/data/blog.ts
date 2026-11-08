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

const saunaHat: BlogPost = {
  slug: "sauna-hat",
  title: "Sauna Hat: Purpose, Benefits, History, and More",
  headline: "Sauna Hat Benefits: What Is a Sauna Hat and Why Wear One?",
  metaDescription:
    "Curious about sauna hat benefits? Sauna Club Co shares what sauna hats do, how to choose one, and how they can add comfort to your favorite heat ritual.",
  readTimeMinutes: 7,
  publishedAt: "2026-11-08",
  featuredImage: {
    src: "/images/sauna-hat.webp",
    alt: "Gray wool felt sauna hat resting on a wooden sauna bench",
  },
  socialImage: {
    src: "/images/sauna-hat.jpg",
    width: 1200,
    height: 723,
  },
  content: [
    {
      type: "paragraph",
      text: "Ever seen someone wearing a floppy wool hat in a sauna and wondered if they forgot to change out of their winter wardrobe? You're looking at a sauna hat! This traditional accessory might look a little quirky at first, but it has a practical purpose: adding a layer of insulation between your head and the sauna's heat.",
    },
    {
      type: "paragraph",
      text: "A sauna hat can be a wonderful addition to your wellness routine, whether you're a regular sauna enthusiast or just discovering the joy of a good sweat. You'll likely find it helps your head feel more comfortable during a session while giving your hair a little extra coverage and connecting you with a long-standing sauna tradition.",
    },
    {
      type: "paragraph",
      text: "And really, isn't part of the fun of sauna culture discovering what makes the experience uniquely your own? So, let's talk hats.",
    },

    { type: "heading", text: "What Is a Sauna Hat?" },
    {
      type: "paragraph",
      text: "A sauna hat, sometimes called a sauna cap, is a head covering specifically designed for wearing in a sauna. You'll often see them made from wool felt, although linen and other materials are also available. Unlike a standard winter beanie, a sauna hat is made with hot, steamy surroundings in mind.",
    },
    {
      type: "paragraph",
      text: [
        "Sauna hats are associated with traditional sauna practices in Finland and other parts of Northern and Eastern Europe. Finnish sauna culture, in particular, has a rich history centered on relaxation, well-being, and spending time together. UNESCO even recognizes it as ",
        { text: "intangible cultural heritage", href: "https://ich.unesco.org/en/RL/sauna-culture-in-finland-01596" },
        ".",
      ],
    },
    { type: "heading", level: 3, text: "Why Try a Wool Sauna Hat?" },
    {
      type: "paragraph",
      text: "Wool felt is the most popular material for sauna hats, thanks to its natural insulating properties. It slows heat transfer, adding a layer between your head and the hot air surrounding you. That's something many people appreciate during high-temperature sauna sessions.",
    },
    {
      type: "paragraph",
      text: "Linen is another option. It's lighter and more breathable, making it appealing if you prefer a less insulating feel. Neither material is automatically better. It really comes down to your personal comfort, sauna habits, and how much maintenance you want to deal with.",
    },

    { type: "heading", text: "What Is the Purpose of a Sauna Hat?" },
    {
      type: "paragraph",
      text: "Since hot air rises, temperatures can feel noticeably different depending on where you're sitting. If you're on an upper bench, you might find the heat around your head especially intense. A sauna hat adds a layer of insulation that can make things feel more comfortable.",
    },
    {
      type: "paragraph",
      text: "Think of it as a comfort accessory, not a magic shield. It won't change the intensity of the sauna itself, but it may make that heat a little easier to enjoy. Consider it an optional upgrade, not a sauna dress code!",
    },

    { type: "heading", text: "What Are the Benefits of Wearing a Sauna Hat?" },
    { type: "heading", level: 3, text: "1. Helps Insulate Your Head From Intense Heat" },
    {
      type: "paragraph",
      text: "One of the biggest sauna hat benefits is extra insulation. If you love a hot sauna but sometimes find the heat around your head or ears a little overwhelming, a sauna hat might be just what you need.",
    },
    { type: "heading", level: 3, text: "2. Protects Hair From Excessive Heat Exposure" },
    {
      type: "paragraph",
      text: "Love your hair? You might be interested in adding a little extra coverage during sauna time to protect it from repeated heat exposure.",
    },
    {
      type: "paragraph",
      text: [
        "For context, ",
        { text: "a study published in Annals of Dermatology", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3229938/" },
        " found that high blow-drying temperatures tended to cause more surface damage to hair. So a sauna cap makes sense for preserving your hair's natural moisture and oils during sauna sessions. It's a reasonable precaution to try, particularly if your hair is dry or color-treated.",
      ],
    },
    { type: "heading", level: 3, text: "3. Makes Sauna Sessions More Comfortable" },
    {
      type: "paragraph",
      text: "Sometimes it's the little things that make a wellness ritual even better. Of course, comfort depends on the sauna temperature, humidity, hat material, and fit. Choose something that feels good rather than tight, and remember that wearing a hat doesn't mean you have to stay in the room longer.",
    },
    { type: "heading", level: 3, text: "4. It's Great for Outdoor Sauna and Cold-Weather Routines" },
    {
      type: "paragraph",
      text: "Here in Colorado, we know a thing or two about crisp mountain air. There's something especially appealing about stepping out of a warm sauna into a chilly Colorado evening, and a wool sauna hat can add a little extra coziness around your head and ears between rounds.",
    },
    {
      type: "paragraph",
      text: [
        "Some people also bring their hats along for cold plunge sessions. Wearing one during a plunge is entirely a personal comfort choice. ",
        { text: "Our Sauna Club Co staff", href: "/about" },
        " is happy to offer guidance about keeping each part of your routine comfortable.",
      ],
    },
    { type: "heading", level: 3, text: "5. Adds a Little Traditional Sauna Charm" },
    {
      type: "paragraph",
      text: [
        "Let's be honest: sauna hats are fun! They come in all sorts of shapes, colors, and styles, from classic wool felt caps to playful designs that are bound to get a few smiles from your sauna buddies. Choosing a hat can even become part of the ritual. And that playful side fits right in with traditional sauna culture. ",
        { text: "Finnish sauna traditions", href: "https://www.visitfinland.com/en/things-to-do/sauna/" },
        " are about more than getting warm; they're connected with well-being, shared experiences, and taking time to unwind.",
      ],
    },

    { type: "cta", target: "book", text: "Bring your hat (or don't) and come feel the heat" },

    { type: "heading", text: "What Does a Sauna Hat Do Compared With Going Without One?" },
    {
      type: "paragraph",
      text: "It's really a matter of personal preference. Wearing a sauna hat adds insulation around your head, while going without one lets you experience the heat directly.",
    },
    {
      type: "paragraph",
      text: "Some people swear by them, while others are perfectly happy without one. It's all about finding your comfort zone. Try both and see what works for you. Either way, the basics of a good sauna session don't change: follow your studio's guidance, hydrate, take breaks, and listen to your body.",
    },

    { type: "heading", text: "How Do You Wear a Sauna Hat?" },
    {
      type: "paragraph",
      text: "Easy! Just place the hat over the top of your head and make sure it sits comfortably. Choose a size that gives you the coverage you want without feeling tight or interfering with your vision or movement.",
    },
    {
      type: "paragraph",
      text: "Some sauna-goers wear their hats dry, while others lightly dampen certain styles before use. Both approaches are totally fine, yet don't rely on wetting your hat to regulate your overall body temperature. The best approach depends on the material and manufacturer's instructions, so check the care label before experimenting.",
    },
    { type: "heading", level: 3, text: "How Do You Clean and Care for a Sauna Hat?" },
    {
      type: "list",
      items: [
        "Give your hat some breathing room after each session by letting it air out and dry completely before storing it.",
        "Wool hats often require gentle hand washing, while other fabrics may have different care requirements.",
        "Check the manufacturer's instructions and avoid high-heat drying unless the label says it's okay.",
      ],
    },

    { type: "heading", text: "How Do You Choose the Right Sauna Cap?" },
    {
      type: "paragraph",
      text: "Start with the basics: comfort, material, fit, style, and how often you'll use it. A durable hat that feels good on your head is a way better investment than one that looks cute but never makes it out of your fitness bag.",
    },
    { type: "heading", level: 3, text: "Wool vs. Linen Sauna Hats: Which Should You Choose?" },
    {
      type: "cards",
      items: [
        { title: "Wool", text: "Popular for its insulation properties and traditional feel." },
        { title: "Linen", text: "Lighter, and may appeal to anyone who prefers a more breathable head covering." },
      ],
    },
    {
      type: "paragraph",
      text: "Think about the type of sauna you visit, your comfort preferences, and how much care each material requires.",
    },

    { type: "heading", text: "Are Sauna Hats Safe for Everyone?" },
    {
      type: "paragraph",
      text: "Yes, sauna hats are generally safe for anyone who enjoys a good sauna session. But remember, a sauna hat is an accessory, not personal protective equipment. If you have a condition that affects your ability to tolerate heat, or aren't sure whether time in the sauna is right for you, consult a healthcare professional before use.",
    },

    { type: "heading", text: "Can You Wear a Sauna Hat in a Cold Plunge?" },
    {
      type: "paragraph",
      text: "Many people love wearing their wool hats outdoors between heat rounds, particularly during chilly Colorado months. During the cold plunge itself, you can certainly keep on your hat if you find it cozy and comforting.",
    },

    { type: "cta", target: "book", text: "Ready to find your favorite heat ritual?" },

    { type: "heading", text: "What Does Research Say About Sauna Benefits and Sauna Hats?" },
    {
      type: "paragraph",
      text: [
        { text: "A review published in Mayo Clinic Proceedings", href: "https://pubmed.ncbi.nlm.nih.gov/30077204/" },
        " examined research connecting sauna use with cardiovascular and other health outcomes. The authors discussed numerous promising health associations, including links between regular sauna visits and a lower risk of high blood pressure, heart disease, and other medical issues.",
      ],
    },
    {
      type: "paragraph",
      text: "As for sauna hats specifically, their clearest practical purpose is insulation and personal comfort. And honestly, if a simple wool hat makes your favorite ritual even more enjoyable, that's a pretty great reason to give one a try!",
    },

    { type: "heading", text: "Make the Most of Your Sauna and Cold Plunge Routine at Sauna Club Co" },
    {
      type: "paragraph",
      text: "A sauna hat might be a small accessory, but finding those little things that make you look forward to your wellness routine can make the experience feel even more special. Wear one, skip one, try a classic wool style, or pick something with a little personality.",
    },
    {
      type: "paragraph",
      text: "At Sauna Club Co in Wheat Ridge, Colorado, we're all about making sauna and cold plunge time something you genuinely look forward to. Whether you're a longtime sauna enthusiast or just getting started, come enjoy the heat, explore the hot-and-cold ritual, and share the experience with a welcoming community.",
    },
    {
      type: "paragraph",
      text: [
        "Ready to plan your visit? ",
        { text: "Book your session here", href: "/book-session" },
        " or explore ",
        { text: "membership options", href: "/buy-membership" },
        " today!",
      ],
    },

    { type: "heading", text: "Sauna Hat Benefits FAQs" },
    {
      type: "faq",
      items: [
        {
          question: "What are the main sauna hat benefits?",
          answer:
            "Top sauna hat benefits are added insulation around your head, a layer of coverage for your hair, and a more comfortable experience. Choosing a fun style also adds a little personality to your sauna ritual.",
        },
        {
          question: "Does a sauna hat protect your hair from heat?",
          answer: "Yes, a sauna hat covers your hair and creates a layer between it and the hot air.",
        },
        {
          question: "Is a wool sauna hat better than a linen sauna hat?",
          answer:
            "Wool felt offers more insulation, making it a popular choice for traditional, high-temperature saunas. Linen is lighter and may feel more breathable. The best choice depends on your comfort preferences and the type of sauna you enjoy.",
        },
        {
          question: "Should you wet a sauna hat before using it?",
          answer:
            "You can, if the manufacturer's care instructions allow it. Some sauna fans prefer a lightly dampened hat, while others wear theirs dry. Neither approach is essential, so go with what feels comfortable.",
        },
        {
          question: "Can a sauna hat prevent overheating?",
          answer:
            "A sauna hat is a comfort accessory, but you can still feel overheated while wearing one. Follow your sauna's safety guidelines, take breaks, and step out if you feel unwell.",
        },
        {
          question: "Do you need a sauna hat to enjoy a sauna?",
          answer:
            "Not at all! Sauna hats are completely optional. Try one if you're curious, or enjoy your session without one. The important thing is enjoying the experience!",
        },
      ],
    },
  ],
};

// Oldest first — a post's position here also sets its CTA banner colors
// (see BlogContentRenderer), so append new posts to the end.
export const blogPosts: BlogPost[] = [coldPlungeBenefits, saunaHat];

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

import { AppData } from "@/types/app-data";

export const apps: AppData[] = [
  {
    slug: "swipe-learn",
    name: "Swipe Learn",
    tagline: "5-Minute Daily Brain Training",
    heroDescription:
      "Transform spare moments into meaningful learning. Master new facts daily with quick lessons, spaced repetition, and brain training exercises. Build your knowledge in just 5 minutes a day.",
    category: "Education",
    appStoreId: "6747906174",
    appStoreUrl: "https://apps.apple.com/us/app/swipe-learn-trivia-facts/id6747906174",
    privacyUrl: "/privacy/com.erdemgonul.swipeandlearn",
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    features: [
      {
        icon: "⚡",
        title: "5-Minute Daily Bites",
        description:
          "Bite-sized lessons designed to teach fast and stick for good. Perfect for commutes, coffee breaks, or before bed.",
      },
      {
        icon: "🧠",
        title: "Spaced Repetition",
        description:
          "Facts appear again right before you're likely to forget them — locking knowledge into long-term memory.",
      },
      {
        icon: "🎮",
        title: "Gamified Learning",
        description:
          "Build streaks, earn points, track progress. Learning feels like a game, not a chore.",
      },
      {
        icon: "📚",
        title: "Massive Knowledge Library",
        description:
          "Science, history, art, technology, business — hundreds of categories constantly growing.",
      },
      {
        icon: "🎯",
        title: "Active Recall",
        description:
          "Swipe right on mastered content, left on what needs review — training your brain more effectively.",
      },
      {
        icon: "🌍",
        title: "15+ Languages",
        description:
          "Learn in your language. Available in English, Turkish, Spanish, French, German, and more.",
      },
    ],
    pricing: {
      model: "Freemium",
      description: "Start free. Upgrade when you want more.",
      highlights: [
        "Free daily facts and trivia",
        "Premium Annual: $3.99/year",
        "Monthly: $0.99/month",
        "Full access to all categories",
      ],
    },
    ctaDescription: "Download Swipe Learn free and make your 5-minute learning habit the smartest part of your day.",
  },
  {
    slug: "questique",
    name: "Questique",
    tagline: "AI-Powered Icebreaker Game",
    heroDescription:
      "Tired of the same old conversations? Questique generates personalized questions about any topic. Perfect for parties, date nights, and hanging out with friends. Turn every hangout into an unforgettable experience.",
    category: "Entertainment",
    appStoreId: "6746945110",
    appStoreUrl: "https://apps.apple.com/us/app/questique-icebreaker-game/id6746945110",
    privacyUrl: "/privacy/com.erdemgonul.questique",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    features: [
      {
        icon: "✨",
        title: "AI Question Generator",
        description:
          "Type any topic — 'our friendship', 'first date jitters', 'wildest travel stories' — and AI creates thoughtful questions for your group.",
      },
      {
        icon: "🎭",
        title: "Diverse Categories",
        description:
          "Personality Explorer, Deep Talk, Fun & Icebreakers, Couples & Dating, What If, Memories & Nostalgia.",
      },
      {
        icon: "💕",
        title: "Perfect for Couples",
        description:
          "A fun dating game to connect with someone new or deepen your relationship with meaningful conversations.",
      },
      {
        icon: "🎉",
        title: "Party Ready",
        description:
          "Break the ice at parties, family dinners, or road trips. Get everyone talking and laughing.",
      },
      {
        icon: "🤖",
        title: "Smart Recommendations",
        description:
          "The more you play, the smarter Questique gets. It learns your preferences and suggests new categories.",
      },
      {
        icon: "🌍",
        title: "15+ Languages",
        description:
          "Play with friends from around the world. Available in English, Turkish, Spanish, French, and more.",
      },
    ],
    pricing: {
      model: "Freemium",
      description: "Play free. Unlock everything with Pro.",
      highlights: [
        "Free categories to play",
        "Annual: $3.99/year",
        "Monthly: $1.99/month",
        "Full AI question generator access",
      ],
    },
    ctaDescription: "Download Questique free and turn every conversation into a connection.",
  },
  {
    slug: "friend-reminder",
    name: "Friend Reminder",
    tagline: "Your Personal Relationship CRM",
    heroDescription:
      "Stop drifting apart. Friend Reminder helps you manage your social health with smart notifications, birthday alerts, and interaction tracking. Never lose touch with the people who matter.",
    category: "Lifestyle",
    appStoreId: "6757976209",
    appStoreUrl: "https://apps.apple.com/us/app/friend-reminder-stay-in-touch/id6757976209",
    privacyUrl: "/privacy/com.erdemgonul.friendreminder",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    features: [
      {
        icon: "📊",
        title: "Smart Tier System",
        description:
          "Organize contacts into weekly, biweekly, or monthly tiers. Your inner circle stays close, your broader network stays active.",
      },
      {
        icon: "🔔",
        title: "Smart Notifications",
        description:
          "Get a gentle nudge when a friend is overdue. Initiate a call or message directly from the notification.",
      },
      {
        icon: "📝",
        title: "Interaction Logs",
        description:
          "Log calls, messages, or coffee dates. Add private notes to remember the little details for your next conversation.",
      },
      {
        icon: "🎂",
        title: "Birthday Alerts",
        description:
          "7-day lookahead for upcoming birthdays so you never miss a special day.",
      },
      {
        icon: "📈",
        title: "Social Health Dashboard",
        description:
          "See your social circle at a glance. Identify who you haven't spoken to in a while.",
      },
      {
        icon: "📱",
        title: "Contact Sync",
        description:
          "Import your device contacts in seconds. Visual status indicators and fast search to find anyone instantly.",
      },
    ],
    pricing: {
      model: "Freemium",
      description: "Free for basics. Premium for full power.",
      highlights: [
        "Free: Smart tiers, notifications, birthdays",
        "Premium: Interaction logs, private notes, analytics",
        "Annual: $4.99/year",
        "Monthly: $1.99/month",
      ],
    },
    ctaDescription: "Download Friend Reminder free and start building stronger, more intentional relationships.",
  },
  {
    slug: "whereis",
    name: "WhereIs",
    tagline: "Smart Home Inventory",
    heroDescription:
      "Stop losing track of your belongings. WhereIs uses AI photo recognition to help you find anything in your home — instantly. Snap a photo, and WhereIs remembers for you. Search and find in seconds.",
    category: "Utilities",
    appStoreId: "6758239361",
    appStoreUrl: "https://apps.apple.com/us/app/whereis-smart-home-inventory/id6758239361",
    privacyUrl: "/privacy/com.erdemgonul.whereis",
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      {
        icon: "📸",
        title: "AI Photo Recognition",
        description:
          "Snap a photo and AI automatically identifies your item and its location. No manual typing needed.",
      },
      {
        icon: "🔍",
        title: "Find Anything Fast",
        description:
          "A powerful search engine for your stuff. Get results for batteries, passport, or winter coat in seconds.",
      },
      {
        icon: "☁️",
        title: "iCloud Sync",
        description:
          "Sign in with Apple to access your items on all your devices. Your inventory travels with you.",
      },
      {
        icon: "📦",
        title: "Moving Made Easy",
        description:
          "Label boxes and list contents. Find exactly which box has your coffee maker without opening them all.",
      },
      {
        icon: "🏷️",
        title: "Smart Categories",
        description:
          "Clothing, Electronics, Documents, Keys, and more. Organize your entire home effortlessly.",
      },
      {
        icon: "📝",
        title: "Notes & Photos",
        description:
          "Add personal notes and photos to any item. Never buy duplicates because you couldn't find what you own.",
      },
    ],
    pricing: {
      model: "Freemium",
      description: "Free for a few items. Upgrade as you grow.",
      highlights: [
        "Free: 3 items to start",
        "5 Items: $2.99",
        "10 Items: $4.99",
        "Unlimited: $9.99 one-time",
      ],
    },
    ctaDescription: "Download WhereIs free and start your journey to a more organized home.",
  },
  {
    slug: "whyexcited",
    name: "WhyExcited",
    tagline: "Capture What Makes You Happy",
    heroDescription:
      "In the noise of daily life, we forget what brings us joy. WhyExcited helps you track the moments, activities, and people that make you excited. Discover your happiness patterns and live more intentionally.",
    category: "Lifestyle",
    appStoreId: "",
    appStoreUrl: "",
    privacyUrl: "/privacy/com.erdemgonul.whyexcited",
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
    features: [
      {
        icon: "😊",
        title: "Mood Tracking",
        description:
          "Log what excites you and build a personal happiness journal over time.",
      },
      {
        icon: "📊",
        title: "Happiness Patterns",
        description:
          "Discover what activities, people, and places consistently bring you joy.",
      },
      {
        icon: "🔔",
        title: "Gentle Reminders",
        description:
          "Get nudged to log your exciting moments before they fade from memory.",
      },
      {
        icon: "📈",
        title: "Insights & Trends",
        description:
          "See your happiness trends over weeks and months. Understand what truly matters to you.",
      },
    ],
    pricing: {
      model: "Free",
      description: "Completely free to use.",
      highlights: [
        "Unlimited mood logging",
        "Personal insights dashboard",
        "No ads, no subscriptions",
      ],
    },
    ctaDescription: "Coming soon to the App Store. Stay tuned!",
  },
  {
    slug: "gas-calculator",
    name: "Gas Calculator",
    tagline: "Smart Fuel Cost Calculator",
    heroDescription:
      "Know exactly how much your trip will cost before you hit the road. Gas Calculator helps you estimate fuel costs, compare routes, and track your vehicle's fuel efficiency — all in one simple app.",
    category: "Utilities",
    appStoreId: "",
    appStoreUrl: "",
    privacyUrl: "/privacy/com.erdemgonul.gascalculator",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      {
        icon: "⛽",
        title: "Trip Cost Estimator",
        description:
          "Enter distance, fuel price, and your vehicle's consumption to get an accurate trip cost.",
      },
      {
        icon: "📊",
        title: "Fuel Efficiency Tracking",
        description:
          "Track your MPG or L/100km over time and see how your driving habits affect fuel costs.",
      },
      {
        icon: "🗺️",
        title: "Route Comparison",
        description:
          "Compare fuel costs across different routes to find the most economical option.",
      },
      {
        icon: "💰",
        title: "Cost History",
        description:
          "Keep a log of all your fuel expenses and visualize spending patterns over time.",
      },
    ],
    pricing: {
      model: "Free",
      description: "Completely free to use.",
      highlights: [
        "Unlimited trip calculations",
        "Fuel efficiency tracking",
        "No ads, no subscriptions",
      ],
    },
    ctaDescription: "Coming soon to the App Store. Stay tuned!",
  },
];

export function getAppBySlug(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}

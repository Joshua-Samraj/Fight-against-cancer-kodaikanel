import {
  Heart,
  Users,
  BookOpen,
  // calendar,
  Calendar,
  Smile
} from 'lucide-react';

export const GALLERIES_DATA = {
  awareness: {
    title: "Day 1",
    description: "Comprehensive information about cancer types, symptoms, and early detection methods for the Kodaikanel community.",
    icon: Calendar,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    cardImage: {
      src: "/assets/day 1.jpg",
      alt: "Cancer Awareness Day 1 Card"
    },
    images: [
      {
        id: 1,
        url: "/assets/1.jpg",
        src: "/assets/1.jpg",
        alt: "Cancer Awareness event 1",
        caption: "Cancer Awareness Day 1",
        description: "Community gathering for cancer awareness education"
      },
      {
        id: 2,
        url: "/images/awareness2.jpg",
        src: "/images/awareness2.jpg",
        alt: "Cancer Awareness event 2",
        caption: "Educational Session",
        description: "Healthcare professionals discussing prevention methods"
      }
    ]
  },
  survivors: {
    title: "Day 2",
    description: "Inspiring narratives from cancer survivors in Kodaikanel, showcasing resilience, courage, and the power of hope.",
    icon: Calendar,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-rose-50",
    textColor: "text-rose-800",
    cardImage: {
      src: "/assets/day .jpg",
      alt: "Cancer Survivors Day 2 Card"
    },
    images: [
      
    ]
  },
  community: {
    title: "Day 3",
    description: "The strong network of caregivers, volunteers, and community members who provide essential support to cancer patients.",
    icon: Calendar,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    cardImage: {
      src: "/assets/day 3.jpg",
      alt: "Community Support Day 3 Card"
    },
    images: [
      
    ]
  },
  prevention: {
    title: "Day 4",
    description: "Promoting healthy lifestyles, preventive measures, and wellness practices to reduce cancer risk in our community.",
    icon: Calendar,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-800",
    cardImage: {
      src: "/images/cards/prevention-card.jpg",
      alt: "Cancer Prevention Day 4 Card"
    },
    images: [
      
    ]
  }
};
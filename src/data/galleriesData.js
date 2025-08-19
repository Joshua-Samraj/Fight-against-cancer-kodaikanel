import { 
  Heart, 
  Users, 
  BookOpen, 
  Shield ,
  Smile
} from 'lucide-react';

export const GALLERIES_DATA = {
  awareness: {
    title: "Day 1",
    description: "Comprehensive information about cancer types, symptoms, and early detection methods for the Kodaikanel community.",
    icon: BookOpen,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    images: [
  { src: "../assets/1.jpg", alt: "Cancer Awareness event 1" },
  { src: "/images/awareness2.jpg", alt: "Cancer Awareness event 2" }
]

  },
  survivors: {
    title: "Day 2",
    description: "Inspiring narratives from cancer survivors in Kodaikanel, showcasing resilience, courage, and the power of hope.",
    icon: Heart,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-rose-50",
    textColor: "text-rose-800",
    images: [
      // ... (same image data as before)
    ]
  },
  community: {
    title: "Day 3",
    description: "The strong network of caregivers, volunteers, and community members who provide essential support to cancer patients.",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-800",
    images: [
      // ... (same image data as before)
    ]
  },
  prevention: {
    title: "Day 4",
    description: "Promoting healthy lifestyles, preventive measures, and wellness practices to reduce cancer risk in our community.",
    icon: Smile,
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-800",
    images: [
      // ... (same image data as before)
    ]
  }
};
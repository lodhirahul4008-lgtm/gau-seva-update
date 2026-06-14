export interface Breed {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  characteristic: string;
}

export interface Sanctuary {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
  progress: number;
  cowCount: number;
  highlight: string;
  needs: string;
}

export interface DailyVideo {
  id: string;
  category: string;
  title: string;
  image: string;
  duration: string;
}

export interface DonationPackage {
  id: string;
  name: string;
  subtitle: string;
  cost: number;
  description: string;
  unit: string;
  icon: string;
}

export interface SocialPost {
  id: string;
  author: string;
  avatarChar: string;
  timestamp: string;
  text: string;
  image?: string;
  youtubeId?: string;
  likes: number;
  comments: string[];
  isLikedByUser?: boolean;
}

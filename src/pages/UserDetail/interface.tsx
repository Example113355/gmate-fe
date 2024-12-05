export interface User {
  isGmater: boolean;
  isProfileCompleted: boolean;
  id: string;
  userId: any;
  isProPlayer: boolean;
  totalRating: number;
  totalReview: number;
  totalRentHour: number;
  nameDisplay: string;
  onlineStatus: boolean;
  introduce: string;
  rentPrice: number;
  pics: Pic[];
  categories: Category[];
  createAt: Date;
  createdAt: Date;
  updateAt: Date;
  description: string;
}

export interface Category {
  id: string;
  category: string;
}

export interface Pic {
  id: string;
  url: string;
}

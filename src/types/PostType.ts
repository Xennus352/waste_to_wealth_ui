export interface PostType {
  id: string;
  title: string;
  contentEnglish?: string | null;
  contentBurmese?: string | null;
  image?: string | null;
  type: string;
  isApproved: boolean;
  userId?: string | null;
  Comment: CommentType[];
  Like: LikeType[];
  Useful: UsefulType[];
  Save: SaveType[];
  User?: UserType | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CommentType {
  User: {
    PhoneNumber: string;
    ProfilePic: string;
    address: string;
    bio: string;
    createdAt: string;
    email: string;
    id: string;
    name: string;
    role: string;
    updatedAt: string;
  };
  content: string;
  createdAt: string;
  id: string;
  postId: string;
  updatedAt: string;
  userId: string;
}

export interface LikeType {
  createdAt: string;
  id: string;
  postId: string;
  updatedAt: string;
  userId: string;
}
export interface UsefulType {
  createdAt: string;
  id: string;
  postId: string;
  updatedAt: string;
  userId: string;
}

export interface SaveType {
  createdAt: string;
  id: string;
  postId: string;
  updatedAt: string;
  userId: string;
}

export interface UserType {
  PhoneNumber: string;
  ProfilePic: string;
  address: string;
  bio: string;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  role: string;
  updatedAt: string;
}

export interface FeedbackType {
  id: string;
  content: string;
  userId: string;
  User: UserType ;
  createdAt: string;
  updatedAt: string;
}

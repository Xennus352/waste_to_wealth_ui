export interface PostType {
  id: string;
  title: string;
  contentEnglish?: string | null;
  contentBurmese?: string | null;
  image?: string | null;
  type: string;
  useful: boolean;
  isApproved: boolean;
  userId?: string | null;
  Comment: CommentType[];
  Like: LikeType[];
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

export interface SaveType {
  // Define the structure of SaveType here
}

export interface UserType {
  // Define the structure of UserType here
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  profileImage: string;
  bio: string;
}

export interface UserInput {
  fullName: string;
  email: string;
  profileImage: string;
  bio: string;
}
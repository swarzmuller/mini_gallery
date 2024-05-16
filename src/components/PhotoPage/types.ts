export interface UserProps {
  name: string;
  profile_image: {
    small: string;
  };
}

interface Tags {
  type: string;
  title: string;
}

export interface FotoInfoTypes {
  user: UserProps;
  views: number;
  downloads: number;
  likes: number;
  description: string;
  tags: Tags[];
  urls: {
    regular: string;
  };
}

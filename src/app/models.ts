export interface Post {
  id?: number;
  description: string;
  id_user: number;
  url_image: string;
  like : number;
}

//rajout de l'interface Users que l'on utilisera dans home.component.ts
export interface UserModel {
  id_token: string;
  id: number;
  name: string;
  imageUrl: string;
  email: string;
}

export interface GoogleVolumeListResponse {
  totalItems: number;
  items: Array<{
    volumeInfo: {
      title: string;
    };
  }>;
}

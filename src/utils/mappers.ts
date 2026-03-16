import { Profile, User } from '@/types/auth';
import { Product, ProductAPI } from '../types/product';

export const mapProductToFront = (apiProduct: ProductAPI): Product => ({
  id: apiProduct.id,
  title: apiProduct.title,
  category: apiProduct.category,
  price: apiProduct.price,
  thumbnail: apiProduct.thumbnail,
});

export const extractUser = (profile: Profile): User => ({
  id: profile.id,
  username: profile.username,
  email: profile.email,
  firstName: profile.firstName,
  lastName: profile.lastName,
  gender: profile.gender,
  image: profile.image,
});

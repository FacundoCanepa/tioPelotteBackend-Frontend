export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  unidadMedida: string;
  taste: string;
  price: number;
  active: boolean;
  isFeatured: boolean;
  img: {
    data: {
      id: number;
      attributes: {
        url: string;
      };
    }[];
  };
  category: {
    id: number;
    categoryNames: string;
    slug: string;
  };
};

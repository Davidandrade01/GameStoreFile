import { ENV } from "@/utils";


export class Platform {
  async getAll() {
    try {
      const sort = "sort=order:asc"; // ordenação de forma ascendente, posso trocar (devido ao sort) no strapi
      const populate = "populate=icon";

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${populate}&${sort}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug){
    try {
      const filtered=`filters[slug][$eq]=${slug}`
      const url=`${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${filtered}`
      const response= await fetch(url)
      const result= await response.json()

      if (response.status!=200) throw error;
      return result.data[0]

    } catch (error) {
      console.error(error)
    }
  }

  
}
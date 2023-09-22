import { ENV } from "@/utils";

export class Gameclass{
    async GetLastPublished (){

        try {
          const sort = "sort=publishedAt:desc";
          const pagination = "pagination[limit]=1";
          const populate = "populate=*";
          const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
    
          const response = await fetch(url);
          const result = await response.json();
    
          if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, platformId = null }) {
    try {
      const filterPlatform =
        platformId && `filters[platform][id][$eq]=${platformId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[0]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${paginationLimit}&${filterPlatform}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getGameByPlatformSlug(slug,page){

    try {
      const filtered=`filters[platform][slug][$eq]=${slug}`
      const pagination=`pagination[page]=${page}&pagination[pageSize]=3`
      const populate='populate=*'
      const urlParams= `${filtered}&${pagination}&${populate}`

      const url= `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`
      const response= await fetch(url)
      const result=response.json()
      
      if(response.status!=200) throw error;
      return result
      
      
    } catch (error) {
      console.error(error)
    }
  }

  async searchGames(text,page){
    try {
        const filtered=`[filters][title][$contains]=${text}`  
        const pagination=`pagination[page]=${page}&pagination[pageSize]=30`
        const populate='populate=*'
        const urlParams=`${filtered}&${pagination}&${populate}`
        const url=`${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`
        const response=await fetch(url)
        const result=response.json()

        if(response.status!=200) throw error;
        return result

    } catch (error) {
      console.error(error)
    }
  }
}

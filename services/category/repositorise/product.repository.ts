import { ApiResponse } from "~/services/main copy/dto/api.response";
import { GetCategoryDTO } from "../dto/product.dto";
export class RoleRepository {
  private $api: any;

  constructor($api: any) {
    this.$api = $api;
  }
  
  async getCategory(): Promise<ApiResponse<GetCategoryDTO[]>> {
    const dataResult = await this.$api.main.$get('/category');
    console.log('dataResult',dataResult)
    return dataResult;
  }

 
}

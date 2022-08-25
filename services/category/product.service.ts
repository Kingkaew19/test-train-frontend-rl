import { ApiResponse } from "../main copy/dto/api.response";
import { CategoryBackstage } from "./backstages/product.backstage";
import { GetCategoryDTO,} from "./dto/product.dto";
import { RoleRepository } from "./repositorise/product.repository";


export class CategoryService extends CategoryBackstage {
  private roleRepository = new RoleRepository(this.$api);
  async getCategory(): Promise<ApiResponse<GetCategoryDTO[]>> {
    let dataResult: any = new GetCategoryDTO();
    try {
      dataResult = await this.roleRepository.getCategory();
    } catch (err: any) {
      dataResult.message = 'err';
    }

    return dataResult;
  }
}

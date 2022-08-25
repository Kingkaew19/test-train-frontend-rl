import { ApiResponse } from "../main/dto/api.response";
import { ProductBackstage } from "./backstages/product.backstage";
import { CreateProductDataDTO, CreateProductdataDTO, CreateProductDTO } from "./dto/create.product.dto";
import { DeleteProductdataDTO, DeleteProductDTO, GetProductDTO,  } from "./dto/product.dto";
import { RequestGetByIdDTO, RequestPostProductUploadDTO, RequestProductDTO } from "./dto/request.product";
import { RoleRepository } from "./repositorise/product.repository";


export class ProductService extends ProductBackstage {
  private roleRepository = new RoleRepository(this.$api);

  async getProduct(request: RequestProductDTO): Promise<ApiResponse<GetProductDTO[]>> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.roleRepository.getProduct(request);
    } catch (err: any) {
      dataResult.message = 'err';
    }

    return dataResult;
  }

  async getById(
    request: RequestGetByIdDTO
  ): Promise<ApiResponse<GetProductDTO[]>> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.roleRepository.getById(request);
    } catch (err: any) {
      dataResult.message = 'err';
    }

    return dataResult;
  }

  async putProduct(
    request: RequestProductDTO,
  ): Promise<ApiResponse<GetProductDTO>> {
    let dataResult: any = new GetProductDTO();
    try {
      dataResult = await this.roleRepository.putProduct(request);
    } catch (err: any) {
      console.log(err, ProductService.name);
      return err.response.data;
    }
    return dataResult;
  }

  async deleteProduct(request: DeleteProductDTO): Promise<DeleteProductdataDTO> {
    let dataResult: any = new DeleteProductdataDTO();
    try {
      dataResult = await this.roleRepository.deleteProduct(request);
    } catch (err) {
      dataResult.message = 'failed';
    }
    return dataResult;
  }

  async createProduct(request: CreateProductDTO): Promise<CreateProductdataDTO> {
    console.log('create')
    let dataResult: any = new CreateProductDataDTO();
    try {
      dataResult = await this.roleRepository.createProduct(request);
      dataResult.status = 200
    } catch (err: any) {
      dataResult.message = err.response.data.message;
      dataResult.status = err.response.status;
    }
    return dataResult;
  }

  async postProductUpload(
    request: RequestPostProductUploadDTO,
  ): Promise<ApiResponse<GetProductDTO>> {
    let dataResult = new ApiResponse<GetProductDTO>();
    
    try {
      dataResult = await this.roleRepository.postProductUpload(request);
    } catch (err: any) {
      console.log(err, ProductService.name);
      return err.response.data;
    }

    return dataResult;
  }
}

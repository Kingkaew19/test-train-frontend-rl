import { ApiResponse } from "~/services/main copy/dto/api.response";
import { CreateProductdataDTO, CreateProductDTO } from "../dto/create.product.dto";
import { DeleteProductdataDTO, DeleteProductDTO, GetProductDTO } from "../dto/product.dto";
import { RequestGetByIdDTO, RequestPostProductUploadDTO, RequestProductDTO } from "../dto/request.product";

export class RoleRepository {
  private $api: any;

  constructor($api: any) {
    this.$api = $api;
  }
  
  async getProduct(request:RequestProductDTO): Promise<ApiResponse<GetProductDTO[]>> {
    const dataResult = await this.$api.main.$get('/v1/product', {
      params: {
        ...request,
      },
    });
    console.log('dataResult',dataResult)
    return dataResult;
  }

  async getById(request:RequestGetByIdDTO): Promise<ApiResponse<GetProductDTO[]>> {
    const dataResult = await this.$api.main.$get(`/v1/product/get/${request.id}`);
    console.log('dataResult',dataResult)
    return dataResult;
  }

  async putProduct(
    request: RequestProductDTO,
  ): Promise<ApiResponse<GetProductDTO>> {
    const dataResult = await this.$api.main.$put('/v1/product', {
      data: {
        ...request,
      },
    });
    return dataResult;
  }

    async deleteProduct(request: DeleteProductDTO): Promise<DeleteProductdataDTO> {
    const dataResult = await this.$api.main.$delete(`/v1/product/${request}`);
    console.log('dataResult', dataResult)
    return dataResult;
  }

  async createProduct(request: CreateProductDTO): Promise<CreateProductdataDTO> {
    const dataResult = await this.$api.main.$post('/v1/product/create', {
      data: {
        ...request,
      },
    });
    console.log('dataResult', dataResult)
    return dataResult;
  }

  async postProductUpload(request: RequestPostProductUploadDTO): Promise<any> {
    const dataResult = await this.$api.main.$post(`/v1/product/upload/${request.id}`, request.file);
    console.log('dataResult',dataResult)
    return dataResult;
  }
}

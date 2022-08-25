export class CreateProductdataDTO {
    id: number = 0;
    name: string = '';
    sku: string = '';
    price: string = '';
    stock: string = '';
    description: string = '';
    categoryId: number = 0;
    status: string = '';
    imagePath: string='';
}

export class CreateProductDataDTO {
    data: CreateProductdataDTO[] = [];
    meta: CreateProductdataDTO = new CreateProductdataDTO();
  }
  
  export class CreateProductDTO {
    result: CreateProductDataDTO = new CreateProductDataDTO();
    message: string = '';
  }
export class RequestPostProductUploadDTO {
    id: number = 0;
    file?: File;
  }

  export class RequestGetByIdDTO {
    id: number = 0;
  }

  export class RequestProductDTO {
    id: number = 0;
    name: string = '';
    sku: string = '';
    price: string = '';
    stock: string = '';
    description: string = '';
    categoryId: number = 0;
    imagePath: string='';
  }
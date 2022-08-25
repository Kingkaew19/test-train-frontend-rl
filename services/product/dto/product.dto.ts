export class GetProductDTO {
    id: number = 0;
    name: string = '';
    sku: string = '';
    price: string = '';
    stock: string = '';
    description: string = '';
    categoryId: number = 0;
    imagePath: string='';
    status: string = '';
    createdAt: string = '';
    updatedAt: string = '';
    deleteAt: string = '';
  }


  export class DeleteProductdataDTO {
    message: String = "";
    data: Object = {};
}

  export class DeleteProductDTO {
    id: string = '';
} 
  
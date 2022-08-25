import { CategoryService } from '~/services/category/product.service';
import { MainService } from '~/services/main/main.service';
import { ProductService } from '~/services/product/product.service';
import { SampleService } from '~/services/sample/sample.service';

export default (ctx: any, inject: any) => {
  const services = {
    main: new MainService(ctx.$api, ctx.store),
    sample: new SampleService(ctx.$api, ctx.store),
    product: new ProductService(ctx.$api, ctx.store),
    categories: new CategoryService(ctx.$api, ctx.store),
  }

  inject('services', services);
}

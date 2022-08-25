<template>
  <div>
    <div>
      <Grid isGutter30 class="grid-cal">
        <GridCol>
          <Select
            isColorBlueLight
            :label="'Category'"
            :width="250"
            :placeholder="'Shirt'"
            :options="categorise"
            v-model="category"
          />
        </GridCol>
      </Grid>
    </div>
    <Table isStripes>
      <THead>
        <TR>
          <TH isNumber><TInfo isHeading>No.</TInfo></TH>
          <TH><TInfo isHeading>Name</TInfo></TH>
          <TH><TInfo isHeading>Price</TInfo></TH>
          <TH><TInfo isHeading>Description</TInfo></TH>
          <TH><TInfo isHeading>Stock</TInfo></TH>
          <TH><TInfo isHeading>Category</TInfo></TH>
          <TH><TInfo isHeading>SKU</TInfo></TH>
          <TH isOperations class="is-actions"
            ><TInfo isHeading>Operations</TInfo></TH
          >
        </TR>
      </THead>
      <TBody>
        <TR v-for="(product, i) in products" :key="product.id">
          <TD isNumber> <TInfo></TInfo>{{ i + 1 }}<TInfo></TInfo></TD>
          <TD>{{ product.name }}</TD>
          <TD>{{ product.price }}</TD>
          <TD>{{ product.description }}</TD>
          <TD>{{ product.stock }}</TD>
          <TD>{{ product.category.name }}</TD>
          <TD>{{ product.sku }}</TD>
          <TD>
            <Grid>
              <GridCol>
                <TOperations isButtonGroup>
                  <Button
                    isCircle
                    isColorBlueLightest
                    isShowIconFront
                    :iconFrontSrc="'/images/icons/ic-edit.svg'"
                    :iconFrontWidth="15"
                    :iconFrontHeight="12"
                    @click="
                      () => {
                        $router.push(`/product/edit/${product.id}`);
                      }
                    "
                  />
                </TOperations>
              </GridCol>
              <GridCol>
                <TOperations isButtonGroup>
                  <Button
                    isCircle
                    isColorBlueLightest
                    isShowIconFront
                    :iconFrontSrc="'/images/icons/ic-delete.svg'"
                    :iconFrontWidth="15"
                    :iconFrontHeight="12"
                    @click="
                      () => {
                        onDelete(product);
                      }
                    "
                  />
                </TOperations>
              </GridCol>
            </Grid>
          </TD>
        </TR>
      </TBody>
    </Table>
    <div>
      <Button
        class="btn"
        @click="
          () => {
            $router.push(`/product/create-product`);
          }
        "
        >Create</Button
      >
    </div>
  </div>
</template>

<script>
import { remove } from 'lodash';
import Components from '~/components/index.ts';
export default {
  name: 'list-product',
  components: {
    ...Components,
  },
  data() {
    return {
      products: [],
      productId: '',
      categorise: [],
      category: { name: 'All', value: '' },
    };
  },
  computed: {},
  watch: {
    category: function() {
      this.getProduct();
    }
  },
  async fetch() {
    this.getProduct();
    this.getCategory();
  },
  mounted() {},

  methods: {
    async getCategory() {
      const { data } = await this.$services.categories.getCategory();

      const list = data.map((e) => {
        return { value: e.id, name: e.name };
      });
      this.categorise = list;
    },

    async getProduct() {
      const search = { categoryId: this.category.value };
      console.log('category', search);
      const { data } = await this.$services.product.getProduct(search);
      this.products = data;
    },

    async onDelete(data) {
      this.productId = data.id;
      const id = this.productId;
      await this.$services.product.deleteProduct(id);
      await this.$functions.alert.success({
        message: 'Delete Success',
      });
      await this.$nuxt.refresh();
    },
  },
};
</script>
<style lang="scss">
@import '~assets/styleguides/styleguides';

.btn {
  margin: 10px 0px;
}
.grid-col {
  margin-bottom: 10px;
}
</style>

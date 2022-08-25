<template>
  <div>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Input
          isNoSpacingBottom
          isMandatory
          :width="250"
          :height="38"
          :label="'Name'"
          :placeholder="'Name'"
          @keyupEnter="onSave"
          v-model="name"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          isMandatory
          :width="250"
          :height="38"
          :label="'Price'"
          :placeholder="'2,000'"
          @keyupEnter="onSave"
          v-model="price"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          isMandatory
          :width="250"
          :height="38"
          :label="'Description'"
          :placeholder="'ABC'"
          @keyupEnter="onSave"
          v-model="description"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          isMandatory
          :width="250"
          :height="38"
          :label="'Stock'"
          :placeholder="'20'"
          @keyupEnter="onSave"
          v-model="stock"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Select
          isColorBlueLight
          isMandatory
          :label="'Category'"
          :width="250"
          :placeholder="'Shirt'"
          :options="categorise"
          v-model="category"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          isMandatory
          :width="250"
          :height="38"
          :label="'SKU'"
          :placeholder="'23658974125'"
          @keyupEnter="onSave"
          v-model="sku"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-col"
      ><GridCol>
        <Button
          class="ml-4"
          isColorRedDark
          type="submit"
          @click="() => onSave()"
          >Save</Button
        ></GridCol
      >
      <GridCol>
        <Button
          class="ml-4"
          isColorBluePrimaryLight
          type="submit"
          @click="() => onBack()"
          >Back</Button
        ></GridCol
      >
    </Grid>
  </div>
</template>

<script>
import { remove } from 'lodash';
import Components from '~/components/index.ts';
export default {
  name: 'create-product',
  components: {
    ...Components,
  },
  data() {
    return {
      name: '',
      price: '',
      description: '',
      stock: '',
      category: { name: 'All', value: '' },
      sku: '',
      categorise: [],
    };
  },
  computed: {},
  watch: {},
  async fetch() {
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

    async onSave() {
      const productData = {
        name: this.name,
        price: this.price,
        description: this.description,
        stock: this.stock,
        categoryId: this.category.value,
        sku: this.sku,
      };
      const result = await this.$services.product.createProduct(productData);

      this.$services.main.setIsShowLoading(false);
    },

    onBack() {
      this.$router.push('/product/list-product');
    },
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.grid-col {
  margin: 10px;
}
</style>

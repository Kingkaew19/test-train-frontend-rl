<template>
  <div>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Grid isCenter>
          <ImageRatio
            class="img-upload"
            :src="$functions.displayImage(imageUpload, true)"
            :width="104"
            :widthUnit="'px'"
            :height="104"
            :heightUnit="'px'"
            :borderRadius="50"
            :borderRadiusUnit="'%'"
            :onClick="function () {}"
          />
        </Grid>
      </GridCol>
      <GridCol>
        <Grid isCenter>
          <UploadFile
            :iconSrc="'/images/icons/ic-upload-white.svg'"
            isColorGreen
            isMedium
            :label="'Upload Image'"
            :width="150"
            :accept="'.jpg, .jpeg, .png'"
            :onChangeUploadFile="onChangeUploadFile"
          />
        </Grid>
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Input
          isNoSpacingBottom
          :width="250"
          :height="38"
          :label="'Name'"
          :placeholder="''"
          @keyupEnter="getProductData"
          v-model="name"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          :width="250"
          :height="38"
          :label="'Price'"
          :placeholder="'Name,Email'"
          @keyupEnter="getProductData"
          v-model="price"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          :width="250"
          :height="38"
          :label="'Description'"
          :placeholder="'Name,Email'"
          @keyupEnter="getProductData"
          v-model="description"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          :width="250"
          :height="38"
          :label="'Stock'"
          :placeholder="'Name,Email'"
          @keyupEnter="getProductData"
          v-model="stock"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal">
      <GridCol>
        <Select
          isColorBlueLight
          :label="'Category'"
          :width="250"
          :placeholder="'Category'"
          :options="categorise"
          v-model="category"
        />
      </GridCol>
      <GridCol>
        <Input
          isShowIconLeft
          isNoSpacingBottom
          :width="250"
          :height="38"
          :label="'SKU'"
          :placeholder="'Name,Email'"
          @keyupEnter="getProductData"
          v-model="sku"
        />
      </GridCol>
    </Grid>
    <Grid isGutter30 class="grid-cal"
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
  name: 'edit-product',
  components: {
    ...Components,
  },
  data() {
    return {
      formData: [],
      name: '',
      price: '',
      description: '',
      stock: '',
      category: { name: 'All', value: '' },
      sku: '',
      categorise: [],
      modalSubmit: {
        isShow: false,
      },
      imageUpload: '',
      profileImage: '',
    };
  },
  computed: {},
  watch: {},
  async fetch() {
    this.getProductData();
    this.getCategory();
  },
  mounted() {},

  methods: {
    async getProductData() {
      const search = {
        id: this.$route.params.id,
      };
      const { data } = await this.$services.product.getById(search);
      this.formData = data;
      this.name = data.name;
      this.price = data.price;
      this.description = data.description;
      this.stock = data.stock;
      this.category = data.category;
      this.sku = data.sku;
      this.imageUpload = this.$functions.displayImage(data.imagePath);
    },

    async getCategory() {
      const { data } = await this.$services.categories.getCategory();

      const list = data.map((e) => {
        return { value: e.id, name: e.name };
      });
      this.categorise = list;
    },

    openModalSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.modalSubmit.isShow = true;
      } else {
        this.$functions.alert.error({
          message: this.$constants.MESSAGE.REQUIRED_ALL_FIELD,
        });
      }
    },

    closeModalSubmit() {
      this.modalSubmit.isShow = false;
    },
    async onSubmitUpdate() {
      this.closeModalSubmit();
      this.onSave();
      this.$functions.alert.success({
        message: this.$constants.ALERT_MESSAGE.EDIT_SALE_PATTERN.SUCCESS,
      });
      this.$router.back();
    },

    onChangeUploadFile(ev) {
      const maximumSize = 1024 ** 2 * 5;
      const imageUpload = this.$functions.validateFile(
        ev.target.files[0],
        ['jpg', 'jpeg', 'png'],
        maximumSize,
      );
      if (imageUpload) {
        this.imageUpload = URL.createObjectURL(imageUpload);
      }
      this.profileImage = imageUpload;
    },

    async onSave() {
      const productData = {
        id: this.formData.id,
        name: this.name,
        price: this.price,
        description: this.description,
        stock: this.stock,
        categoryId: this.category.value,
        sku: this.sku,
      };
      console.log('productData', productData);
      const result = await this.$services.product.putProduct(productData);
      console.log('message',result.message)
      if (
        result.message === this.$constants.ENUM.API_RESPONSE.SUCCESS.MESSAGE
      ) {
        if (this.profileImage != '') {
          const imagePath = this.$functions.getFormData({
            file: this.profileImage,
          });
          const uploadImage = await this.$services.product.postProductUpload({
            id: this.formData.id,
            file: imagePath,
          });
        }
      }

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

.grid-cal {
  margin: 10px;
}
</style>

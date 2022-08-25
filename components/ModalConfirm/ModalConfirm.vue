<template>
  <Modal
    :class="[
      'modal-confirm',
      {
        'is-active': isShow,
        'is-theme-blue': isThemeBlue,
        'is-theme-red': isThemeRed,
      },
      className,
    ]"
    :style="[inlineStyles]"
    :onBackdrop="onBackdrop"
    :data-test-id="dataTestId"
  >
    <ModalHeader>
      <Grid isGutter10 isVerticalCenter class="modal-confirm-header">
        <GridCol>
          <span>{{ header }}</span>
        </GridCol>
      </Grid>
    </ModalHeader>
    <ModalBody>
      <Grid
        isCenter
        isVerticalCenter
        isDirectionColumn
        class="modal-confirm-section"
      >
        <GridCol class="is-description">
          {{ description }}
        </GridCol>
        <GridCol v-if="subDescription" class="sub-description">
          {{ subDescription }}
        </GridCol>
      </Grid>
    </ModalBody>
    <ModalFooter isRight>
      <Grid isGutter15>
        <GridCol>
          <Button
            class="cancel-button"
            :width="139"
            @click="onClose"
            :dataTestId="'cancel'"
            isTextBlue
          >
            CANCEL
          </Button>
        </GridCol>
        <GridCol>
          <Button
            v-if="showComfirmButton"
            isColorBluePrimaryLight
            :width="139"
            @click="onConfirm"
            :dataTestId="'confirm'"
          >
            CONFIRM
          </Button>
        </GridCol>
      </Grid>
    </ModalFooter>
  </Modal>
</template>

<script>
import Modal from './../Modal/index.ts';
import Grid from './../Grid/index.ts';
import Icon from './../Icon/index.ts';
import Button from './../Button/index.ts';

export default {
  name: 'ModalConfirm',

  components: {
    Modal: Modal.Modal,
    ModalHeader: Modal.ModalHeader,
    ModalBody: Modal.ModalBody,
    ModalFooter: Modal.ModalFooter,
    Grid: Grid.Grid,
    GridCol: Grid.GridCol,
    Icon: Icon.Icon,
    Button: Button.Button,
  },

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function () {},
    },
    isShow: {
      type: Boolean,
    },
    onConfirm: {
      type: Function,
      default: function () {},
    },
    onClose: {
      type: Function,
      default: function () {},
    },
    onBackdrop: {
      type: Function,
      default: function () {},
    },
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    subDescription: {
      type: String,
    },
    isThemeRed: {
      type: Boolean,
    },
    isThemeBlue: {
      type: Boolean,
    },
    showComfirmButton: {
      type: Boolean,
      default: true,
    },
    dataTestId: {
      type: String,
    },
    
  },

  mounted() {},

  data() {
    return {};
  },

  methods: {
    function_name() {},
  },
};
</script>

<style lang="scss">
@import '~assets/styleguides/styleguides';

.modal-confirm {
  /* Parent style   ------------------------------ */
  /* Children style ------------------------------ */
  .modal-confirm-section {
    text-align: center;
  }

  .modal-confirm-header {
    @include typography-secondary-bold-16;
    color: $color-white;
    width: 100%;
    border-radius: 10px;
    padding: 11px 0px;
    .modal-confirm-icon {
      //background: $color-blue-16;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      .icon-custom {
        margin-right: unset;
      }
    }
  }

  .is-description {
    @include typography-secondary-regular-14;
    color: $color-black;
  }
  .sub-description {
    @include typography-secondary-regular-14;
    //color: $color-blue-16;
    margin-top: 8px;
    max-width: 400px;
  }
  /* Other component style ----------------------- */
  /* Modifier style ------------------------------ */
  .modal-card {
    width: 580px;
    min-height: 342px;
  }
  .modal-body-custom {
    display: flex;
    justify-content: center;
  }
  .modal-header-custom {
    background: $color-purple-5;
    height: 60px;
  }
  .modal-footer-custom {
    background: $color-white;
    padding: 0 64px 51px;
  }
  .modal-body-custom {
    padding: 40px 24px;
  }

  &.is-theme-red {
    .sub-description {
      color: $color-red-1;
    }
  }
  .cancel-button {
    background-color: $color-white;
    //border: 1px solid $color-blue-17;
  }
}
</style>

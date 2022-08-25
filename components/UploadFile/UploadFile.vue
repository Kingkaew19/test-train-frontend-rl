<template>
  <div
    :class="[
      'upload-file', {
      'is-fluid': isFluid,
      'is-disabled': isDisabled,
      'is-blue': isBlue,
      'is-color-purple': isColorPurple,
      'is-color-green': isColorGreen,
      'is-white': isWhite,
      'is-text-gray': isTextGray,
      'is-small': isSmall,
      'is-medium': isMedium,
      }, className,
    ]"
    :style="[
      inlineStyles,
    ]"
  >
    <div class="file">
      <label class="file-label">
        <input
          class="file-input"
          type="file"
          :name="name"
          :value="value"
          :accept="accept"
          :multiple="isMultiple"
          @change="onChangeUploadFile"
        />
        <span
          class="file-cta"
          :style="{ width: width + 'px' }"
        >
          <span v-if="iconSrc" class="file-icon">
            <img
              :src="iconSrc"
              :style="{
                top: iconTop + 'px',
                left: iconLeft + 'px',
                width: iconWidth + 'px',
                height: iconHeight + 'px',
              }"
              :alt="iconAlt"
            />
          </span>
          <span
            v-if="label"
            class="file-label-name"
            :style="{
              top: textTop + 'px',
            }"
          >
            {{ label }}
          </span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadFile",

  // Props types: String, Number, Boolean, Array, Object, Function, Promise
  props: {
    className: {
      type: String,
    },
    inlineStyles: {
      type: Object,
      default: function() {
        return {
          // Style
        };
      },
    },
    isMultiple: {
      type: Boolean,
    },
    isFluid: {
      type: Boolean,
    },
    isDisabled: {
      type: Boolean,
    },
    isBlue: {
      type: Boolean,
    },
    isColorPurple: {
      type: Boolean,
    },
    isWhite: {
      type: Boolean
    },
    isTextGray: {
      type: Boolean
    },
    isSmall: {
      type: Boolean,
    },
    isMedium: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    accept: {
      type: String,
      // default: '.jpg, .jpeg, .gif, .png',
      // default: 'image/*',
    },
    iconSrc: {
      type: String,
    },
    iconTop: {
      type: Number,
    },
    iconLeft: {
      type: Number,
    },
    iconWidth: {
      type: Number,
    },
    iconHeight: {
      type: Number,
    },
    iconAlt: {
      type: String,
      default: 'Icon',
    },
    label: {
      type: String,
    },
    width: {
      type: Number,
    },
    textTop: {
      type: Number,
    },
    onChangeUploadFile: {
      type: Function,
      default() {}
    },
    isColorGreen:{
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
@import "~assets/styleguides/styleguides";

.upload-file {
  /* Parent style   ------------------------------ */
  display: inline-block;

  /* Children style ------------------------------ */
  .file {
    &:active {
      opacity: 0.75;
    }
  }

  .file-label {
    &:hover {
      .file-cta {
        background-color: $color-black;
      }
    }
  }

  .file-cta {
    @include button-transition;
    justify-content: center;
    height: $button-height;
    padding: 0 12px;
    background-color: $color-black;
    border-width: 0;
    border-color: transparent;
    border-radius: 4px;
    line-height: 1;
  }

  .file-icon {
    width: auto;
    height: auto;
    margin-right: 8px;
  }

  .file-label-name {
     @include typography-secondary-regular-14;
    position: relative;
    color: $color-white;
  }

  /* Modifier style ------------------------------ */
  &.is-fluid {
    width: 100%;

    .file-label,
    .file-cta {
      width: 100%;
    }

    .file-cta {
      justify-content: center;
    }
  }

  /* Color */
  &.is-disabled {
    pointer-events: none;

    .file-label {
      &:hover {
        .file-cta {
          background-color: $color-disabled;
        }
      }
    }

    .file-cta {
      background-color: $color-disabled;
    }
  }

  &.is-blue {
    .file-label {
      &:hover {
        .file-cta {
          background-color: $color-blue-9;
        }
      }
    }

    .file-cta {
      background-color: $color-blue-1;
    }
  }

  &.is-color-purple {
    .file-label {
      &:hover {
        .file-cta {
           background: $color-purple-3;
        }
      }
    }

    .file-cta {
       background: $color-purple-2;
    }
  }


  &.is-color-green {
    .file-label {
      &:hover {
        .file-cta {
           background: $color-green-3;
        }
      }
    }

    .file-cta {
       background: $color-green-2;
    }
  }

  &.is-white {
    .file-label {
      &:hover {
        .file-cta {
          background-color: $color-white;
        }
      }
    }

    .file-cta {
      background-color: $color-white;
      border-radius: 50px;
    }

    .file-label-name {
      color: $color-blue-1;
    }
  }

  /* Text color */
  &.is-text-gray {
    .file-label-name {
      color: $color-gray-1;
    }
  }

  /* Size */
  &.is-small {
    .file-cta {
      height: $button-small-height;
      border-radius: 3px;
    }

    .file-label-name {
      @include typography-secondary-regular-10;
    }
  }

  &.is-medium {
    .file-cta {
      height: $button-medium-height;
      border-radius: 4px;
    }

    .file-label-name {
       @include typography-secondary-regular-14;
    }
  }
}
</style>

 <template>
  <el-select
    v-model="value"
    :placeholder="placeholder"
    @change="changeValue"
    size="small"
    :style="{ width: width+'px'}"
  >
    <el-option v-for="(val,index) in options" :key="index" :label="val" :value="val"></el-option>
  </el-select>
</template>

 <script>
export default {
  name: "Select",
  props: {
    options: {
      type: [Array, Number],
      default: []
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "numberSelectEvent"
    },
    width: {
      type: Number,
      default: 180
    },
    default: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      value: this.default
        ? typeof this.options == "number"
          ? this.default
          : this.options[this.default]
        : typeof this.options == "number"
        ? 1
        : this.options[0]
      // value: this.default ? this.options[this.default] : this.options[0]
    };
  },
  methods: {
    changeValue(val) {
      this.$emit(this.name, val);
    }
  },
  watch: {
    default: function(val) {
      this.value = val;
    }
  }
};
</script>

 <style lang="scss" scoped>
.el-input input {
  width: 1px;
}
</style>
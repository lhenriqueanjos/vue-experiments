import axios from 'axios';

export default {
  name: 'DataProvider',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: null,
      loaded: false,
    };
  },
  created() {
    axios.get(this.url).then(({ data }) => {
      this.data = data;
      this.loaded = true;
    });
  },
  render() {
    const slot = this.$scopedSlots.default({
      loading: !this.loaded,
      data: this.data,
    });

    return Array.isArray(slot) ? slot[0] : slot;
  },
};

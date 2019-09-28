import LazyLoadingErrorIndicator from './LazyLoadingErrorIndicator.vue';
import LazyLoadingIndicator from './LazyLoadingIndicator.vue';

export default function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: LazyLoadingIndicator,
    error: LazyLoadingErrorIndicator,
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    },
  });
}

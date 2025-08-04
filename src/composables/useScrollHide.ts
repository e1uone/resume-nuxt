import { ref, onMounted, onUnmounted } from "vue";

export function useScrollHide(threshold = 10) {
  const isVisible = ref(true);
  const lastScrollY = ref(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    const isWithinThreshold =
      Math.abs(currentScrollY - lastScrollY.value) < threshold;

    if (isWithinThreshold) {
      return;
    }

    const isScrollDown =
      currentScrollY > lastScrollY.value && currentScrollY > 100;

    if (isScrollDown) {
      isVisible.value = false;
    } else {
      isVisible.value = true;
    }

    lastScrollY.value = currentScrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isVisible };
}

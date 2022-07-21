import { onBeforeUnmount, onMounted } from "vue";

/**
 *
 * @param {*} el_target_ref
 * @param {*} callback_fn
 * @returns
 */

export function useClickOutside(el_target_ref, callback_fn) {
  if (! el_target_ref) {
    return;
  }
let listener = (e) => {
    if (
      e.target == el_target_ref.value ||
      e.composedPath().includes(el_target_ref.value)
    ) {
      return;
    } else if (typeof callback_fn == "function") {
      callback_fn();
    }
  };

  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
  return {
    listener,
  };
}


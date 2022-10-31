export function styles(node: HTMLElement, styles: Record<string, string>) {
  setCustomProperties(node, styles);

  return {
    update(styles) {
      setCustomProperties(node, styles);
    },
  };
}

function setCustomProperties(
  node: HTMLElement,
  styles: Record<string, string>
) {
  Object.entries(styles).forEach(([key, value]) => {
    node.style.setProperty(`--${key}`, value);
  });
}

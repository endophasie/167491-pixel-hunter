let loadTemplate = (str) => {
  const node = document.createElement('div');
  node.innerHTML = str;
  return node;
};
export default loadTemplate;

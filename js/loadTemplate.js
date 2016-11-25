let loadTemplate = (str) => {
  let node = document.createElement('div');
  node.innerHTML = str;
  return node;
};
export default loadTemplate;

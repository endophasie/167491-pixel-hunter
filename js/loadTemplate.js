let loadTemplate = (str) => {
	let node = document.createElement('span');
	node.innerHTML = str;
	return node;
};
export default loadTemplate;
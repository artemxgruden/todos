const { render } = require("react-dom");

const {
  redirect,
  listenPopstateEvent,
  traverseComposition,
} = require("react-routed-components");

const {
  loadDynamicImportedComponents,
} = require("react-dynamic-imported-components");

const createComposition = require("./create-composition.js");

const dataStateStorage = require("./data-state-storage.js");
const rootDOMElement = require("./root-dom-element.js");

const start = async () => {
  listenPopstateEvent();

  const composition = createComposition({
    dataStateStorage,
    redirect,
  });

  const dynamicImportedComponents = traverseComposition(composition, [
    "component",
  ]);

  await loadDynamicImportedComponents(dynamicImportedComponents);

	// hydrate(composition, rootDOMElement);
	render(composition, rootDOMElement);

  // window.addEventListener(TREE_MOUNTED_EVENT, handleTreeMountedEvent);
};

// overrideNativeObjects();
start();

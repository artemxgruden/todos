const { createElement } = require("react");

const {
  contexts: reactDataConnectedComponentsContexts,
} = require("react-data-connected-components");

const {
  createRoutedComponent,
  contexts: reactRoutedComponentsContexts,
} = require("react-routed-components");

const {
  createDynamicImportedComponent,
} = require("react-dynamic-imported-components");

const MainWrapper = createRoutedComponent({
  component: createDynamicImportedComponent({
    loader: () =>
      import(
        /* webpackChunkName: "main-wrapper" */ "./components/main-wrapper.js"
      ),
  }),
  path: "/",
  pathIsStrict: false,
  componentIsWrapper: true,
});

const MainView = createRoutedComponent({
  component: createDynamicImportedComponent({
    loader: () =>
      import(
        /* webpackChunkName: "main-view" */ "./components/main_wrapper/main-view.js"
      ),
  }),
  path: "/",
  pathIsStrict: true,
  componentIsWrapper: false,
  documentTitle: "Главная страница",
});

const UsersView = createRoutedComponent({
  component: () => createElement("div", {}, "Пользователи"),
  path: "/users",
  pathIsStrict: false,
  componentIsWrapper: false,
  documentTitle: "Пользователи",
});

module.exports = (props) => {
  const { initialPath, dataStateStorage, redirect } = props;

  return createElement(
    reactDataConnectedComponentsContexts.dataStateStorageContext.Provider,
    { value: dataStateStorage },
    createElement(
      reactRoutedComponentsContexts.initialPathContext.Provider,
      { value: typeof window === "undefined" ? initialPath : null },
      createElement(
        reactRoutedComponentsContexts.redirectContext.Provider,
        { value: redirect },
        createElement(
          MainWrapper,
          {},
          createElement(MainView),
          createElement(UsersView)
        )
      )
    )
  );
};

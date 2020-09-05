const clientModulesBundlingStatistics = require("./../../client_bundled_modules/bundling-statistics.js");

const commonJsFilename =
  clientModulesBundlingStatistics.assetsByChunkName["common"][0];
const mainJsFilename =
  clientModulesBundlingStatistics.assetsByChunkName["main"][0];

const writeDocumentDataPart2 = (response, { initialDataState }) => {
  response.write("</div>");

  // const jsonString = JSON.stringify(initialDataState).replace(/</g, "\\u003c");

  // response.write(
  //   `<script>window.__INITIAL_DATA_STATE__ = JSON.parse('${jsonString}');</script>`
  // );

  // // Проверка того, что наш браузер поддерживает Service Worker API.
  // if ('serviceWorker' in navigator) {
  //     // Весь код регистрации у нас асинхронный.
  //     navigator.serviceWorker.register('/files/client_bundled_modules/service-worker.js')
  //       .then(() => navigator.serviceWorker.ready.then((worker) => {
  //         worker.sync.register('syncdata');
  //       }))
  //       .catch((err) => console.log(err));
  // }

  response.write(
    `<script src="/files/client_bundled_modules/${commonJsFilename}" defer></script>`
  );
  // response.write(
  //   `<script>
	//     window.calculationWorker = new Worker("/files/client_bundled_modules/${calculationWorkerJsFilename}", {type: "module"});
  //   </script>`
  // );
  response.write(
    `<script src="/files/client_bundled_modules/${mainJsFilename}" defer></script>`
  );
  response.write("</body>");
  response.write("</html>");
};

module.exports = writeDocumentDataPart2;

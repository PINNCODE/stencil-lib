import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import {sass} from "@stencil/sass";
import { Config } from '@stencil/core';

// Permite definir que componentes deben integrarse con ngModel (formularios)
// https://stenciljs.com/docs/angular#valueaccessorconfigs
const valueAccessorConfigs: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'web-components-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@web-components-library/dist/components', // Nombre del path mapping insertado en el tsconfig.json de angular
      directivesProxyFile: './../example/src/libs/web-components-library/web-components.ts', // Ruta donde se almacenarán los angular components wrappers
      valueAccessorConfigs: valueAccessorConfigs, // Permite definir que componentes deben integrarse con ngModel (formularios)
    }),
  ],
  plugins: [sass()]
};

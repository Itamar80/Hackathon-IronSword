/* eslint-disable @typescript-eslint/no-explicit-any */


declare module '*.jpeg' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

// packages declarations
declare module '@rnmapbox/maps';
declare module 'lodash.isequal';

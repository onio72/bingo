module.exports = {
  multipass: true,
  js2svg: { pretty: false },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Mantener viewBox para escalado correcto en web
          removeViewBox: false,
          // Evitar romper posibles referencias internas
          cleanupIDs: false,
          // No necesitamos metadatos/títulos incrustados
          removeTitle: true,
          removeDesc: true
        }
      }
    },
    // Mantener SVGs fluidos eliminando width/height si hay viewBox
    'removeDimensions',
    { name: 'convertPathData', params: { floatPrecision: 3 } },
    { name: 'cleanupNumericValues', params: { floatPrecision: 3 } },
    'sortAttrs'
  ]
};


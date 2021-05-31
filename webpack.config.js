const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const path = require('path');
const { minify } = require("terser");
const terserOption = require("./terserOptions.js");
const env = (() => (process.env.NODE_ENV === 'production') ? 'prod' : 'dev')();

module.exports = {
   entry: {
      source1: (() => {
         return {
            filename: `./Final/final_${env}_default.js`,
            import: ["./Source1/source1.js", "./Source2/source2.js"],
         };
      })(),
   },
   output: {
      path: path.resolve(__dirname),
      iife: false,
   },
   optimization: {
      concatenateModules: true,
      minimize: true,
      minimizer: [
         new MergeIntoSingleFilePlugin({
            files: [{
               src: ["./Source1/source1.js", "./Source2/source2.js"],
               dest: async code => {
                  const minified = await minify(code, {
                     ...terserOption,
                     sourceMap: {
                        filename: `./Final/final_${env}.js`,
                     },
                     mangle: {
                        ...terserOption.mangle,
                        reserved: ["this_function_name_should_be_reserved",]
                     },
                  });
                  return {
                     [`./Final/final_${env}_plugin.js`]: minified.code,
                  };
               },
            }]
         }),
      ],
   }
}
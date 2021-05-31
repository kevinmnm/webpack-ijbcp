
module.exports = {
   /** https://github.com/terser/terser#compress-options **/
   compress: {
      defaults: true,
      ecma: 5,
      arrows: true,
      arguments: false,
      booleans: true,
      collapse_vars: true,
      conditionals: true,
      dead_code: true,
      directives: true,
      drop_console: false,
      drop_debugger: true,
      hoist_vars: false,
      keep_classnames: false,
      module: false,
      passes: 1,
      properties: true,
   },
   /** https://github.com/terser/terser#mangle-options **/
   mangle: {
      eval: false,
      keep_classnames: false,
      keep_fnames: false,
      module: false,
      reserved: [],
      toplevel: true,
      safari10: false,
   },
   /** https://github.com/terser/terser#format-options **/
   format: {
      comments: false,
      max_line_len: false,
      preamble: "// This is a Preamble",
      wrap_iife: false,
   },
};


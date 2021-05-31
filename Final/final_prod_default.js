var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
const constantFromTheSourceOneFile = "THIS IS FROM a.js FILE";

function this_function_name_should_be_reserved() {
   for (let i=0; i<5; i++) {
      console.warn(i);  
   }
}
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
console.log(constantFromTheSourceOneFile);

this_function_name_should_be_reserved();
})();


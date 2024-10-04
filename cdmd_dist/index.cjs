/*! @license
The MIT License (MIT)

Copyright (c) 2024 dfordp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"workflow",{enumerable:true,get:function(){return workflow}});const _nodefs=_interop_require_default(require("node:fs"));function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}async function workflow({files,astGrep}){const webpackPattern=`"webpack"`;const rspackPattern=`"rspack"`;const packageJsonFiles=await files("**/package.json");for(const file of packageJsonFiles){const fileContent=_nodefs.default.readFileSync(file,"utf-8");const updatedContent=astGrep(fileContent).replace(webpackPattern,rspackPattern).toString();_nodefs.default.writeFileSync(file,updatedContent);console.log(`Updated scripts in file: ${file}`)}}
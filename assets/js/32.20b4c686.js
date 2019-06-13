(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{316:function(t,a,n){"use strict";n.r(a);var s=n(2),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"contract"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract","aria-hidden":"true"}},[t._v("#")]),t._v(" Contract")]),t._v(" "),n("p",[n("strong",[t._v("Supported protocols:")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Websocket")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–subscribe")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")])])])]),t._v(" "),n("h2",{attrs:{id:"contract-packcontractdata"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contract-packcontractdata","aria-hidden":"true"}},[t._v("#")]),t._v(" contract_packContractData")]),t._v(" "),n("p",[t._v("Pack the given method name to conform the ABI")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("string")]),t._v(" :  abi string")]),t._v(" "),n("li",[n("code",[t._v("string")]),t._v(" :  method name")]),t._v(" "),n("li",[n("code",[t._v("[]string")]),t._v(" : arguments for the method")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("string")]),t._v(" :  packed result")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),n("demo",{staticClass:"custom-block-demo"},[n("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[22,36],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"contract_packContractData\\",\\n\\t\\"params\\": [\\n\\t\\t\\"[{ \\\\\\"type\\\\\\" : \\\\\\"function\\\\\\", \\\\\\"name\\\\\\" : \\\\\\"balance\\\\\\", \\\\\\"constant\\\\\\" : true }]\\",\\n\\t\\t\\"balance\\",\\n\\t\\t[]\\n\\t]\\n}\\n\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[37,46],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": \\"Boc+Zw==\\"\\n}\\n\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[47,61],"nesting":0,"level":1,"children":null,"content":"{\\n\\t\\"jsonrpc\\": \\"2.0\\",\\n\\t\\"id\\": 1,\\n\\t\\"method\\": \\"contract_packContractData\\",\\n\\t\\"params\\": [\\n\\t\\t\\"[{ \\\\\\"type\\\\\\" : \\\\\\"function\\\\\\", \\\\\\"name\\\\\\" : \\\\\\"balance\\\\\\", \\\\\\"constant\\\\\\" : true }]\\",\\n\\t\\t\\"balance\\",\\n\\t\\t[]\\n\\t]\\n}\\n\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),n("div",{staticClass:"language-json tab:Request extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract_packContractData"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[{ \\"type\\" : \\"function\\", \\"name\\" : \\"balance\\", \\"constant\\" : true }]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("div",{staticClass:"language-json tab:Response extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Boc+Zw=="')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("div",{staticClass:"language-json test extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contract_packContractData"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[{ \\"type\\" : \\"function\\", \\"name\\" : \\"balance\\", \\"constant\\" : true }]"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],2)],1)},[],!1,null,null,null);a.default=e.exports}}]);
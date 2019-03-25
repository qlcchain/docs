(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{282:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"account"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account","aria-hidden":"true"}},[t._v("#")]),t._v(" Account")]),t._v(" "),a("p",[a("strong",[t._v("Supported protocols:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("JSON-RPC 2.0")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Websocket")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IPC")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Publish–subscribe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("TBD")])])])]),t._v(" "),a("h2",{attrs:{id:"account-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-create","aria-hidden":"true"}},[t._v("#")]),t._v(" account_create")]),t._v(" "),a("p",[t._v("Create a new account by seed and index")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(" : seed")]),t._v(" "),a("li",[a("code",[t._v("int")]),t._v(" : "),a("code",[t._v("optional")]),t._v(", index for account, if not set, default value is 0")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":\n"),a("code",[t._v("Account")]),t._v("  the private and public key for account")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("privKey")]),t._v(": private key for the new account")]),t._v(" "),a("li",[a("code",[t._v("pubKey")]),t._v(": public key for the new account")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[24,33],"nesting":0,"level":1,"children":null,"content":"{\\n    \\"jsonrpc\\": \\"2.0\\",\\n    \\"id\\": 3,\\n    \\"method\\": \\"account_create\\",\\n    \\"params\\": [\\"1234567890123456789012345678901234567890123456789012345678901234\\"]\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[34,45],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 3,\\n  \\"result\\": {\\n    \\"privKey\\": \\"f59e77456e068c5e4384776c9a6bbfd774abb7bdd99aa072a3304e40599fd658c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71\\",\\n    \\"pubKey\\": \\"c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71\\"\\n  }\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[46,55],"nesting":0,"level":1,"children":null,"content":"{\\n    \\"jsonrpc\\": \\"2.0\\",\\n    \\"id\\": 3,\\n    \\"method\\": \\"account_create\\",\\n    \\"params\\": [\\"1234567890123456789012345678901234567890123456789012345678901234\\"]\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_create"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890123456789012345678901234567890123456789012345678901234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"privKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"f59e77456e068c5e4384776c9a6bbfd774abb7bdd99aa072a3304e40599fd658c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pubKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c39010e6c0a9d53a3e83f3a36970b660257f000ee940648d6cdfbc1d7a932b71"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_create"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890123456789012345678901234567890123456789012345678901234"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"account-forpublickey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-forpublickey","aria-hidden":"true"}},[t._v("#")]),t._v(" account_forPublicKey")]),t._v(" "),a("p",[t._v("Return account address by public key")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": public key")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": account address")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[68,77],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":3,\\n  \\"method\\":\\"account_forPublicKey\\",\\n  \\"params\\":[\\"d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF\\"]\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[78,86],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 3,\\n  \\"result\\": \\"qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco\\"\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[87,96],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":3,\\n  \\"method\\":\\"account_forPublicKey\\",\\n  \\"params\\":[\\"d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF\\"]\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_forPublicKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3p1mnf5w3opm6sf4f9m7faeamks6cdeemx7p63tp4c9z456emzhhb1n9srco"')]),t._v("\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_forPublicKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d813a347c0d6d3265a269e656a1889cb2452d8c9f4b620756128ff10c8c9fdEF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"account-publickey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-publickey","aria-hidden":"true"}},[t._v("#")]),t._v(" account_publicKey")]),t._v(" "),a("p",[t._v("Return public key for account address")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": account address")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(": public key")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[109,118],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":3,\\n  \\"method\\":\\"account_publicKey\\",\\n  \\"params\\":[\\"qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q\\"]\\n","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[119,127],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 3,\\n  \\"result\\": \\"74df7928b18dcd45b58bcbcc56033c926a9c17ff242b013ed3f35085b3195e10\\"\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[128,137],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":3,\\n  \\"method\\":\\"account_publicKey\\",\\n  \\"params\\":[\\"qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q\\"]\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_publicKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"74df7928b18dcd45b58bcbcc56033c926a9c17ff242b013ed3f35085b3195e10"')]),t._v("\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_publicKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_1x8zh6nd55gfaptrqkyecr3ms6mcmidzyb3d16zf9wtiipsjkqiie6saqs1q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])],2),t._v(" "),a("h2",{attrs:{id:"account-validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-validate","aria-hidden":"true"}},[t._v("#")]),t._v(" account_validate")]),t._v(" "),a("p",[t._v("Returns whether the address is valid or not")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Parameters")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(":  address")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Returns")]),t._v(":")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("bool")]),t._v(":   if valid , return "),a("code",[t._v("true")]),t._v(", or return "),a("code",[t._v("false")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Example")]),t._v(":")])])]),t._v(" "),a("demo",{staticClass:"custom-block-demo"},[a("template",{slot:"code"},[t._v('[{"type":"fence","tag":"code","attrs":null,"map":[154,164],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"account_validate\\",\\n  \\"params\\":  [\\"qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw\\"]\\n}","markup":"```","info":"json tab:Request","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[165,173],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\": 1,\\n  \\"result\\": true\\n","markup":"```","info":"json tab:Response","meta":null,"block":true,"hidden":false},{"type":"fence","tag":"code","attrs":null,"map":[174,183],"nesting":0,"level":1,"children":null,"content":"{\\n  \\"jsonrpc\\": \\"2.0\\",\\n  \\"id\\":1,\\n  \\"method\\":\\"account_validate\\",\\n  \\"params\\":  [\\"qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw\\"]\\n","markup":"```","info":"json test","meta":null,"block":true,"hidden":false}]')]),t._v(" "),a("div",{staticClass:"language-json tab:Request extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_validate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("div",{staticClass:"language-json tab:Response extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n")])])]),a("div",{staticClass:"language-json test extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"account_validate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"qlc_3nihnp4a5zf5iq9pz54twp1dmksxnouc4i5k4y6f8gbnkc41p1b5ewm3inpw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])],2)],1)},[],!1,null,null,null);s.default=n.exports}}]);
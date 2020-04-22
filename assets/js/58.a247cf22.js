(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{421:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"golang-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golang-sdk"}},[t._v("#")]),t._v(" Golang SDK")]),t._v(" "),a("p",[t._v("Golang SDK 可以创建一个 QLC client，然后查询链上数据，包括的模块有：")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" QLCClient "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tAccount  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccountApi\n\tContract "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContractApi\n\tLedger   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LedgerApi\n\tMintage  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MintageApi\n\tNetwork  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetApi\n\tUtil     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UtilApi\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("p",[t._v("use as:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewQLCClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9735"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("defer")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Ledger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("BlocksCount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" err\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Golang SDK 还可以创建和管理钱包，见 "),a("RouterLink",{attrs:{to:"/zh/api/qlcgo/wallet.html"}},[t._v("wallet")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);
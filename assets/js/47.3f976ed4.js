(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{282:function(t,a,n){"use strict";n.r(a);var s=n(11),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"auxpow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#auxpow"}},[t._v("#")]),t._v(" AuxPoW")]),t._v(" "),n("p",[t._v("AuxPoW is the way that merged mining can exist; it is the relationship between two blockchains for one to trust the other's work as their own and accept AuxPoW blocks.")]),t._v(" "),n("p",[t._v("How to build AuxPoW proof, please check "),n("a",{attrs:{href:"https://en.bitcoin.it/wiki/Merged_mining_specification",target:"_blank",rel:"noopener noreferrer"}},[t._v("Merged mining specification"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("In here, QLC is auxiliary blockchain, BTC/LTC/Dash are parent blockchain.")]),t._v(" "),n("h2",{attrs:{id:"miner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#miner"}},[t._v("#")]),t._v(" Miner")]),t._v(" "),n("h3",{attrs:{id:"staking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" Staking")]),t._v(" "),n("p",[n("strong",[t._v("Miner MUST have enough pledge vote (staking) to generate new blocks.")])]),t._v(" "),n("h3",{attrs:{id:"use-gqlc-miner"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-gqlc-miner"}},[t._v("#")]),t._v(" Use gqlc-miner")]),t._v(" "),n("p",[t._v("gqlc-miner is just for develop testing with very poor performance.")]),t._v(" "),n("p",[t._v("(NOT RECOMMANED)")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mainnet default port is 9735")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# testnet default port is 19735")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SHA256D")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -auxpow -algo SHA256D -miner qlc_xxx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or X11")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -auxpow -algo X11 -miner qlc_xxx\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or SCRYPT")]),t._v("\ngqlc-miner -nodeurl http://127.0.0.1:9735 -auxpow -algo SCRYPT -miner qlc_xxx\n\n")])])]),n("h3",{attrs:{id:"use-solo-stratum-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-solo-stratum-pool"}},[t._v("#")]),t._v(" Use solo stratum pool")]),t._v(" "),n("p",[t._v("gqlc-pool is a very simple mining pool between node and miner, which support stratum mining protocol.")]),t._v(" "),n("p",[t._v("gqlc-pool DOES NOT SUPPORT AuxPoW.")]),t._v(" "),n("h3",{attrs:{id:"use-stratum-mining-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-stratum-mining-pool"}},[t._v("#")]),t._v(" Use stratum mining pool")]),t._v(" "),n("p",[t._v('Please contact mining pool operator which support QLC merged mining.\nFollowing their guides, config your GPU/FPGA/ASIC miners to use stratum mining pool, such as "stratum+tcp://IP:Port".')]),t._v(" "),n("h2",{attrs:{id:"developer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#developer"}},[t._v("#")]),t._v(" Developer")]),t._v(" "),n("h3",{attrs:{id:"get-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#get-work"}},[t._v("#")]),t._v(" Get work")]),t._v(" "),n("p",[t._v("Calling pov_getWork rpc to get new work from node, at 15/30/60 seconds interval.")]),t._v(" "),n("p",[t._v("All hashes's byte order is little-endian, and workHash is used for unique identify for work.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodeClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dial")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9735"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    getWorkRsp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nodeClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("getWorkRsp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pov_getWork"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minerAddr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flagAlgo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n    {\n        "id": "1",\n        "jsonrpc": "2.0",\n        "result": {\n            "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",\n            "version":536871936,\n            "previous":"b2a1493d5ddc305168227581b6f9506580a25509b4b68edd9c6e0c95228c2151",\n            "bits":504270679,\n            "height":1141,\n            "minTime":1569295439,\n            "merkleBranch":[],\n            "coinbaseData1":"01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff",\n            "coinbaseData2":"ffffffff02c9add62cbd8ed444fe5166c7c2dd6b7ebd16e284b31700d246960e5c1488ec231b377bcc000000000000000000000000000000000000000000000000000000000000001506cddef361a43727342802093613777518a8781edbfdbb4dcc4f113442667a7ccec7f7b901000000"\n        }\n    }\n    */')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),n("h3",{attrs:{id:"search-nonce-for-parent-blockchain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#search-nonce-for-parent-blockchain"}},[t._v("#")]),t._v(" Search nonce for parent blockchain")]),t._v(" "),n("p",[t._v("Now you can do mining for parent blockchain as usual, like BTC/LTC/Dash.")]),t._v(" "),n("p",[t._v("QLC block header and hash is same with BTC/LTC/Dash.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doParentWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    timestamp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    minerInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"miner's or mining pool's info\"")]),t._v("\n    extra_nonce1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" miner_session_id\n\n    coinbaseExtra "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" minerInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" miner_session_id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    coinbaseData "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" coinbase1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" coinbaseExtra "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" coinbase2\n    coinbaseHash "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coinbaseHash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    merkleRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" merkle root of "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256d")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("coinbaseHash and merkleBranch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    nonce "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    hashData "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" version "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" previous "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" merkleRoot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" timestamp "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" bits "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" nonce\n    blockHash "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" sha256d"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x11"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scrypt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hashData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n            packing QLC blockHash to parent block coinbase tx,\n            just waiting parent blockchain searching nonce result,\n            submitWork when miner find valid nonce for parent blockchain.\n        */")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n            Check latest block and previous is or not, cancel current searching if changed.\n        */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"submit-work"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#submit-work"}},[t._v("#")]),t._v(" Submit work")]),t._v(" "),n("p",[t._v("After find nonce, calling pov_submitWork rpc to node as soon as possible.")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("submitWork")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    nodeClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" rpc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dial")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:9735"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    submitReq "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    coinbaseExtra "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" minerInfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" extra_nonce2\n    auxPow "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parent block header and coinbase tx"')]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n    {\n        "jsonrpc":"2.0",\n        "id":3,\n        "method":"pov_submitWork",\n        "params":[\n            {\n                "workHash":"295b1dd34a9cd75360cb00a9020d770feda2868c7dc8faa2960bb9162c58f20d",\n                "blockHash":"7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d07",\n                "merkleRoot":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",\n                "timestamp":1569295729,\n                "nonce":12345678,\n                "coinbaseExtra":"75040000000000002f514c432043505520417578504f572f",\n                "coinbaseHash":"9e542106174cd1c9d7db714d981d4d2b16a554f543dad25ceca87bb1db695050",\n                "auxPow":{\n                    "auxMerkleBranch":[\n\n                    ],\n                    "auxMerkleIndex":0,\n                    "parCoinBaseTx":{\n                        "version":1,\n                        "txIn":[\n                            {\n                                "previousOutPoint":{\n                                    "hash":"0000000000000000000000000000000000000000000000000000000000000000",\n                                    "index":4294967295\n                                },\n                                "signatureScript":"fabe6d6d7d9b503254d94b34b81e4fa9fbf578d30c3dcb7e5248aee0674a55567a687d070100000000000000",\n                                "sequence":4294967295\n                            }\n                        ],\n                        "txOut":[\n                            {\n                                "value":1,\n                                "pkScript":"51"\n                            }\n                        ],\n                        "lockTime":0\n                    },\n                    "parCoinBaseMerkle":[\n\n                    ],\n                    "parMerkleIndex":0,\n                    "parBlockHeader":{\n                        "version":2147483647,\n                        "previous":"0000000000000000000000000000000000000000000000000000000000000000",\n                        "merkleRoot":"c319b561c69abe632581d66ad56fd4da50129efda047f284fe93f6f983d2dbf5",\n                        "timestamp":1569295729,\n                        "bits":0,\n                        "nonce":140464\n                    },\n                    "parentHash":"4ecf98d84e21262a56df40707268f180d4dd1e9b58604e4ddd561b52036ce95b"\n                }\n            }\n        ]\n    }\n    */')]),t._v("\n\n    err "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nodeClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pov_submitWork"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" submitReq"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
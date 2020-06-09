(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{477:function(t,e,a){"use strict";a.r(e);var i=a(12),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduce"}},[t._v("#")]),t._v(" Introduce")]),t._v(" "),a("h2",{attrs:{id:"update-instruction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-instruction"}},[t._v("#")]),t._v(" Update Instruction")]),t._v(" "),a("p",[t._v("2019-10-18 update :")]),t._v(" "),a("ul",[a("li",[t._v("modify  "),a("code",[t._v("PoV")]),t._v("  block fields and rpcs")])]),t._v(" "),a("p",[t._v("2019-9-25 update :")]),t._v(" "),a("ul",[a("li",[t._v("add representation reward contract")])]),t._v(" "),a("p",[t._v("2019-9-24 update :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("modify PoV Block Struct")])]),t._v(" "),a("li",[a("p",[t._v("modify  "),a("code",[t._v("PoV")]),t._v("  modules")])])]),t._v(" "),a("p",[t._v("2019-6-20 update :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("add  "),a("code",[t._v("PoV")]),t._v("  and  "),a("code",[t._v("Miner")]),t._v("  modules")])]),t._v(" "),a("li",[a("p",[t._v("add PoV Block Struct")])]),t._v(" "),a("li",[a("p",[t._v("add PoV confirm fields to Account Block Struct")])])]),t._v(" "),a("p",[t._v("2019-3-25 update :")]),t._v(" "),a("ul",[a("li",[t._v("add timestamp to  "),a("code",[t._v("ledger_accountsPending")]),t._v("  return")])]),t._v(" "),a("p",[t._v("2019-3-15 update :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("modify block struct")])]),t._v(" "),a("li",[a("p",[t._v("add offset for  "),a("code",[t._v("ledger_accounts")]),t._v(" ,  "),a("code",[t._v("ledger_blocks")]),t._v(" ,  "),a("code",[t._v("ledger_accountHistoryTopn")]),t._v("  interface")])]),t._v(" "),a("li",[a("p",[t._v("add  "),a("code",[t._v("Mintage")]),t._v("  modules")])]),t._v(" "),a("li",[a("p",[t._v("modify  "),a("code",[t._v("ledger_blocksCountByType")]),t._v(" ,  "),a("code",[t._v("ledger_delegators")]),t._v("  return")])]),t._v(" "),a("li",[a("p",[t._v("modify   "),a("code",[t._v("ledger_accountsBalances")]),t._v("  interface name to  "),a("code",[t._v("ledger_accountsBalance")])])])]),t._v(" "),a("h2",{attrs:{id:"account-block-struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-block-struct"}},[t._v("#")]),t._v(" Account Block Struct")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("describe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block type")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("token")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("token hash for the transaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("address")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("address of generating block")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("balance")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("balance for the account")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("previous")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("previous block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("link")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("if a send transaction, link is receiver address hash, if a receive transaction, link is sender block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sender")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sms sender, encoded by base64   "),a("code",[t._v("omitempty")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("receiver")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sms receiver, encoded by base64   "),a("code",[t._v("omitempty")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("message")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sms message hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("data")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("vm instructions created by contract  "),a("code",[t._v("omitempty")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("vote")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("benefit weight for vote")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("network")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("benefit weight for network")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("storage")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("benefit weight for storage")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("oracle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("benefit weight for oracle")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp ,now is unix time")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("extra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("extra data for contract")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("representative")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("representative address")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("work")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("work for pow")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("signature")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("signature")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("tokenName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("token name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("amount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("amount for the transaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV reference block height")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povConfirmHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV confirm block height")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("povConfirmCount")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("PoV confirm count")])])])]),t._v(" "),a("h2",{attrs:{id:"pov-block-struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-block-struct"}},[t._v("#")]),t._v(" PoV Block Struct")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("basHdr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block basic header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxHdr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block aux pow header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("cbtx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block coinbase tx")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normBits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("normalized target bits")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("algoName")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow algorithm name")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("algoEfficiency")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow algorithm efficiency")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("algoDifficulty")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("float64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow algorithm difficulty")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("normDifficulty")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("pow normalized difficulty")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-basic-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-basic-header"}},[t._v("#")]),t._v(" PoV Basic Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("height")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("block height")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("previous")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("previous block hash")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("merkleRoot")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("merkle root of all transactions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("timestamp, now is unix time")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("bits")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("target bits")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("nonce")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint64")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("nonce number")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-auxpow-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-auxpow-header"}},[t._v("#")]),t._v(" PoV AuxPow Header")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxMerkleBranch")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("auxiliary chain merkle branch hashes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auxMerkleIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("auxiliary chain merkle index/mask")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parCoinBaseTx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain coinbase transaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parCoinBaseMerkle")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain coinbase merkle branch hashes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parMerkleIndex")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain merkle index/mask")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parBlockHeader")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain block header")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("parentHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("parent chain block hash")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-transaction"}},[t._v("#")]),t._v(" PoV CoinBase Transaction")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("version")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txIns")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction input list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txOuts")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("array")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction output list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("stateHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("state hash of transactions in pov block body")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("txNum")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number of transactions in pov block body")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction hash")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-input"}},[t._v("#")]),t._v(" PoV CoinBase Input")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prevTxHash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction version")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("prevTxIdx")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("transaction input list")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("extra")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase extra data (hex bytes)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("sequence")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("uint32")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("sequence number")])])])]),t._v(" "),a("h3",{attrs:{id:"pov-coinbase-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pov-coinbase-output"}},[t._v("#")]),t._v(" PoV CoinBase Output")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase reward value")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("address")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("coinbase reward address")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);
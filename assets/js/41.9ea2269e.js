(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{268:function(t,e,n){"use strict";n.r(e);var a=n(2),i=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[t._v("#")]),t._v(" Config")]),t._v(" "),n("h2",{attrs:{id:"configuration-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-path","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration path")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Mac")]),t._v(" "),n("ul",[n("li",[t._v("mainnet： "),n("code",[t._v("$HOME")]),t._v(" + "),n("code",[t._v("Library")]),t._v(" + "),n("code",[t._v("Application Support")]),t._v("+ "),n("code",[t._v("GQlcchain")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("/Users/ss/Library/Application Support/GQlcchain")])])])]),t._v(" "),n("li",[t._v("testnet  ： "),n("code",[t._v("$HOME")]),t._v(" + "),n("code",[t._v("Library")]),t._v(" + "),n("code",[t._v("Application Support")]),t._v("+ "),n("code",[t._v("GQlcchain_test")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("/Users/ss/Library/Application Support/GQlcchain_test")])])])])])]),t._v(" "),n("li",[n("p",[t._v("Windows")]),t._v(" "),n("ul",[n("li",[t._v("mainnet： "),n("code",[t._v("$HOME")]),t._v(" + "),n("code",[t._v("AppData")]),t._v(" + "),n("code",[t._v("Roaming")]),t._v(" + "),n("code",[t._v("GQlcchain")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("C:\\Users\\pgu\\AppData\\Roaming\\GQlcchain")])])])]),t._v(" "),n("li",[t._v("testnet  ： "),n("code",[t._v("$HOME")]),t._v("+ "),n("code",[t._v("AppData")]),t._v(" + "),n("code",[t._v("Roaming")]),t._v(" + "),n("code",[t._v("GQlcchain_test")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("C:\\Users\\pgu\\AppData\\Roaming\\GQlcchain_test")])])])])])]),t._v(" "),n("li",[n("p",[t._v("Other")]),t._v(" "),n("ul",[n("li",[t._v("mainnet： "),n("code",[t._v("$HOME")]),t._v(" + "),n("code",[t._v(".gqlcchain")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("/root/.gqlcchain")])])])]),t._v(" "),n("li",[t._v("testnet  ： "),n("code",[t._v("$HOME")]),t._v(" + "),n("code",[t._v(".gqlcchain_test")]),t._v(" "),n("ul",[n("li",[t._v("example："),n("code",[t._v("/root/.gqlcchain_test")])])])])])])]),t._v(" "),n("h2",{attrs:{id:"directory-structure"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure","aria-hidden":"true"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("├── GQlcchain\\\n|   ├── ledger\\\n|       ├── 000000.vlog\n|       ├── 000104.sst\n|       └── MANIFEST\n|   ├── log\\\n|       ├── 2019-03-20T17-06\\\n|           └── qlc.log  \n|   ├── wallet\\\n|       ├── 000000.vlog\n|       ├── 000394.sst\n|       └── MANIFEST\n|   └── qlc.json  # Configuration file\n└──\n")])])]),n("h2",{attrs:{id:"detailed-description-of-the-configuration-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#detailed-description-of-the-configuration-file","aria-hidden":"true"}},[t._v("#")]),t._v(" Detailed description of the configuration file")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n\t"version": 2, // Node version\n\t"dataDir": "C:\\\\Users\\\\65967\\\\AppData\\\\Roaming\\\\GQlcchain_test", // Default data directory to use for the databases and other persistence requirements\n\t"storageMax": "10GB", // The maximum storage space of the ledger, not used at present\n\t"autoGenerateReceive": false, // Auto generate receive block switch，default is false\n\t"logLevel": "error", // Log level，default is error\n\t"performanceEnabled": false, // Performance test switch，default is false\n\t"rpc": {\n\t\t"rpcEnabled": false, // RPC switch，default is false，if you want to enable RPC, you need to set it to true\n\t\t"httpEndpoint": "tcp4://0.0.0.0:19735",  // Http listening address \n\t\t"httpEnabled": true, // Http switch，default is true\n\t\t"httpCors": [\n\t\t\t"*"\n\t\t], // Http access control，default is * \n\t\t"httpVirtualHosts": [], // Http virtual host，not used at present\n\t\t"webSocketEnabled": true, // websocket switch，default is true\n\t\t"webSocketEndpoint": "tcp4://0.0.0.0:19736", // webSocket listening address \n\t\t"ipcEndpoint": "\\\\\\\\.\\\\pipe\\\\gqlc-test.ipc", // IPC address，on Unix it assumes the endpoint is the full path to a unix socket, and Windows the endpoint is an identifier for a named pipe\n\t\t"ipcEnabled": true, // IPC switch，default is true\n\t\t"publicModules": [\n\t\t\t"qlcclassic",\n\t\t\t"ledger",\n\t\t\t"account",\n\t\t\t"net",\n\t\t\t"util",\n\t\t\t"wallet",\n\t\t\t"mintage",\n\t\t\t"contract",\n\t\t\t"sms"\n\t\t] // A list of qlcchain modules that are exposed to RPC interface\n\t},\n\t"p2p": {\n\t\t"bootNode": [\n\t\t\t"/ip4/47.103.40.20/tcp/19734/ipfs/QmdFSukPUMF3t1JxjvTo14SEEb5JV9JBT6PukGRo6A2g4f",\n\t\t\t"/ip4/47.112.112.138/tcp/19734/ipfs/QmW9ocg4fRjckCMQvRNYGyKxQd6GiutAY4HBRxMrGrZRfc"\n\t\t], // List of defaults peers to connect on boot\n\t\t"listen": "/ip4/0.0.0.0/tcp/19734", // node listening info，use IPV4 and TCP，please ensure the port has not been occupied by other process\n\t\t"syncInterval": 120, // Synchronization block time interval\n\t\t"discovery": {\n\t\t\t"discoveryInterval": 30, // node search interval\n\t\t\t"limit": 20, // Maximum number of nodes per search\n\t\t\t"mDNSEnabled": false, // Local discovery switch\n\t\t\t"mDNSInterval": 30 // Local discovery interval\n\t\t},\n\t\t"identity": {\n\t\t\t"peerId": "QmTzyz1hfpRquGeSf6V4ErbZJ1hajDZqZSaViWWvUpzwBs", // Is a qlcchain peer identity\n             // Qlcchain peer encrypted private key, note that it is not the account private key，is peer ID private key\n\t\t\t"privateKey": "CAASpgkwggSiAgEAAoIBAQC46DQQVE6DfW0UXencO0/esVefZyzqRrKZivLCQHHnRakwfMGBb1DuJcz63JVnf6cdUFcIjH3nv39R4/E0zdCScylQu9vGfHEOWsf2cDUWzG7U3u+9U4izI1+WcypFIbwiidU4NDAaW9936UVEWSEJiSHmNXzZBbewDBEqnRt3z3hIkM4eERt8O5TVopirT9oqXUe8OUK+8iamHA3A2b5S+H8Jo2AV3P9iZxSI1g0sKVqZU9/ClX3sKjaMmDv3fIjUK1GGPS6PJvebpJ1Bz0U1cR7rPMrWkAmvmC37xFlWiRgAPDDYZ+RaGvDzO+abaGR0AwR95A3DXEBLpBX8RYi7AgMBAAECggEAZK6jMsUFH1nbXDyqyy1MlyCPao9+iG5Ib4yWFKmMm/Z1Yp57qyPWuGXC0FHt1DZQ44hMa648HEVMaWWpgCwVRrkIJRq1V8WItd0+hnSgo7JbIvPlLHzgsVIwiTZaLNxqmY/dlsXr715ZNuzAt6+kapHN8JDtUypm06gubLqxKzHSVdPEG0YFI/T+V1XYchHC8199CpbUOvJ4hyAbiXn4O0askPvnYmFTWAgebzge+L/XxLjmrneNZD8PrQKPUbx4DhT7oP6XJ6sRKOZ3vtf3HnjaZoD6GPVyQWD+Bce1CwmD7snto+27tx0eOMGv5knkG0SJdhinLy+isoARPfI8oQKBgQDq6E5RhcvRQLAC5YWFsMvhCkEcIMC23gUJc/EuQpIyOjUoEOTdPzhrCKvXJClIbgg6i9v1AOi3c8DAC85EqSn8rpkh5KP0BOINvJqI7sQ94tBllTloBZf70axynTPvfVijDXPqoYt2gYIpK0cHNpm3/pMvzIdd3UqXqlD6NekBywKBgQDJgpCCpGEXzOTu2DOhYXk9qerL9RaEP0lUtdqXr4n1Phi7SVi33aHgfdWQixZH1tK/L9HArdg4qJL8Y4SObcgMysOF3l/FoCBdJgq97yuc1nK4AZpFHBUxZKiukqQqGI8yAbZQob3200Zko5BnpcLa/px3+u3tcdFH9+LrAbb20QKBgBzuz/aqjBgR55vzuSZmSDZHlQ1p21KqteQcK7CO8oLNOI7exdGaX9CPGNs+0Pbi1pCfeVAL9J3j2/HLgnRigZFlz+akyqzbjRw0BrSm8/TLYu+gGZn+VmHlyV+0jRkKT0iF96kGjK7j9KwtcGorB3PqHybcAjBFeVKE38Rxr2lRAoGARAN1kyK4Qrg9bQA8LPQhX9bCESUf/HL/5T+cECaHgeb7ofsXnreHs6XFN4w6cPTpHO6e9VG38Se0tMtCKnCTXP3zEHQGD0YEpmv4pDLdnYokHkcsMrdPz+QRqxqDnlG7wz0gtAZjf7O/xqgOTW19Xz0gwr5HICWSZaAdTwS9JIECgYBPkflSVEwaAZubm8JM5bFfgpRjiVKL3sFLX3aYjFXywVG7eNmRvCxSvJTcWZry7K6d8qGFJSjxuMUstrTMYgHZROxpr4B8FZVhKH2VTISCxApcj0FOPfHw4atmK3B6MKWo1DRBxFRwoAlzXMI1fCXzSqcPzSx2L3Uvo8FjMH6idw=="\n\t\t}\n\t}\n}\n')])])])])},[],!1,null,null,null);e.default=i.exports}}]);
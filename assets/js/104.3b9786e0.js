(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{397:function(a,t,s){"use strict";s.r(t);var e=s(12),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" Install")]),a._v(" "),s("h2",{attrs:{id:"prepare-executable-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prepare-executable-file"}},[a._v("#")]),a._v(" Prepare  executable file")]),a._v(" "),s("p",[a._v("There are three ways to get  executable file：")]),a._v(" "),s("ul",[s("li",[a._v("Compile go-qlc  source code")]),a._v(" "),s("li",[a._v("Download from go-qlc release page")]),a._v(" "),s("li",[a._v("Download the docker image from docker hub")])]),a._v(" "),s("h3",{attrs:{id:"compile-go-qlc-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-go-qlc-source-code"}},[a._v("#")]),a._v(" Compile go-qlc  source code")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("注意")]),a._v(" "),s("p",[a._v("Go 1.11.1 or above version is required. See Go installation guild: "),s("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[a._v("go installation"),s("OutboundLink")],1)])]),a._v(" "),s("h4",{attrs:{id:"get-go-qlc-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-go-qlc-source-code"}},[a._v("#")]),a._v(" Get go-qlc source code")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Use  "),s("code",[a._v("go get")]),a._v(" ：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("go get github.com/qlcchain/go-qlc\n")])])]),s("p",[a._v("source code is downloaded at：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GOPATH")]),a._v("/src/github.com/qlcchain/go-qlc/\n")])])])]),a._v(" "),s("li",[s("p",[a._v("Use  "),s("code",[a._v("git clone")]),a._v(" ：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/qlcchain/go-qlc.git\n")])])]),s("p",[a._v("source code is downloaded at current directory")])])]),a._v(" "),s("h4",{attrs:{id:"compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[a._v("#")]),a._v(" Compile")]),a._v(" "),s("p",[a._v("then you can get the executable file for all platforms，like this：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean all\n")])])]),s("p",[a._v("then you can get the executable file for all platforms，like this：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc-darwin-amd64-v1.0.1-9406ee2\t\t\t      // go-qlc mainnet server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" mac OS\ngqlc-linux-amd64-v1.0.1-9406ee2             // go-qlc mainnet server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" linux OS\ngqlc-windows-386-v1.0.1-9406ee2.exe         // go-qlc mainnet server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" Windows "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("386")]),a._v(" OS\ngqlc       // go-qlc mainnet server "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" Windows amd64\n")])])]),s("p",[a._v("Select the files you need based on your own operating system.")]),a._v(" "),s("h3",{attrs:{id:"download-from-go-qlc-release-page"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-from-go-qlc-release-page"}},[a._v("#")]),a._v(" Download from  go-qlc release page")]),a._v(" "),s("p",[a._v("Link is：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("https://github.com/qlcchain/go-qlc/releases\n")])])]),s("h3",{attrs:{id:"download-the-docker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-the-docker-image"}},[a._v("#")]),a._v(" Download the docker image")]),a._v(" "),s("p",[a._v("You can access "),s("a",{attrs:{href:"https://hub.docker.com/r/qlcchain/go-qlc/tags",target:"_blank",rel:"noopener noreferrer"}},[a._v("go-qlc dockerhub"),s("OutboundLink")],1),a._v(" to find  latest release version and download it.")]),a._v(" "),s("p",[a._v("for example，now our latest release version is v1.0.1，use command")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker pull qlcchain/go-qlc:v1.0.1\n")])])]),s("h2",{attrs:{id:"start-go-qlc-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-go-qlc-node"}},[a._v("#")]),a._v(" Start go-qlc node")]),a._v(" "),s("h3",{attrs:{id:"start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-node"}},[a._v("#")]),a._v(" Start node")]),a._v(" "),s("h4",{attrs:{id:"start-a-normal-node-without-an-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account"}},[a._v("#")]),a._v(" start a normal node without an account")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc\n")])])]),s("h4",{attrs:{id:"start-an-account-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node"}},[a._v("#")]),a._v(" start an account node")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("by seed")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50\n")])])])]),a._v(" "),s("li",[s("p",[a._v("by privateKey")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--privateKey 9ca95e184d99769a3e324bbcf57906d04a9c221db72c5af491fc8e7c958f1c6526691fd4b19f28cf279f188769c672cdde577c8360498083da653e02b53f5a8a\n")])])])]),a._v(" "),s("li",[s("p",[a._v("by account")]),a._v(" "),s("p",[a._v("if you want start a node by account ，you need first import account into wallet")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("Import account into wallet")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc walletimport "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--seed ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--password "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])]),s("p",[a._v("if you cat")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" seed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\npassword"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nsuccess\n")])])]),s("p",[a._v("prove that the import was successful")])]),a._v(" "),s("li",[s("p",[a._v("start a node")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("gqlc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--account qlc_1h14ymitgs6x5895b57wdi7gedop7jmnihxwryhgnr8ry1ecmpg9io6kkbha "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--password "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])])])])])])]),a._v(" "),s("h3",{attrs:{id:"start-node-by-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-node-by-docker"}},[a._v("#")]),a._v(" Start  node by Docker")]),a._v(" "),s("p",[a._v("If you want to start a node by docker, you need to refer to  "),s("code",[a._v("Prepare executable file")]),a._v("  and download the docker image from docker hub .")]),a._v(" "),s("p",[a._v("You can choose to start a normal node without an account or start an account node.")]),a._v(" "),s("h4",{attrs:{id:"start-a-normal-node-without-an-account-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-a-normal-node-without-an-account-2"}},[a._v("#")]),a._v(" start a normal node without an account")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker container run -d --name go-qlc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19734")]),a._v(":19734 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19735")]),a._v(":19735 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19736")]),a._v(":19736 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /root/.gqlcchain:/root/.gqlcchain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nqlcchain/go-qlc:v1.0.1\n\n")])])]),s("blockquote",[s("p",[s("code",[a._v("--restart always")]),a._v("  for more docker docs, please refer to the docker "),s("a",{attrs:{href:"https://docs.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("website"),s("OutboundLink")],1)])]),a._v(" "),s("h4",{attrs:{id:"start-an-account-node-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node-2"}},[a._v("#")]),a._v(" start an account node")]),a._v(" "),s("p",[a._v("You only need to assign a value to the environment variable  "),s("code",[a._v("seed")]),a._v("  to start an account node")]),a._v(" "),s("p",[a._v("example：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker container run -d --name go-qlc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--restart always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19734")]),a._v(":19734 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19735")]),a._v(":19735 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("19736")]),a._v(":19736 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n-v /root/.gqlcchain:/root/.gqlcchain "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\nqlcchain/go-qlc:v1.0.1 --seed"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("ff62d09ca04c6941a6d09ad0e83b8fb57914b5f76f79a62e18f84eccc3440e50\n\n")])])]),s("h4",{attrs:{id:"start-an-account-node-by-docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-an-account-node-by-docker-compose"}},[a._v("#")]),a._v(" start an account node by Docker Compose")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("create  "),s("code",[a._v("docker-compose.yml")])]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"3.5"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("qlcchain_node")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" qlcchain/go"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("qlc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" qlcchain_node\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--configParams=rpc.rpcEnabled=true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--seed=B4F6494E3DD8A036EFF547C0293055B2A0644605DE4D9AC91B45343CD0E0E559"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"--nobootnode=true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"9734:9734"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"9735:9735"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"127.0.0.1:9736:9736"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" qlcchain\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" bind\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" ./data/\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" /root/.gqlcchain/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" unless"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("stopped\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("networks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("qlcchain")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" qlcchain\n\n")])])])]),a._v(" "),s("li",[s("p",[a._v("run")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("docker-compose down -v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" docker-compose up -d\n\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);
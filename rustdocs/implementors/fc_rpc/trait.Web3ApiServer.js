(function() {var implementors = {};
implementors["fc_rpc"] = [{"text":"impl&lt;B, C&gt; <a class=\"trait\" href=\"fc_rpc/trait.Web3ApiServer.html\" title=\"trait fc_rpc::Web3ApiServer\">Web3Api</a> for <a class=\"struct\" href=\"fc_rpc/struct.Web3Api.html\" title=\"struct fc_rpc::Web3Api\">Web3Api</a>&lt;B, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: ProvideRuntimeApi&lt;B&gt; + AuxStore,<br>&nbsp;&nbsp;&nbsp;&nbsp;C::Api: <a class=\"trait\" href=\"fp_rpc/trait.EthereumRuntimeRPCApi.html\" title=\"trait fp_rpc::EthereumRuntimeRPCApi\">EthereumRuntimeRPCApi</a>&lt;B&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: HeaderBackend&lt;B&gt; + HeaderMetadata&lt;B, Error = BlockChainError&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: BlockT&lt;Hash = H256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>","synthetic":false,"types":["fc_rpc::eth::Web3Api"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
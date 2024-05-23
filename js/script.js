function highlight(n) {
    names = {
        0: "del-button",
        1: "val-button",
        2: "avs-button"
    }
    content = {
        0: "For delegators, Re<sup>2</sup> provides an unprecedented level of accessibility and flexibility in participating in staking across multiple blockchain networks. By leveraging our platform, delegators can effortlessly allocate their assets to validators operating on various chains, maximizing their staking rewards and diversifying their investment portfolios. Our intuitive interface and comprehensive risk analysis tools empower delegators to make informed decisions, enabling them to navigate the complex restaking landscape with confidence.",
        1: "For validators, Re<sup>2</sup> presents an unparalleled opportunity to expand their reach and increase their impact within restaking. Our cross-chain restaking protocol allows validators to extend their services beyond their native blockchain, securing protocols on different chains and tapping into new markets and communities. By participating in the ReSquared ecosystem, validators can attract delegations from diverse networks, enhancing their staking rewards and strengthening their validator status across multiple chains. Additionally, our risk analysis tools provide validators with valuable insights into the potential risks and rewards associated with staking activities, empowering them to make informed decisions and optimize their performance in a dynamic and rapidly evolving landscape.",
        2: "For AVSs, Re<sup>2</sup> offers a gateway to enhanced security and reliability through cross-chain validation and support. By leveraging our platform, AVSs can expand their reach and tap into a broader network of validators across multiple blockchain ecosystems, ensuring the integrity and stability of their protocols. Re<sup>2</sup> facilitates seamless interaction between AVSs and validators, enabling AVSs to benefit from increased decentralization and resilience against network attacks or failures. Our platform also provides AVSs with access to advanced risk analysis tools, empowering them to assess and mitigate potential vulnerabilities and optimize their protocol's performance."
    }
    for (let i = 0; i <= 2; i++) {
        if (i == n) {
            document.getElementById(names[i]).className = "active";
            document.getElementById("eco-content").innerHTML = content[i]
        } else {
            document.getElementById(names[i]).className = "inactive";
        }
    }
}

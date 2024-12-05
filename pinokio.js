module.exports = {
  version: "2.2",
  title: "MCP",
  description: "",
  type: "task",
  menu: [
    "fetch",
    "github",
    "memory",
    "filesystem",
    "puppeteer",
    "brave-search",
    "google-maps",
    "sqlite",
  ].map((x) => {
    return {
      text: x,
      menu: [
        { text: "Install", href: `${x}/install.js` },
        { text: "Uninstall", href: `${x}/uninstall.js` }
      ]
    }
  })
}

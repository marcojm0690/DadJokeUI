const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:44385/",
    secure: false
  }
]

module.exports = PROXY_CONFIG;

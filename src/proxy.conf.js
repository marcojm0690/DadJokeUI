const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "https://localhost:7052",
    secure: true
  }
]

module.exports = PROXY_CONFIG;

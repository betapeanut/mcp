module.exports = {
  config: {
    darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
    win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
  },
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "npm install",
          "node index test.db"
        ],
      }
    },
    {
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
          "mcpServers.sqlite": {
            "command": "uvx",
            "env": {
              "HOME": "{{env.HOME}}",
              "PATH": "{{env.PATH}}",
            },
            "args": [
              "mcp-server-sqlite",
              "--db-path",
              "{{path.resolve(cwd, 'sqlite/test.db')}}"
            ]
          },
        }
      }
    },
  ]
}

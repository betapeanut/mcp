module.exports = {
  config: {
    darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
    win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
  },
  run: async (kernel) => {
    return [
      {
        method: "json.set",
        params: {
          "{{self.config[platform]}}": {
            "mcpServers.filesystem": {
              "command": "npx",
              "args": [
                "-y",
                "@modelcontextprotocol/server-filesystem",
              ].concat(kernel.envs.ALLOWED_DIRECTORIES ? kernel.envs.ALLOWED_DIRECTORIES.split(",") : [])
            }
          }
        }
      },
    ]
  }
}

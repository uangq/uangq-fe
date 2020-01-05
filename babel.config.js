// @generated: @expo/next-adapter@2.0.0-beta.10
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: ["@expo/next-adapter/babel"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js"]
      }
    ]
  ]
};

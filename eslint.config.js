import eslintConfig from "@oliversalzburg/eslint-config";
export default [
  ...eslintConfig(import.meta.dirname),
  {
    files: ["packages/web-project/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },
];

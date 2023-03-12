/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = (eleventyConfig) => {
	const JS_TRUTHY = false;

	eleventyConfig.addGlobalData("JS_TRUTHY", () => JS_TRUTHY);

  eleventyConfig.setLiquidOptions({
    jsTruthy: JS_TRUTHY,
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};

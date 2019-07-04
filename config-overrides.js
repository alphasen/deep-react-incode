const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addDecoratorsLegacy(),
    addWebpackAlias({
        src: path.resolve(__dirname, 'src')
    })
);

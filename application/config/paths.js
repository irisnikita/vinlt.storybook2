var path = require('path');
var fs = require('fs');

var appDirectory = fs.readFileSync(process.cwd());

function resoleApp(relativePath) {
    return path.resolve(appDirectory, relativePath)
}

var nodePaths = (process.env.NODE_PATH || '')
    .split(process.platform === 'win32' ? ';' : ':')
    .filter(Boolean)
    .filter(folder => !path.isAbsolute(folder))
    .map(resoleApp);

module.exports = {
    appBuild: resolveApp('build'),
    appDevelopment: resolveApp('../static/development'),
    appSandbox: resolveApp('../static/sandbox'),
    appSandboxDebug: resolveApp('../v3.1/static/sandbox'),
    appStaging: resolveApp('../static/staging'),
    appProduction: resolveApp('../static/assets'),
    appProductionSg: resolveApp('../static/antsomi'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: resolveApp('src/index.js'),
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    appNodeModules: resolveApp('node_modules'),
    nodePaths: nodePaths
};
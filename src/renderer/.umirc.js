export default {
  hash: true,
  history: 'hash',
  outputPath: '../../dist/renderer',
  publicPath: './',
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          hmr: true,
        },
        antd: true,
        // 自动路由时配置
        routes: {
          exclude: [
            /model\.(j|t)sx?$/,
            /service\.(j|t)sx?$/,
            /models\//,
            /components\//,
            /services\//,
          ],
        },
      },
    ],
  ],
  externals(context, request, callback) {
    let isExternal = false;
    const load = [
      'electron',
      'os',
    ];
    if (load.includes(request)) {
      isExternal = `require("${request}")`;
    }
    callback(null, isExternal);
  },
};

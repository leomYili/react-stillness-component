import { IApi } from '@umijs/types';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

export default (api: IApi) => {
  api.describe({
    key: 'stillness',
    config: {
      schema(joi) {
        return joi.object();
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.modifyRendererPath(() => {
    return dirname(require.resolve('umi-renderer-stillness/package.json'));
  });

  api.onGenerateFiles({
    fn() {
      const exportsTpl = readFileSync(
        join(__dirname, 'assets/exports.tpl'),
        'utf-8'
      );

      api.writeTmpFile({
        path: 'plugin-stillness/exports.ts',
        content: exportsTpl,
      });
    },
  });

  api.addUmiExports(() => [
    {
      exportAll: true,
      source: '../plugin-stillness/exports',
    },
  ]);
};

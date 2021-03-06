import resolve from 'rollup-plugin-node-resolve';
import uglify  from 'rollup-plugin-uglify';
import optimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin';

export default {
    input: ['built-es5-lazy/src/apps/lazy-loading-app/main.js', 
            'built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/spreadsheet.module.ngfactory',
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/dynamic-form.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/graph.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/input-controls.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/insertion-sort.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/lazy-loaded-treeview.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/pub-sub.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/redux.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/rxjs-buffering.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/rxjs-streams.module.ngfactory",
            "built-es5-lazy/src/apps/lazy-loading-app/lazy-modules/text-editor.module.ngfactory"
    ],
    output:{ dir: 'dist/rollup-lazy', format: 'cjs'},
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true,
    plugins: [
      optimizer({
        sideEffectFreeModules: ['@angular/core/esm5/core.js']
      }),
      resolve({jsnext: true, module: true}),
      uglify()
    ]

}
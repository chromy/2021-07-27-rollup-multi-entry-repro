# 2021-07-27: `--waitForBundleInput` and `@rollup/plugin-multi-entry` are not compatible

The [`--waitForBundleInput`](https://rollupjs.org/guide/en/#--waitforbundleinput)
`rollup` command line option and the [`@rollup/plugin-multi-entry`](https://github.com/rollup/plugins/tree/master/packages/multi-entry) plugin do not work together.

# Repro instructions
```
git clone https://github.com/chromy/2021-07-27-rollup-multi-entry-repro.git
cd 2021-07-27-rollup-multi-entry-repro
node node_modules/.bin/rollup -c rollup_plus_multi.config.js --waitForBundleInput
```

Expected behaviour:
```
➜ node node_modules/.bin/rollup -c rollup.config.js --waitForBundleInput
loaded rollup.config.js with warnings
(!) Unused external imports
default imported from external module '@rollup/plugin-multi-entry' but never used

bar.js → bundle.js...
waiting for input bar.js...
^C⏎
```

Actual behaviour:
```
➜  node node_modules/.bin/rollup -c rollup_plus_multi.config.js --waitForBundleInput

bar.js → bundle.js...
(!) Generated an empty chunk
_virtual_multi-entry
created bundle.js in 8ms
```



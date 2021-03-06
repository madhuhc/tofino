// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

import path from 'path';
import { SRC_DIR } from './const';
import { babelBuild, babelFile, watchSource } from './utils';

const source = path.join(SRC_DIR, 'services');

export default async function() {
  console.log('Building services...');
  await babelBuild(source);
  return watchSource(source, babelFile);
}

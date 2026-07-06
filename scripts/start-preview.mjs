import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const appRoot = resolve(scriptDir, '..');
const port = process.env.PORT || '4173';
const distDir = resolve(appRoot, 'dist');
const viteBin = resolve(appRoot, 'node_modules', 'vite', 'bin', 'vite.js');

const startPreview = () => {
  const child = spawn(process.execPath, [viteBin, 'preview', '--host', '0.0.0.0', '--port', port], {
    cwd: appRoot,
    stdio: 'inherit',
    shell: false,
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
};

if (!existsSync(distDir)) {
  console.log('dist directory not found. Building app before starting preview...');
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const build = spawn(npmCommand, ['run', 'build'], {
    cwd: appRoot,
    stdio: 'inherit',
    shell: false,
  });

  build.on('exit', (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    if (code !== 0) {
      process.exit(code ?? 1);
      return;
    }

    startPreview();
  });
} else {
  startPreview();
}

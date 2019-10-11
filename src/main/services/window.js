import is from 'electron-is';
import { join } from 'path';
import { BrowserWindow } from 'electron';

let count = 0;

export function createWindow(opts) {
  count += 1;
  let win = new BrowserWindow(opts);
  win.on('close', () => {
    count -= 1;
    win = null;
  });
  return win;
}

export function getCount() {
  return count;
}

export function getPath() {
  let path = 'http://localhost:8000';
  if (is.dev()) {
    path = `file://${join(__dirname, 'index.html')}`;
  }
  return path;
}

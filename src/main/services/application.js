import is from 'electron-is';
import { format as formatUrl } from 'url';
import path from 'path';
import { createWindow } from './window';

export function init() {
  const win = createWindow({ width: 800, height: 800, webPreferences: { nodeIntegration: true } });

  if (is.dev()) {
    win.webContents.openDevTools();
    win.loadURL('http://localhost:8000/');
  } else {
    win.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true,
    }));
  }
  return win;
}

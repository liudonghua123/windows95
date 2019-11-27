import { app } from 'electron';

export function setupUpdates() {
  if (app.isPackaged) {
    require('update-electron-app')({
      repo: 'liudonghua123/windows98',
      updateInterval: '1 hour',
    });
  }
}

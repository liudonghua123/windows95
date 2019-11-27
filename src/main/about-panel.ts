import { AboutPanelOptionsOptions, app } from 'electron';

/**
 * Sets Fiddle's About panel options on Linux and macOS
 *
 * @returns
 */
export function setupAboutPanel(): void {
  if (process.platform === 'win32') return;

  const options: AboutPanelOptionsOptions = {
    applicationName: 'windows98',
    applicationVersion: app.getVersion(),
    version: process.versions.electron,
    copyright: 'Felix Rieseberg',
  };

  switch (process.platform) {
    case 'linux':
      options.website = 'https://github.com/liudonghua123/windows98';
    case 'darwin':
      options.credits = 'https://github.com/liudonghua123/windows98';
    default:
    // fallthrough
  }

  app.setAboutPanelOptions(options);
}

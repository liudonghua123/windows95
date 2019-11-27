const path = require('path');
const package = require('./package.json');

module.exports = {
  hooks: {
    generateAssets: require('./tools/generateAssets'),
  },
  packagerConfig: {
    asar: false,
    icon: path.resolve(__dirname, 'assets', 'icon'),
    appBundleId: 'com.liudonghua.windows98',
    appCategoryType: 'public.app-category.developer-tools',
    win32metadata: {
      CompanyName: 'Donghua Liu',
      OriginalFilename: 'windows98',
    },
    osxSign: {
      identity: 'Developer ID Application: Donghua Liu (TODO)',
    },
    ignore: [
      /\/assets(\/?)/,
      /\/docs(\/?)/,
      /\/tools(\/?)/,
      /\/src\/.*\.ts/,
      /package-lock\.json/,
      /README\.md/,
      /tsconfig\.json/,
      /Dockerfile/,
      /issue_template\.md/,
      /HELP\.md/,
    ],
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: arch => {
        return {
          name: 'windows98',
          authors: 'Donghua Liu',
          exe: 'windows98.exe',
          noMsi: true,
          remoteReleases: '',
          setupExe: `windows98-win32-${package.version}-setup-${arch}.exe`,
          setupIcon: path.resolve(__dirname, 'assets', 'icon.ico'),
          certificateFile: process.env.WINDOWS_CERTIFICATE_FILE,
          certificatePassword: process.env.WINDOWS_CERTIFICATE_PASSWORD,
        };
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-deb',
      platforms: ['linux'],
      // https://js.electronforge.io/maker/deb/interfaces/makerdebconfigoptions
      config: {
        name: 'windows98',
        maintainer: 'liudonghua123',
        homepage: 'liudonghua.com',
        icon: path.resolve(__dirname, 'assets', 'icon.ico'),
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      platforms: ['linux'],
      // https://js.electronforge.io/maker/rpm/interfaces/makerrpmconfigoptions
      config: {
        name: 'windows98',
        maintainer: 'liudonghua123',
        homepage: 'liudonghua.com',
        icon: path.resolve(__dirname, 'assets', 'icon.ico'),
      },
    },
  ],
};

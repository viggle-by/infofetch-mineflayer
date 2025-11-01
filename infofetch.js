/**
 * infofetch plugin for Mineflayer / Eaglercraft Package Manager
 * Author: viggle-by
 * Version: 1.0.0
 * License: MIT
 *
 * This plugin provides a fastfetch-style display of custom system info.
 */

const systemInfo = {
  host: "EEGGBBVV22 Minecraft 1.21.9 Gen 2",
  osName: "Mineflayer Linux x86_64",
  kernel: "6.17.5-mf3-1",
  uptime: "3d 4h 22m",
  packages: "128 (Eaglercraft)",
  shell: "eagler-shell",
  resolution: "1920x1080",
  de: "KDE Plasma 6.5.1",
  wm: "KWin (Wayland)",
  theme: "Breeze Dark",
  icons: "Breeze",
  terminal: "Konsole",
  cpu: "Eaglercraft Core i5-mf1-1",
  gpu: "Eaglercraft TigerLake-LP GT2 (Iris Xe Graphics)",
  memory: "32GB",
  colors: "16"
};

const infofetchPlugin = {
  name: "infofetch",
  description: "Displays custom system info for Mineflayer bots",
  version: "1.0.0",

  /**
   * Run the plugin
   * @returns {string} fastfetch-style single-line system info
   */
  run: () => {
    return `prefixbot@mineflayerlinux | OS: ${systemInfo.osName} | Host: ${systemInfo.host} | Kernel: ${systemInfo.kernel} | Uptime: ${systemInfo.uptime} | CPU: ${systemInfo.cpu} | GPU: ${systemInfo.gpu} | RAM: ${systemInfo.memory} | DE: ${systemInfo.de} | WM: ${systemInfo.wm} | Terminal: ${systemInfo.terminal} | Theme: ${systemInfo.theme} | Packages: ${systemInfo.packages}`;
  }
};

module.exports = infofetchPlugin;

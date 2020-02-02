import { loadInfo } from './loadInfo.js'
import { menuOpen } from './menuOpen.js';

loadInfo()

document.getElementById('toggle-menu').onclick=menuOpen;
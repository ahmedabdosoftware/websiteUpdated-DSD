// src/plugins/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faImage, faBoxOpen);

export default FontAwesomeIcon;

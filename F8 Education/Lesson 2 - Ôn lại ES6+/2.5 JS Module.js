/**
 * Modules: bóc tách chức năng thành phần ra 1 nơi riêng để xử lý gọi là modules, tách ra 1 file js hoặc tập hợp các file
 * VD: modules notification (làm thông báo), mobule comment (xử lý comment)
 */

/**
 * Sử dụng modules: add file javascript vào html với type là modules
 * 
 * Modules có 2 khái niệm là Import / Export
 * 
 * VD: khi import 1 file js thì bản thân file js cũng phải export ra 1 result để thằng import xài
 */

import logger from './logger.js' //Nạp module default với dk bên phần export có 1 export default

import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR //Nạp các type theo function bên module constant
} from './constants.js'
/**
 * 1 module chỉ export ra 1 default và export ra ko giới hạn các loại ko phải default
 * Muốn import các fucntion khác có thể dùng detructuring để import
 */

logger('Test Message..', TYPE_ERROR);// Sử dụng Module

/**
 * import ko có destructuring là import default, còn lại là ko phải export default
 */

/**
 * Muốn import ko xài destructuring thì dùng cú pháp import *
 * import * as [tên đại diện] from './constants.js'
 */

import * as constant from './constants.js' // cú pháp as để đổi tên của default.

logger('Test Message2..', constant.TYPE_WARN)

/**
 * Có thể import 1 function từ 1 file js mà file js đó export function từ file js khác
 * VD: file logger.js  co chứa các TPYE MESSAGE. export { default } from './logger.js' //Cách viết rút gọn
 * file index.js export default logger từ logger.js
 */
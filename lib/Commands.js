module.exports = {

  MISC: {
    HEAD: '\x01\x5A\x30\x30\x02\x41\x58',
    END: '\x04',
    FRAME: '\x0C',
    LINE_FEED: '\x0D',
    HALF_SPACe: '\x82'
  },

  FLASH: {
    ON: '\x07\x30',
    OFF: '\x07\x31',
  },

  SPECIAL: {
    MM_DD_YY_SLASH: '\x0B\x20'
    DD_MM_YY_SLASH: '\x0B\x21'
    MM_DD_YY_DASH: '\x0B\x22'
    DD_MM_YY_DASH: '\x0B\x23'
    MM_DD_YYYY_DOT: '\x0B\x24'
    YY: '\x0B\x25'
    YYYY: '\x0B\x26'
    MM: '\x0B\x27'
    MMM: '\x0B\x28'
    DD: '\x0B\x29'
    DD_OF_WEEK: '\x0B\x2A'
    DDD_OF_WEEK: '\x0B\x2B'
    HH: '\x0B\x2C'
    MIN: '\x0B\x2D'
    SEC: '\x0B\x2E'
    HH_MIN_24: '\x0B\x2F'
    HH_MIN_12: '\x0B\x30'
  },

  PATTERN: {
    RANDOM:  '\x2f',
    JUMP_OUT: '\x30',
    MOVE_LEFT: '\x31',
    MOVE_RIGHT: '\x32',
    SCROLL_LEFT: '\x33',
    SCROLL_RIGHT: '\x34',
    MOVE_UP: '\x35',
    MOVE_DOWN: '\x36',
    SCROLL_LR: '\x37',
    SCROLL_UP: '\x38',
    SCROLL_DOWN: '\x39',
    FOLD_LR: '\x3a',
    FOLD_UD: '\x3b',
    SCROLL_UD: '\x3c',
    SHUTTLE_LR: '\x3d',
    SHUTTLE_UD: '\x3e',
    PEEL_OFF_L: '\x3f',
    PEEL_OFF_R: '\x40',
    SHUTTER_UD: '\x41',
    SHUTTER_LR: '\x42',
    RAINDROPS: '\x43',
    RANDOM_MOSAIC: '\x44',
    TWINKLING_STAR: '\x45',
    HIP_HOP: '\x46',
    RADAR_SCAN: '\x47',
    FAN_OUT: '\x48',
    FAN_IN: '\x49',
    SPIRAL_R: '\x4a',
    SPIRAL_L: '\x4b',
    TO_FOUR_CORNERS: '\x4c',
    FROM_FOUR_CORNERS: '\x4d',
    TO_FOUR_SIDES: '\x4e',
    FROM_FOUR_SODES: '\x4f',
    SCROLL_OUT_FORM_FOUR_BLOCKS: '\x50'
  },

  PAUSE: {
    SECOND_2: '\x0E\x30',
    SECOND_4: '\x0E\x32',
    MILLISECOND_2: '\x0E\x31',
    MILLISECOND_4: '\x0E\x33'
  },

  ALIGN: {
    HORIZONTAL_CENTER: '\x1E\x30',
    HORIZONTAL_LEFT: '\x1E\x31',
    HORIZONTAL_RIGHT: '\x1E\x32',
    HORIZONTAL_RESERVED: '\x1E\x33',

    VERTICAL_CENTER: '\x1F\x30'
    VERTICAL_TOP: '\x1F\x31',
    VERTICAL_BOTTOM: '\x1F\x32',
    VERTICAL_RESERVED: '\x1F\x33'
  }

};

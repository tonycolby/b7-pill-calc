const dMount = {
  1: {
    5: { toe: 1, antiSquat: -1, pivotWidth: 0.7, pivotHeight: 0.7, image: './assets/d1mount_1-corner.png', leftPill: "./assets/1-corner.png", leftPillRotation: 0, rightPill: "./assets/1-corner.png", rightPillRotation: 90},
    4: { toe: 1, antiSquat: -0.5, pivotWidth: 0.7, pivotHeight: 0.35, image: './assets/d2mount_1-5-Rcorner.png', leftPill: "./assets/1-5-Rcorner.png", leftPillRotation: 270 , rightPill: "./assets/1-5-Lcorner.png", rightPillRotation: 90},
    3: { toe: 1, antiSquat: 0, pivotWidth: 0.7, pivotHeight: 0, image: './assets/d3mount_1-center.png', leftPill: "./assets/1-center.png", leftPillRotation: 270 , rightPill: "./assets/1-center.png", rightPillRotation: 90},
    2: { toe: 1, antiSquat: 0.5, pivotWidth: 0.7, pivotHeight: -0.35, image: './assets/d4mount_1-5-Lcorner.png', leftPill: "./assets/1-5-Lcorner.png", leftPillRotation: 270 , rightPill: "./assets/1-5-Rcorner.png", rightPillRotation: 90},
    1: { toe: 1, antiSquat: 1, pivotWidth: 0.7, pivotHeight: -0.7, image: './assets/d5mount_1-corner.png', leftPill: "./assets/1-corner.png", leftPillRotation: 270 , rightPill: "./assets/1-corner.png", rightPillRotation: 180}
  },
  2: {
    5: { toe: 0.5, antiSquat: -1, pivotWidth: 0.35, pivotHeight: 0.7, image: './assets/d1mount_1-5-Lcorner.png', leftPill: "./assets/1-Lcorner.png", leftPillRotation: 0 , rightPill: "./assets/1-Rcorner.png", rightPillRotation: 0},
    4: { toe: 0.5, antiSquat: -0.5, pivotWidth: 0.35, pivotHeight: 0.35, image: './assets/d2mount_5-corner.png', leftPill: "./assets/5-corner.png", leftPillRotation: 0 , rightPill: "./assets/5-corner.png", rightPillRotation: 90},
    3: { toe: 0.5, antiSquat: 0, pivotWidth: 0.35, pivotHeight: 0, image: './assets/d3mount_5-center.png', leftPill: "./assets/5-center.png", leftPillRotation: 270 , rightPill: "./assets/5-center.png", rightPillRotation: 90},
    2: { toe: 0.5, antiSquat: 0.5, pivotWidth: 0.35, pivotHeight: -0.35, image: './assets/d4mount_5-corner.png', leftPill: "./assets/5-corner.png", leftPillRotation: 270 , rightPill: "./assets/5-corner.png", rightPillRotation: 180},
    1: { toe: 0.5, antiSquat: 1, pivotWidth: 0.35, pivotHeight: -0.7, image: './assets/d5mount_1-5-Rcorner.png', leftPill: "./assets/1-5-Rcorner.png", leftPillRotation: 180 , rightPill: "./assets/1-5-Lcorner.png", rightPillRotation: 180}
  },
  3: {
    5: { toe: 0, antiSquat: -1, pivotWidth: 0, pivotHeight: 0.7, image: './assets/d1mount_1-center.png', leftPill: "./assets/1-center.png", leftPillRotation: 0 , rightPill: "./assets/1-center.png", rightPillRotation: 0},
    4: { toe: 0, antiSquat: -0.5, pivotWidth: 0, pivotHeight: 0.35, image: './assets/d2mount_5-center.png', leftPill: "./assets/5-center.png", leftPillRotation: 0 , rightPill: "./assets/5-center.png", rightPillRotation: 0},
    3: { toe: 0, antiSquat: 0, pivotWidth: 0, pivotHeight: 0, image: './assets/d3mount_center-center.png', leftPill: "./assets/center-center.png", leftPillRotation: 0 , rightPill: "./assets/center-center.png", rightPillRotation: 0},
    2: { toe: 0, antiSquat: 0.5, pivotWidth: 0, pivotHeight: -0.35, image: './assets/d4mount_5-center.png', leftPill: "./assets/5-center.png", leftPillRotation: 180  , rightPill: "./assets/5-center.png", rightPillRotation: 180},
    1: { toe: 0, antiSquat: 1, pivotWidth: 0, pivotHeight: -0.7, image: './assets/d5mount_1-center.png', leftPill: "./assets/1-center.png", leftPillRotation: 180 , rightPill: "./assets/1-center.png", rightPillRotation: 180}
  },
  4: {
    5: { toe: -0.5, antiSquat: -1, pivotWidth: -0.35, pivotHeight: 0.7, image: './assets/d1mount_1-5-Rcorner.png', leftPill: "./assets/1-5-Rcorner.png", leftPillRotation: 0 , rightPill: "./assets/1-5-Lcorner.png", rightPillRotation: 0},
    4: { toe: -0.5, antiSquat: -0.5, pivotWidth: -0.35, pivotHeight: 0.35, image: './assets/d2mount_5-cornert.png', leftPill: "./assets/5-corner.png", leftPillRotation: 90 , rightPill: "./assets/5-corner.png", rightPillRotation: 0},
    3: { toe: -0.5, antiSquat: 0, pivotWidth: -0.35, pivotHeight: 0, image: './assets/d3mount_5-centert.png', leftPill: "./assets/5-center.png", leftPillRotation: 90 , rightPill: "./assets/5-center.png", rightPillRotation: 270},
    2: { toe: -0.5, antiSquat: 0.5, pivotWidth: -0.35, pivotHeight: -0.35, image: './assets/d4mount_5-cornert.png', leftPill: "./assets/5-corner.png", leftPillRotation: 180 , rightPill: "./assets/5-corner.png", rightPillRotation: 270},
    1: { toe: -0.5, antiSquat: 1, pivotWidth: -0.35, pivotHeight: -0.7, image: './assets/d5mount_1-5-Lcorner.png', leftPill: "./assets/1-5-Lcorner.png", leftPillRotation: 180 , rightPill: "./assets/1-5-Rcorner.png", rightPillRotation: 180}
  },
  5: {
    5: { toe: -1, antiSquat: -1, pivotWidth: -0.7, pivotHeight: 0.7, image: './assets/d1mount_1-cornert.png', leftPill: "./assets/1-corner.png", leftPillRotation: 90 , rightPill: "./assets/1-corner.png", rightPillRotation: 0},
    4: { toe: -1, antiSquat: -0.5, pivotWidth: -0.7, pivotHeight: 0.35, image: './assets/d2mount_1-5-Rcornert.png', leftPill: "./assets/1-5-Rcorner.png", leftPillRotation: 90 , rightPill: "./assets/1-5-Lcorner.png", rightPillRotation: 270},
    3: { toe: -1, antiSquat: 0, pivotWidth: -0.7, pivotHeight: 0, image: './assets/d3mount_1-centert.png', leftPill: "./assets/1-center.png", leftPillRotation: 90 , rightPill: "./assets/1-center.png", rightPillRotation: 270},
    2: { toe: -1, antiSquat: 0.5, pivotWidth: -0.7, pivotHeight: -0.35, image: './assets/d4mount_1-5-Rcornert.png', leftPill: "./assets/1-5-Rcorner.png", leftPillRotation: 90 , rightPill: "./assets/1-5-Lcorner.png", rightPillRotation: 270},
    1: { toe: -1, antiSquat: 1, pivotWidth: -0.7, pivotHeight: -0.7, image: './assets/d5mount_1-cornert.png', leftPill: "./assets/1-corner.png", leftPillRotation: 180 , rightPill: "./assets/1-corner.png", rightPillRotation: 270}
  },
};
export default dMount;
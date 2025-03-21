import cMount from './cMount';
import dMount from './dMount';
import defaultMount from './defaultMount';


const generatePillOptions = () => {
  const pillOptions = [];

  for (let cMountRow = 1; cMountRow <= 5; cMountRow++) {
    for (let cMountColumn = 1; cMountColumn <= 5; cMountColumn++) {
      for (let dMountRow = 1; dMountRow <= 5; dMountRow++) {
        for (let dMountColumn = 1; dMountColumn <= 5; dMountColumn++) {
          const pivotWidth =
            cMount[cMountColumn][cMountRow].pivotWidth +
            dMount[dMountColumn][dMountRow].pivotWidth +
            defaultMount.pivotWidth;
          const pivotHeight =
            cMount[cMountColumn][cMountRow].pivotHeight +
            dMount[dMountColumn][dMountRow].pivotHeight +
            defaultMount.pivotHeight;
          pillOptions.push({
            toe:
              cMount[cMountColumn][cMountRow].toe +
              dMount[dMountColumn][dMountRow].toe +
              defaultMount.toe,
            antiSquat:
              cMount[cMountColumn][cMountRow].antiSquat +
              dMount[dMountColumn][dMountRow].antiSquat +
              defaultMount.antiSquat,
            pivotWidth:parseFloat(pivotWidth.toFixed(2)),
            pivotHeight:parseFloat(pivotHeight.toFixed(2)),
            cMountImage: cMount[cMountColumn][cMountRow].image,
            dMountImage: dMount[dMountColumn][dMountRow].image,
            cMountLeftPill: cMount[cMountColumn][cMountRow].leftPill,
            cMountRightPill: cMount[cMountColumn][cMountRow].rightPill,
            dMountLeftPill: dMount[dMountColumn][dMountRow].leftPill,
            dMountRightPill: dMount[dMountColumn][dMountRow].rightPill,
            cMountLeftPillRotation: cMount[cMountColumn][cMountRow].leftPillRotation,
            cMountRightPillRotation: cMount[cMountColumn][cMountRow].rightPillRotation,
            dMountLeftPillRotation: dMount[dMountColumn][dMountRow].leftPillRotation,
            dMountRightPillRotation: dMount[dMountColumn][dMountRow].rightPillRotation
          });
        }
      }
    }
  }

  return pillOptions;
};

const getPillLocation = (toe, antiSquat, pivotWidth, pivotHeight) => {
  const pillOptions = generatePillOptions();

  // Convert input values to numbers
  const toeValue = parseFloat(toe);
  const antiSquatValue = parseFloat(antiSquat);
  const pivotWidthValue = parseFloat(pivotWidth);
  const pivotHeightValue = parseFloat(pivotHeight);

  for (const pillOption of pillOptions) {
    if (
        pillOption.toe === toeValue &&
        pillOption.antiSquat === antiSquatValue &&
        pillOption.pivotWidth === pivotWidthValue &&
        pillOption.pivotHeight === pivotHeightValue
    ) {
        return {
          cMountImage: pillOption.cMountImage,
          dMountImage: pillOption.dMountImage,
          cMountLeftPill: pillOption.cMountLeftPill,
          cMountRightPill: pillOption.cMountRightPill,
          dMountLeftPill: pillOption.dMountLeftPill,
          dMountRightPill: pillOption.dMountRightPill,
          cMountLeftPillRotation: pillOption.cMountLeftPillRotation,
          cMountRightPillRotation: pillOption.cMountRightPillRotation,
          dMountLeftPillRotation: pillOption.dMountLeftPillRotation,
          dMountRightPillRotation: pillOption.dMountRightPillRotation
        };
      }
  }

  return null;
};

export { getPillLocation };
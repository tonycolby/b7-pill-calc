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
            cMountRow,
            cMountColumn,
            dMountRow,
            dMountColumn
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
      console.log('Pill location found:', {
        cMountRow: pillOption.cMountRow,
        cMountColumn: pillOption.cMountColumn,
        dMountRow: pillOption.dMountRow,
        dMountColumn: pillOption.dMountColumn,
        cMountImage: pillOption.cMountImage,
        dMountImage: pillOption.dMountImage
      });
      return {
        cMountImage: pillOption.cMountImage,
        dMountImage: pillOption.dMountImage
      };
    }
  }

  return null;
};

export { getPillLocation };
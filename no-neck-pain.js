function layout() {
  return {
    name: "No Neck Pain",
    initialState: {
      mainPaneCount: 1
    },
    getFrameAssignments: (windows, screenFrame) => {

      const mainPaneWidth = Math.round(screenFrame.width * 0.7);
      const mainPaneWindowHeight = Math.round((screenFrame.height));

      const marginTop = 0;
      const marginLeft = (screenFrame.width - mainPaneWidth)/2;

      let frames = {};

      windows.forEach((window) => {
        const windowFrame = {
          // x: ((screenFrame.width + marginLeft) / 2) - (mainPaneWidth / 2),
          x: marginLeft,
          y: ((screenFrame.height / 2) - (mainPaneWindowHeight / 2)) + marginTop,
          width: mainPaneWidth,
          height: mainPaneWindowHeight
        };
        frames[window.id] = windowFrame;
      });

      return frames;
    }
  };
}

function layout() {
  return {
    name: "No Neck Pain",
    initialState: {
      mainPaneCount: 1,
      mainPaneRatio: 0.7
    },
    commands : {
      // Using custom commands until the following is done:
      // https://github.com/ianyh/Amethyst/issues/1347
      command1: {
        description: "Shrink main pane",
        updateState: (state) => {
          return { ...state, mainPaneRatio: Math.max(0.1, state.mainPaneRatio - 0.05) };
        }
      },
      command2: {
        description: "Expand main pane",
        updateState: (state) => {
          return { ...state, mainPaneRatio: Math.min(0.9, state.mainPaneRatio + 0.05) };
        }
      }
    },
    getFrameAssignments: (windows, screenFrame, state) => {
      const mainPaneWidth = Math.round(screenFrame.width * state.mainPaneRatio);
      const marginLeft = (screenFrame.width - mainPaneWidth)/2;

      let frames = {};

      windows.forEach((window) => {
        const windowFrame = {
          x: marginLeft,
          y: 0, 
          width: mainPaneWidth,
          height: screenFrame.height
        };
        frames[window.id] = windowFrame;
      });

      return frames;
    }
  };
}

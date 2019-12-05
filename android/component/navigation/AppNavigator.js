import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Transition } from "react-native-reanimated";

import DrawerNavigator from "./DrawerNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: DrawerNavigator
    },
    {
      // The previous screen will slide to the bottom while the next screen will fade in
      transition: (
        <Transition.Together>
          <Transition.Out
            type="slide-bottom"
            durationMs={400}
            interpolation="easeIn"
          />
          <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
      )
    }
  )
);

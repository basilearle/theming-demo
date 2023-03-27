import 'normalize.css';

import {AppTheme} from "../src/shared/theme";
import {AppStyles} from "../src/shared/styling/GlobalStyles";

export const decorators = [
  (Story, context) => (
      <AppTheme>
          <AppStyles />
        <Story {...context} />
      </AppTheme>
  ),
];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

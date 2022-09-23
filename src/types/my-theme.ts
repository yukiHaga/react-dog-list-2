// my-theme.ts
import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  mediaQuery: {
    lg: 992,
  },
};

// 特にテーマプロバイダーとかで親コンポーネントを囲まなくても、myThemeが使える。
// props.theme.mediaQuery.lg}px
export { myTheme };

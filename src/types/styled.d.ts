// import original module declarations
import "styled-components";

// and extend them!
// DefaultThemeはprops.themeのインターフェイスとしてそのまま使用されています。
// デフォルトではDefaultThemeインターフェイスは空なので、これを拡張する必要があるわけです。
declare module "styled-components" {
  export interface DefaultTheme {
    mediaQuery: {
      lg: 992;
    };
    color: {
      red: "#F15B5B";
    };
  }
}

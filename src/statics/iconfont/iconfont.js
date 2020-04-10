import { createGlobalStyle } from 'styled-components';

export const GloalFontStyle = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1581845549643'); /* IE9 */
    src: url('./iconfont.eot?t=1581845549643#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWkAAsAAAAACnwAAAVWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDXgqHUIZlATYCJAMcCxAABCAFhG0HWhs3CVGUUU4C2Y/D2DG9WZWJWhLf9R85GZd8CDf9d7kgTVpqVM1D6czqOqGbw1wE+aZ8EWH/1zbMQ11IWCSZJpX/7nZiO1RKohVKpwECzMz/z/18XR4fWF57NpeMtgoa7owSaECRP5OKvlgk8Gf9JlMJr0sHssMTlwMBwMFdKJJb7w4gDBa+kCCrVVcFhBsqsBMEAqlUPHAoC7ISIkiZJcxTACuyjyffIDopwEBE4W+tXE2G4mVfdlKVSYXxCQrs/QwA1KMACiAUwAJk4aBJBVqEQlFw9t9kIQDIIAUDsVFmdDdGG+ON737ZaTJBs9jvJpAFDkCEtWqwe//ziBiSyBz4urAYMMoiBESA0R0BBjBGs6bF8VCAhfhdIECBLzs5z1AkSQ6RAbADEgKQG/AlsZmIeQ4CFmcWO9iLLSyIFSeRSu14p1hzczM5MRv5S2gtWocyFCjP+PCaGy5ChznIgNCArQI+x/x2snqjXBEyVqsVhKCWR4dCMbXGSBlgtF+MjCTPXnVlt12Ls7xww0O0/Xodt1Or1ntz1FKIEg6cIsXVxoVoS2zM7OvObXWsm/LjNcDwQ97kPqB+TkaVylFOnao4exCqQ7zmDiEjKm2tXitfu3HTPocNBsUlHf/gSX7RLZv3169Xy4UdBuUNQ8qVB3aHtMJVbSLjTlcMGW8MEQa9/2a98FBbqdVGCWtV6zQODRtGW06Sd97F57wr6iKFtXJBucFhmpqbvPegY93adbyGn3bgiMu4DesFTnVIc2T0sPpgJlGRGZUXV6ovFtyjp8sXaPLO0GulxxaOHsu+QA8UzZzrWeM1g3WJ4Wfs9amcNbAr/QjdktszlLKF7ste29uxLmkHXZ7R0hW/gpSInH+eOw8nf+qTy2dOvtvfxSw4dHBObGf3HiUpceTwwdnM1EOHmOFwUxuzajXTHhhWrWmDcu2a6vVrV7czEGXzkReuIIr3fL2VZGbOCHc52brQq/d2ed+WvvItW3BzBa8Cc1/NkJmm5uib0ysUTPbUpnQD+096T++9xAgiygrvCKptspjAl2QmfzZR2fvEye4fZ7+f/NwRu7JY3OBa7z8zbLe/ckH16rj5cUs8WwJUuRZuq67a9tvezMrIG5APDA0VKNQVVaapxffnBTT4Ve2ub6qvyKxdkLMrdv4SIWexd0XjCs9cttj9oyJRrpe0oTx63PiWa8kXLjTIv5f3T5zUL4fp751Up6M7A3rCiIuquJLr7P//s+BflxjgSdNSkmW+S+RZD+PiHtIvrVZRxq1U8b6i1M3pOocC7adBNv3e/T7R8+iGFwBgOsaCdgMAtNH7DgDQyd6PAJOJ3qTICLN8NHKN3qE5v+tl+G5BtrBOpf4m5f/qfe90hIURb7+wFAzAZv+K2cwm1uH6aglrVY5YTIoEZYIBBgAXdAC/XZuND/bT2tk7QiCFXQUMJHADCil80Sw+FETgEQtiSJEBHEIUHM3DVjcfCGsGINgCAQRWTgADGW4AhZVnaBb/Pohg7zsQwyoKHGqzPSUP/5qiOTsSB5Jx6hA2TWNHCbWHaJ7dI/VoiV2dmxFHtNvrXowKj2xHG+TQbo89evrVfG+vgvXdbGO+uBpZFmNnNxskHdKNvQe3EBFRP/RM6WkdNkSRY4cIB0SGprpCTSTMoSS9D6Kd9+8hqiOLsJsoa9OOkJ09fXIUJVwkA90QOayy51LY40SV10sBBapXM5kN5ZOBWEGIoc7hRQYiOUhrXBFwFURQu3quKH18if06jwFw8M8mIQyhhCUiIiYSIoW0x9Wd+37/vLiHj/sjB6bo+ZgoJksEBnW66aHpgjXhqAAAAA==') format('woff2'),
    url('./iconfont.woff?t=1581845549643') format('woff'),
    url('./iconfont.ttf?t=1581845549643') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1581845549643#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

// @font-face {
//     font-family: "iconfont";
//     src: url('./iconfont.eot?t=1566558155190'); /* IE9 */
//     src: url('./iconfont.eot?t=1566558155190#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPEAAsAAAAAB8QAAAN1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDEIJnATYCJAMQCwoABCAFhG0HNhvHBsg+QCa3Ho6QEaBRcmSgc9v0Cexge+E3lhMB5d9/33Nm7tu5WDICGcFMAVcuVE5UvjEzKf0R553LzwBA7cWNj9UAuO2ACkmXHaQvl5FjoUiRI8WOQBGq/9mixvRxEoMNuB0WCw4IT4+SuRYCTGXlgGNIma0AJlYFLGcb7v/BMdOlT2d5trVjRFpEcCTgwKYDimpqHeg/yAv6D2MXtMTtBFR0kMVnYkVdGwiWmP0CwhaiyyA4Y5ckFsqCuoqpSbgAAuTipO9rnA9+P/zWP2QKpcgcOmNduQaKvuVvg+OB/+r29GB2OjPYLCJ6AhJhQ6V1Fb/I35Ofitra32BAlhVMVdfj2+D/R/yjSLP1L49CEAl1zOQaGIgCkW/ZoVLwrQeVwLfBSSJ8kN4ZjQDbANcQtl1GoSI1rCVTFKyjY6iFnJtXt7+e4fMhvXwMysRvH/p8yq8H83a6EHVAEWqrnc/uFjRRl4QmsZUL/V0jwsbis3vdxdWVlw+7RVXmhc8J3Ry2sHMhJfRicru8H3YagEqovKqcunVQkiaC4XnC3rrxqqfPhTMzG7U4G6eROGYsh6aN3ampZcO7iX9lO+nr+i1dfb+xP0Jsdv/v1FRySK8DdjrGAmK3N6bKbVB8rGK82xyzxYy5Tk+H9v0/8b+rYYMJD42crKt86DrxYW3k/0943VTQKPiOV0jBW/rb/HJoH5/SOBNNF0nE0rDJRTlfl0n8qnXz32361QkwAPwvvvT9Q4nF+36TXMfH//Y3nnzn9vKokX/lagLvjy60/S/pznv5PJX3l3gdy5ImMHUpKUKHq+OTvni3rlVJBP8mTBPvp5A375xMkDXHUKinPURZR2TC9oSSqoFQJxsDFT1Uzq5qivETUhndzQAIGtmEQgMvIWrkBpmw76CkhW9Qp1GIUDEvNF2yqnPYGDqBIZkjDSpjkKjUg20DDw1TW5A+5JJZWhAQRMS8xAWtJks+VIk8iE0xwjus2zjHEDPqhhVgN+RyUWgwOohUbhrg3Mgxm3HVnUwqdYNQEzCIjEM0kGIMRKgoD+zV5kILP98C0Q1xkbGGrCqnCGG8SOOQlYmlA7JS6umUdSu3eA3T2XAcBmEM5QZVADPisvwUZFR3GoSoOJOBAV5DDjOqhrtKTcvL3W9Y7iXmMNdLoQgxpFBSDOznu4r4jpMBAAAAAA==') format('woff2'),
//     url('./iconfont.woff?t=1566558155190') format('woff'),
//     url('./iconfont.ttf?t=1566558155190') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('./iconfont.svg?t=1566558155190#iconfont') format('svg'); /* iOS 4.1- */
// }
//
// .iconfont {
//     font-family: "iconfont" !important;
//     font-size: 16px;
//     font-style: normal;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
// }

import {createGlobalStyle} from 'styled-components';

export const FontGlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1566622468715'); /* IE9 */
    src: url('./iconfont.eot?t=1566622468715#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQMAAsAAAAACFgAAAO9AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqEAINHATYCJAMUCwwABCAFhG0HPRtIB8gekiQBAAURwAIRoBSC51/d633Sk6PIBUCaiP1TpJXWdkdaezolPJVc4ik0uaYZsjBx47IaAP93QA/JN/1v85empMbC7eYBFTsCRag2NTuh6gaHtFndC8yzjrB4B8dMl5Y6y7OtHaPSohNwggOq+mqNsgcMkH8w/mHsgpZ4NQQINKOMuDEtXUMgFcVcJ4BsIZoEUjNGtCFX8AhRxZGKXMDhzUnzCjgf/Lx8pZd4MDiLuXXGumYV1KX+00ybVCYs8cxcns4OsOPAAl0AKMjWSucWEqJwFxII6t8lMgJAwGMwqU87p/0+zaw0aNIDqYOlZIp/PMWARJjZVQAYASMKqXeYsJB2ZkIg7ceEwqeZEQzwXEdCAGoBuACUgHFNmGowBLR6lZo1FXycqFipIt7XjXd9nUFuDvPeaG0p/i6u3FOZn1HBaeYlO+csj9xcyBwhrqBAmfx589IpSd7M+ef5UhJCVaqsdt52n6CKmlvoEwe5MD0WFnavPLrVad7W9ad3O1YP8zLnpG/OWDi60ixcabBAOolPQ5DwLJx6LZn58+eC7UPmHt8guRmffily5ujGNQU2SSUF3FhK143jhYVjti8hiWEXmRqLrVg8NhVbvGI6Qiw/z3SM0ke98Kf7tvr447duHTcjZswv1Z1pWZk+Xjx6tTQnM1zZ6TjQU9vtcn/13uOKJtmO+UiXcxy5bd2oUe70mC2WLI85ckSa9nqD/7mqVxv9WoPLdeNfO4x5XVutctXor03DeoX4UTKp+dbSYdv43YDu4kZaaLFIspZmTK6r+Fs2n983rFvaqO3vts0YBgCVY5+ab5R69rad5LN9Zn/571C7lm++PGfIfx8rAEXHXmFZ5Sg2gf+morPoB4s6DqgmMU1OlWZHqJAdPRC/ING/bPit3lr8TqOu2zkbBE/dBAxZNAWLpw1SsV3AEdMHIjzDIdCZ1uNjasNIQDQb6MQSAKEGe2CoxlOw1OARqdgfcNTjHyJqiIXAPKl9xph2sjF9NEMSRyqUo5Ao1I9tC08PcweQFjQklpYEFBGxAPFBe7ce+Vgr8iM2xY5ASHNwjiFm1AdbwPWQYVBoMupFCrd4ODcrrN3XVT2SRaE+kM5oGAgJDkIFIhMFQlCg+MHeeE564fsHQGgEMZBgDS1VQREEIwCZHGLHgq0DslXp79RyK7MDhNBwwOFgvArDoPiAtEA7wrDCFIhZvcgLQoFjwTMgaFKBFY3CXZWW5dW+d6zmJbYxH+TEiBUVJxGmT0/dZhJ//CoSP1ICAAAAAA==') format('woff2'),
        url('./iconfont.woff?t=1566622468715') format('woff'),
        url('./iconfont.ttf?t=1566622468715') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./iconfont.svg?t=1566622468715#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

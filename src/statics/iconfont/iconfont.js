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
@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1566558155190'); /* IE9 */
    src: url('./iconfont.eot?t=1566558155190#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPEAAsAAAAAB8QAAAN1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDEIJnATYCJAMQCwoABCAFhG0HNhvHBsg+QCa3Ho6QEaBRcmSgc9v0Cexge+E3lhMB5d9/33Nm7tu5WDICGcFMAVcuVE5UvjEzKf0R553LzwBA7cWNj9UAuO2ACkmXHaQvl5FjoUiRI8WOQBGq/9mixvRxEoMNuB0WCw4IT4+SuRYCTGXlgGNIma0AJlYFLGcb7v/BMdOlT2d5trVjRFpEcCTgwKYDimpqHeg/yAv6D2MXtMTtBFR0kMVnYkVdGwiWmP0CwhaiyyA4Y5ckFsqCuoqpSbgAAuTipO9rnA9+P/zWP2QKpcgcOmNduQaKvuVvg+OB/+r29GB2OjPYLCJ6AhJhQ6V1Fb/I35Ofitra32BAlhVMVdfj2+D/R/yjSLP1L49CEAl1zOQaGIgCkW/ZoVLwrQeVwLfBSSJ8kN4ZjQDbANcQtl1GoSI1rCVTFKyjY6iFnJtXt7+e4fMhvXwMysRvH/p8yq8H83a6EHVAEWqrnc/uFjRRl4QmsZUL/V0jwsbis3vdxdWVlw+7RVXmhc8J3Ry2sHMhJfRicru8H3YagEqovKqcunVQkiaC4XnC3rrxqqfPhTMzG7U4G6eROGYsh6aN3ampZcO7iX9lO+nr+i1dfb+xP0Jsdv/v1FRySK8DdjrGAmK3N6bKbVB8rGK82xyzxYy5Tk+H9v0/8b+rYYMJD42crKt86DrxYW3k/0943VTQKPiOV0jBW/rb/HJoH5/SOBNNF0nE0rDJRTlfl0n8qnXz32361QkwAPwvvvT9Q4nF+36TXMfH//Y3nnzn9vKokX/lagLvjy60/S/pznv5PJX3l3gdy5ImMHUpKUKHq+OTvni3rlVJBP8mTBPvp5A375xMkDXHUKinPURZR2TC9oSSqoFQJxsDFT1Uzq5qivETUhndzQAIGtmEQgMvIWrkBpmw76CkhW9Qp1GIUDEvNF2yqnPYGDqBIZkjDSpjkKjUg20DDw1TW5A+5JJZWhAQRMS8xAWtJks+VIk8iE0xwjus2zjHEDPqhhVgN+RyUWgwOohUbhrg3Mgxm3HVnUwqdYNQEzCIjEM0kGIMRKgoD+zV5kILP98C0Q1xkbGGrCqnCGG8SOOQlYmlA7JS6umUdSu3eA3T2XAcBmEM5QZVADPisvwUZFR3GoSoOJOBAV5DDjOqhrtKTcvL3W9Y7iXmMNdLoQgxpFBSDOznu4r4jpMBAAAAAA==') format('woff2'),
    url('./iconfont.woff?t=1566558155190') format('woff'),
    url('./iconfont.ttf?t=1566558155190') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('./iconfont.svg?t=1566558155190#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

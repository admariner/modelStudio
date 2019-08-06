function addCssToDocument(css){
  // this function adds custom css to document head
  var style = document.createElement('style')
  style.innerText = css
  document.head.appendChild(style)
}

// load tip:after related css (for triangle)
addCssToDocument("d3-tip:after{box-sizing:border-box;display:inline;font-size:10px;width:100%;line-height:1;color:rgba(0, 0, 0, 0.8);content:'\\25BC';position: absolute;text-align: center;}.d3-tip.n:after{content:'\\25BC';margin:-1px 0 0 0;top:100%;left:0;text-align:center}.d3-tip.e:after{content:'\\25C0';margin:-4px 0 0 0;top:50%;left:-8px}.d3-tip.s:after{content:'\\25B2';margin:0 0 1px 0;top:-8px;left:0;text-align:center}.d3-tip.w:after{content:'\\25B6';margin:-4px 0 0 -1px;top:50%;left:100%};")

// load Fira Sans fonts from googleapis
addCssToDocument("@font-face{font-family:'Fira Sans';font-style:normal;font-weight:400;font-display:swap;src:local('Fira Sans Regular'),local('FiraSans-Regular'),url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLeTY.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:400;font-display:swap;src:local('Fira Sans Regular'),local('FiraSans-Regular'),url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jL.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:500;font-display:swap;src:local('Fira Sans Medium'),local('FiraSans-Medium'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:500;font-display:swap;src:local('Fira Sans Medium'),local('FiraSans-Medium'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:600;font-display:swap;src:local('Fira Sans SemiBold'),local('FiraSans-SemiBold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:600;font-display:swap;src:local('Fira Sans SemiBold'),local('FiraSans-SemiBold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnSKzeRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:700;font-display:swap;src:local('Fira Sans Bold'),local('FiraSans-Bold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6TF0.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Fira Sans';font-style:normal;font-weight:700;font-display:swap;src:local('Fira Sans Bold'),local('FiraSans-Bold'),url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}")

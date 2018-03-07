import * as React from 'react';

export default ({ height, width, fill = '#fff', style, className, alt = '', ...props }) => {
  return (
    <img
      src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.2 90.93"><defs><style>.cls-1{fill:${fill};}</style></defs><title>icon-double-chevron-left-grey</title><path class="cls-1" d="M38,3.05,3,38A10.55,10.55,0,0,0,3,52.88l35,35A10.42,10.42,0,0,0,52.78,73.14L25.1,45.46,52.78,17.79A10.42,10.42,0,0,0,38,3.05"/><path class="cls-1" d="M81.42,3.05l-35,35a10.55,10.55,0,0,0,0,14.83l35,35A10.42,10.42,0,0,0,96.15,73.14L68.47,45.46,96.15,17.79A10.42,10.42,0,0,0,81.42,3.05"/></svg>`}
      alt={alt}
      css={`
        width: ${width};
        height: ${height};
        ${className};
      `}
      style={style}
    />
  );
};
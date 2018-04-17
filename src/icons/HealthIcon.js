import React from 'react';

export default ({ height, width, fill = '#fff', style, className, alt, ...props }) => (
  <img
    css={`
      width: ${width};
      height: ${height};
      ${className};
    `}
    style={style}
    src={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><defs><style>.cls-1{fill:none;}.cls-2{fill:${encodeURIComponent(
      fill,
    )};}</style></defs><path class="cls-1" d="M35.26,60.41c-1.29-2.7-3-4.57-4.86-5.4a2.55,2.55,0,0,0-1.1-1.3c.46-2.23,3-5.35,6.2-5.35V46.28a8.21,8.21,0,0,0-5.93,2.77,8.73,8.73,0,0,0-2.36,4.58,2.54,2.54,0,0,0-1.27,1.44,7.53,7.53,0,0,0-2,1.42,13.81,13.81,0,0,0-2.84,4.18,1.46,1.46,0,0,0,0,1.11,16.71,16.71,0,0,0-1.21,5.92c0,2,.1,3.16.62,4A2.92,2.92,0,0,0,22.57,73a1.26,1.26,0,0,0,.84.32h1.88A1.26,1.26,0,0,0,26.55,72V72h0a1.26,1.26,0,0,0-1.26-1.19H23.41a1.26,1.26,0,0,0-.57.13c-.5-.09-.59-.23-.64-.3a7.82,7.82,0,0,1-.31-2.9,14.52,14.52,0,0,1,1-5,1.48,1.48,0,0,0,.85-.78c1.23-2.68,3-4.41,4.46-4.41s3.12,1.6,4.36,4.18a1.48,1.48,0,0,0,.74.71,14.86,14.86,0,0,1,1.13,5.31,7.79,7.79,0,0,1-.28,2.9c0,.07-.12.2-.56.29a1.25,1.25,0,0,0-.53-.12H31.2A1.26,1.26,0,0,0,29.94,72h0v0A1.26,1.26,0,0,0,31.2,73.3h1.88a1.25,1.25,0,0,0,.88-.36c2.45-.49,2.58-2.32,2.58-5.23a17,17,0,0,0-1.26-6A1.47,1.47,0,0,0,35.26,60.41Z"/><polygon class="cls-1" points="58.84 65.2 55.74 65.2 55.74 67.88 53.06 67.88 53.06 70.98 55.74 70.98 55.74 73.66 58.84 73.66 58.84 70.98 61.52 70.98 61.52 67.88 58.84 67.88 58.84 65.2"/><path class="cls-1" d="M56.88,50.76h-.71c-2.27,0-4.12.29-4.65,1.17l1.75-3.64A11.85,11.85,0,0,1,45,51.92a11.92,11.92,0,0,1-8.43-3.8l2.51,5.59c-.59-1-2.84-1.45-5.51-1.68,1,1.9,3.58,3.44,6.89,4.19L45,63.6l4.55-7.39C53.56,55.31,56.47,53.23,56.88,50.76Z"/><path class="cls-1" d="M45,49.61c4.36,0,8.23-3.11,10.61-7.9A24.79,24.79,0,0,0,58,32.54a14.46,14.46,0,0,0,.15-1.9l-.81-.15H57.3l-4.44-.56c2.44-1.41,1.15-4.49.55-5.52-.18-.31-.3-.49-.3-.49L53,24a52.62,52.62,0,0,1-12.62,6.9A52,52,0,0,1,32,33C32.85,42.38,38.35,49.61,45,49.61Z"/><path class="cls-1" d="M45,5.29A39.71,39.71,0,1,0,84.71,45,39.71,39.71,0,0,0,45,5.29Zm0,77.65A37.89,37.89,0,0,1,15.27,68.53a19.73,19.73,0,0,1,11.6-16.67c-2.42,0-4.23.17-4.23.17,6.73-3.7,6.56-17,6.56-17C28.12,11.76,41.93,10.66,44.56,10.66l.43,0v0h.43c2.63,0,16.44,1.1,15.37,24.39,0,0-.18,13.28,6.56,17,0,0-3-.58-6.33-1a19.75,19.75,0,0,1,13.7,17.47A37.89,37.89,0,0,1,45,82.94Z"/><path class="cls-1" d="M61.71,54.35a4.48,4.48,0,0,0-.92-.36A9.72,9.72,0,0,0,60,51.18a8.2,8.2,0,0,0-4.77-4.48l-.36-.12-.12.36-.41,1.26-.12.36.36.12c2.32.76,3.71,3.16,4.12,5.26a4.52,4.52,0,1,0,3,.43Zm-2.14,6.28a2.27,2.27,0,1,1,2.27-2.27A2.27,2.27,0,0,1,59.57,60.64Z"/><path class="cls-2" d="M68.13,55.1a19.55,19.55,0,0,0-7.09-4c3.37.38,6.33,1,6.33,1-6.73-3.7-6.56-17-6.56-17,1.06-23.28-12.75-24.39-15.37-24.39H45v0l-.43,0c-2.62,0-16.44,1.1-15.37,24.39,0,0,.17,13.28-6.56,17,0,0,1.81-.12,4.23-.17a19.73,19.73,0,0,0-11.6,16.67,37.87,37.87,0,0,0,59.46,0A19.57,19.57,0,0,0,68.13,55.1ZM40.38,30.9A52.64,52.64,0,0,0,53,24l.1-.08s.12.18.3.49c.6,1,1.89,4.11-.55,5.52l4.44.56h.08l.81.15a14.8,14.8,0,0,1-.15,1.9,24.77,24.77,0,0,1-2.43,9.17c-2.39,4.79-6.25,7.9-10.61,7.9-6.65,0-12.15-7.23-13-16.6A52,52,0,0,0,40.38,30.9ZM34,72.94a1.25,1.25,0,0,1-.87.36H31.2A1.26,1.26,0,0,1,29.94,72v0h0a1.26,1.26,0,0,1,1.26-1.23h1.88a1.24,1.24,0,0,1,.53.12c.44-.09.52-.22.56-.29a7.79,7.79,0,0,0,.28-2.9,14.87,14.87,0,0,0-1.12-5.31,1.48,1.48,0,0,1-.74-.71c-1.23-2.58-2.9-4.18-4.36-4.18S25,59.23,23.77,61.91a1.47,1.47,0,0,1-.85.78,14.52,14.52,0,0,0-1,5,7.82,7.82,0,0,0,.31,2.9c0,.07.13.21.64.3a1.26,1.26,0,0,1,.57-.13h1.88A1.26,1.26,0,0,1,26.55,72h0V72a1.26,1.26,0,0,1-1.26,1.26H23.41a1.26,1.26,0,0,1-.84-.32,2.92,2.92,0,0,1-2.13-1.27c-.52-.84-.62-2-.62-4A16.71,16.71,0,0,1,21,61.79a1.46,1.46,0,0,1,0-1.11,13.82,13.82,0,0,1,2.84-4.18,7.53,7.53,0,0,1,2-1.42,2.53,2.53,0,0,1,1.27-1.44,8.74,8.74,0,0,1,2.36-4.58,8.21,8.21,0,0,1,5.93-2.77v2.08c-3.17,0-5.74,3.12-6.2,5.35A2.53,2.53,0,0,1,30.4,55c1.89.83,3.57,2.69,4.86,5.4a1.47,1.47,0,0,1,0,1.25,17,17,0,0,1,1.26,6C36.53,70.63,36.4,72.46,34,72.94ZM45,63.6l-4.55-7.39c-3.31-.75-5.86-2.29-6.89-4.19,2.67.23,4.92.72,5.51,1.68l-2.51-5.59A11.92,11.92,0,0,0,45,51.91a11.85,11.85,0,0,0,8.26-3.64l-1.75,3.64c.53-.87,2.39-1.17,4.65-1.17h.71c-.41,2.47-3.32,4.55-7.33,5.46ZM61.53,71H58.84v2.68h-3.1V71H53.06v-3.1h2.68V65.2h3.1v2.68h2.68Zm2.05-10.47a4.55,4.55,0,1,1-4.91-6.58c-.4-2.1-1.8-4.5-4.12-5.26l-.36-.12.12-.36.41-1.26.12-.36.36.12A8.2,8.2,0,0,1,60,51.17,9.74,9.74,0,0,1,60.79,54a4.48,4.48,0,0,1,.92.36A4.55,4.55,0,0,1,63.58,60.51Z"/><circle class="cls-2" cx="59.57" cy="58.36" r="2.27"/><path class="cls-2" d="M45,0A45,45,0,1,0,90,45,45.05,45.05,0,0,0,45,0Zm0,84.71A39.71,39.71,0,1,1,84.71,45,39.71,39.71,0,0,1,45,84.71Z"/></svg>`}
    alt={alt}
  />
);

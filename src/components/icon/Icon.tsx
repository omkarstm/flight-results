import React from "react";

// SearchIcon Component
export const SearchIcon = ({
  width = 17,
  height = 16,
  fill = "white",
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.16683 2.66665C5.40541 2.66665 3.16683 4.90522 3.16683 7.66665C3.16683 10.4281 5.40541 12.6666 8.16683 12.6666C9.5089 12.6666 10.7275 12.1379 11.6256 11.2773C11.6463 11.2486 11.6696 11.2211 11.6955 11.1952C11.7214 11.1694 11.7488 11.1461 11.7776 11.1253C12.6381 10.2272 13.1668 9.00869 13.1668 7.66665C13.1668 4.90522 10.9283 2.66665 8.16683 2.66665ZM13.0919 11.6488C13.9726 10.5609 14.5002 9.1754 14.5002 7.66665C14.5002 4.16884 11.6646 1.33331 8.16683 1.33331C4.66903 1.33331 1.8335 4.16884 1.8335 7.66665C1.8335 11.1645 4.66903 14 8.16683 14C9.67561 14 11.0612 13.4724 12.1491 12.5916L14.0288 14.4714C14.2891 14.7317 14.7112 14.7317 14.9716 14.4714C15.2319 14.211 15.2319 13.7889 14.9716 13.5286L13.0919 11.6488Z"
      fill={fill}
    />
  </svg>
);

// CustomSVGComponent Component (modified)
export const KiteIcon = ({
  width = 120,
  height = 120,
  fill = "none",
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="25 0 100 120"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="150" height="150" fill="url(#pattern0_9289_33)" />
      <defs>
        <pattern
          id="pattern0_9289_33"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_9289_33" transform="scale(0.00666667)" />
        </pattern>
        <image
          id="image0_9289_33"
          width="150"
          height="150"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAACXdJREFUeF7tm9tPlOkdx78zHGaARXYdREAQcQEt6kKxu92TtbuN7d6sVTyktnavmrTdNE161fQv6E0vmr3oRZu26U3tLkirVjfbdtMarXVRE/HASY4zHEZOMhwE5vQ2v2eLqxuEGeTXOO/7nYSQMM/7hfczn/ye5/m9Dy7wRQIKBFwKmYwkAVAsSqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlIsOqBCgGKpYGUoxaIDKgQolgpWhlKsJ3SguP5tK9vrxf35eRTn52NobAxDTWccz9XxAFbjVdnRg5ZlWebS3du244sVlagsLUW2x4uW7i789uwZuFwu9L3f5Fi+jr3xZIUqO3LQsmAhIy0dr79Qgxe3fwGlBQVLxoxPhfDr06cwFgqh60SDIxk78qYTlWrL0XorHI2g4Nlnsbe2DjXPV8CXl5fo5fj42lU0nv+nI6dGivWQJqWHD1gul4WMjAyU5heYyrSjvNxMcat9BUZG8IePziE4No7AyVOO4e2YG11OjLIjB6xILGaGvLZzF+r3fvWJZPr877q/MI/T/76Iiy0tjpGLYgEoOfxN643aOvQMD2JwdBTReBzrc3Ox54ValBcVobKkdLUF65Hr7gwE8MuG901F7P3TSVuzt/XNJWpD9XePWT///g8fDJfp63LrLdzs6cHk9BRk/1e9pRy1FZWoKilNap21VPX63dm/omPAD/8Hf7Etf9veWKJSSR9Kpr/jX3/rsZd0Bvz4qPkTDI2PYXJmBkX5+agoLsGurVuxa+vzif6qR8ZdaLmOpgvnEYvF0N9gP8EcL1b1O8es/a/twSs7diYkiKyXrrW3o7mjDQMjI1iIRLCtdLMRTKbMx7UglgofD4Xwq1NNGJsMoe8De/W8bC1W+bcOWQvhMNxuN+LxONLT0hCNxbAuJwfhSARxWAiHI9j3pZfMe0U+H7yZmf/78iQkiaybbvf14mZ3N0Ym75k+V01FBXZs2Yrq8i0JbQLOXf4Pzly6aKu2hG3Fku74sa/te6QSydppbmHeFI+JqSmMTE7C7XZhdm7OTHPxuAW3y4XOgYDpnC9212X89s1liMZj5v1iXz5ys3OMrPl5eVi/bp0Z7830YGIqhKsd7egdHoY0SjeuX4+6ym2oq6pCyYalG6qSPzA6gvdONhjhe23QsbelWFKpDu3Ziz01tQlNb8sNEhnnwwuYD4fN1+DYKDLTM8xaa3TyHiKRCDyZmWjt73ukMrrhQl5urhmzWCmzPB6UFxbh5R07Ted+qYV90/l/4WpnR8rvGm0n1lKV6ontSjJgpcroSc/EuwfrH5va0nUHv//wrJm2A42p2VS1lVhrWamSdGnNh8sm4TdnTqPT78dA0+mU+5xS7g9+3Cf4NFSqtbZLKt+5y5dwveuOmWYHUqh62UKsVKtUsqiXc1uyA23r7zff7wT8puM/NTtrdpcyDYpMsCzkZmebnw+m0DmvlBfraapUMn3JIyHZTQ6MjmJmbg5TszO4O3nv091m4LPdpizkN/ny4U5zY1P+BshhQelryTUdfj/caS4shCMp24JIabH+n5VKuu/SUgiOj2N6bs5UlP67QdO+GJ0UIe4/2P1Ja0J2i4U+H57JykamnJYoKDCVSVoTvnWfHb252dMNWaxfbr1tdpdyEtUOJ1BTVqy1qlSLOzjpoPcHg0YeESYSjZopSfpd8pKfF/t8yPFmwZORibKiQsRicZRt3AipPnJO62FhVmphfNJ6G83trZhbWABcsN1zw5QUK5FKJQ1H+dBkWuoLBk0lkKoSnBhH3LJMA3OxI1/w3HPI8XhNxSgrLDR9qtysLFNxpHe12ueBD8slHXp5qH3p1g2zlopGwwg02vdsfMqJJZVqd9U2vLpzF/x375pndSJMX3AY0WgMo6GQaWh+WmVgpiKpPs9kZeHF7dXme8mGDeb9koKChB65rHa3J2smOQN/4cZ1BCcmkOZ2IdCYeq2D1dx/SoklUokkUmnSXW5kZ3lNB9ztTkM8Hlt2bSLXvvfjn6yGUVLXSKXsHRrCP65dwcT0tLnWb8PTCytBSSmxVrqZ5d6v+s5R6/i+b6CmovJJYpa8VnaDN7q68LcrzRieGDeLdSf/h46ZLdac8lMaWHr4bevNupdQ/5W9a/IXSi+qZ2gIl27dRNfgAKy45Zhjx4kAdIxYAuPzJ0UTAfTwmMXKdKW9zTx0liMy/Q1/dhTDRJk5CsrmIwesn377+LLHV5YCJ72m5rZWI9P8/AJgHq/Y79RnotIkMs5RYkmbYv+rr+PNut0rshGZrra3mV1d3IojFrdS6lndijeoPMBRYgnLl3/wPetnx99ZEqvs6P5+pRm3+npN30vOUTlxR7cWzjlOrE2H9lu/ePdHD/pXIpMswK91tmPm/hwyMtPRe8Je58/XQpRkMxwnlvxz6ltffgWh2RnIdHdvehpejwc9JxodxyJZWZIZ7ziYUrHkMU+W14PuP1KmZGRJZqzjxEoGDseungDFWj07XrkMAYpFPVQIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAylWHRAhQDFUsHKUIpFB1QIUCwVrAz9L9q4JsS/LGEwAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};


export const TickIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="25" x="0" y="0" viewBox="10 -15 100 150" className=""><g><path d="M64 128C28.711 128 0 99.289 0 64S28.711 0 64 0s64 28.711 64 64-28.711 64-64 64zM64 8C33.121 8 8 33.121 8 64s25.121 56 56 56 56-25.121 56-56S94.879 8 64 8zm-9.172 78.828 40-40c1.563-1.563 1.563-4.094 0-5.656s-4.094-1.563-5.656 0L52 78.344 38.828 65.172c-1.563-1.563-4.094-1.563-5.656 0s-1.563 4.094 0 5.656l16 16C49.953 87.609 50.977 88 52 88s2.047-.391 2.828-1.172z" fill="#003e39" opacity="1" data-original="#000000" className=""></path></g></svg>
  );
};

export const LeftIconIcon = () => {
  return (
    <svg width="12" height="17" viewBox="0 2 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.55356 1C3.15129 2.03704 1.89185 3.24852 0.806307 4.60379C0.713186 4.72005 0.666626 4.86002 0.666626 5M4.55356 9C3.15129 7.96296 1.89185 6.75148 0.806307 5.39621C0.713186 5.27995 0.666626 5.13998 0.666626 5M0.666626 5H11.3333" stroke="#484A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    
  );
};
export const ClockIconIcon = () => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2003_832)">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.00395 1.74998C4.10445 1.74998 1.75395 4.10048 1.75395 6.99998C1.75395 9.89948 4.10445 12.25 7.00395 12.25C9.90344 12.25 12.2539 9.89948 12.2539 6.99998C12.2539 4.10048 9.90344 1.74998 7.00395 1.74998ZM0.58728 6.99998C0.58728 3.45615 3.46012 0.583313 7.00395 0.583313C10.5478 0.583313 13.4206 3.45615 13.4206 6.99998C13.4206 10.5438 10.5478 13.4166 7.00395 13.4166C3.46012 13.4166 0.58728 10.5438 0.58728 6.99998ZM7.00395 2.91665C7.32611 2.91665 7.58728 3.17781 7.58728 3.49998V6.63946L9.59816 7.6449C9.88631 7.78897 10.0031 8.13937 9.85903 8.42752C9.71495 8.71568 9.36456 8.83247 9.07641 8.6884L6.74307 7.52173C6.54545 7.42292 6.42061 7.22093 6.42061 6.99998V3.49998C6.42061 3.17781 6.68178 2.91665 7.00395 2.91665Z" fill="#787B80"/>
    </g>
    <defs>
    <clipPath id="clip0_2003_832">
    <rect width="14" height="14" fill="white" transform="translate(0.00390625)"/>
    </clipPath>
    </defs>
    </svg>
    
    
  );
};
export const ExchangeIconIcon = () => {
  return (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1673 14.1667H3.83398M3.83398 14.1667L7.16732 10.8333M3.83398 14.1667L7.16732 17.5M3.83398 5.83333H17.1673M17.1673 5.83333L13.834 2.5M17.1673 5.83333L13.834 9.16667" stroke="#001F1D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>  
  );
};
export const CrossIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
  );
};
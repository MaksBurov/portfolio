<template>
  <svg
    style="visibility: hidden; position: absolute"
    width="0"
    height="0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter id="СornerRounding">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="CornerRounding"
        />
        <feComposite in="SourceGraphic" in2="CornerRounding" operator="atop" />
      </filter>
    </defs>
  </svg>
</template>

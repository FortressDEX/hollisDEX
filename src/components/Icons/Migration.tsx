import React from 'react'

interface Props {
  size: number
  fillColor: string
}
const Migration: React.FC<Props> = props => {
  const { size, fillColor } = props
  return (
    <svg width={size} height={size} viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 8.01105H18.5143V21.1949H0V8.01105Z" fill={fillColor} />
      <path
        d="M13.272 45.0132V42.2886C12.4398 42.2886 11.6393 42.2833 10.8388 42.2886C9.78261 42.2988 8.73359 42.1143 7.74429 41.7443C4.85055 40.6638 2.76698 37.8097 2.65338 34.7222C2.61816 33.7456 2.6481 32.7663 2.6481 31.7651H5.27413C5.27413 32.1596 5.26796 32.5629 5.27413 32.9663C5.31111 35.1951 6.81875 36.8542 9.04057 36.9863C10.4258 37.0682 11.8198 37.0013 13.2561 37.0013V34.3682L21.165 39.6405C20.9739 39.7788 20.8392 39.8836 20.6974 39.9796C18.3708 41.5565 16.0445 43.1337 13.7185 44.7112C13.5933 44.805 13.4734 44.9055 13.3592 45.0123L13.272 45.0132Z"
        fill={fillColor}
      />
      <path d="M0 0.0137939H18.5134V5.37505H0V0.0137939Z" fill={fillColor} />
      <path d="M26.4548 45.0132V39.6801H44.9999V45.0132H26.4548Z" fill={fillColor} />
      <path d="M0 23.8315H18.5134V29.1073H0V23.8315Z" fill={fillColor} />
      <path d="M26.4751 36.981V23.8597H44.9815V36.981H26.4751Z" fill={fillColor} />
      <path
        d="M31.737 2.82241C33.0165 2.82241 34.2423 2.70969 35.4417 2.84266C39.1263 3.25216 42.0588 6.43474 42.2499 10.1519C42.3027 11.1725 42.2578 12.1984 42.2578 13.2517H39.6388C39.6388 12.8439 39.6459 12.438 39.6388 12.0329C39.5957 9.8912 38.1928 8.25235 36.0661 8.07006C34.6457 7.94589 33.2058 8.04629 31.744 8.04629V10.6556L23.8184 5.37182L31.7361 0L31.737 2.82241Z"
        fill={fillColor}
      />
      <path d="M44.9807 15.9517V21.1711H26.4875V15.9517H44.9807Z" fill={fillColor} />
    </svg>
  )
}

export default Migration

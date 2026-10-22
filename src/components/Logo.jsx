import { asset } from '../lib/asset.js'

// Wide wordmark: 1024x316 source, served at 176/352px wide (WebP, PNG fallback).
export default function LogoMark({ height = 42 }) {
  const w = Math.round((height * 1024) / 316)
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${asset('img/logo-176.webp')} 176w, ${asset('img/logo-352.webp')} 352w`}
        sizes="176px"
      />
      <img src={asset('img/logo-176.png')} alt="Osforh Learning Hub" width={w} height={height} decoding="async" />
    </picture>
  )
}

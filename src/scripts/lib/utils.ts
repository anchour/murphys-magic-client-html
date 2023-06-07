import { Asset } from "./types";

export const srcSet = (assets: Asset[]): string => {
  if (!assets.length) {
    return ''
  };

  return assets.map(asset => {
    return `${asset.src}${asset.size ? ` ${asset.size}w` : ''}`
  }).join(', ');
}
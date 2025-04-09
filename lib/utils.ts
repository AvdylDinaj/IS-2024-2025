import { Library } from "@googlemaps/js-api-loader"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const libs: Library[] = ['core', 'maps', 'places', 'marker']

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatAmountForDisplay(
  amount: number, currency: string
): string {

  let numberFormat = new Intl.NumberFormat(['de-DE'], {
    style:'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol'
  })

  const formatedAmount = numberFormat.format(amount)
  return formatedAmount === 'NaN' ? '' : formatedAmount
}
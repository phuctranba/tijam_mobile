interface countryCode  {
  name: string,
  label: string,
  value: string,
  value_number: number,
  code: string
}

export function compareCountryCode(a: countryCode, b: countryCode) {
  if (a.value_number < b.value_number) {
    return -1;
  }
  if (a.value_number > b.value_number) {
    return 1;
  }
  return 0;
}

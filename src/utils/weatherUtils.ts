/**
 * Converts the provided temperature to celsius.
 * @param temperature Temperature to convert.
 */
export const toCelsius = (temperature: number) => {
  return (temperature - 32) * (5 / 9);
};

/**
 * Converts the provided temperature to fahrenheit.
 * @param temperature Temperature to convert
 */
export const toFahrenheit = (temperature: number) => {
  return temperature * (9 / 5) + 32;
};

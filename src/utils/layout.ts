export const aspectRatio169 = (width: number) => width * (9 / 16);

export const clamp = (num: number, min: number, max: number) =>
  Math.min(max, Math.max(min, num));

export interface Params {
  inputRange: [inputStart: number, inputEnd: number];
  outputRange: [outputStart: number, outputEnd: number];
}

export const linearInterpolate = (
  input: number,
  { inputRange, outputRange }: Params,
) => {
  const [inputStart, inputEnd] = inputRange;
  const [outputStart, outputEnd] = outputRange;

  return clamp(
    outputStart +
      ((input - inputStart) / (inputEnd - inputStart)) *
        (outputEnd - outputStart),
    outputStart,
    outputEnd,
  );
};

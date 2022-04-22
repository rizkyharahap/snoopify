function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
export const milisToMinutesAndSeconds = (milis: number) => {
  const minutes = Math.floor(milis / 60000);
  const seconds = Math.round((milis % 60000) / 1000);

  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`;
};

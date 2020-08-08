export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);  // Convert to number

  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}
const data = new Date();
const [horas, minutos, segundos] = [
  data.getHours(),
  data.getMinutes(),
  data.getSeconds(),
];
const hhmmmss = [horas, minutos, segundos].join(":");

console.log(hhmmmss);

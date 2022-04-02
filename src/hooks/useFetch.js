export default function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('aaa')
    }, 2000);
  })
}
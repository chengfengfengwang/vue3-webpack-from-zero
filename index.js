// import ('./src/useSnabbdom.js')
import './src/useSnabbdom.js'
document.querySelector('#app').addEventListener('click', function() {
  import('./src/math.js').then(({addTwo}) => {
    console.log(addTwo(3))
  })
})
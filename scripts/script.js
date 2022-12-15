let frontend = document.querySelector('a:nth-of-type(1)')
frontend.addEventListener('click', jumpHandler)
frontend.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  frontend.classList.toggle('jump')
}

let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', spinHandler)
design.addEventListener('animationend', spinHandler)

function spinHandler() {
  design.classList.toggle('spin')
}

let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('click', mirrorHandler)
and.addEventListener('animationend', mirrorHandler)

function mirrorHandler() {
  and.classList.toggle('mirror')
}

let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('click', duckHandler)
development.addEventListener('animationend', duckHandler)

function duckHandler() {
  development.classList.toggle('duck')
}

let sprint5 = document.querySelector('a:nth-of-type(5)')
sprint5.addEventListener('click', flipHandler)
sprint5.addEventListener('animationend', flipHandler)

function flipHandler() {
  sprint5.classList.toggle('flip')
}

let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener('click', bigHandler)
fix.addEventListener('animationend', bigHandler)

function bigHandler() {
  fix.classList.toggle('big')
}

let the = document.querySelector('a:nth-of-type(7)')
the.addEventListener('click', smallHandler)
the.addEventListener('animationend', smallHandler)

function smallHandler() {
  the.classList.toggle('small')
}

let flow = document.querySelector('a:nth-of-type(8)')
flow.addEventListener('click', ghostHandler)
flow.addEventListener('animationend', ghostHandler)

function ghostHandler() {
  flow.classList.toggle('ghost')
}

let user = document.querySelector('a:nth-of-type(9)')
user.addEventListener('click', colorHandler)
user.addEventListener('animationend', colorHandler)

function colorHandler() {
  user.classList.toggle('color')
}

let interface = document.querySelector('a:nth-of-type(10)')
let events = document.querySelector('a:nth-of-type(11)')
let interaction = document.querySelector('a:nth-of-type(12)')
let userflow = document.querySelector('a:nth-of-type(13)')
let wireflow = document.querySelector('a:nth-of-type(14)')
let feedback = document.querySelector('a:nth-of-type(15)')
let feedforward = document.querySelector('a:nth-of-type(16)')
let labels = document.querySelector('a:nth-of-type(17)')
let states = document.querySelector('a:nth-of-type(18)')
let navigation = document.querySelector('a:nth-of-type(19)')
let code = document.querySelector('a:nth-of-type(20)')

interface.addEventListener('click', aloneHandler)
interface.addEventListener('animationend', aloneHandler)

function aloneHandler() {
  events.classList.toggle('alone')
  interaction.classList.toggle('alone')
  userflow.classList.toggle('alone')
  wireflow.classList.toggle('alone')
  feedback.classList.toggle('alone')
  feedforward.classList.toggle('alone')
  labels.classList.toggle('alone')
  states.classList.toggle('alone')
  navigation.classList.toggle('alone')
  code.classList.toggle('alone')
}

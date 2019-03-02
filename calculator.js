
function put_number() {
	var screen = document.getElementById('screen')
	var h = this.innerHTML
	screen.value = screen.value + h
}

numbutton = document.getElementsByClassName('num')
for (var i = 0; i < numbutton.length; i++) {
	numbutton[i].onclick = put_number
}

oprbutton = document.getElementsByClassName('opr')
for (var i = 0; i < oprbutton.length; i++) {
	oprbutton[i].onclick = put_operator
}

function put_operator() {
	var screen = document.getElementById('screen')
	var h = this.innerHTML
	if (parseInt(screen.value[screen.value.length-1])) {
		screen.value = screen.value + h
	} else {
		back()
		screen.value = screen.value + h
	}
}
function exec() {
	var screen = document.getElementById('screen')
	var input = screen.value
	// splited = split(input)
	// console.log(splited)
	input = eval(input)
	// console.log(input)
	screen.value = input
}

function clr() {
	var screen = document.getElementById('screen')
	var input = screen.value
	screen.value = ''

}

function back() {
	var screen = document.getElementById('screen')
	var input = screen.value
	screen.value = input.substring(0,input.length-1)
}
function change_color(){
	var c_color = document.getElementById('changecolor')
	var role_color = document.getElementById('role')
	r = Math.floor(Math.random()*256)
	g = Math.floor(Math.random()*256)
	b = Math.floor(Math.random()*256)
	aa = 'rgb('+r+','+g+','+b+')'
	c_color.style.color = aa
	role_color.style.backgroundColor = aa

	var screen = document.getElementById('screen')
	screen.value = c_color.style.color
}

function new_node(){
	var para=document.createElement("node");
	var node=document.createTextNode("I love you!");
	para.appendChild(node);
	var element=document.getElementById("role");
	element.appendChild(para);
}

function new_object(){
	var para=document.createElement("BUTTON");
	var node=document.createTextNode("I love you!");
	para.append(node);
	document.body.append(para);
	para.setAttribute("class", "bar");
}


function three_color_change(){
	div = get_rule('.bar')
	if (div.style.color == "green"){
		div.style.color = "blue" 
	}
	else if(div.style.color == "blue"){
		div.style.color = "red"
	}
	else {
		div.style.color = "green" 
	}
}

function move_right(){
	m_object = get_rule('#panda')
	rlf = parseInt(m_object.style.left)
	rlf = rlf +10
	m_object.style.left = rlf + 'px'
}
function move_left(){
	m_object = get_rule('#panda')
	rlf = parseInt(m_object.style.left)
	rlf = rlf -10
	m_object.style.left = rlf + 'px'
}
function move_down(){
	m_object = get_rule('#panda')
	rlf = parseInt(m_object.style.top)
	rlf = rlf +10
	m_object.style.top = rlf + 'px'
}
function move_up(){
	m_object = get_rule('#panda')
	rlf = parseInt(m_object.style.top)
	rlf = rlf -10
	m_object.style.top = rlf + 'px'

}
function get_rule(name){
	var ss = document.styleSheets[0]
	for (i = 0; i < ss.cssRules.length; i++){
		var rule = ss.cssRules[i]
		if( rule.selectorText == name){
			return rule;
		}
	} 	
}
var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d')
var x = canvas.width/2
var y = canvas.height/2
var dx = 7
var dy = -1
draw()

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.beginPath()
	ctx.arc(x, y, 10, 0, Math.PI*2)
	ctx.fillStyle = 'red'
	ctx.fill()
	ctx.closePath()
	if(x + dx > 480){
		dx = -dx
	}
	if(x + dx < 0){
		dx = -dx
	}
	if(y + dy > 320){
		dy = -dy
	}
	if(y + dy < 0){
		dy = -dy
	}
	x = x + dx
	y = y + dy
}
setInterval(draw, 1)


document.onkeydown = function(event){
	if(event.which == 37){
		move_left()
	}
	else if(event.which == 39){
		move_right()
	}
	else if(event.which == 40){
		move_down()
	}
	else if(event.which == 38){
		move_up()
	}
	else{
		change_color()
		three_color_change()
	}
}




document.getElementById('enter').onclick = exec
document.getElementById('clear').onclick = clr
document.getElementById('back').onclick = back
document.getElementById('changecolor').onclick = change_color 
document.getElementById('new_obj').onclick = new_object
document.getElementById('test_nodeName').onclick = test_nodeName
document.getElementById('three_color_change').onclick = three_color_change


var strrr = 'abc' + 'edf' + 'f'
console.log(strrr)


// var a = eval('1+2')
// console.log(a)

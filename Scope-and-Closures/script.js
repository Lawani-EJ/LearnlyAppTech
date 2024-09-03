var buttons = document.getElementsByTagName('button')
for (var i = 0; i < buttons.length; i++){
    function outer(){
        var k = i;
        return function(){
            buttons [k].addEventListener('click',()=>{
                console.log(buttons[k].innerText)
            })
        }
    }

    var inner = outer()
    inner();
}
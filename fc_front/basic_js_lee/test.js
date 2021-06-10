var name = 'global';
function func(){
    console.log(name);
    let name = 'local';
    console.log(name);
}
func();
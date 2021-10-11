function getItem() {
    var a = $("#opt_deliver option:selecetd").val();
}
function getItemNum() {
    var b = $("#opt_deli_num").val();
}
var sample = 'https://apis.tracker.delivery/carriers/' + a + '/tracks/' + b;
document.write(sample);
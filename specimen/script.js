console.log('script loaded');

$('#default').click(function(event) {
    // console.log('default clicked');
    $("#content").css({
        "--wdth": 200,
        "--wght": 400,
        "--XHGT": 0
    });	
}); 


$('#thincomp').click(function(event) {
    $("#content").css({
        "--wdth": 40,
        "--wght": 100,
        "--XHGT": 0
    });	
});

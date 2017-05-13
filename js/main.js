$(function () {
    $(".btn").click(function () {
        // 取得#name的值並存到變數name中
        var name1 = $("#input-1").val();
        var name2 = $("#input-2").val();
        var name3 = $("#input-3").val();
        var name4 = $("#input-4").val();
        // 設定#result的內容為變數name的值
        $("#placetext-1").text(name1);
        $("#placetext-2").text(name2);
        $("#placetext-3").text(name3);
        $("#placetext-4").text(name4);
    });
});

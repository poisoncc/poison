var i = -1
function next(){
  $.ajax({
    url: "//v3.wufazhuce.com:8000/api/hp/idlist/0?version=3.5.0&platform=android",
    type: "GET",
    success: function(idlist) {
        var test = "//v3.wufazhuce.com:8000/api/hp/detail/" + idlist.data[i] + "?version=3.5.0&platform=android"
        $.ajax({
           url: test,
           type: "GET",
            success: function(one) {
                var element = document.getElementById('myimage');
                element.src = one.data.hp_img_original_url;
                $('#content').text(one.data.hp_content);
                $('#title').text(one.data.hp_title);
            }
        });
    }
  });
  i++;
  console.log(i);
  if(i==10){
    alert("已超出可查看one的最晚日期，跳转到最早一天");
    i = 0
  };
};
function up(){
  $.ajax({
    url: "v3.wufazhuce.com:8000/api/hp/idlist/0?version=3.5.0&platform=android",
    type: "GET",
    success: function(idlist) {
        var test = "//v3.wufazhuce.com:8000/api/hp/detail/" + idlist.data[i] + "?version=3.5.0&platform=android"
        $.ajax({
           url: test,
           type: "GET",
            success: function(one) {
                var element = document.getElementById('myimage');
                element.src = one.data.hp_img_original_url;
                $('#content').text(one.data.hp_content);
                $('#title').text(one.data.hp_title);
            }
        });
    }
  });
  i--;
  console.log(i);
  if(i==-1){
    alert("已到可查看one的最早日期，跳转到最晚一天");
    i = 9
  };
};

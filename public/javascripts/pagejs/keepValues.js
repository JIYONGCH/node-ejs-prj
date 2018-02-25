var keepValues = {
    init : function () {
        var _th = this;
        _th.bind();
    },
    bind : function () {
        // ajax 작동 로직
        $('#ajax_test').unbind().bind('click',function () {
            $('#result').html('');

            $.ajax({
                url:'/test/ajax/post/values', // 주소 >> post method 경로
                dataType:'json', // 데이터형식
                type:'POST', // 전송타입
                data:
                    {
                        'msg':$('#msg').val()
                    }, // 데이터를 json 형식, 객체형식으로 전송
                success:function (result) { // 성공했을 때 함수 인자 값으로 결과 값 나옴
                    if (result['result']==true) {
                        $('#result').html(result['msg']);
                    }
                },
            });
        });
    },
    unbind : function () {

    }
}
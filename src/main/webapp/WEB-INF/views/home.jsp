<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE-11">

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <script type="text/javascript" src="./js/lib/jQuery/jquery-2.1.4.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>

    <link rel="stylesheet" href="./js/font-awesome-4.7.0/css/font-awesome.css">

    <script type="text/javascript" src="./js/common.js"></script>
    <script>
        var RightTechPath = "./";
        var useRightTechJQuery = false;
    </script>

    <link rel="stylesheet" type="text/css" href="./QCELL/css/qcell.css">
    <script type="text/javascript" src="./QCELL/qcell.js"></script>
    <link rel="stylesheet" href="./theme/flat/css/flat.css">
    <style>
        .rt-qc-button-style {
            vertical-align: middle;
            color: #ffffff;
            background-color: #13cae1;
            border-color: #13cae1;
        }

        .button_style {
            border: none;
        }
    </style>
    <script type="text/javascript">
        var qcell;
        var sampleData = [{ "name": "Hello", "message": "큐셀!", "etc": "가장 간단한 큐셀 그리드입니다." }];

        $(document).ready(function () {

            var QCELLProp = {
                id: 'qcell',
                parentid: 'sheetarea',
                data: { 'input': sampleData },
                columns: [
                    { key: 'name', title: ['컬럼1'], width: "20%" }
                    , { key: 'message', title: ['컬럼2'], width: "30%" }
                    , { key: 'etc', title: ['컬럼3'], width: "50%" }
                ]
            }
            QCELL.create(QCELLProp);
            qcell = QCELL.getInstance("qcell");
        });
    </script>
</head>
    <body>
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
				
				     <p id="message-header" class="message-header" style="font-weight:bold">
                       m-0000
                    </p>
					<hr>
                    <p id="message-header" class="message-header" style="font-weight:bold">
                        세상에서 가장 간단한 큐셀 그리드 - Hello 큐셀! 만들기
                    </p>
                    <div class="description-body-div">
                        <p id="message-body" class="message-body">
                            큐셀 그리드를 만들기 위해서는 화면에 보여질 영역, 큐셀 그리드의 객체 ID, 1개 이상의 컬럼, 데이터(빈 데이터도 데이터)만 있으면 됩니다.<br><br />
                            아래 예제 코드입니다.<br>
                            &lt;script type=&quot;text/javascript&quot;&gt;<br>
                            var qcell;<br>
                            var sampleData = [{&quot;name&quot;:&quot;Hello&quot;,&quot;message&quot;:&quot;큐셀!&quot;,&quot;etc&quot;:&quot;가장 간단한 큐셀 그리드입니다.&quot;}];  <br>
                            $(document).ready(function(){<br>
                            &nbsp;&nbsp;var QCELLProp = {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;id  : 'qcell',<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;parentid    : 'sheetarea',<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;data    : {'input': sampleData},<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;columns :  [ {key: 'name', title: ['컬럼1'], width: &quot;20%&quot;}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    , {key: 'message', title: ['컬럼2'], width: &quot;30%&quot;}<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    , {key: 'etc', title: ['컬럼3'], width: &quot;50%&quot;} ]<br>
                            &nbsp;&nbsp;&nbsp;&nbsp; }<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;  QCELL.create(QCELLProp);<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;  qcell = QCELL.getInstance(&quot;qcell&quot;);<br>
                            });<br>
                            &lt;/script&gt;<br>
                            &lt;body&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div id=&quot;sheetarea&quot; style=&quot;height: 240px; width: 100%;&quot;&gt;&lt;/div&gt;<br>
                            &lt;/body&gt;<br>
                        </p>
                    </div>
                </div>
                <div class="card-body">

                    <div class="row">
                        <div class="col-lg-12">
                            <div id="sheetarea" style="height: 100px; width: 100%;"></div>
                        </div>
                    </div>
                
                    <button type="button" onclick="viewSource()">View Source</button><br>
                    <input type="button" id="back_button" value="<< 목록으로 가기" onClick="location.href='./index.html'"></input>
                </div>

                <div class="card-footer">샘플</div>
            </div>
        </div>


    </body>
    <script>
    	alert('ff')
    </script>
</html>

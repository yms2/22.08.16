# 22.08.16

선택한 요소의 특성 속성의 값을 가져옵니다.

element.getAttribute('attributename')
var jb = document.getElementById(' xyz ').getAttribute('title');
id의 값이 xyz인 요소의 title 속성 값을 변수 jb에 저장한다.

<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
  </head>
  <body>
    <p><a id="abc" href="https://yms223.tistory.com/">Coding Note</a></p>
    <script>
      var jbHref = document.getElementById( 'abc' ).getAttribute( 'href' );
      document.write( '<p>href : ' + jbHref + '</p>' );
    </script>
  </body>
</html>
id의 값이 abc인 a요소의 href 속성의 값을 가져와서 출력한다.



childElementCount는 자식 요소의 개수를 반환하는 속성이다.
바로 아래에 있는 자식 요소의 개수만 세고, 자식 요소의 자식 요소의 수는 세지 않는다.
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript</title>
		<style>
			body {
				font-family: Consolas, monospace;
			}
		</style>
  </head>
  <body>
		<ul>
			<li>Lorem</li>
			<li>Ipsum <span>Dolor</span></li>
		</ul>
		<script>
			var jb = document.getElementsByTagName( 'ul' )[0].childElementCount;
			document.write( "<p>document.getElementsByTagName( 'ul' )[0].childElementCount : " + jb + "</p>" );
		</script>
  </body>
</html>
li 요소 안의 span요소는 세지 않는다.



setAttribute는 선택한 요소의 속성값을 정한다.
element.setAttribute('attributename' , 'attributevalue')
= attributename은 속성 이름을 attributevalue에는 속성값을 넣는다.

 document.getElementById('xyz').setAttribute('title','This is title')
= id 값이 xyz인 요소의 title 속성을 This is title로 정한다.

이미 속성값이 존재한다면 그 값을 지우고 새 값을 적용한다.

<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8">
    <title>JavaScript | .setAttribute()</title>
  </head>
  <body>
    <p><a id="abc" href="#">CODING Note</a></p>
    <script>
      document.getElementById( 'abc' ).setAttribute( 'href', 'https://yms223.tistory.com/' );
    </script>
  </body>
</html>
id 값이 abc인 요소의 href 속성값을 변경하는 예제입니다.

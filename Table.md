# Tables

## Caption & Summary

- 캡션(`<caption>`)은 테이블의 헤딩 역할과 유사하며, 대부분의 스크린 리더는 캡션의 내용을 알려준다.
- 요약(summary)은 테이블 내의 데이터 구성이 어떻게 되어 있는 지에 대한 정보를 전달해주므로 사용자가 탐색을 진행하는 데 도움을 준다.
- 캡션과 요약이 하나의 테이블에 대해 모두 제공되는 경우, 요약은 캡션에 있는 정보와 중복된 정보를 담아서는 안된다.

## Approach 1: Nesting summary inside the <caption> element

```tsx
<table>
  <caption>
    Availability of holiday accommodation <br>
    <span>Column one has the location and size of accommodation, other columns show the type and number of properties available</span>
  </caption>
</table>
```

- 개행(`<br />`)을 수행하고 `<span>` 태그를 명시적으로 작성한 이유는 스크린 리더를 사용하지 않는 사용자에게도 이것이 요약임을 표현할 수 있도록 스타일링하기 위해 명시적으로 구분한 것이다.

## Approach 2: Using aria-describedby to provide a table summary

```tsx
<p id="tblDesc">Column one has the location...</p>
<table aria-describedby="tblDesc">
  <caption>Paris: Availability of ...</caption>
</table>
```

- 요약에 대한 내용이 테이블 내에 꼭 존재할 필요는 없는 경우에 적용할 수 있는 접근 방식으로 고유한 id 속성을 가지고 있는 요소를 사용해 테이블에 대한 요약으로 사용할 수 있다.

## Approach 3: Using the `<figure>` element to mark up a table summary

```tsx
<figure>
	<figcaption>
		<strong id='paris-caption'>...</strong>
		<br />
		<span id='paris-summary'>...</span>
	</figcaption>
	<table aria-labelledby='paris-caption' aria-describedby='paris-summary'>
		...
	</table>
</figure>
```

- `<table>`을 `<figure>` 요소로 래핑한 다음 `<figcaption>` 요소를 이용해 캡션과 요약 텍스트를 포함하는 접근 방식이다.
- `<figcaption>` 요소 내에 작성한 캡션 부분은 `aria-labelledby`를 이용, 요약 부분은 `aria-describedby`를 이용하여 테이블에 연결하는 것이 가능하다.

## Tips and Tricks

### Data Separation

- 스크린 리더의 입장에서 각 데이터 간의 관계를 파악하는 것이 거의 불가능해지기 때문에 틀린 예의 경우처럼 모든 데이터를 하나의 열에 모으는 형태로 사용하지 말자.

- 명시적으로 행을 분리하는 대신 행처럼 표현하기 위해 줄바꿈(`<br />`)을 사용하지 말아야 한다. 위의 예처럼 데이터가 더이상 올바르게 정렬되지 않을 수 있을 뿐더러 데이터 간의 관계를 파악할 수가 없다.

### Zebra tabels

- 짝수 행과 홀수 행을 스타일을 다르게 지정하면 읽기에 어려움이 있거나 텍스트를 확대하여 사용하는 사용자에게 도움이 되는 시각적 가이드 역할을 할 수 있다.
- 사용자가 현재 자신의 위치를 파악할 수 있도록 `mouseover` 혹은 `focus` 시에 특정 셀(그리고 행/열)을 강조표시하는 것이 권장된다.
- 텍스트와 배경 사이의 **명암비(contrast ratio)가 적절하게 설정**되어 구분이 용이한지 확인하자.

### Do not use tables for layout

- 테이블은 레이아웃을 위한 목적으로 사용되어서는 안된다.
- 만약 레이아웃 용도로 사용된 테이블이 이미 존재한다면 `<th>` 또는 `<caption>` 등과 같은 요소와 함께 사용하기 보다는 `<table>` 요소에 `role="presentation"`을 부여해 시각적 용도임을 분명히 하자.

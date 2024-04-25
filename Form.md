# Form

## Labeling Controls

- Form을 컨트롤하는 모든 부분을 레이블(<label>)로 식별 할 것
  - 가능하면 최대한 Form의 엘리먼트에 `<label>`엘리먼트를 사용하여 명시적으로 텍스트를 Form과 연결하기

## Hiding Label Text

Form 엘리먼트에 레이블을 부여하는게 목적을 이해하는데 도움이 되는 것은 사실이나,<br/>
시각적으로 그 의미가 충분히 전달이 되는 경우도 존재.<br/>
따라서 레이블을 시각적으로 숨기면서 접근성을 높이는 방법이 존재한다.

### CSS를 활용하여 시각적으로 보이지 않게 하는 방법

```
<label for="css-form-a11y" class="visuallyhidden">
  css-form-a11y
</label>
```

### wai-aria

- `title` 속성과는 달리 시각적으로 보이지 않기에 레이블이 보이지 않아도 의미가 명확한 경우에 사용
- 내용의 주변에 있는 엘리먼트들로 충분히 설명이 가능해야 함

```
<input type="text" name="aria-form-a11y" aria-label="aria-form-a11y" />
<button type="submit">
  aria-form-a11y
</button>
```

```
<input type="text" name="aria-form-a11y" aria-labelledby="aria-form-a11y" />
<button id="aria-form-a11y" type="submit">
  aria-form-a11y
</button>
```

### title

- 해당 방법은 대체적으로 추천되지 않음
  - title 속성을 레이블의 대체로 인식을 하지 못하는 경우가 있음
  - title 속성은 중요하지 않은 정보를 전달하는 용도이기 때문
  - hover시 툴팁으로 보여진다

스크린 리더 및 보조 기술 같은 경우에는 웹 브라우저와 동일하게 `display: none` 혹은 `visibility: hidden` 가 설정되어 있는 경우 없는 것으로 인식을 한다.<br/>
그래서, CSS로 레이블을 스크린 리더 및 보조 기술이 읽을 수 있지만 유저에게 시각적으로 보이고 싶은 경우 아래 스타일을 사용.

```
.hidden {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
```

### Implicit Association

Form의 엘리먼트를 명시적으로 연결이 어려운 상황도 간혹 발생

- Form의 엘리먼트의 ID가 외부 스크립트로 동적으로 생성이 되는 경우
- ID 자체를 아예 알 수 없는 경우

위와 같은 경우에는 레이블 엘리먼트를 **컨테이너로 활용**하여 연결이 가능.

### Provide Instructions

- 레이블을 활용하여 Form 내부 엘리먼트를 레이블 밖 다른 엘리먼트를 같이 활용할 수 있다.
  - 이전 버전과의 호환성으로 인해 `for`과 `id` 속성 둘 다 사용

```
<label id="expLabel" for="expire">Expiration date:</label>
<span>
	<input type="text" name="expire" id="expire" aria-labelledby="expLabel expDesc">
	<span id="expDesc">MM/YYYY</span>
</span>
```

- **placeholder는 레이블의 대체로 사용 할 수 없다!**

## Validating Input

`유저의 실수를 방지 할 수 있도록 인풋에 대한 validation 처리하기`

**필수 항목**

- `required` 속성 활용
- `aria-required=”true”` 활용
  - required 속성이 부여가 되면 자동으로 aria-required 속성이 true 값이 부여가 되긴 함

**그 외 항목**

- `type` 속성 활용
- `pattern` 속성으로 인풋에 대한 패턴 정의 가능 (i.e. Regex)

## Multi-page Forms

`긴 Form 같은 경우는 여러 개의 작은 단위의 Form들로 나누기`

**Basic Principles**

- Form에 대한 전체적인 설명을 매 페이지마다 반복
- 논리적인 단위로 Form을 나누기 (i.e. 장바구니, 배송정보, 결제 등의 단위로 나누기)
- 선택 항목에 대해 건너뛰기 할 수 있는 부분을 쉽게 보이게 하기
- 최대한 시간 제한 설정은 피하기

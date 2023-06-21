# 웹 접근성 개발 가이드

## No ARIA is better than Bad ARIA

ARIA는 비시각적 경험의 렌더링을 제어한다. 잘못된 ARIA는 시각적 경험을 잘못 표현하여 해당하는 비시각적 경험에 잠재적으로 파괴적인 영향을 미친다

### **_Principle 1: A role is a promise_**

각 ARIA 역할에 대한 예상 동작을 정의하고 구현함으로써 사용자가 예측 가능하고 접근성 있는 방식으로 웹 콘텐츠와 상호 작용할 수 있도록 보장하는 것이 중요
이러한 가이드를 통해 개발자는 접근성 있는 웹 콘텐츠를 만들고 모든 사용자가 예측 가능하고 접근성 있는 사용자 경험을 제공
원래의 의미 체계나 내용을 덮거나 재정의

### **_Principle 2: ARIA Can Both Cloak and Enhance, Creating Both Power and Danger_**

ARIA는 웹 콘텐츠의 접근성을 개선하는 데 사용되는 기술입니다. 그러나 ARIA는 적절하게 사용하지 않으면 웹 콘텐츠의 접근성을 해칠 수 있다

ARIA는 assistive technology를 통해 HTML 요소의 의미와 목적에 대해 이해할 수 있도록 정보를 제공할 수 있다

추가 제공한 정보를 통해 사용자가 웹 콘텐츠를 더 잘 이해할 수 있도록 콘텐츠에 접근성 정보를 제공할 수 있다

ARIA는 콘텐츠를 보완하여 사용자가 더 잘 이해할 수 있도록 도와줄 수 도 있지만 오용하면 기존의 의미나 콘텐츠를 덮거나 바꾸는 것과 같이 콘텐츠를 가릴 수도 있다. 이로 인해 사용자가 웹 콘텐츠를 이해하는 데 어려움을 겪을 수 있다

따라서 ARIA를 사용할 때는 적재적소에 사용해야한다

## 웹 접근성 준수를 위한 개발 가이드

1. 레이블을 모든 양식 컨트롤과 연결

```tsx
<label for={connection}>
  <input id={connection} />
</label>
```

1. 이미지에 대한 대체 텍스트 포함

```tsx
<img alt='' />
```

1. 페이지 언어 및 언어 변경 사항 식별

```tsx
<html lang='ko'></html>
```

1. 마크업을 사용하여 의미와 구조 전달

적절한 시맨틱 태그를 사용할 것

`<nav>, <aside>, <table>, <date> ...`

WAI-ARIA를 통해 추가 의미를 제공할 수 있다

1. 사용자가 실수를 피하고 수정할 수 있도록 지원

사용자가 사이트에서 양식을 작성할 수 있도록 명확한 지침, 오류 메시지 및 알림을 제공

- 사용자가 문제가 있는 위치를 찾도록 지원
- 구체적이고 이해하기 쉬운 설명 제공
- 수정 제안

1. 코드 순서에 읽기 순서 반영

코드의 순서가 스크린에 제시된 정보의 논리적 순서와 일치해야한다

1. 사용자의 기술에 적응하는 코드 작성

반응형 디자인을 사용하여 모바일 장치 및 태블릿과 같은 다양한 확대/축소 상태 및 뷰포트 크기에 맞게 디스플레이를 조정

1. 비표준 대화형 요소에 의미 제공

WAI-ARIA를 사용하여 아코디언 및 맞춤형 버튼과 같은 맞춤형 위젯의 기능 및 상태에 대한 정보를 제공

1. 모든 대화형 요소가 키보드로 액세스할 수 있는지 확인

인터랙티브한 요소를 개발할 때는 키보드 접근성을 고려해야 한다
이를 위해, 포커스를 받지 않는 요소인 <div> 나 <span> 과 같은 요소가 상호작용에 사용될 때, `tabindex="0"`를 사용하면 된다
또는 자바스크립트를 사용하여 키보드 이벤트를 캡처하고 대응할 수 있다
이를 통해 키보드로 웹의 인터랙티브한 요소들을 사용할 수 있다

1. 가능한 CAPTCHA의 사용을 피할것

웹 접근성 관점에서 CAPTCHA는 시각, 청각, 운동 장애 등 다양한 장애를 가진 사용자들에게 접근을 어렵게 만들 수 있기 때문에 사용을 지양해야한다

CAPTCHA은 자연어 질문, 이메일 인증, 로그인으로 대체할 수 있다. 이러한 대안들은 다양한 사용자들이 이용하기 쉬우며, 보안적인 측면에서도 충분한 수준을 제공할 수 있다

CAPTCHA를 반드시 사용해야 하는 경우에는 웹 접근성을 고려하여, 보조기기와 호환 가능한 CAPTCHA 기술을 사용하는 것이 좋다
이를 통해 모든 사용자들이 웹사이트를 쉽게 이용할 수 있도록 돕습니다.

**_reference_**

- [https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/)
- [https://www.w3.org/WAI/tips/developing/#identify-page-language-and-language-changes](https://www.w3.org/WAI/tips/developing/#identify-page-language-and-language-changes)

# WAI-AREA

- WAI-ARIA는 웹 접근성 기술로, 웹 페이지에서 사용자 인터페이스 구성 요소의 역할, 상태, 속성 등을 더욱 명확하게 표시할 수 있도록 돕는 기술이다
- 다양한 역할, 상태, 속성 등을 정의하여 HTML 요소를 보다 정밀하게 정의하여 시각, 청각, 지각 등의 장애를 가진 사용자들도 쉽게 웹 페이지를 이용할 수 있도록 돕는다

```jsx
<div role='menu' aria-expanded='false' aria-haspopup='true'>
  <button>Menu</button>
  <ul role='menuitem'>
    <li>
      <a href='#'>Item 1</a>
    </li>
    <li>
      <a href='#'>Item 2</a>
    </li>
    <li>
      <a href='#'>Item 3</a>
    </li>
  </ul>
</div>
```

`role`을 통해 해당 시멘틱 태그의 역할을 설명. 위의 코드를 예시로 부모 컨테이너가 메뉴의 역할을 하며, 아래 <ul>의 `role`을 통해 메뉴 아이템이 존재할 것을 알 수 있다

추가로 `aria-expanded="false"`와 `aria-haspopup="true”` 를 통해 해당 요소가 접혀진 상태에서 더 많은 항목이 있는 메뉴를 펼치기 위한 버튼 역할을 한다는 것을 알 수 있다

### 접근성을 높이는 대표적인 WAI-ARIA 요소

- role
- tabindex
- aria-label
- aria-describedby
- aria-expanded

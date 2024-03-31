# Button

- 버튼은 `form submit` / `dialog open` / `canceling an action` / `perform a delete operation` 등과 같은 **액션 또는 이벤트를 트리거할 수 있게 해주는 위젯**
- 일반적인 버튼 위젯 외에도 WAI-ARIA에서는 2가지 다른 타입의 버튼을 지원한다.
  - **Toggle Button**
    - `OFF` / `ON` 두 가지 상태를 갖는 버튼
    - 특정 버튼이 토글 버튼임을 보조 기술에 알리려면 `aria-pressed` 속성을 지정하면 된다.
    - `aria-pressed`를 사용할 때 주의해야 할 점은 상태가 변경될 때 토글 버튼의 레이블이 변경되지 않도록 해주어야 하는 것이다.
    - 오디오 플레이어에서 Mute 버튼이 있다고 했을 때 해당 버튼의 `aria-pressed=true`인 경우 레이블 역시 Mute로 유지되어야 스크린 리더 입장에서 **“Mute toggle button pressed”**의 형태로 읽어주기 때문이다.
    - 만약 디자인적으로 레이블이 Mute → Unmute로 변경되어야 한다면 `aria-pressed` 속성을 지정할 필요는 없다.
  - **Menu Button**
    - Menu Button Pattern 참고
    - `aria-haspopup` 속성이 `menu` 또는 `true`로 설정된 버튼의 경우 스크린 리더에 의해 메뉴 버튼으로 읽히게 된다.

버튼이 클릭되었을 때 수행되는 액션은 링크와는 분명히 다르므로 **위젯의 모양과 역할이 제공하는 기능과 일치하도록 하는 것이 매우 중요**하다. 하지만 그럼에도 불구하고 때로 시각적으로는 링크의 형태를 갖지만 버튼의 동작을 수행해야 하는 경우가 존재한다. 그러한 경우에는 `role=”button”`을 부여하면 보조 기술 사용자 입장에서 해당 요소의 기능을 이해하는 데 도움이 된다.

## Keyboard

> 버튼에 포커스가 위치했을 때 수행되어야 하는 동작

- `Space` / `Enter` → 버튼에 부여되어 있는 액션을 실행(활성화)한다.
- 이때 해당 버튼이 수행하는 액션의 타입에 따라 포커스가 설정되어야 하는 조건이 달라질 수 있다.
  - 버튼이 Dialog를 여는 동작을 수행한다면 해당 Dialog 내부로 포커스가 이동해야 한다.
  - 특정 버튼을 클릭하여 Dialog를 닫는 경우 기본적으로 포커스는 Dialog를 열도록 하였던 버튼으로 이동시켜주어야 한다.

## WAI-ARIA

- `<button>`은 기본적으로 `role=”button”`이 부여되어 있다.
- 버튼 내의 텍스트 콘텐츠가 접근 가능한 레이블로 간주되지만, `aria-labelledby` 또는 `aria-label`을 이용해 부여하는 것도 가능하다.
- 버튼의 기능에 대한 설명이 존재하는 경우 `aria-describedby`를 이용해 연결할 수 있다.
- 버튼이 수행해야 하는 액션이 사용 불가능한 경우에는 `aria-disabled`를 `true`로 설정해주어야 한다.
- 버튼이 토글 버튼인 경우 `aria-pressed`를 이용해 ON(true) / OFF(false) 상태를 명시해줄 수 있다.

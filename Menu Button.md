# Menu Button

메뉴 버튼은 문자 그대로 메뉴를 여는 버튼을 의미한다.<br/>
버튼이 활성화되면 메뉴가 표시된다는 것을 나타내기 위해 &darr;가 함께 배치된 버튼 스타일이 많다.

## WAI-ARIA

- role=`button`
  - role=`button`이 부여된 요소에는 `aria-haspopup`이 `menu` 또는 `true`로 설정되어야 한다.
- 메뉴가 열리면 `aria-expanded`가 true로 설정되어야 한다.
- 메뉴 항목들을 포함하고 있는 컨테이너 요소에는 `role=”menu”`
- (선택) `aria-controls`를 통해 제어하는 요소의 ID를 지정할 수 있다.

### aria-descendant

**role**: `combobox`, `grid`, `listbox`, `menu`, `menubar`, `radiogroup`, `tablist`, `tree`, `treegrid`

- 이 속성은 일반적으로 **컨테이너 요소에 배치**되며, 이를 통해 스크린 리더는 활성화되어야 하는 요소를 식별할 수 있게 된다.
- 실제 DOM 포커스를 이동하지는 않으며, 컨트롤한 요소에 포커스가 유지되고, 컨트롤 요소의 aria-activedescendant 속성이 내부적으로 포커스 된 요소의 ID로 설정될 뿐이다.
- 실제 DOM 포커스가 적용되지는 않았고 focus 이벤트가 발생하지 않았기 때문에 `:focus`로 스타일을 적용할 수 없으며, onActiveDescendantChanged 콜백을 제공하여 활성화된 자손이 변경될 때 필요한 스타일이나 기타 로직을 처리하게끔 한다.
- 이 속성이 제대로 동작하도록 하려면 네 가지 작업을 수행해주어야 한다.
  - 조상 요소(컨테이너)에 aria-activedescendant를 추가해주어야 하는데 이 요소는 복합위젯 (composite widget)일 수 있다. 만약 요소가 복합 위젯이 아닌 경우 textbox, group 또는 application role이 부여되어 있어야 한다.
  - 이 조상 요소를 focusable한 요소로 만들어주어야 한다.
  - 조상 요소의 자손 요소 중 활성화 될 요소의 id를 조상 요소의 aria-activedescendant에 할당해주어야 한다.
  - 사용자가 시각적으로 차이를 느낄 수 있도록 활성화 된 항목에 스타일을 지정해 주어야 한다.

## DOM Focus

- 키보드 입력을 사용하여 포커스를 이동하는 경우 포커스를 받을 요소에서 직접 `.focus()`를 호출한다.
- 그 결과 `document.activeElement`가 `.focus()`를 호출한 요소로 설정되고, `:focus` 및 :`focus-within`을 통해 필요한 스타일을 적용하게 된다.

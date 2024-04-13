## Dialog (Modal) Pattern

- Dialog는 메인 화면 (혹은 또 다른 dialog) 위에 띄워지는 새로운 창을 의미
- Dialog 뒤에 있는 화면은 비활성화 되는 방식
  - 유저가 추가적인 인터렉션이 불가
  - 시각적으로 흐림 처리가 되는 경우가 많음
  - 그리고 활성 dialog 외의 영역을 클릭 시 dialog를 끌 수 있는 기능이 적용
- Dialog 내의 Tab 인터렉션은 포커스를 dialog 외부로 움직이게 하지 않음 **_(focus-trap)_**

### 기본 원리 및 키보드 동작 방식

- Dialog가 열리면 포커스가 dialog 내부에 있는 엘리먼트로 이동
- `최초 포커스 위치`
  - 포커스가 가능한 가장 첫 엘리먼트에 포커스
- `종료 시 포커스 위치`
  - 논리적 흐름에 맞는 곳에 포커스 이동
- Keyboard: **TAB**
  - 포커스를 dialog 내 **다음** tabbable (탭이 가능한) 엘리먼트로 이동
  - 포커스가 마지막 탭이 가능한 엘리먼트에 있다면 → 첫번째 탭이 가능한 엘리먼트로 이동
- Keyboard: **SHIFT + TAB**
  - 포커스를 dialog 내 **이전** tabbable (탭이 가능한) 엘리먼트로 이동
  - 포커스가 첫번째 탭이 가능한 엘리먼트에 있다면 → 탭이 가능한 마지막 엘리먼트로 이동
- Keyboard: **ESCAPE (ESC)**
  - Dialog를 끔

### WAI-ARIA 역할 & 속성

- Dialog 컨테이너의 속성 값들
  - `role=”dialog”`
  - `aria-modal=”true”`
  - `aria-label` OR `aria-labelledby`
- Dialog를 동작하게 하거나 일부분인 경우에는 컨테이너 안에 종속된 자식으로 선언해야 함

## Alert Dialog Pattern

- Alert Dialog는 유저의 워크플로우 상에서 **방해**를 하여 중요한 메세지를 전달하고 응답을 받는 것
  - i.e. 에러 메세지 팝업 혹은 확인 팝업
- `alertdialog` role를 통해 보조기술 및 브라우저에서 alert dialog를 다른 dialog 사이에서 인식 가능하게 해줌
- 기본적으로 dialog의 키보드 작동 방식과 동일하게 동작

### Difference between Alert Pattern

- alert 같은 경우는 유저에게 간단하지만 중요한 메시지를 전달하면서 유저의 태스크를 **방해하지 않는 것**
- alert는 기본적으로 유저를 방해하지 않는게 목표이기에 키보드 포커스에 영향을 주지 않으나 alert dialog 같은 경우는 방해가 목적이기 때문에 키보드의 포커스가 dialog로 이동함

### WAI-ARIA 역할 & 속성

- 컨테이너의 속성 값들
  - `role=”alertdialog”`
  - `aria-modal=”true”`
  - `aria-label` OR `aria-labelledby`
- Dialog를 동작하게 하거나 일부분인 경우에는 컨테이너 안에 종속된 자식으로 선언해야 함

### 주요 UI 컴포넌트 분석

- **Headless UI**

  - 기본적인 접근성에 대한 부분은 지켜주고 있음
  - Title, Description에 각각 aria-lablledby, aria-describedby가 붙게 됨
    - custom하게 off 처리는 불가
  - `initialFocus`를 통해서 첫 포커스가 되는 컴포넌트 설정이 가능함

- **Chakra UI**

  - 위 예시 보다 더 접근성 지킴이
  - inert (비활성화) 제어도 가능함
  - `initialFocusRef`, `finalFocusRef`를 통해 첫 포커스와 종료 후의 포커스까지도 설정 가능

- **Ant Design**
  - 기본적인 탭 인터렉션은 적용이 되어 있음
  - `autoFocusButton` 를 통해서 OK, CLOSE 버튼 두개 중 하나를 선택하거나 최초 포커스를 끌 수도 있음
  - 종료 시 포커스가 트리거 한 버튼으로 이동하는 것으로 고정
    - `focusTriggerAfterClose` 속성이 디폴트로 `true`임
  - ESC 버튼에 대한 인터렉션 제어 가능
    - `keyboard` 속성이 디폴트로 `true`임

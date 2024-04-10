# Alert

- Alert Dialog는 유저의 워크플로우 상에서 **방해**를 하여 중요한 메세지를 전달하고 응답을 받는 것
  - i.e. 에러 메세지 팝업 혹은 확인 팝업
- `alertdialog` role를 통해 보조기술 및 브라우저에서 alert dialog를 다른 dialog 사이에서 인식 가능하게 해줌
- 기본적으로 dialog의 키보드 작동 방식과 동일하게 동작
- alert는 기본적으로 유저를 방해하지 않는게 목표이기에 키보드 포커스에 영향을 주지 않으나 alert dialog 같은 경우는 방해가 목적이기 때문에 키보드의 포커스가 dialog로 이동함

## WAI-ARIA 역할

- 컨테이너의 속성 값들
  - `role=”alertdialog”`
  - `aria-modal=”true”`
  - `aria-label` OR `aria-labelledby`
- Dialog를 동작하게 하거나 일부분인 경우에는 컨테이너 안에 종속된 자식으로 선언해야 함

## Listbox Pattern

- `Listbox`란 다수의 옵션이 있는 리스트에 유저가 한개 또는 한개 이상을 선택 할 수 있는 위젯
  - single-select listbox
  - multi-select listbox
- Listbox의 각각의 옵션을 스크린 리더는 flat한 string으로 인식하기에 시멘틱한 엘리먼트 (i.e. heading)가 있어도 스크린 리더는 인식 못함

`**즉**, **스크린 리더가 Listbox를 이해하는 관점은 일반적인 interactive elements가 있는 리스트와는 다름**`

- Grid Pattern보다는 더 간략하고 심플한 버전.
  - 링크, 버튼, 체크박스 등의 유저 인터렉션이 있는 엘리먼트를 담은 리스트를 구현하려면 Grid Pattern을 사용

### 참고 사항

- Listbox의 옵션 name(string)은 되도록이면 짧게
  - 스크린 리더는 옵션의 이름의 전체를 다 읽기 때문에 name이 길면 이해도가 떨어 질 수 있음
    - 중간에 다른 행동으로 방해 되는 경우 긴 name을 다시 전체를 다 읽어야 하기에 불편성 증가
- 같은 단어로 시작하는 옵션들이 많은 경우 여러 Listbox로 나누는게 좋음
  - 스크린 리더 측면에서 앞 단어가 같은 옵션이 많은 경우 옵션의 뒷 단어가 다른 부분을 중점으로 유저가 행동을 하기에 사용성 저하
- `aria-activedescendant*`
  - aria-activedescendant의 값이 부여가 되어있으면 DOM 포커스가 해당 컨테이너에 머물러 있음
  - 스크린 리더에게 어떤 엘리먼트가 키보드 포커스를 받고 있는지 알려주는 용도

### Keyboard Interaction

`필요 기능 (수직 리스트 기준)`

- **ListBox Focus가 될 때**
  - Single Select Listbox
    - 옵션이 선택이 안 되었을 때에는 첫번째 옵션 포커스
    - 옵션이 선택 된 상태에서 Listbox가 포커스가 되면 선택된 옵션에 포커스가 맞춰짐
  - Multi Select Listbox
    - 옵션이 선택이 안 되었을 때에는 첫번째 옵션 포커스
    - 여러 옵션이 선택 되었을 경우 (혹은 한개)에서 Listbox가 포커스 되면 선택된 옵션에 **첫번째 옵션**으로 포커스가 맞춰짐
- `Down Arrow` → 포커스를 다음 옵션으로 이동
  - `선택 기능` — `Home` → 가장 첫번째 옵션으로 이동 (최소 5개 옵션이 있을 때 권장)
- `Up Arrow` - 포커스를 이전 옵션으로 이동
  - `선택 기능` — `End` → 가장 마지막 옵션으로 이동 (최소 5개 옵션이 있을 때 권장)

`권장 기능`

- **문자 타이핑 대응**
  - 한 글자 타이핑 → 현재 기준 다음 옵션 중 첫 글자가 같은 가장 첫번째 옵션을 포커스
  - 여러 글자를 빠르게 타이핑 → 현재 기준 다음 옵션 중 앞 글자들이 같은 가장 첫번째 옵션을 포커스

```
const ListItem = ({ item }) => {
	return (
		<li
			id={`list-item-${item.id}`}
			role="option"
			aria-selected={...} // Focus 된 엘리먼트는 true
		>{item.content}</li>
	)
}

const ListBox = () => {
	const [list, setList] = useState([...])

	return (
		<ul
			id="list"
			aria-label="List Box"
			tabindex="0"
			role="listbox"
			aria-activedescendant={...} // Focus 된 엘리먼트의 li의 ID
		>
			{list.map(item => <ListItem {...item} />}
		</ul>
	)
}
```

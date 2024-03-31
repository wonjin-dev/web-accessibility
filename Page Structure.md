# 페이지 구조 웹 접근성 가이드

페이지의 구조가 명확하면 효율적인 네비게이션 및 가공을 진행할 수 있다.

- 장애가 있는 사용자들이 페이지 내에서 컨텐츠를 보다 쉽게 찾을 수 있다.
- 스크린 리더로 메인 컨텐츠를 바로 확인 할 수 있다.
- 키보드를 사용하는 유저들이 섹션들을 보다 효율적으로 탐색할 수 있다
- 검색 엔진에서 페이지의 컨텐츠 인덱싱하는데 도움이 됩니다

## Page Regions

웹 페이지 및 응용 프로그램의 다른 영역을 웹 브라우저 및 보조기술로 식별 할 수 있게 하는 마크업

> `header`, `footer`, `content`, `nav`, `aside`

### Page Header

aside, article, main, nav, section 등 **_엘리먼트 자식으로 header 엘리먼트를 사용하는 경우 기본적으로 부여가 되는 WAI-ARIA banner role을 갖지 않는다_**.

<br/>

### Page Footer

`<header>` 엘리먼트 처럼 만약 `<footer>` 엘리먼트가 article, section 등 다른 **_엘리먼트의 자식 요소로 들어가는 경우 기본적으로 부여 되는 WAI-ARIA contentinfo role을 갖지 않는다_**.

<br/>

### Navigation

HTML5의 `<nav>` 엘리먼트를 사용. 웹 페이지 내에는 여러 네비게이션 메뉴가 존재 할 수도 있기 때문에 label을 사용하여 각각의 네비게이션 메뉴를 식별해야 한다.

<Br/>

## Headings

> `Heading (제목)은 페이지 컨텐츠 구성을 나타내고,` > `웹 브라우저, 플러그인 및 보조기술은 이를 사용하여 페이지 내 탐색을 제공`

### Heading Ranks

- 헤딩의 랭크 기준으로 나열 및 사용
  - `h1` → 가장 중요한 헤딩
  - `h6` → 가장 덜 중요한 헤딩
- 헤딩의 랭크를 무시하거나 건너 뛰는 것은 혼란을 야기하기에 최대한 피해야 한다.
- 고정된 페이지 영역 (예를 들어, 사이드바)는 페이지 간 통일성을 맞추기 위해 헤딩 랭크가 컨텐츠 영역 내에 있는 랭크들의 기준으로 변하면 안된다.
- 헤딩은 페이지 영역을 레이블링 하기에도 좋다.
- aria-labelledby를 사용하여 페이지 영역과 헤딩을 연결할 수 있다.
- 헤딩이 표시가 되면 모든 사용자가 영역을 쉽게 식별 가능하다.

<br/>

### Articles

- `<article>` 엘리먼트는 웹 페이지에서 완전하거나 독립적인 구성을 나타내고 싶을 때 사용

<br/>

### Sections

- `<section>` 엘리먼트는 웹 페이지 또는 아티클의 일반적인 영역을 표시 할 때 사용
- 컨텐츠의 주제별 그룹화에 사용

<br/>

### Paragraphs

- `<p>` 엘리먼트는 텍스트 단락을 표시하기 위해 사용
- 텍스트 단락들의 일관된 스타일이 텍스트의 가독성을 향상시킴

<br/>

### Lists

- 목적에 따라 다양한 리스트 타입을 사용
  - Unordered List → 아이템의 순서가 중요하지 않을 때 사용.
  - Ordered List → 순차적 정보이며 브라우저에 의해 자동으로 열거
  - Nested List → 순차적 정보 + 비순차적 정보를 포함
  - Description List → 프로그래밍적으로 연결된 관련 용어및 설명 그룹

<br/>

### Quotes

- 출처를 표현하기 위해 사용 되는 엘리먼트
  - `<blockquote>` → 길고 복잡한 인용구
  - `<q>` → 짧은 인용구 (다른 문장에 포함이 된 경우)

<br/>

### Figures

- Figure은 페이지의 기본 내용에서 분리된 추가 정보가 있는 블록
- 때로는 본문을 참조하기도 하고 리스트, 이미지, 테이블 등을 포함시키고 있음

<br/>

### Image

- 유저에게 시각적 참여를 창출하기 위해 사용
- 읽기 장애가 있는 사람를 위해 텍스트를 시각적으로 설명하기 위해서도 사용
- 적절한 대체 텍스트 사용은 필수

<br/>

### Tables

- 데이터 테이블은 데이터를 표시하는 유용한 방법
- 적절한 테이블 레이아웃은 사람들이 그리드를 보지 않고 의미 있는 데이터 관계 이해 가능
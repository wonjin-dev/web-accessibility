interface FeedItem {
  id: number
  name: string
  desc: string
  author: string
}

const Feed = () => {
  const [feedList, setFeedList] = useState<FeedItem[]>([])

	return (
    // 피드 아티클을 담고 있는 엘리먼트는 role="feed" 속성을 가져야 한다.
    // - 새로운 피드 아티클을 들고 오는 경우 aria-busy를 동적으로 true로 변경해야 한다
		<div role="feed" aria-busy="false">
			{feedList.map((item, i) => (
				<FeedItem item={item} index={i} feedTotalLength={feedList.length} />
			)}
		</div>
	)
}

interface FeedItemProps {
  item: FeedItem
  index: number
  feedTotalLength: number
}

const FeedItem = ({ item, index, feedTotalLength }: FeedItemProps) => {
	return (
    // 피드 아이템은 role="article" 속성을 가져야 한다 -> 여기서 article 엘리먼트 사용
		<article
      // aria-posinset 속성은 피드 아이템의 순서를 나타낸다.
      aria-posinset={index + 1}
      // aria-setsize 속성은 피드 아이템의 총 개수를 나타낸다. -> 총 사이즈를 알 수 없는 경우 "-1"로 설정
      // - 피드의 총 개수 혹은 로드가 된 피드의 총 개수 (유저에게 더 중요한 개수로 설정)
      aria-setsize={feedTotalLength}
      // aria-labelledby 속성은 피드 아이템의 제목을 나타낸다.
			aria-labelledby={`feed-name-${item.id}`}
      // aria-describedby 속성은 피드 아이템의 설명과 작성자와 같은 설명을 나타낸다.
			aria-describedby={`feed-description-${item.id} feed-author-${item.id}`}
			// article 엘리먼트가 포커스가 가능하게 하고 Tab에 반응하도록 설정
			tabindex="0"
		>
			<div id={`feed-name-${item.id}`}>
				{item.name}
			</div>
			<div>
				<div id={`feed-description-${item.id}`}>{item.desc}</div>
				<div id={`feed-author-${item.id}`}>{item.author}</div>
			</div>
		</article>
	)
}
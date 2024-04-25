import { createContext, useMemo, useCallback, useRef, useState } from 'react';
import type { ReactNode, PropsWithChildren, KeyboardEvent } from 'react';

interface TabsContextShape {
	selectedTab: string | null;
	setSelectedTab: (tab: string) => void;
	tabsPrefix: string;
}

const TabsContext = createContext<TabsContextShape>({
	tabsPrefix: '',
	selectedTab: null,
	setSelectedTab: (tab: string) => {
		throw new Error('Should be used with TabsContext.Provider');
	},
});

const Tabs = ({
	children,
	defaultSelectedTab,
}: PropsWithChildren<{
	defaultSelectedTab: string;
}>) => {
	const [selectedTab, setSelectedTab] = useState(defaultSelectedTab);

	const value = useMemo(
		() => ({
			selectedTab,
			setSelectedTab,
		}),
		[selectedTab, setSelectedTab]
	);

	return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};

export const TabList = ({
	children,
	label,
}: PropsWithChildren<{
	label: string;
}>) => {
	const listRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		if (!listRef.current) return;

		const $tabs = [
			...listRef.current.querySelectorAll('[role="tab"]:not([disabled])'),
		];

		const index = $tabs.indexOf(document.activeElement as HTMLElement);
		if (index < 0) return;

		switch (event.key) {
			case 'ArrowUp':
			case 'ArrowLeft': {
				const next = (index - 1 + $tabs.length) % $tabs.length;
				$tabs[next]?.focus();
				break;
			}

			case 'ArrowDown':
			case 'ArrowRight': {
				const next = (index + 1 + $tabs.length) % $tabs.length;
				$tabs[next]?.focus();
				break;
			}
		}
	}, []);

	return (
		<div
			ref={listRef}
			role='tablist'
			aria-label={label}
			onKeyDown={handleKeyDown}
		>
			{children}
		</div>
	);
};

export const Tab = ({
	children,
	tab,
}: PropsWithChildren<{
	tab: string;
}>) => {
	const { selectedTab, setSelectedTab, tabsPrefix } = useContext(TabsContext);

	return (
		<button
			type='button'
			role='tab'
			aria-selected={selectedTab === tab}
			aria-controls={`tab-${tabsPrefix}-tabpanel-${tab}`}
			onClick={() => setSelectedTab(tab)}
			tabIndex={selectedTab === tab ? 0 : -1}
		>
			{children}
		</button>
	);
};

export const TabPanel = ({
	children,
	tab,
}: PropsWithChildren<{
	tab: string;
}>) => {
	const { selectedTab, tabsPrefix } = useContext(TabsContext);

	if (selectedTab !== tab) return null;

	return (
		<div role='tabpanel' tabIndex='0' id={`tab-${tabsPrefix}-tabpanel-${tab}`}>
			{children}
		</div>
	);
};

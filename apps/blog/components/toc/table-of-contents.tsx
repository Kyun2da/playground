'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        .filter(element => element.id)
        .map(element => ({
          id: element.id,
          text: element.textContent || '',
          level: Number(element.tagName.charAt(1)),
        }));

      setHeadings(elements);

      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: '-20% 0% -35% 0%',
      });

      elements.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      // 스크롤 이벤트 핸들러 추가
      const handleScroll = () => {
        const headingElements = elements.map(({ id }) => document.getElementById(id));
        const visibleHeadings = headingElements.filter((el): el is HTMLElement => {
          if (!el) return false;
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight * 0.3;
        });

        if (visibleHeadings.length > 0) {
          // 가장 위에 있는 헤딩을 현재 활성 헤딩으로 설정
          setActiveId(visibleHeadings[0].id);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block w-64 fixed right-4 top-24 max-h-[calc(100vh-8rem)] overflow-auto">
      <ul className="space-y-3 text-[15px] list-none relative">
        {headings.map(heading => (
          <li key={heading.id} className="relative">
            <a
              href={`#${heading.id}`}
              className={`
                block py-1 no-underline transition-colors
                ${
                  activeId === heading.id
                    ? 'text-blue-500 font-medium'
                    : 'text-gray-600 hover:text-black'
                }
              `}
              style={{
                paddingLeft: `${(heading.level - 1) * 1.5 + 0.75}rem`,
              }}
              onClick={e => {
                e.preventDefault();
                window.history.pushState(null, '', `#${heading.id}`);
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

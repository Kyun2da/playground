function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/[^a-z0-9가-힣_]/g, '')
    .replace(/[ ]/g, '-');
}
export const HTag = ({ children }: { children: string; as: 'h1' | 'h2' | 'h3' | 'h4' }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;

  return (
    <a
      href={link}
      className="anchor-link"
      onClick={e => {
        e.preventDefault();

        scrollToTargetAdjusted(anchor);
      }}
    >
      <p
        // as={as}
        id={anchor}
        // css={{
        //   marginBottom: 24,
        //   marginTop: 48,
        //   '&:hover': {
        //     color: '#687076',
        //   },
        // }}
      >
        {children}
      </p>
    </a>
  );
};

function scrollToTargetAdjusted(anchor: string) {
  const element = document.getElementById(anchor);
  const headerOffset = 45;
  const elementPosition = element!.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

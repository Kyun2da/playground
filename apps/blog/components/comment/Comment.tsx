import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comment() {
  const { theme } = useTheme();

  return (
    <Giscus
      id="comments"
      repo="kyun2da/playground"
      repoId="R_kgDOHbjrmw"
      category="General"
      categoryId="DIC_kwDOHbjrm84CRXte"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      lang="ko"
      theme={theme === 'dark' ? 'dark' : 'light'}
    />
  );
}

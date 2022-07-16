import Giscus from '@giscus/react';
import { useTheme } from '@nextui-org/react';

export function Comment() {
  const { isDark } = useTheme();

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
      theme={isDark ? 'dark' : 'light'}
    />
  );
}

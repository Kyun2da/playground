'use client';

import { useEffect } from 'react';

import Layout from './layout';

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <div>
        <div>
          <p>{error.message} 발생</p>
        </div>
      </div>
    </Layout>
  );
}

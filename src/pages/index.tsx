import dynamic from 'next/dynamic';

const DefaultLayout = dynamic(() => import('softeer-fo/DefaultLayout'), {
  ssr: false,
});

export default function Home() {
  return <DefaultLayout>Remote Page</DefaultLayout>;
}

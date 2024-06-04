// app/week-4/page.js

import NewItem from './new-item';

export default function Page() {
  return (
    <div className="p-8 bg-teal-500 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Week 4</h1>
      <NewItem />
    </div>
  );
}

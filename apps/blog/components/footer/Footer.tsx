export function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <div className="bg-slate-200 w-full mt-20 py-20">
      <div className="flex justify-center">
        <span>{`All rights reserved © Kyun2da ${thisYear}`}</span>
      </div>
    </div>
  );
}

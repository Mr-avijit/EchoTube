export function ClassicLoader() {
  return (
    <div className="border-primary flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-t-transparent"></div>
  );
}

export function ConcentricLoader({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeMap = {
    sm: { outer: 'h-8 w-8', inner: 'h-5 w-5' },
    md: { outer: 'h-16 w-16', inner: 'h-12 w-12' },
    lg: { outer: 'h-24 w-24', inner: 'h-18 w-18' },
  };
  const s = sizeMap[size];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${s.outer} flex animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400`}>
        <div className={`${s.inner} flex animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400`}></div>
      </div>
    </div>
  );
}

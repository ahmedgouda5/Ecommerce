export default function ProductCardSkeleton() {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-square bg-secondary-900 skeleton" />
      <div className="p-4 space-y-3">
        <div className="h-3 w-16 skeleton rounded" />
        <div className="space-y-1.5">
          <div className="h-4 w-full skeleton rounded" />
          <div className="h-4 w-3/4 skeleton rounded" />
        </div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-3 w-3 skeleton rounded" />
          ))}
        </div>
        <div className="h-6 w-24 skeleton rounded" />
      </div>
      <div className="px-4 pb-4">
        <div className="h-10 w-full skeleton rounded-lg" />
      </div>
    </div>
  );
}

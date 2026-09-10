export function CatalogSkeleton() {
  return (
    <div className="grid gap-7.5 md:grid-cols-[240px_1fr] animate-pulse">
      <div className="hidden md:flex flex-col gap-4">
        <div className="h-5 w-24 rounded bg-muted" />
        <div className="h-8 w-full rounded bg-muted" />
        <div className="h-8 w-full rounded bg-muted" />
        <div className="h-8 w-3/4 rounded bg-muted" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="h-10 w-full max-w-md rounded-md bg-muted" />
        <div className="grid grid-cols-[repeat(auto-fill,218px)] gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="aspect-175/233 rounded-md bg-muted" />
              <div className="h-4 w-full rounded bg-muted" />
              <div className="h-4 w-16 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

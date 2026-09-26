export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-16 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="animate-pulse">
          <div className="h-9 w-32 rounded bg-[#15171c]" />

          <div className="mt-3 h-4 w-72 rounded bg-[#15171c]" />
        </div>

        {/* Metrics Skeleton */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="h-28 animate-pulse rounded-xl border border-[#24262b] bg-[#15171c]" />
          <div className="h-28 animate-pulse rounded-xl border border-[#24262b] bg-[#15171c]" />
          <div className="h-28 animate-pulse rounded-xl border border-[#24262b] bg-[#15171c]" />
        </div>

        {/* Tabs Skeleton */}
        <div className="mt-8 flex animate-pulse items-center justify-between border-b border-[#24262b] pb-3">
          <div className="flex gap-6">
            <div className="h-4 w-24 rounded bg-[#15171c]" />
            <div className="h-4 w-12 rounded bg-[#15171c]" />
          </div>

          <div className="h-6 w-24 rounded bg-[#15171c]" />
        </div>

        {/* Loading Text */}
        <div className="flex min-h-56 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-[#24262b] border-t-[#c2f800]" />

            <p className="mt-4 font-[Oswald] text-sm font-bold text-white">
              LOADING WORKOUTS...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
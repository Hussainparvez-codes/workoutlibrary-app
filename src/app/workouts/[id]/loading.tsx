export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-5 pb-16 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-8">
          {/* Image Skeleton */}
          <div className="h-[570px] animate-pulse rounded-xl bg-[#15171c]" />

          {/* Content Skeleton */}
          <div className="space-y-5 pt-2">
            <div className="h-10 w-3/4 animate-pulse rounded bg-[#15171c]" />

            <div className="h-16 w-full animate-pulse rounded bg-[#15171c]" />

            <div className="h-8 w-1/2 animate-pulse rounded bg-[#15171c]" />

            <div className="h-52 w-full animate-pulse rounded-xl bg-[#15171c]" />

            <div className="h-5 w-24 animate-pulse rounded bg-[#15171c]" />

            <div className="h-28 w-full animate-pulse rounded bg-[#15171c]" />
          </div>
        </div>
      </div>
    </main>
  );
}